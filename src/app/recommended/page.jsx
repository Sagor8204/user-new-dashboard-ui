import RecommendedList from "@/components/recommended/RecommendedList";
import TopTitle from "@/components/TopTitle";

export default function Recommended(){
    return (
        <div className="px-3 sm:px-5 py-5">
            <TopTitle text="Attendees - by Recommended" />

            <RecommendedList />
        </div>
    )
}