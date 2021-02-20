import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Button, Center, Flex, Grid, HStack } from "@chakra-ui/react";

export default function Slider() {
	const [slides, setSlides] = useState([
		{
			img:
				"https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-6.jpg",
			legend: "Putting Children First. Preparing Children For Success In Life",
		},

		{
			img:
				"https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-4-1.jpg",
			legend: "To have another language is to possess a second soul",
		},
		{
			img:
				"https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-7.jpg",
			legend: "Every student matters, every moment counts.",
		},
		{
			img:
				"https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-1-1.jpg",
			legend: "Teaching Turning Today’s Learners Into Tomorrow’s Leaders",
		},
	]);

	return (
		<Carousel>
			{slides.map((slide, index) => {
				return (
					<Box key={index}>
						<img src={slide.img} />
						<p className="legend">
							{slide.legend}
							<Box className="slider_action">
								<Grid templateColumns="repeat(2,1fr)" gap={5}>
									<Button className="go">SCHEDULE</Button>
									<Button className="info">LEARN MORE</Button>
								</Grid>
							</Box>
						</p>
					</Box>
				);
			})}
		</Carousel>
	);
}
