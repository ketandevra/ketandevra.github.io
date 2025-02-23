import Image from "next/image";

export default function Committee() {
  const committeeMembers = [
    {
      name: "योगेश सोलंकी",
      position: "अध्यक्ष",
      photo: "/ketandevra.github.io/images/yogesh.jpg",
      mobile: "93529 45791"
    },
    {
      name: "जितेन्द्र पंवार",
      position: "उपाध्यक्ष",
      photo: "/ketandevra.github.io/images/jitu.jpg",
      mobile: "94600 88701"
    },
    {
      name: "सुरेश परिहार",
      position: "सचिव",
      photo: "/ketandevra.github.io/images/suresh.jpg",
      mobile: "94141 22178"
    },
    {
      name: "दीपक देवड़ा",
      position: "कोषाध्यक्ष",
      photo: "/ketandevra.github.io/images/deepak.jpg",
      mobile: "98290 21138"
    }
  ];

  return (
    <main className="px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">समिति सदस्य</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        {/* <p className="mt-4 text-lg text-black">समाज पर समर्पित समिति सदस्यों की टीम</p> */}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {committeeMembers.map((member, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300 overflow-hidden">
            <div className="relative aspect-square">
              <Image 
                src={member.photo}
                alt={member.name}
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{member.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{member.position}</p>
              <div className="flex items-center space-x-3">
                <a 
                  href={`tel:${member.mobile.replace(/\s/g, '')}`}
                  className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-full transition-colors"
                  aria-label={`Call ${member.name}`}
                >
                  <svg 
                    className="w-3.5 h-3.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Call</span>
                </a>
                <a 
                  href={`https://wa.me/91${member.mobile.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm rounded-full transition-colors"
                  aria-label={`WhatsApp ${member.name}`}
                >
                  <svg 
                    className="w-3.5 h-3.5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.653-1.761-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 