import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
	return (
		<div className="relative bg-bg min-h-screen">
			<Header />
			<MainContent>{children}</MainContent>
			<Footer />
		</div>
	);
};

export default Layout;
