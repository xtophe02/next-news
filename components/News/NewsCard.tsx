import Link from "next/link";

export default function NewsCard({ newItem }) {
  return (
    <Link
      href={`/news/${newItem.slug}`}
      className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
    >
      <div className="aspect-[3/2] overflow-hidden rounded-t-xl">
        <img
          className="w-full object-cover rounded-t-xl hover:scale-105 duration-200 transition "
          src={`/images/news/${newItem.image}`}
          alt={newItem.title}
        />
      </div>
      <div className="p-4 md:p-5">
        {/* <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
          Product
        </p> */}
        <h3 className="mt-2 text-center text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
          {newItem.title}
        </h3>
      </div>
    </Link>
  );
}
