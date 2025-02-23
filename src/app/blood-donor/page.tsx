"use client";
import { useState } from "react";

interface Donor {
  id: number;
  name: string;
  address: string;
  mobile: string;
  bloodGroup: string;
}

const donors: Donor[] = [
  {
    id: 1,
    bloodGroup: "B+",
    name: "जीतेन्द्र पँवार",
    mobile: "9460088701",
    address: "पाली",
  },
  {
    id: 2,
    bloodGroup: "A+",
    name: "दिनेश भाटी",
    mobile: "9214423000",
    address: "पाली",
  },
  {
    id: 3,
    bloodGroup: "O+",
    name: "नरेश सोलंकी",
    mobile: "9950203032",
    address: "भेरूघाट, पाली",
  },
  {
    id: 4,
    bloodGroup: "B+",
    name: "बाबूलाल बोराणा",
    mobile: "9829282538",
    address: "भेरूघाट, पाली",
  },
  {
    id: 5,
    bloodGroup: "B+",
    name: "विक्रम भाटी",
    mobile: "9460828788",
    address: "पाली",
  },
  {
    id: 6,
    bloodGroup: "A+",
    name: "ओमप्रकाश पँवार",
    mobile: "7597191918",
    address: "बाबू नगर विस्तार, पाली",
  },
  {
    id: 7,
    bloodGroup: "B+",
    name: "अशोक भाटी",
    mobile: "9929686880",
    address: "बाबू नगर विस्तार, पाली",
  },
  {
    id: 8,
    bloodGroup: "B+",
    name: "सुनील परिहार",
    mobile: "8112282299",
    address: "सूरजपोल, पाली",
  },
  {
    id: 9,
    bloodGroup: "AB-",
    name: "अनुराग परिहार",
    mobile: "6353099619",
    address: "जय नगर, पाली",
  },
  {
    id: 10,
    bloodGroup: "B+",
    name: "प्रकाश परिहार",
    mobile: "7568003443",
    address: "सूरजपोल, पाली",
  },
  {
    id: 11,
    bloodGroup: "B+",
    name: "प्रमोद परिहार",
    mobile: "7339876638",
    address: "सूरजपोल, पाली",
  },
  {
    id: 12,
    bloodGroup: "B+",
    name: "खुशवंत सोलंकी",
    mobile: "9214451846",
    address: "भेरूघाट, पाली",
  },
  {
    id: 13,
    bloodGroup: "O+",
    name: "महिपाल मनीष भाटी",
    mobile: "9610045005",
    address: "इन्द्रा कॉलोनी, पाली",
  },
  {
    id: 14,
    bloodGroup: "B+",
    name: "मुकेश परिहार",
    mobile: "9460841413",
    address: "पाली",
  },
  {
    id: 15,
    bloodGroup: "O+",
    name: "भरत राठौड़",
    mobile: "8107487441",
    address: "रजत नगर रामदेव रोड, पाली",
  },
  {
    id: 16,
    bloodGroup: "AB+",
    name: "भरत पँवार",
    mobile: "7726040077",
    address: "भेरूघाट, पाली",
  },
  {
    id: 17,
    bloodGroup: "B+",
    name: "जीतेन्द्र कुमार हेमावास",
    mobile: "7737541400",
    address: "घरवाला जाव, पाली",
  },
  {
    id: 18,
    bloodGroup: "B+",
    name: "देवेंद्र राठौड़",
    mobile: "9461736398",
    address: "बांगड़ कॉलेज के पीछे, पाली",
  },
  {
    id: 19,
    bloodGroup: "O+",
    name: "अनिल परिहार",
    mobile: "9461736399",
    address: "सूरजपोल, पाली",
  },
  {
    id: 20,
    bloodGroup: "B+",
    name: "सुरेश परिहार",
    mobile: "9414122178",
    address: "जनता कॉलोनी, पाली",
  },
  {
    id: 21,
    bloodGroup: "B+",
    name: "कन्हैयालाल पँवार",
    mobile: "9929422267",
    address: "सूरजपोल, पाली",
  },
  {
    id: 22,
    bloodGroup: "AB+",
    name: "राजेंद्र परिहार",
    mobile: "9252020520",
    address: "शाहजी का चौक, पाली",
  },
  {
    id: 23,
    bloodGroup: "O+",
    name: "मयुर देवड़ा",
    mobile: "9950570893",
    address: "भेरूघाट, पाली",
  },
  {
    id: 24,
    bloodGroup: "O+",
    name: "देवकिशन देवड़ा",
    mobile: "9314136360",
    address: "भेरूघाट, पाली",
  },
  {
    id: 25,
    bloodGroup: "B+",
    name: "कमलेश भाटी",
    mobile: "7726040347",
    address: "रामदेव रोड, पाली",
  },
  {
    id: 26,
    bloodGroup: "B+",
    name: "मोहन परिहार",
    mobile: "9468888788",
    address: "भेरूघाट, पाली",
  },
  {
    id: 27,
    bloodGroup: "B+",
    name: "उदित पँवार",
    mobile: "8003442447",
    address: "सोसाइटी नगर, पाली",
  },
  {
    id: 28,
    bloodGroup: "O+",
    name: "गजेंद्र भाटी",
    mobile: "9414221453",
    address: "जय नगर, पाली",
  },
  {
    id: 29,
    bloodGroup: "O+",
    name: "केतन देवड़ा",
    mobile: "9636933097",
    address: "टांको का बास, पाली",
  },
  {
    id: 30,
    bloodGroup: "AB+",
    name: "महेश भाटी",
    mobile: "7737474374",
    address: "घांचियों का बड़ा बास, पाली",
  },
  {
    id: 31,
    bloodGroup: "B-",
    name: "किशन पँवार",
    mobile: "9929438067",
    address: "जय नगर, पाली",
  },
  {
    id: 32,
    bloodGroup: "O-",
    name: "गोपाल पँवार",
    mobile: "9950081682",
    address: "जय नगर, पाली",
  },
  {
    id: 33,
    bloodGroup: "O-",
    name: "मनोज कुमार",
    mobile: "9468900653",
    address: "भेरूघाट, पाली",
  },
  {
    id: 34,
    bloodGroup: "O+",
    name: "सोनु भाटी",
    mobile: "9586504938",
    address: "रुई कटला, पाली",
  },
];

const bloodGroups = ["सभी", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export default function BloodDonor() {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("सभी");

  const filteredDonors =
    selectedBloodGroup === "सभी"
      ? donors
      : donors.filter((donor) => donor.bloodGroup === selectedBloodGroup);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">रक्तदाता</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      {/* Blood Group Filter */}
      <div className="flex justify-end mb-8 px-4">
        <div className="w-64">
          <label className="block text-base font-medium text-gray-800 dark:text-gray-200 mb-2">
            रक्त समूह के अनुसार छांटें
          </label>
          <div className="relative">
            <select
              value={selectedBloodGroup}
              onChange={(e) => setSelectedBloodGroup(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 pr-10 py-3 text-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {bloodGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Donors List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDonors.map((donor) => (
          <div
            key={donor.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-xl mb-3 text-gray-800 dark:text-gray-100">
                  {donor.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base mb-2">{donor.address}</p>
                <div className="flex items-center space-x-3">
                  <a 
                    href={`tel:${donor.mobile}`}
                    className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-full transition-colors"
                    aria-label={`Call ${donor.name}`}
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
                    href={`https://wa.me/91${donor.mobile.replace(/\s/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm rounded-full transition-colors"
                    aria-label={`WhatsApp ${donor.name}`}
                  >
                    <svg 
                      className="w-3.5 h-3.5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center min-w-[60px] h-[60px] bg-red-500 text-white font-bold rounded-full shadow-lg border-2 border-white dark:border-gray-700">
                {donor.bloodGroup}
              </div>
            </div>
          </div>
        ))}

        {filteredDonors.length === 0 && (
          <div className="col-span-3 flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <svg 
                className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600 mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                चयनित रक्त समूह के लिए कोई रक्तदाता नहीं मिला।
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
