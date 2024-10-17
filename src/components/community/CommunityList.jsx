import { communitydata } from "@/common/data";
import CommunityCard from "./CommunityCard";

export default function CommunityList(){
    return (
        <div className="px-3 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {communitydata.map((data,index) => (
                <CommunityCard data={data} key={index} />
            ))}
        </div>
    )
}