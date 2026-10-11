import accountsFile from "../data/accounts.json" with { type: "json" };

export type EntryType = "receipt" | "interest";

export type LedgerEntry = {
  date: string;
  name: string;
  description: string;
  amount: number;
};

export type IncomeEntry = LedgerEntry & {
  type: EntryType;
};

type MonthlyInterestRule = {
  name: string;
  description: string;
  startDate: string;
  startAmount: number;
  monthlyIncrease: number;
};

type AccountsData = {
  monthlyInterest: MonthlyInterestRule;
  incomes: IncomeEntry[];
  expenses: LedgerEntry[];
};

export type VisibleEntry = LedgerEntry & {
  serialNumber: string;
  type?: EntryType;
};

export type AccountsSummary = {
  asOf: string;
  incomes: VisibleEntry[];
  expenses: VisibleEntry[];
  receivedAmount: number;
  interestEarned: number;
  totalIncome: number;
  totalExpenses: number;
  balance: number;
};

const accounts = accountsFile as AccountsData;

export function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(amount);
}

export function parseEntryDate(value: string): Date {
  const [day, month, year] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatEntryDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

function indiaToday(asOf: Date): Date {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(asOf);
  const day = Number(parts.find((part) => part.type === "day")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const year = Number(parts.find((part) => part.type === "year")?.value);
  return new Date(year, month - 1, day);
}

function isDue(date: string, today: Date): boolean {
  return parseEntryDate(date).getTime() <= today.getTime();
}

function buildMonthlyInterest(today: Date, explicitDates: Set<string>): IncomeEntry[] {
  // From startDate, add one interest row on the 1st of each month.
  // The row is included only after that date has arrived in India.
  const rule = accounts.monthlyInterest;
  const entries: IncomeEntry[] = [];
  let cursor = parseEntryDate(rule.startDate);
  let amount = rule.startAmount;

  while (cursor.getTime() <= today.getTime()) {
    const date = formatEntryDate(cursor);
    if (!explicitDates.has(date)) {
      entries.push({
        date,
        name: rule.name,
        description: rule.description,
        amount,
        type: "interest",
      });
    }
    amount += rule.monthlyIncrease;
    cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
  }

  return entries;
}

function withSerialNumbers<T extends LedgerEntry>(entries: Array<T & { order: number }>): Array<T & { serialNumber: string }> {
  return [...entries]
    .sort((a, b) => {
      const dateDiff = parseEntryDate(a.date).getTime() - parseEntryDate(b.date).getTime();
      return dateDiff === 0 ? a.order - b.order : dateDiff;
    })
    .map((entry, index) => {
      const visible = Object.fromEntries(
        Object.entries(entry).filter(([key]) => key !== "order")
      ) as T;

      return {
        ...visible,
        serialNumber: String(index + 1),
      };
    });
}

export function getAccountsSummary(asOf = new Date()): AccountsSummary {
  const today = indiaToday(asOf);
  const dueIncomes = accounts.incomes.filter((entry) => isDue(entry.date, today));
  const explicitInterestDates = new Set(
    accounts.incomes.filter((entry) => entry.type === "interest").map((entry) => entry.date)
  );
  const generatedInterest = buildMonthlyInterest(today, explicitInterestDates);

  const incomes = withSerialNumbers([
    ...dueIncomes.map((entry, index) => ({ ...entry, order: index })),
    ...generatedInterest.map((entry, index) => ({ ...entry, order: 1_000_000 + index })),
  ]);
  const expenses = withSerialNumbers(
    accounts.expenses
      .filter((entry) => isDue(entry.date, today))
      .map((entry, index) => ({ ...entry, order: index }))
  );

  const receivedAmount = incomes
    .filter((entry) => entry.type === "receipt")
    .reduce((sum, entry) => sum + entry.amount, 0);
  const interestEarned = incomes
    .filter((entry) => entry.type === "interest")
    .reduce((sum, entry) => sum + entry.amount, 0);
  const totalIncome = receivedAmount + interestEarned;
  const totalExpenses = expenses.reduce((sum, entry) => sum + entry.amount, 0);

  return {
    asOf: formatEntryDate(today),
    incomes,
    expenses,
    receivedAmount,
    interestEarned,
    totalIncome,
    totalExpenses,
    balance: totalIncome - totalExpenses,
  };
}
