import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";

export default function Navigation() {
	const navigations = [
		{ title: "Home", link: "#" },
		{ title: "About Us", link: "#" },
		{ title: "Contact Us", link: "#" },
	];

	return (
		<Box className="nav_wrap">
			<Box className="nav_inner">
				<Flex>
					<Box className="logo_wrap">
						<a className="logo" href="/">
							<img
								src="https://language-school.cmsmasters.net/wp-content/themes/language-school/img/logo.png"
								alt="Language School"
							/>
						</a>
					</Box>
					<Spacer />
					<div className="mid_nav_wrap">
						<nav role="navigation">
							<div className="menu-primary-navigation-container">
								<ul id="navigation" className="mid_nav navigation">
									{navigations.map((navigation, index) => {
										return (
											<li className="menu-item" key={index}>
												<a href={navigation.link}>
													<span class="nav_item_wrap">
														<span class="nav_title">{navigation.title}</span>
													</span>
												</a>
											</li>
										);
									})}
								</ul>
							</div>
						</nav>
					</div>
				</Flex>
			</Box>
		</Box>
	);
}
