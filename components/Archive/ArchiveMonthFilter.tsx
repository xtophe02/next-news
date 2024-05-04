import { getAvailableNewsMonths } from "@/lib/actions";
import Link from "next/link";
export default async function ArchiveYearFilter({ year }: { year: string }) {
  const months = await getAvailableNewsMonths(year);
  function getMonthName(monthNumber: string) {
    const date = new Date(null, Number(monthNumber) - 1);
    return date.toLocaleString("en-US", { month: "long" });
  }
  return (
    <div className="inline-flex rounded-lg shadow-sm">
      {months.map((month) => (
        <Link
          key={month}
          type="button"
          href={`/archive/${year}/${month}`}
          className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        >
          {getMonthName(month)}
        </Link>
      ))}
    </div>
  );
}
