"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8 text-center">
      <p className="font-semibold text-purple-600 dark:text-purple-400">500</p>
      <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl">
        오류가 발생했습니다.
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
        잠시 후 다시 시도해주세요. (오류 코드: {error.digest})
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button
          className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          onClick={reset}
        >
          다시 시도
        </button>
        <a
          className="text-sm font-semibold text-gray-900 dark:text-gray-200"
          href="https://github.com/jebibot/jnd"
          target="_blank"
        >
          오류 보고 <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
