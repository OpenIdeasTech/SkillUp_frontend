import MainHome from "@/components/MainHome";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-[#9233E9] to-[#5045E5] py-6 px-12 lg:px-24">
        <NavBar />
        <MainHome />
      </div>
      
    </div>
  );
}
