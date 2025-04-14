import Community from "@/components/Community";
import Groups from "@/components/Groups";
import HomeFooter from "@/components/HomeFooter";
import MainHome from "@/components/MainHome";
import NavBar from "@/components/NavBar";
import Resources from "@/components/Resources";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
    <div id="home" className="flex flex-col w-full h-screen md:h-[300px] lg:h-screen bg-gradient-to-r from-[#9233E9] to-[#5045E5] py-2 sm:py-2
      md:py-2 px-2 sm:px-10 md:px-10 lg:py-12 lg:px-32">
        <NavBar />
        <MainHome />
      </div>
      <div id="resources" className="bg-[#2D1C7F] w-full flex pt-[60px] md:px-6 lg:px-32">
        <Resources />
      </div>
      <div id="community" className="bg-white w-full flex flex-col pt-[60px] md:px-6 lg:px-32">
        <Community />
        <Groups />
      </div>
      <HomeFooter />
    </div>
  );
}
