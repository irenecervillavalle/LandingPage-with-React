import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import primavera from "../../img/primavera.jpg";
import verano from "../../img/verano.jpg";
import otoño from "../../img/otoño.jpg";
import invierno from "../../img/invierno.jpg";

const Home = () => {
	return (
		<>
	<div className="float-start-sm-lg-md">
		<Navbar/>
		<div className="container-fluid mt-5 float-start-sm-lg-md">
			<div className="row">
			 	<Jumbotron/>
			</div>
		    <div className= "row align-items-start mt-5 text-center float-start-sm-lg-md">
				<div className="col float-start-sm-lg-md" style={{marginLeft:"230px"}}>
					<Card src={primavera} title="Spring" text="Spring is a flowery season that makes us happy and brings us magical colors"/>
				</div>
				<div className="col float-start-sm-lg-md" style={{marginLeft:"-180px"}}>
					<Card src={verano} title="Summer" text={"Summer is the hot season that overwhelms us with high temperatures."}/>
				</div>
				<div className="col float-start-sm-lg-md" style={{marginLeft:"-180px"}}>
					<Card src={otoño} title="Autumn" text={"Autumn is the season that brings us rain and waters our meadows and fields."}/>
				</div>
				<div className="col float-start-sm-lg-md" style= {{marginLeft:"-180px"}}>
					<Card src={invierno} title="Winter" text={"Winter is the freezing season that covers us with a thick blanket of snow."}/>
				</div>
			</div>
			</div>	
			<Footer/>		
		</div>
		
	</>
	);
};

export default Home;
