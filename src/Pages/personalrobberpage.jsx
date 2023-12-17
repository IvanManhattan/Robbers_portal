
import { useParams } from 'react-router-dom';
import { robbersList } from '../helpers/robbersList';
import Timeline from '../Components/timeline/timeline';
import VideoElement from '../Components/youtubevideo/videoelement';
import { useTranslation } from "react-i18next"
import Button from 'react-bootstrap/Button';
import Map from '../Components/map/map';

import SliderCar from '../Components/slider/slider'

function PersonalRobberPage() {
	const { id } = useParams();
	const currRobber = robbersList[id];

	const { t, i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		<main className="section">
			<div className="container">
				<div className="robber-personal">

					<h1 className="title-1">{currRobber.name}</h1>
					<h2 className="title-2">{currRobber.yearsOfLife}</h2>

					<img src={currRobber.img} alt="" className="robber-personal__cover" />
					<div className="robber-personal__desc">
						<p>{currRobber.description}</p>
					</div>

					<div className="timeline__container">
						< Timeline robber={currRobber} />
					</div>

					<h2 className="title-2">{t("Gallery")}</h2>
					<div className="slider__container" style={{ margin: 'auto', height: '20%', width: '80%' }}>
						<SliderCar name={currRobber} />
					</div>

					<h2 className="title-2">{t("Map")}</h2>
					<div style={{ width: '100%', height: '100%' }}>
						<Map
							zoom={parseInt(currRobber.zoom)}
							cLat={parseFloat(currRobber.cLat)}
							cLng={parseFloat(currRobber.cLng)}
							mLat1={parseFloat(currRobber.mLat1)}
							mLng1={parseFloat(currRobber.mLng1)}
							mTitle1={currRobber.mTitle1}
							mLat2={parseFloat(currRobber.mLat2)}
							mLng2={parseFloat(currRobber.mLng2)}
							mTitle2={currRobber.mTitle2}
							mLat3={parseFloat(currRobber.mLat3)}
							mLng3={parseFloat(currRobber.mLng3)}
							mTitle3={currRobber.mTitle3}
							/>
					</div>
					<h2 className="title-2">{t("Video")}</h2>
					<VideoElement name={currRobber.name} />

				</div>
			</div>
		</main >
	);
}

export default PersonalRobberPage;