
const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = () => {
	System.import('./image_viewer/image_viewer').then(module => {
		module = module.default;
		console.log("module:", module);
		module.addSmallImage();
	});
};

document.body.appendChild(button);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('br'));
