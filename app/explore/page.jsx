"use client";

import {
    Box,
    Heading,
    Input,
    Grid,
    Text,
    Button,
    Collapse,
    useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { courses } from "../lib/courses";
import { trainers } from "../lib/trainers";
import Link from "next/link";
import Navlinks from "../components/layout/Navlink";
import { Flex } from "@chakra-ui/react";



const MotionBox = motion(Box);

export default function Explore() {
    const [search, setSearch] = useState("");

    const filtered = (courses || []).filter((c) =>
        (c?.title || "").toLowerCase().includes(search.toLowerCase())
    );

    return (

        <Box
            bgGradient="linear(to-br, blue.50, white)"
            minH="100vh"
            px={{ base: 4, md: 10 }}
            py={10}
        >
            <Navlinks mb={20} />
            {/* <Link href="/">
                <Button mb={6} variant="outline">
                    ← Back to Home
                </Button>
            </Link> */}
            {/* HEADER */}
            <Heading mb={6} color="blue.600">
                Explore Courses
            </Heading>

            {/* SEARCH */}
            <Input
                placeholder="Search courses..."
                mb={10}
                bg="white"
                color="gray.800"
                boxShadow="sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* GRID */}
            <Grid templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }} gap={6}>
                {filtered.map((course, i) => (
                    <CourseCard key={i} course={course} />
                ))}
            </Grid>
        </Box>
    );
}

/* 🔥 Separate component = performance fix */
function CourseCard({ course }) {
    // const { isOpen, onToggle } = useDisclosure();

    return (
        <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
            p={6}
            bg="white"
            color="gray.800"
            borderRadius="xl"
            boxShadow="md"
            border="1px solid #e2e8f0"
        >
            {/* 🔥 TOP ROW */}
            <Flex justify="space-between" align="center">
                <Heading size="md">{course.title}</Heading>

                {/* TRAINER IMAGE */}
                <Box
                    boxSize="50px"
                    borderRadius="full"
                    overflow="hidden"
                    bg="gray.200"
                >
                    <img
                        src={course?.trainerImage || "/trainer.png"}
                        alt="trainer"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Box>
            </Flex>

            {/* 🔥 BUTTONS */}
            <Flex mt={6} gap={3}>
                {/* VIEW DETAILS */}
                <Link href={`/courses/${course.slug}`} style={{ width: "100%" }}>
                    <Button size="sm" colorScheme="blue" w="100%">
                        View Details
                    </Button>
                </Link>


                {/* MEET TRAINER */}
                <Link href={`/trainers/${course.trainerSlug}`} style={{ width: "100%" }}>

                    <Button
                        size="sm"
                        variant="outline"
                        w="100%"
                        bg="gray.200"
                    >
                        Meet Trainer
                    </Button>
                </Link>
            </Flex>

            {/* 🔥 COLLAPSE CONTENT */}
            {/* <Collapse in={isOpen} animateOpacity>
                <Box mt={4}>
                    <Text fontWeight="bold" mb={2}>
                        Trainer: {course.trainer || "Coming Soon"}
                    </Text>

                    <Text fontWeight="bold" mb={2}>
                        Career Opportunities:
                    </Text>

                    {(course.jobs || []).map((job, i) => (
                        <Text key={i}>• {job}</Text>
                    ))}

                    <Text mt={3} color="green.600" fontWeight="bold">
                        Avg Salary: ₹6–25 LPA
                    </Text>
                </Box>
            </Collapse> */}
        </MotionBox>
    );
}