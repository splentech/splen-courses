"use client";

import {
    Box,
    Flex,
    Heading,
    Text,
    Input,
    Textarea,
    Button,
    Grid,
    Select
} from "@chakra-ui/react";
import Navlinks from "../components/layout/Navlink";


// ✅ Your course list
const courseOptions = [
    "AI / Machine Learning",
    "Data Science",
    "Programming / DSA",
    "Mobile Application & Web Development",
    "Software Engineering",
    "Computer Network & Security",
    "Database Systems",
    "Distributed Systems / Cloud Computing",
    "Game Development",
    "Natural Language Processing",
    "Robotics",
    "Computer Architecture",
    "Operating System",
    "Computer Graphics & Visualization",
    "Human Computer Interaction"
];

// import {  Heading, Text, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
export default function Contact() {
    return (
        <Box bg="#f8fafc" minH="100vh" px={{ base: 4, md: 10 }} py={10} color="gray.800" >

            <Navlinks mb={20} />

            {/* HEADER */}
            <Box textAlign="center" mb={12} mt={18}>
                <Text color="blue.500" fontSize="sm" fontWeight="medium">
                    ⚡ CONTACT SPLEN TECHNOLOGIES
                </Text>

                <Heading mt={3} fontSize={{ base: "2xl", md: "4xl" }}>
                    Let's Discuss Your{" "}
                    <Text as="span" color="blue.500">
                        Learning Requirements
                    </Text>
                </Heading>

                <Box w="60px" h="3px" bg="blue.500" mx="auto" mt={4} />

                <Text mt={4} color="gray.600" maxW="600px" mx="auto">
                    Reach out to us for student programs, institutional training,
                    corporate upskilling, or partnerships.
                </Text>
            </Box>

            {/* MAIN GRID */}
            <Grid templateColumns={{ base: "1fr", md: "1.2fr 1fr" }} gap={8}>

                {/* LEFT FORM */}
                <MotionBox
                    initial={{ opacity: 0, x: -60, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    whileHover={{ y: -4 }}

                    h="100%"   // ✅ align height with right side
                    p={{ base: 6, md: 8 }}
                    borderRadius="2xl"
                    bg="white"
                    boxShadow="lg"
                    border="1px solid #e2e8f0"
                >
                    {/* 🔥 TITLE */}
                    <Heading size="lg" color="blue.600">
                        Join Splen Technologies Bootcamp 🚀
                    </Heading>

                    {/* SUBTEXT */}
                    <Text mt={4} color="gray.600" fontSize="md">
                        Apply now for instructor-led, project-based courses and unlock
                        placement opportunities with industry-ready skills.
                    </Text>

                    {/* 🔥 CTA BUTTON */}
                    <Flex justify="center" mt={8}>
                        <Button
                            as="a"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSedmRNRYEnkBe3LKEF1akAypgZtdcQoUR6j-fdPgR7W1fKCNg/viewform?usp=preview"
                            target="_blank"
                            size="lg"
                            px={10}
                            bgGradient="linear(to-r, blue.500, cyan.400)"
                            color="white"
                            _hover={{
                                transform: "translateY(-2px)",
                                boxShadow: "lg",
                                bgGradient: "linear(to-r, blue.600, cyan.500)",
                            }}
                            transition="all 0.3s"
                        >
                            Apply Now
                        </Button>
                    </Flex>

                    {/* 🔥 TRUST INFO */}
                    <Flex
                        mt={8}
                        justify="center"
                        gap={{ base: 4, md: 8 }}
                        wrap="wrap"
                    >
                        <Text fontSize="sm" color="gray.500">
                            🎓 2 Certificates Included
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                            ⚡ 24hr Response Time
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                            💼 Placement Assistance
                        </Text>
                    </Flex>
                </MotionBox>

                {/* RIGHT SIDE */}
                <Flex direction="column" gap={6}>

                    {/* CONTACT CARDS */}
                    <Grid templateColumns="1fr 1fr" gap={4}>
                        <Box bg="white" p={4} borderRadius="lg" boxShadow="sm">
                            <Text fontWeight="bold">Email</Text>
                            <Text color="gray.600">
                                info@splentechnologies.com
                            </Text>
                        </Box>

                        <Box bg="white" p={4} borderRadius="lg" boxShadow="sm">
                            <Text fontWeight="bold">Phone</Text>
                            <Text color="gray.600">
                                +91 9056503989
                            </Text>
                        </Box>
                    </Grid>

                    {/* OFFICE */}
                    <Box bg="white" p={4} borderRadius="lg" boxShadow="sm">
                        <Text fontWeight="bold" mb={2}>
                            Our Office
                        </Text>

                        <Text color="gray.600">
                            Splen Technologies
                            <br />
                            Technology & Training Office
                            <br />
                            Chandigarh, India
                        </Text>

                        {/* MAP */}
                        <Box
                            mt={4}
                            h="180px"
                            bg="gray.200"
                            borderRadius="md"
                            color="gray.800"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            Map Placeholder
                        </Box>
                    </Box>

                    {/* WHO SECTION */}
                    <Box bg="white" p={4} borderRadius="lg" boxShadow="sm">
                        <Text fontWeight="bold" mb={2}>
                            Who Typically Reaches Out?
                        </Text>

                        <Text color="gray.600">
                            • Students exploring skill-based programs
                        </Text>
                        <Text color="gray.600">
                            • Universities planning training events
                        </Text>
                        <Text color="gray.600">
                            • Corporates seeking workforce upskilling
                        </Text>
                        <Text color="gray.600">
                            • Trainers & academic collaborators
                        </Text>
                    </Box>

                </Flex>
            </Grid>
        </Box>
    );
}