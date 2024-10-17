import { recommendedData } from "@/common/data";
import RecommendedItem from "./RecommendedItem";

export default function RecommendedList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5 sm:px-6 md:px-8">
      {recommendedData.map((data, index) => (
        <RecommendedItem data={data} key={index} />
      ))}
    </div>
  );
}
