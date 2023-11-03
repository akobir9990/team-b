function Footer() {
  return <footer className="footer">
	<div className="container">
		<div className="footer__content">
			<nav className="footer__menu">
				<a href="index.html" className="footer__logo-link">
          <img src="img/logo-footer.png" alt="" className="footer__logo" />
          </a>
				<ul class="footer__menu-list">
					<li className="footer__menu-item"><a href="about.html" className="footer__menu-link">О компании</a></li>
					<li className="footer__menu-item"><a href="contacts.html" className="footer__menu-link">Контакты</a></li>
					<li className="footer__menu-item"><a href="openings.html" className="footer__menu-link">Вакансии</a></li>
					<li className="footer__menu-item"><a href="articles.html" className="footer__menu-link">Статьи</a></li>
					<li className="footer__menu-item"><a href="discount.html" className="footer__menu-link">Акции</a></li>
				</ul>
			</nav>
			<nav className="footer__contact">
				<ul className="footer__contact-list">
					<li className="footer__contact-item"><a href="" className="footer__contact-link">
            <img src="img/svg/instagram.svg" alt="" />
                  </a></li>
					<li className="footer__contact-item"><a href="" className="footer__contact-link">
            <img src="img/svg/vk.svg" alt="" /></a>
					</li>
					<li className="footer__contact-item"><a href="" className="footer__contact-link"><img src="img/svg/facebook.svg"
								alt="" /></a></li>
					<li className="footer__contact-item"><a href="" className="footer__contact-link"><img src="img/svg/odnaklasshiki.svg"
								alt="" /></a></li>
				</ul>
				<a href="tel:+88007773333" className="footer__contact-tel _icon-phone">8 800 777 33 33</a>
			</nav>
		</div>
	</div>
</footer>;
}

export default Footer;
