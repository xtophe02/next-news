import {
  getAllNews,
  getLatestNews,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/actions";
import NewsCard from "./NewsCard";
import GoBackButton from "../GoBackButton";

export default async function NewsGrid({
  year,
  month,
  latest = false,
}: {
  year?: string;
  month?: string;
  latest?: boolean;
}) {
  function getMonthName(monthNumber: string) {
    const date = new Date(null as any, Number(monthNumber) - 1);
    return date.toLocaleString("en-US", { month: "long" });
  }
  let news = [];
  let title = "";
  if (year && !month) {
    news = await getNewsForYear(year);
    if (news.length === 0) {
      throw new Error("No news found for this year");
    }
    title = `News for ${year}`;
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
    if (news.length === 0) {
      throw new Error("No news found for this year or month");
    }
    title = `News for ${getMonthName(month)}/${year}`;
  } else if (latest) {
    news = await getLatestNews();

    title = "Latest News";
  } else {
    news = await getAllNews();
    title = "All News";
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Title --> */}
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          {title}
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          We've helped some great companies brand, design and get to market.
        </p>
      </div>
      {/* <!-- End Title --> */}

      {/* <!-- Grid --> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 lg:mb-14">
        {news.map((theNew) => (
          <NewsCard key={theNew.id} newItem={theNew} />
        ))}
      </div>
      {/* <!-- End Grid --> */}

      {/* <!-- Card --> */}
      <div className="text-center">
        <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-neutral-900 dark:border-neutral-800">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <p className="text-gray-600 dark:text-neutral-400">
              Want to read more?
            </p>
            <GoBackButton />
          </div>
        </div>
      </div>
      {/* <!-- End Card --> */}
    </div>
  );
}
