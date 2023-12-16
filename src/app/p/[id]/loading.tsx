export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
        <div className="w-36 sm:w-48 h-36 sm:h-48 rounded-full bg-gray-300" />
        <div className="flex-1 p-2 space-y-4">
          <div className="flex flex-col md:flex-row flex-wrap gap-x-2 gap-y-1 md:items-baseline">
            <span className="h-10 w-24 rounded bg-gray-400" />
            <span className="h-4 w-40 rounded bg-gray-300" />
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-1 items-baseline">
            <span className="h-5 w-40 rounded bg-gray-400" />
            <span className="h-3 w-72 rounded bg-gray-300" />
          </div>
          <div className="h-7 w-32 rounded bg-gray-300" />
        </div>
        <div className="w-56 mx-auto">
          <div className="h-32 w-56 rounded-md bg-gray-400" />
          <div className="flex flex-col p-1 gap-1">
            <div className="h-4 w-54 rounded bg-gray-300" />
            <div className="h-4 w-54 rounded bg-gray-400" />
          </div>
        </div>
      </div>
      <div className="h-14 w-full rounded-md bg-gray-300" />
      <div className="space-y-4">
        <div className="w-1/2 h-64 rounded-md bg-gray-400 mx-auto" />
        <div className="w-full h-32 rounded-md bg-gray-300" />
        <div className="w-full h-32 rounded-md bg-gray-400" />
        <div className="w-full h-32 rounded-md bg-gray-300" />
        <div className="w-full h-32 rounded-md bg-gray-400" />
      </div>
    </div>
  );
}
