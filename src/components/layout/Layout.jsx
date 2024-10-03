import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
	return (
		<main className="min-h-screen">
			<Header />
			<MainContent>{children}</MainContent>
			<Footer />
		</main>
	);
};

export default Layout;
