import Img1 from './images/Ecommerce3.png';
import Img2 from './images/search1.png';
import Img3 from './images/redsapp2.png';
import Img4 from "./images/caption1.png"

import VidReels1 from "./images/VidReels1.PNG"
import VidReels2 from "./images/VidReels2.PNG"
import VidReels3 from "./images/VidReels3.PNG"

import search1 from "./images/search1.png"
import search2 from "./images/search2.png"
import search3 from "./images/search3.png"

import redsapp1 from "./images/redsapp1.png"
import redsapp2 from "./images/redsapp2.png"
import redsapp3 from "./images/redsapp3.png"
import redsapp4 from "./images/redsapp4.png"

import caption1 from "./images/caption1.png"
import caption2 from "./images/caption2.png"
import caption3 from "./images/caption3.png"

import excel1 from "./images/excel1.PNG"
import excel2 from "./images/excel2.PNG"
import excel3 from "./images/excel3.PNG"

import whatsApp1 from "./images/whatsapp1.png"
import whatsApp2 from "./images/whatsapp2.png"
import whatsApp3 from "./images/whatsapp3.png"
import whatsApp4 from "./images/whatsapp4.png"
import whatsApp5 from "./images/whatsapp5.png"

export default [
	{
		title: "Excel Clone",
		image: excel1,
		desc: 'It is a clone of Microsoft Excel.  Its supports all the major functionalities such as cut, copy, paste, alignment, color, text-decoration, formula, multiple sheets, and much more. Calculations are done using Stack and the cycles are detected using a Graph Data Structure.',
		slides: [excel1, excel2, excel3],
		tech:['HTML', 'CSS', 'JS'],
		link: 'http://excel-clone.surge.sh',
		github: 'https://github.com/shivanidogra0301/Excel_Clone'
	},
	{
		title:"Whatsapp-Clone",
		image:whatsApp2,
		desc:
			'This project is the clone of WhatsApp web which is made using react and redux for the frontend, NodeJS for the backend. All the real-time communication such as typing indication, the message is seen or not is made using socket.io. The project is deployed on Netlify.',
		slides:[whatsApp1 , whatsApp2 , whatsApp3 , whatsApp4 , whatsApp5],
		tech:['React JS', 'Socket.io' , 'Express JS', 'Mongo DB'],
		link:'https://whatsapp-clone-112.netlify.app',
		github:''
	},
	{
		title: 'VidReels',
		image: VidReels3,
		desc:
            'A video sharing social media application enabling users to create, delete, update, like, and comment on videos.',
		slides:[VidReels1,VidReels2,VidReels3],
		tech:['React Js' , 'Firebase'],
		github:'https://github.com/shivanidogra0301/VidReels',
		link:''
		
	},
	{
		title: 'Image based Search Engine',
		image: Img2,
		desc:
            'It is an image-based Search-Engine made using python, Keras, and TensorFlow. It predicts the top 10 results with the highest probabilities with the query image.',
		slides:[search1,search2,search3],
		tech:['React JS', 'Flask', 'Keras'],
		github:'',
		link:""
	},
	{
		title: 'Redsapp',
		image: Img3,
		desc:	'It is a fully functional Twitter clone made using ReactJS as the frontend and firebase cloud functions as the backend. You can like, comment, update, delete tweets and receive real-time notifications. User can also update their profile just like a typical social media platform.',
		slides:[redsapp1,redsapp4,redsapp2 ,redsapp3],
		tech:['React JS' , 'Firebase'],
		github:'',
		link:'https://redsapp-d5e82.web.app'

	},
	{
		title: 'Caption-Bot',
		image: Img4,
		desc:
			'It is made using python, Keras, TensorFlow, glove vectors, and transfer learning using Resnet50. It analyzes the image and predicts the most appropriate caption using beam search.',
		slides:[caption1,caption2,caption3],
		tech:['React JS', 'Flask', 'Keras'],
		github:'',
		link:''

	}

];
