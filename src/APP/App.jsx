import { Footer } from "./Content/Footer";
import { Header } from "./Content/Header";
import { Main } from "./Content/Main";

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
			<a href="#" className="scrollup" id="scroll-up">
				<i className="ri-arrow-up-line"></i>
			</a>
		</div>
	);
}

export default App;
