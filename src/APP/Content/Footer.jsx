const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container grid">
				<div>
					<a href="#" className="footer__logo">
						<img src="assets/img/logo.png" alt="logo image " />
						Sushi
					</a>
					<p className="footer__description ">
						Food for the body is not <br />
						enough. There must be food <br />
						for the soul.
					</p>
				</div>
				<div className="footer__content">
					<div>
						<h3 className="footer__title">Main Menu</h3>
						<ul className="footer__links">
							<li>
								<a href="#" className="footer__link">
									About
								</a>
							</li>
							<li>
								<a href="#" className="footer__link">
									Menu
								</a>
							</li>
							<li>
								<a href="#" className="footer__link">
									Offer
								</a>
							</li>
							<li>
								<a href="#" className="footer__link">
									Events
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="footer__title">Information</h3>
						<ul className="footer__links">
							<li>
								<a href="#" className="footer__link">
									Contact
								</a>
							</li>
							<li>
								<a href="#" className="footer__link">
									Order & Returns
								</a>
							</li>
							<li>
								<a href="#" className="footer__link">
									Videos
								</a>
							</li>
							<li>
								<a href="#" className="footer__link">
									Reservation
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="footer__title">Addres</h3>
						<ul className="footer__links">
							<li className="footer__information">
								Av. Hacienda 1234 <br />
								Lima 4321, Peru
							</li>
							<li className="footer__information">9AM - 11PM</li>
						</ul>
					</div>
					<div>
						<h3 className="footer__title">Social Media</h3>
						<ul className="footer__social">
							<a
								href="https://www.facebook.com/"
								target="_blank"
								className="footer__social-link"
							>
								<i className="ri-facebook-circle-fill"></i>
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
								className="footer__social-link"
							>
								<i className="ri-instagram-fill"></i>
							</a>
							<a
								href="https://www.twitter.com/"
								target="_blank"
								className="footer__social-link"
							>
								<i className="ri-twitter-fill"></i>
							</a>
						</ul>
					</div>
				</div>
				<img
					src="assets/img/spring-onion.png"
					alt="footer image"
					className="footer__onion"
				/>
				<img
					src="assets/img/spinach-leaf.png"
					alt="footer image"
					className="footer__spinach"
				/>
				<img
					src="assets/img/leaf-branch-4.png"
					alt="footer image"
					className="footer__leaf"
				/>
			</div>
			<div className="footer__info container">
				<div className="footer__card">
					<img src="assets/img/footer-card-1.png" alt="footer image" />
					<img src="assets/img/footer-card-2.png" alt="footer image" />
					<img src="assets/img/footer-card-3.png" alt="footer image" />
					<img src="assets/img/footer-card-4.png" alt="footer image" />
				</div>
				<span className="footer__copy">
					&#169; Copyright. All rights reserved
				</span>
			</div>
		</footer>
	);
};

export { Footer };
