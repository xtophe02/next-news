import NewsGrid from "@/components/News/NewsGrid";
import NewsSkeleton from "@/components/News/NewsSkeleton";
import { Suspense } from "react";

export default function NewsPage() {
  return (
    <Suspense fallback={<NewsSkeleton />}>
      <NewsGrid />
    </Suspense>
  );
}
