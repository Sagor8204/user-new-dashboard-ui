import { weeklynames } from "@/common/data";

export default function Weekly() {
  return (
    <div className="flex gap-3 mb-5">
      {weeklynames.map((data, index) => (
        <button
          className={`w-[45px] sm:w-[50px] md:w-[101px] bg-primary-100 p-2 sm:px-4 py-2 rounded-md text-sm ${
            index === 0 && "bg-primary-400 text-white"
          }`}
          key={index}
        >
          <span className="hidden md:block">{data.name}</span>
          {data.date}
        </button>
      ))}
    </div>
  );
}
