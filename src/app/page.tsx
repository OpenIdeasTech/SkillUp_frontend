import Community from "@/components/Community";
import MainHome from "@/components/MainHome";
import NavBar from "@/components/NavBar";
import Resources from "@/components/Resources";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-[#9233E9] to-[#5045E5] py-12 md:px-6  lg:px-[100px]">
        <NavBar />
        <MainHome />
      </div>
      <div className="bg-[#2D1C7F] w-full flex pt-[60px] md:px-6 lg:px-[100px]">
        <Resources />
      </div>
      <div className="bg-white w-full flex pt-[60px] md:px-6 lg:px-[100px]">
        <Community />
      </div>
    </div>
  );
}
