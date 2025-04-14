import Footer from '../../components/Footer'
import NavBarProfile from './(routes)/profiles/[profileId]/_components/NavBarProfile';

const LandingPageLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full px=[100px]">
            <div className="flex bg-[#2D1C7F]">
              <NavBarProfile />  
            </div>
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default LandingPageLayout;

