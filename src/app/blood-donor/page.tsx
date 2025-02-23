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
        <h1 className="text-4xl font-bold text-black mb-4">रक्तदाता</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      {/* Blood Group Filter */}
      <div className="flex justify-end mb-8 px-4">
        <div className="w-64">
          <label className="block text-base font-medium text-gray-800 mb-2">
            रक्त समूह के अनुसार छांटें
          </label>
          <select
            value={selectedBloodGroup}
            onChange={(e) => setSelectedBloodGroup(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg text-gray-800 bg-white"
          >
            {bloodGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Donors List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredDonors.map((donor) => (
          <div
            key={donor.id}
            className="bg-white rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-xl mb-3 text-gray-800">
                  {donor.name}
                </h3>
                <p className="text-gray-700 text-base mb-2">{donor.address}</p>
                <p className="text-gray-700 text-base">
                  <span className="font-medium">Mobile:</span> {donor.mobile}
                </p>
              </div>
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-base font-medium">
                {donor.bloodGroup}
              </div>
            </div>
          </div>
        ))}

        {filteredDonors.length === 0 && (
          <div className="col-span-2 text-center py-12 text-gray-700 text-lg">
            चयनित रक्त समूह के लिए कोई दाता नहीं मिला।
          </div>
        )}
      </div>
    </div>
  );
}
