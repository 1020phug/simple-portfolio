import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
	return (
		<ThemeProvider>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
