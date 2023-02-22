const Newsletter = () => {
	return (
		<section className="newsletter section">
			<div className="newsletter__container container">
				<div className="newsletter__content grid">
					<img
						src="assets/img/newsletter-sushi.png"
						alt="newsletter image"
						className="newsletter__img"
					/>
					<div className="newsletter__data">
						<span className="section__subtitle ">Newsletter</span>
						<h2 className="section__title">
							Subscribe For <br />
							Ofter Updates
						</h2>
						<form action=" " className="newsletter__form">
							<input
								type="email"
								placeholder="Enter email"
								className="newsletter__input"
							/>
							<button className="button newsletter__button">
								Subscribe
								<i className="ri-send-plane-line"></i>
							</button>
						</form>
					</div>
				</div>
				<img src="/public/assets/img/spinach-leaf.png" alt="newsletter image" className="newsletter__spinach" />
			</div>
		</section>
	);
};

export { Newsletter };
