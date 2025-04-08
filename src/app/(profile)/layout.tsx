import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

const LandingPageLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <div className="flex bg-gradient-to-r from-[#9233E9] to-[#5045E5]">
                <NavBar />
            </div>
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default LandingPageLayout;

