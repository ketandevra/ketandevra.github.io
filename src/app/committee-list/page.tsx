import Image from "next/image";

const committeeMembers = [
  {
    name: "योगेश सोलंकी",
    position: "अध्यक्ष",
    photo: "/images/yogesh.png",
    mobile: "93529 45791",
  },
  {
    name: "जितेन्द्र पंवार",
    position: "उपाध्यक्ष",
    photo: "/images/jitu.png",
    mobile: "94600 88701",
  },
  {
    name: "सुरेश परिहार",
    position: "सचिव",
    photo: "/images/suresh.png",
    mobile: "94141 22178",
  },
  {
    name: "दीपक देवड़ा",
    position: "कोषाध्यक्ष",
    photo: "/images/deepak.png",
    mobile: "98290 21138",
  },
];

function PoliticianCard({ member }: { member: (typeof committeeMembers)[0] }) {
  const phone = member.mobile.replace(/\s/g, "");

  return (
    <article className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:border-gray-700 dark:bg-gray-900">
      <div className="relative aspect-[2/3] w-full bg-[#d9cfc0] sm:aspect-[3/4] lg:aspect-[2/3]">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-bottom"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1e3a5f] via-[#1e3a5f]/90 to-transparent px-3 pb-3 pt-16 sm:px-5 sm:pb-5 sm:pt-24">
          <div className="mb-1.5 h-0.5 w-10 bg-amber-400 sm:mb-2 sm:h-1 sm:w-14" />
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-300 sm:text-sm md:text-base">
            {member.position}
          </p>
          <h2 className="mt-0.5 text-lg font-bold leading-tight text-white sm:mt-1 sm:text-xl lg:text-2xl">
            {member.name}
          </h2>
          <a
            href={`tel:${phone}`}
            className="mt-1 inline-block text-sm text-white/90 hover:text-amber-300 sm:mt-2 sm:text-base"
          >
            {member.mobile}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CommitteeMember() {
  return (
    <main className="w-full px-3 py-8 pb-24 sm:px-6 sm:pb-10 lg:px-8">
      <div className="mb-8 text-center sm:mb-12">
        <h1 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white sm:mb-4 sm:text-3xl lg:text-4xl">
          समिति सदस्य
        </h1>
        <div className="mx-auto h-1 w-16 bg-blue-600 sm:w-24" />
      </div>

      <div className="mx-auto grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {committeeMembers.map((member) => (
          <PoliticianCard key={member.mobile} member={member} />
        ))}
      </div>
    </main>
  );
}
