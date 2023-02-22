import { About } from "./About";
import { Home } from "./Home";
import { Newsletter } from "./Newsletter";
import { Popular } from "./Popular";
import { Recently } from "./Recently";

const Main = () => {
	return (
		<main className="main">
			<Home/>
			<About/>
			<Popular/>
			<Recently/>
			<Newsletter/>
		</main>
	);
};

export { Main };
