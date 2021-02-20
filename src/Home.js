import React from "react";
import { Fragment } from "react";
import Slider from "./home/Slider";
import Action from "./home/Action";
import Testimonial from "./home/Testimonial";

export default function Home() {
	return (
		<Fragment>
			<Slider />
			<Action />
			<Testimonial />
		</Fragment>
	);
}
