import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
	return (
		<div className="relative bg min-h-screen max-w-screen-md mx-auto">
			<Header />
			<MainContent>{children}</MainContent>
			<Footer />
		</div>
	);
};

export default Layout;
