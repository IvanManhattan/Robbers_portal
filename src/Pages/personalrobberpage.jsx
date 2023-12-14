
import { useParams } from 'react-router-dom';
import { robbersList } from '../helpers/robbersList';
import Timeline from '../Components/timeline/timeline';
import VideoElement from '../Components/youtubevideo/videoelement';
import Button from 'react-bootstrap/Button';
import MySlider from '../Components/slider/slider';

function PersonalRobberPage() {
	const { id } = useParams();
	const currRobber = robbersList[id];

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

					<h2 className="title-2">Video</h2>
					<VideoElement name={currRobber.name} />
					<MySlider/>
					<Button href="https://www.youtube.com/" target='_blank' style={
						{ background: "black" }
					}>
						Link
					</Button>	

				</div>
			</div>
		</main >
	);
}

export default PersonalRobberPage;