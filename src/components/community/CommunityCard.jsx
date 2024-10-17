import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function CommunityCard({data}) {
  return (
    <div className="bg-white rounded-md px-5 py-3 flex justify-between items-start shadow-md">
     <div>
     <span className="text-gray-400 text-xs inline-block mb-2">Last announcement posted {data.lastAnnounc}</span>
      <div className="flex items-center gap-3 mb-2">
        <Image
          width={25}
          height={25}
          src="/images/icon.svg"
          alt="community-icon"
          className="p-1 bg-primary-100 rounded-lg"
        />
        <h3 className="text-sm">{data.title}</h3>
      </div>
      <p className="text-sm text-gray-500">{data.description}</p>
      <span className="text-xs text-gray-400">{data.count} announcements</span>
     </div>
     <button className="flex items-center gap-2 text-primary-400 text-sm font-medium"> View <MdKeyboardArrowRight className="text-xl mt-[2px]" /> </button>
    </div>
  );
}
