import big from '../../assets/lotus_1200.jpg';
import small from '../../assets/grass_200.jpg';
import './styles.css';


const addSmallImage = () => {
	const bigImage = document.createElement('img');
	bigImage.src = small;
	document.body.appendChild(bigImage);
};

const addBigImage = () => {
	const smallImage = document.createElement('img');
	smallImage.src = big;
	document.body.appendChild(smallImage);
};

export default {
	addSmallImage,
	addBigImage,
}
