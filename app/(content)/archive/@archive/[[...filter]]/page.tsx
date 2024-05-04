import ArchiveYearFilter from "@/components/Archive/ArchiveYearFilter";
import ArchiveMonthFilter from "@/components/Archive/ArchiveMonthFilter";
import NewsGrid from "@/components/News/NewsGrid";

export default function YearPage({ params }: { params: { filter: string } }) {
  // console.log("🚀 ~ YearPage ~ params:", params);

  return (
    <div>
      <ArchiveYearFilter />
      {params.filter && <ArchiveMonthFilter year={params.filter?.[0]} />}
      {params.filter && (
        <NewsGrid year={params.filter?.[0]} month={params.filter?.[1]} />
      )}
    </div>
  );
}
