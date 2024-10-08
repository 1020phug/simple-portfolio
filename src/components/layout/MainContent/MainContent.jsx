const MainContent = ({ children }) => {
	return (
		<main className="flex flex-col min-h-screen container flex-grow max-w-screen-lg px-5 m-auto mt-16 md:px-12 lg:px-20">
			{children}
		</main>
	);
};

export default MainContent;
