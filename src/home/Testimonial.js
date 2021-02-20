import React, { Fragment } from "react";
import { Avatar, Box, Center, Flex, Grid, HStack } from "@chakra-ui/react";

export default function Testimonial() {
	return (
		<Box className="testimonial_wrap">
			<Box className="testimonial_inner">
				<Center>
					<h1>Our Happy Students</h1>
				</Center>
				<Grid templateColumns="repeat(3, 1fr)" gap={100}>
					<Box>
						<article
							className="cmsmasters_quote_inner"
							id="cmsmasters_quote_60291a60c5c899_71857781"
						>
							<div className="quote_content">
								<h6>
									<span style={{ color: "#01a2a6" }}>AWESOME!</span>
								</h6>
								<p>
									Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh
									tellus, a rutrum turpis pellentesque ac. Nulla nibh libero,
									tincidunt vero eos et accusamus et iusto odio dignissimos
									ducimus
								</p>
							</div>
							<div className="quote_info_wrap">
								<Flex>
									<figure className="quote_image">
										<img
											width="100"
											height="100"
											src="https://language-school.cmsmasters.net/wp-content/uploads/2015/07/Depositphotos_40674935_original1.jpg"
											className="attachment-thumbnail size-thumbnail"
											alt=""
											srcSet="https://language-school.cmsmasters.net/wp-content/uploads/2015/07/Depositphotos_40674935_original1.jpg 100w, https://language-school.cmsmasters.net/wp-content/uploads/2015/07/Depositphotos_40674935_original1-60x60.jpg 60w"
											sizes="(max-width: 100px) 100vw, 100px"
										/>
									</figure>
									<div
										className="wrap_quote_title"
										style={{ backgroundColor: "#01a2a6" }}
									>
										<h6 className="quote_title">Kira Sims</h6>
										<span className="quote_subtitle">Student</span>
									</div>
								</Flex>
							</div>
						</article>
					</Box>
					<Box>
						<article
							className="cmsmasters_quote_inner"
							id="cmsmasters_quote_60291a60cc6ce8_87155485"
						>
							<div className="quote_content">
								<h6>
									<span style={{ color: "#f36371" }}>HIGH QUALITY!</span>
								</h6>
								<p>
									Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh
									tellus, a rutrum turpis pellentesque ac. Nulla nibh libero,
									tincidunt vero eos et accusamus et iusto odio dignissimos
									ducimus
								</p>
							</div>
							<div className="quote_info_wrap">
								<Flex>
									<figure className="quote_image">
										<img
											width="100"
											height="100"
											src="https://language-school.cmsmasters.net/wp-content/uploads/2015/07/single-student4.jpg"
											className="attachment-thumbnail size-thumbnail"
											alt=""
											sizes="(max-width: 100px) 100vw, 100px"
										/>
									</figure>
									<div
										className="wrap_quote_title"
										style={{ backgroundColor: "#f36371" }}
									>
										<h6 className="quote_title">Phil Neal</h6>
										<span className="quote_subtitle">Designer</span>
									</div>
								</Flex>
							</div>
						</article>
					</Box>
					<Box>
						<article
							className="cmsmasters_quote_inner"
							id="cmsmasters_quote_60291a60cd8749_76678281"
						>
							<div className="quote_content">
								<h6>
									<span style={{ color: "#f9be4d" }}>SO SIMPLE!</span>
								</h6>
								<p>
									Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh
									tellus, a rutrum turpis pellentesque ac. Nulla nibh libero,
									tincidunt vero eos et accusamus et iusto odio dignissimos
									ducimus
								</p>
							</div>
							<div className="quote_info_wrap">
								<Flex>
									<figure className="quote_image">
										<img
											width="100"
											height="100"
											src="https://language-school.cmsmasters.net/wp-content/uploads/2015/07/puberty1.jpg"
											className="attachment-thumbnail size-thumbnail"
											alt=""
											srcSet="https://language-school.cmsmasters.net/wp-content/uploads/2015/07/puberty1.jpg 100w, https://language-school.cmsmasters.net/wp-content/uploads/2015/07/puberty1-60x60.jpg 60w"
											sizes="(max-width: 100px) 100vw, 100px"
										/>
									</figure>
									<div
										style={{ backgroundColor: "#f9be4d" }}
										className="wrap_quote_title"
									>
										<h6 className="quote_title">Kira Sims</h6>
										<span className="quote_subtitle">Student</span>
									</div>
								</Flex>
							</div>
						</article>
					</Box>
				</Grid>
			</Box>
		</Box>
	);
}
