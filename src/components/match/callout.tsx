import { faCircleInfo } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Callout() {
  return (
    <div className="p-4 border-l-4 border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-950">
      <FontAwesomeIcon
        className="text-blue-400 dark:text-blue-600"
        icon={faCircleInfo}
      />
      <span className="ml-3 font-medium text-blue-800 dark:text-blue-200">
        2023년 12월 30일까지 관전이 전체 허용된 게임만 수집되었습니다.
      </span>
    </div>
  );
}
