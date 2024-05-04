import NewsSlugPage from "@/components/News/NewsSlugPage";
import { getSingleNews } from "@/lib/actions";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <NewsSlugPage slug={params.slug} />
    </Suspense>
  );
}
