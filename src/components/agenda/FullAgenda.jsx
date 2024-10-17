import { agendadats } from "@/common/data";
import FullAgendaCard from "./FullAgendaCard";

export default function FullAgenda(){
    return (
        <div>
            {agendadats.map((data,index) => (
                <FullAgendaCard key={index} data={data} />
            ))}
        </div>
    )
}