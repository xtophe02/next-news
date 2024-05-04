import Link from "next/link";
import GoBackButton from "../GoBackButton";
import Modal from "../Modal";
import { getSingleNews } from "@/lib/actions";

export default async function NewsSlugPage({ slug }: { slug: string }) {
  const data = await getSingleNews(slug);
  console.log("🚀 ~ NewsSlugPage ~ data:", data);
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <button
            // href={`/news/${slug}/image`}
            type="button"
            data-hs-overlay="#hs-basic-modal"
          >
            <img
              className="rounded-xl"
              src={`/images/news/${data.image}`}
              alt="Image Description"
            />
          </button>
          {/* <!-- End Col --> */}

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* <!-- Title --> */}
              <div className="space-y-2 md:space-y-4 mb-2">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                  {data.title}
                </h2>
                <p className="text-gray-500 dark:text-neutral-500">
                  {data.content}
                </p>
              </div>
              {/* <!-- End Title --> */}
              <time
                // dateTime={data.date.substring(0, 10)}
                className="text-sm italic"
              >
                {new Date(data.date).toLocaleDateString("en-PT", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </time>

              {/* <!-- List --> */}
              {/* <ul className="space-y-2 sm:space-y-4">
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                  <svg
                    className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                  <span className="font-bold">Easy & fast</span> designing
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                  <svg
                    className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                  Powerful <span className="font-bold">features</span>
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                  <svg
                    className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                  User Experience Design
                </span>
              </li>
            </ul> */}
              {/* <!-- End List --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
          <GoBackButton />
        </div>
        {/* <!-- End Grid --> */}
      </div>
      <Modal image={data.image} />
    </>
  );
}
