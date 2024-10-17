import CommunityList from "@/components/community/CommunityList";
import TopTitle from "@/components/TopTitle";

export default function Community(){
    return (
        <div className="px-3 sm:px-5 py-5 bg-slate-100">
            <TopTitle text="Community" />

            <CommunityList />
        </div>
    )
}