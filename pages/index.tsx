import { Box } from "@chakra-ui/layout";
import Typical from "react-typical";
import { Text } from "@chakra-ui/layout";
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillFire } from "react-icons/ai";

export default function Home() {
    return (
        <Box display="flex" flexDirection="column">
            <Box marginBottom="9rem">
                <Text
                    bgGradient="linear(to-l, #FCDAB7 ,#1E5F74)"
                    bgClip="text"
                    fontSize="7xl"
                    fontWeight="extrabold"
                    margin="3"
                    width="60%"
                    padding="40px"
                >
                    <Box fontSize="6rem">Cybros : </Box>
                    <Typical steps={["The Coding Club", 5000]} wrapper="p" />
                </Text>
            </Box>
            <Box
                fontSize="3rem"
                marginBottom="2.5rem"
                display="flex"
                justifyContent="center"
            >
                Temporary Text to define the timeline below
            </Box>
            <Box>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)",
                        }}
                        icon={<AiFillFire />}
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Creative Director
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Miami, FL
                        </h4>
                        <p>
                            Creative Direction, User Experience, Visual Design,
                            Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            color: "rgb(252, 165, 3)",
                        }}
                        icon={<AiFillFire />}
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Art Director
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            San Francisco, CA
                        </h4>
                        <p>
                            Creative Direction, User Experience, Visual Design,
                            SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        icon={<AiFillFire />}
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        contentStyle={{
                            color: "rgb(252, 165, 3)",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Web Designer
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Los Angeles, CA
                        </h4>
                        <p>User Experience, Visual Design</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        icon={<AiFillFire />}
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        contentStyle={{
                            color: "rgb(252, 165, 3)",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Web Designer
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            San Francisco, CA
                        </h4>
                        <p>User Experience, Visual Design</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        icon={<AiFillFire />}
                        iconStyle={{
                            background: "rgb(233, 30, 99)",
                            color: "#fff",
                        }}
                        contentStyle={{
                            color: "rgb(252, 165, 3)",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Content Marketing for Web, Mobile and Social Media
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Online Course
                        </h4>
                        <p>Strategy, Social Media</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        icon={<AiFillFire />}
                        iconStyle={{
                            background: "rgb(233, 30, 99)",
                            color: "#fff",
                        }}
                        contentStyle={{
                            color: "rgb(252, 165, 3)",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Agile Development Scrum Master
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Certification
                        </h4>
                        <p>
                            Creative Direction, User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        icon={<AiFillFire />}
                        iconStyle={{
                            background: "rgb(233, 30, 99)",
                            color: "#fff",
                        }}
                        contentStyle={{
                            color: "rgb(252, 165, 3)",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Bachelor of Science in Interactive Digital Media
                            Visual Imaging
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Bachelor Degree
                        </h4>
                        <p>Creative Direction, Visual Design</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "rgb(16, 204, 82)",
                            color: "#fff",
                        }}
                        contentStyle={{
                            color: "rgb(252, 165, 3)",
                        }}
                    />
                </VerticalTimeline>
            </Box>
        </Box>
    );
}
