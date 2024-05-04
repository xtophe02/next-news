import Modal from "@/components/Modal";
import { getSingleNews } from "@/lib/actions";
import { notFound } from "next/navigation";

export default async function ImagePage({
  params,
}: {
  params: { slug: string };
}) {
  const news = await getSingleNews(params.slug);
  if (!news) notFound();

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(/images/news/${news.image})` }}
    ></div>
  );
}
