const MainContent = ({ children }) => {
	return (
		<main className="flex flex-col min-h-screen container flex-grow max-w-screen-lg px-5 md:px-12 xl:px-0 mx-auto mt-16">
			{children}
		</main>
	);
};

export default MainContent;
