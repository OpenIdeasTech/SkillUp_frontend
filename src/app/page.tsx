import Community from "@/components/Community";
import HomeFooter from "@/components/HomeFooter";
import MainHome from "@/components/MainHome";
import NavBar from "@/components/NavBar";
import Resources from "@/components/Resources";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
    <div id="home" className="flex flex-col w-full h-screen bg-gradient-to-r from-[#9233E9] to-[#5045E5] py-12 md:px-6  lg:px-[100px]">
        <NavBar />
        <MainHome />
      </div>
      <div id="resources" className="bg-[#2D1C7F] w-full flex pt-[60px] md:px-6 lg:px-[100px]">
        <Resources />
      </div>
      <div id="community" className="bg-white w-full flex pt-[60px] md:px-6 lg:px-[100px]">
        <Community />
      </div>
      <Subscribe />
      <HomeFooter />
    </div>
  );
}
