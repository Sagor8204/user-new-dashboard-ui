import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function RecommendedItem({ data }) {
  return (
    <div className="bg-white px-3 py-3 sm:py-6 border rounded-md flex justify-between">
      <div className="flex gap-3">
        <Image
          width={30}
          height={30}
          src={data.icon}
          alt="recommended-icon"
        />
        <div>
          <h2 className="textlg sm:text-[20px] -mb-2 text-gray-700 font-semibold">{data.title}</h2>
          <span className="text-[10px] text-gray-400">{data.people} People</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-start">
          {data.poepleImages.map((item, index) => (
            <Image
              width={27}
              height={27}
              src={item}
              key={index}
              alt="agenda-image"
              className="rounded-full w-7 h-7"
            />
          ))}
        </div>
        <button>
        <MdOutlineKeyboardArrowRight className="text-xl text-gray-500" />
        </button>
      </div>
    </div>
  );
}
