import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import { Box, Center, Container } from "@chakra-ui/react";
import Navigation from "./partials/Navigation";
import Footer from "./partials/Footer";

export default function App() {
	return (
		<Switch>
			<Container w="100%">
				<Center bg="#f0f0f0">
					<Box bg="white" w={[1600, 1180, 400]}>
						<Navigation className="navigation" />
						<Box className="content">
							<Route exact path="/" component={Home} />
						</Box>
						<Footer />
					</Box>
				</Center>
			</Container>
		</Switch>
	);
}
