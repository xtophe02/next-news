import NewsSlugPage from "@/components/News/NewsSlugPage";
import { getSingleNews } from "@/lib/actions";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const news = await getSingleNews(params.slug);
  if (!news) notFound();
  return (
    <div>
      <NewsSlugPage news={news} slug={params.slug} />
    </div>
  );
}
