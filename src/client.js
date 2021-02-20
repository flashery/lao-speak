import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Fonts } from "./assets/Fonts";
import { Theme } from "./assets/Theme";
import { hydrate } from "react-dom";

hydrate(
	<BrowserRouter>
		<ChakraProvider theme={Theme}>
			<Fonts />
			<App />
		</ChakraProvider>
	</BrowserRouter>,
	document.getElementById("root")
);

if (module.hot) {
	module.hot.accept();
}
