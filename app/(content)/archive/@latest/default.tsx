import NewsGrid from "@/components/News/NewsGrid";
import { Suspense } from "react";

//NOT NEED THE PAGE. THE DEFAULT PAGE ITS TO AVOID 404 WHEN RELOADING

export default function DefaultLastestPage() {
  return (
    <Suspense fallback={<p>loading</p>}>
      <NewsGrid latest />
    </Suspense>
  );
}
