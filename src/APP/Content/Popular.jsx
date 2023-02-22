const Popular = () => {
	return (
		<section className="popular section" id="popular">
			<span className="section__subtitle ">The Best Food</span>
			<h2 className="section__title ">Popular Dishes</h2>
			<div className="popular__container container grid">
				<article className="popular__card">
					<img
						src="assets/img/popular-onigiri.png"
						alt="Popular Image"
						className="popular__img"
					/>
					<h3 className="popular__name ">Onigiri</h3>
					<span className="popular__description ">Japanese Dish</span>
					<span className="popular__price">$10.99</span>
					<button className="popular__button">
						<i className="ri-shopping-bag-line"></i>
					</button>
				</article>
				<article className="popular__card">
					<img
						src="assets/img/popular-spring-rols.png"
						alt="Popular Image"
						className="popular__img"
					/>
					<h3 className="popular__name ">Spring Rolls</h3>
					<span className="popular__description ">Japanese Dish</span>
					<span className="popular__price">$15.99</span>
					<button className="popular__button">
						<i className="ri-shopping-bag-line"></i>
					</button>
				</article>
				<article className="popular__card">
					<img
						src="assets/img/popular-sushi-rolls.png"
						alt="Popular Image"
						className="popular__img"
					/>
					<h3 className="popular__name ">Sushi Rolls</h3>
					<span className="popular__description ">Japanese Dish</span>
					<span className="popular__price">$19.99</span>
					<button className="popular__button">
						<i className="ri-shopping-bag-line"></i>
					</button>
				</article>
			</div>
		</section>
	);
};

export { Popular };
