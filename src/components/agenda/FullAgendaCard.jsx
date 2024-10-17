import { CiCalendarDate } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import Button from "../Button";
import Image from "next/image";

export default function FullAgendaCard({ data }) {
  return (
    <div className="bg-white p-3 sm:p-7 rounde-md mb-8 text-gray-500 flex justify-between items-center">
      <div>
        <span className="text-[13px] px-4 py-[2px] rounded-full text-white bg-primary-400 inline-block mb-3">
          {data.subTitle}
        </span>
        <div className="flex gap-3">
          <IoVideocamOutline className="text-[27px] mt-[2px]" />
          <h1 className="text-[17px] sm:text-[20px] mb-3 font-medium text-gray-600">
            {data.title}
          </h1>
        </div>
        <div className="flex items-center gap-7 mb-3 font-semibold">
          <div className="flex items-center gap-3">
            <CiCalendarDate className="text-2xl -mt-[3px]" />
            <span className="text-[13px]">{data.date}</span>
          </div>
          <div className="flex items-center gap-3">
            <GoClock className="text-[22px] -mt-[3px]" />
            <span className="text-[13px]">{data.time}</span>
          </div>
        </div>
        <div className="text-xs">Speadker: {data.speaker.join(", ")}</div>
      </div>
      <div className="hidden md:block">
        <Button text={data.btnText} icon={CiCalendarDate} />
        <div className="flex items-start">
            {data.agendaImages.map((item,index) => (
                <Image width={27} height={27} src={item} key={index} alt="agenda-image" className="rounded-full w-7 h-7" />
            ))}
        </div>
      </div>
    </div>
  );
}
