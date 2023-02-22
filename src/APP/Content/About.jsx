const About = () => {
	return (
		<section className="about section" id="about">
			<div className="about__container container grid">
				<div className="about__data">
					<span className="section__subtitle">About Us</span>
					<h2 className="section__title about__title">
						<div>
							We Provide
							<img
								src="assets/img/about-sushi-title.png"
								alt="About Image"
							/>
						</div>
						Healthy Food
					</h2>
					<p className="about__description">
						Food comes to us from our relatives, whether they have wings
						or roots. This is how we consider food, it also has a culture.
						It has a history that passes from generation to generation.
					</p>
				</div>
				<img src="assets/img/about-sushi.png" alt="about image" className="about__img" />
			</div>
			<img src="assets/img/leaf-branch-1.png" alt="About Image" className="about__leaf" />
		</section>
	);
};

export { About };
