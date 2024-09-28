import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
	return (
		<div className="relative bg-bg shadow-[0_0_0_100vmax_var(--background)] min-h-screen max-w-screen-md mx-auto">
			<Header />
			<MainContent>{children}</MainContent>
			<Footer />
		</div>
	);
};

export default Layout;
