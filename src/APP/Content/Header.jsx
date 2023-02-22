const Header = () => {
	return (
		<header className="header" id="header">
			<nav className="nav container">
				<a href="#" className="nav__logo">
					<img src="assets/img/logo.png" alt="Logo Image" />
					Sushi
				</a>
				<div className="nav__menu" id="nav-menu">
					<ul className="nav__list grid">
						<li className="nav__item">
							<a href="#home" className="nav__link">
								Home
							</a>
						</li>
						<li className="nav__item">
							<a href="#about" className="nav__link">
								About us
							</a>
						</li>
						<li className="nav__item">
							<a href="#popular" className="nav__link">
								Popular
							</a>
						</li>
						<li className="nav__item">
							<a href="#recently" className="nav__link">
								Recently
							</a>
						</li>
					</ul>
					<div className="nav__close" id="nav-close">
						<i className="ri-close-line"></i>
					</div>
					<img src="assets/img/leaf-branch-4.png" alt="Nav Image" className="nav__img-1" />
					<img src="assets/img/leaf-branch-3.png" alt="Nav Image" className="nav__img-2" />
				</div>
				<div className="nav__buttons">
					<i className="ri-moon-line change-theme" id="theme-button"></i>
					<div className="nav__toggle" id="nav-toggle">
						<i className="ri-apps-2-line"></i>
					</div>
				</div>
			</nav>
		</header>
	);
};

export { Header };
