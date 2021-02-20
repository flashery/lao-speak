import { Box, Center, Grid, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";

export default function Footer() {
	return (
		<Box className="footer_wrap">
			<Box className="footer_inner">
				<Grid templateColumns="repeat(2, 1fr)" gap={100}>
					<Box>
						<p style={{ padding: "0 0 36px;" }}>
							<img
								src="https://language-school.cmsmasters.net/wp-content/uploads/2016/01/logo_footer.png"
								alt=""
							/>
						</p>
						<p>
							Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse
							suscipit sagittis leo sit met entum estibulum dignissim posuere
							cubilia deleniti atque corrupti quos dolores vero eos et accusamu.
						</p>
					</Box>

					<Box>
						<h6 className="area_title">Contact Info</h6>
						<Box sx={{ paddingBottom: "20px" }}>
							<HStack>
								<Icon w={16} h={16} as={MdEmail} />
								<p>example@language-school.com</p>
							</HStack>
						</Box>
						<Box sx={{ paddingBottom: "20px" }}>
							<HStack>
								<Icon w={16} h={16} as={MdPhoneIphone} />
								<p>Call Us: 1-800-123-1234</p>
							</HStack>
						</Box>
						<Box sx={{ paddingBottom: "20px" }}>
							<HStack>
								<Icon w={16} h={16} as={IoLogoFacebook} />
								<p>https://www.facebook.com/LaoSpeak-104288834942920</p>
							</HStack>
						</Box>
					</Box>
				</Grid>
				<Center>
					<p style={{ margin: "20px" }}>Copyright 2021</p>
				</Center>
			</Box>
		</Box>
	);
}
