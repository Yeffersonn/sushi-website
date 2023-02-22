const Recently = () => {
	return (
		<section className="recently section" id="recently">
			<div className="recently__container container grid">
				<div className="recently__data">
					<span className="section__subtitle">Recently Added</span>
					<h2 className="section__title">
						Sushi Samurai <br />
						Salmón Cheese
					</h2>
					<p className="recently__description">
						Take a look at what's new. And do not deprive yourself of a
						good meal, enjoy and be happy.
					</p>
					<a href="#" className="button">
						Order Now <i className="ri-arrow-right-line "></i>
					</a>
					<img src="assets/img/spinach-leaf.png" alt="recently image" className="recently__data-img" />
				</div>
				<img src="assets/img/recently-salmon-sushi.png" alt="recently image" className="recently__img" />
			</div>
			<img src="assets/img/leaf-branch-2.png" alt="recently image" className="recently__leaf-1" />
			<img src="assets/img/leaf-branch-3.png" alt="recently image" className="recently__leaf-2" />
		</section>
	);
};

export { Recently };
