import React, { Fragment } from "react";
import { Box, Center, Flex, Grid, Icon, Spacer } from "@chakra-ui/react";
import { IoMail, IoPersonAddOutline } from "react-icons/io5";
import { MdMailOutline, MdMoneyOff, MdHeadset } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";

export default function Action() {
	return (
		<Box className="action_wrap">
			<Box className="action_inner">
				<Center>
					<Grid templateColumns="repeat(3, 1fr)" gap={100}>
						<Box w="100%" className="action_area">
							<Icon className="action_icon" as={MdMailOutline} />
							<h1 className="title">Get Qoute</h1>
							<p>Find the price of your ideal course </p>
						</Box>
						<Box w="100%" className="action_area">
							<Icon className="action_icon" as={MdHeadset} />
							<h1 className="title">Ask a Question</h1>
							<p>Not sure what you need? Ask our Advisors</p>
						</Box>
						<Box w="100%" className="action_area">
							<Icon className="action_icon" as={MdMoneyOff} />
							<h1 className="title">Free Trial</h1>
							<p>Try first before enrolling</p>
						</Box>
					</Grid>
				</Center>
			</Box>
		</Box>
	);
}
