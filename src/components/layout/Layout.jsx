import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<MainContent>{children}</MainContent>
			<Footer />
		</>
	);
};

export default Layout;
