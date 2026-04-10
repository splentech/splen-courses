// 🚀 ADVANCED NEXT.JS EDTECH HOMEPAGE (PRO LEVEL)
"use client";

import {
  Box, Flex, Heading, Text, Button, Stack, Grid, Icon
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLaptopCode, FaUserGraduate, FaChalkboardTeacher, FaBriefcase, FaUsers, FaChartLine } from "react-icons/fa";
import { useRef, useState } from "react";
import Link from "next/link";
import NavLinks from ".//components/layout/Navlink";
import { whyUs } from "./lib/whyUs";
import Stats from "./components/home/Stats";

const MotionBox = motion(Box);

export default function Home() {

  // 🔥 Parallax scroll effect
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <Box bg="white" color="gray.800" overflow="hidden">

      {/* NAVBAR */}
      <NavLinks />

      {/* HERO with PARALLAX */}
      <Flex ref={ref} minH="90vh" align="center" justify="center" direction="column"
        textAlign="center" px={6} bgGradient="linear(to-br, blue.50, blue.100)">

        <MotionBox style={{ y }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Heading fontSize={{ base: "3xl", md: "6xl" }}>
            Splen Technologies Bootcamp
          </Heading>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Text mt={6} maxW="2xl" color="gray.600">
            Witness the real time project execution during the Splen's Online live classes ,splen has always been working to bridge the gap between industry and the academics ,Splen's online modules are carving the new path for the better learning under every circumstances ,post covid era has brought monumental changes in how we used to study ,now the training has gone more mobile then ever before
            Professional at Splen has designed few tailor made courses in capsule size module ,for very short time we are offering these courses at more then 60% fee wavier
          </Text>
        </MotionBox>

        <Stack direction={{ base: "column", md: "row" }} mt={8}>
          <Link href="/explore">
            <Button colorScheme="blue" size="lg">
              Explore Courses
            </Button>
          </Link>
          {/* <Button size="lg" variant="outline">Demo</Button> */}
        </Stack>

      </Flex>

      {/* FLOATING ANIMATION ELEMENT */}
      <MotionBox
        position="absolute"
        top="20%"
        left="10%"
        w="120px"
        h="120px"
        bg="blue.200"
        borderRadius="full"
        filter="blur(80px)"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* COURSES with ADVANCED HOVER */}
      <Stats />

      {/* SCROLL REVEAL SECTION */}
      <Box px={10} py={20} bg="blue.50">
        <Heading textAlign="center" mb={10}>Why Splen</Heading>

        <Grid templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }} gap={6}>
          {whyUs.map((item, i) => (
            <MotionBox
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              p={5}
              bg="white"
              borderRadius="lg"
              boxShadow="md"
            >
              ✔ {item}
            </MotionBox>
          ))}
        </Grid>
      </Box>

      {/* CTA */}
      <Flex py={24} direction="column" align="center" bgGradient="linear(to-r, blue.500, blue.600)" color="white">
        <MotionBox
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          <Heading>Start Your Career</Heading>
          <Link href="/contact">
            <Button mt={6} size="lg" bg="white" color="blue.600">
              Join Now
            </Button>
          </Link>
        </MotionBox>
      </Flex>

    </Box>
  );
}

// 📁 PROPER INDUSTRY STRUCTURE
// app/
//   layout.js
//   page.jsx
//   (courses)/page.jsx
//   (dashboard)/page.jsx
//
// components/
//   ui/
//     Button.jsx
//   layout/
//     Navbar.jsx
//   sections/
//     Hero.jsx
//     Courses.jsx
//     WhyUs.jsx
//     CTA.jsx
//
// lib/
//   animations.js
//   utils.js
//
// hooks/
//   useScrollAnimation.js

const courses = [
  { title: "Full Stack", desc: "React + Node", icon: FaLaptopCode },
  { title: "Data Science", desc: "AI + ML", icon: FaUserGraduate },
  { title: "DevOps", desc: "CI/CD", icon: FaChalkboardTeacher },
];


// 🔥 NOW: Advanced animations + scalable structure ready
