import { categoryData } from "@/common/data";
import RecommendedItem from "../recommended/RecommendedItem";

export default function CategoryList () {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categoryData.map((data,index) => (
                <RecommendedItem data={data} key={index} />
            ))}
        </div>
    )
}