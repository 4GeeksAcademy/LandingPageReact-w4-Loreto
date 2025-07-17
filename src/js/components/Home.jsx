import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
import Feature from "./Feature";



const cardData = [
	{
		image: "https://picsum.photos/id/124/500/325",
		title: "Card 1",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		hrefLink: "#",
		buttonLabel: "Here for more!"
	},

	{
		image: "https://picsum.photos/id/320/500/325",
		title: "Card 2",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		hrefLink: "#",
		buttonLabel: "Have a look at here!"
	},
	{
		image: "https://picsum.photos/id/300/500/325",
		title: "Card 3",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		hrefLink: "#",
		buttonLabel: "More info here!"
	},
	{
		image: "https://picsum.photos/id/425/500/325",
		title: "Card 4",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		hrefLink: "#",
		buttonLabel: "Find Out More!"
	}
]

//Added to practise map
const featureData = [
	{
		text: "FeatureData 1",
		message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		icon: "fa-solid fa-magnifying-glass-chart"
	},
	{
		text: "FeatureData 1",
		message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		icon: "fa-solid fa-network-wired"
	}
]


//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					{cardData.map((item, index) => (
						<Card
							key={index}
							image={item.image}
							title={item.title}
							text={item.text}
							hrefLink={item.hrefLink}
							buttonLabel={item.buttonLabel}
						/>
					))}
				</div>
				<div className="row">
					{featureData.map((item, index) => (
						<Feature
							key={index}
							text={item.text}
							message={item.message}
							icon={item.icon}
						/>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;