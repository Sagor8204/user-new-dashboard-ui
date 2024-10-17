import Weekly from "@/components/agenda/weekly";
import FullAgenda from "@/components/agenda/FullAgenda";
import TopTitle from "@/components/TopTitle";

export default function Home() {
  return (
    <div className="px-3 sm:px-5 py-5">
      <TopTitle text="Agenda-Full Agenda" />

      <Weekly />
      <FullAgenda />
    </div>
  );
}
