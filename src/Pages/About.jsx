import { useTranslation } from "react-i18next"
import github from "../img/icons/gitHub-black.svg"
import Footer from "../Components/footer/footer";

function About() {

	const { t, i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};
	//{t("Home")}

	return (
		<>
			<main className="section">
				<div className="container">
					<h1 className="title-1">{t("Links")}</h1>
					<div className="githublink" style={{ textAlign: 'center' }}>
						<h2 className="title-2">GitGub</h2>
						<a href="https://github.com/IvanManhattan/Robbers_portal" target="_blank">
							<img src={github} alt="Link" style={{ width: '64px', height: '64px' }} />
						</a>
						<br />
						<p style={{ fontSize: '24px' }}>{t("Catchphrase_3")}<br />{t("Catchphrase_4")}</p>
					</div>


				</div>
			</main>
			<Footer />
		</>
	);
}

export default About;