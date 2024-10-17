import CategoryList from "@/components/category/CategoryList";
import TopTitle from "@/components/TopTitle";

export default function Category() {
  return (
    <div className="px-3 sm:px-5 py-5">
      <TopTitle text="Attendess - by Category" />

      <CategoryList />
    </div>
  );
}
