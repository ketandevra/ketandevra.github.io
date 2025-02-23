import Image from "next/image";

export default function Committee() {
  const committeeMembers = [
    {
      name: "योगेश सोलंकी",
      position: "अध्यक्ष",
      photo: "/nextjs-github-pages/images/yogesh.jpg",
      mobile: "93529 45791"
    },
    {
      name: "जितेन्द्र पंवार",
      position: "उपाध्यक्ष",
      photo: "/nextjs-github-pages/images/jitu.jpg",
      mobile: "94600 88701"
    },
    {
      name: "सुरेश परिहार",
      position: "सचिव",
      photo: "/nextjs-github-pages/images/suresh.jpg",
      mobile: "94141 22178"
    },
    {
      name: "दीपक देवड़ा",
      position: "कोषाध्यक्ष",
      photo: "/nextjs-github-pages/images/deepak.jpg",
      mobile: "98290 21138"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">समिति सदस्य</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        {/* <p className="mt-4 text-lg text-black">समाज पर समर्पित समिति सदस्यों की टीम</p> */}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {committeeMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative aspect-square">
              <Image 
                src={member.photo}
                alt={member.name}
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-black">{member.name}</h2>
              <p className="text-black mb-2">{member.position}</p>
              <p className="text-black">
                <a href={`tel:${member.mobile}`} className="hover:text-blue-500">
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