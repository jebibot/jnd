import Image from "next/image";
import RealMatches from "@/components/match/real-matches";
import teamLogo from "../../public/images/team3-logo.png";

export default async function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="sr-only">홈</h1>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <Image
          className="w-full max-w-[18rem]"
          src={teamLogo}
          alt="호종대학교"
        />
        <div className="text-4xl font-medium">
          <span className="font-bold">호종대학교</span>의 우승을 축하드립니다!
        </div>
      </div>
      <RealMatches />
    </div>
  );
}
