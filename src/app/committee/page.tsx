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

function PoliticianCard({
  member,
  showActions = true,
}: {
  member: (typeof committeeMembers)[0];
  showActions?: boolean;
}) {
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

      {showActions && (
        <div className="flex gap-2 border-t border-gray-100 bg-gray-50 p-3 sm:gap-3 sm:p-4 dark:border-gray-700 dark:bg-gray-800">
          <a
            href={`tel:${phone}`}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-md bg-blue-600 px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:gap-2 sm:px-4 sm:py-3 sm:text-base"
            aria-label={`Call ${member.name}`}
          >
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call
          </a>
          <a
            href={`https://wa.me/91${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-md bg-[#25D366] px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#128C7E] sm:gap-2 sm:px-4 sm:py-3 sm:text-base"
            aria-label={`WhatsApp ${member.name}`}
          >
            <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.653-1.761-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
      )}
    </article>
  );
}

export default function Committee() {
  return (
    <main className="w-full px-3 py-8 pb-24 sm:px-6 sm:py-10 sm:pb-10 lg:px-8">
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
