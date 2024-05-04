import { getAvailableNewsYears } from "@/lib/actions";
import Link from "next/link";
export default async function ArchiveYearFilter() {
  const years = await getAvailableNewsYears();
  return (
    <div className="inline-flex rounded-lg shadow-sm">
      {years.map((year) => (
        <Link
          key={year}
          href={`/archive/${year}`}
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        >
          {year}
        </Link>
      ))}
    </div>
  );
}
