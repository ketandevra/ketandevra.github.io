import Image from "next/image";

export default function CommitteeMember() {
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
    <main className="container mx-auto px-4 py-8">
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
              <p className="text-gray-700 dark:text-gray-300">
                <a href={`tel:${member.mobile}`} className="hover:text-blue-500 dark:hover:text-blue-400">
                  {member.mobile}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 