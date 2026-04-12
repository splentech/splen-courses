"use client";

import {
  Box, Flex, Heading, Text, Button, Stack, Grid, Tag,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaLaptopCode, FaUserGraduate, FaChalkboardTeacher,
  FaShieldAlt, FaMobileAlt, FaPaintBrush,
} from "react-icons/fa";
import { useRef } from "react";
import Link from "next/link";
import NavLinks from "./components/layout/Navlink";
import { whyUs } from "./lib/whyUs";
import Stats from "./components/home/Stats";

const MotionBox = motion(Box);

const domains = [
  {
    icon: FaLaptopCode,
    title: "Full Stack Development",
    desc: "Master both frontend and backend technologies to build complete, scalable web applications.",
  },
  {
    icon: FaUserGraduate,
    title: "Data Science & AI",
    desc: "Learn to analyze data, build machine learning models, and implement AI solutions.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Cloud Computing & DevOps",
    desc: "Gain expertise in cloud platforms like AWS/Azure and modern DevOps practices.",
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity",
    desc: "Understand network security, ethical hacking, and how to protect digital assets.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    desc: "Build native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    desc: "Design intuitive and visually appealing user interfaces and experiences.",
  },
];

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <Box bg="#0a0a0b" color="white" overflow="hidden">
      <NavLinks />

      <Box ref={ref} position="relative" minH="90vh" overflow="hidden">
        <Box
          position="absolute"
          top="8%"
          left="12%"
          w="500px"
          h="500px"
          borderRadius="full"
          bg="blue.600"
          filter="blur(140px)"
          opacity={0.1}
          style={{ animation: "pulse-glow 7s ease-in-out infinite" }}
          pointerEvents="none"
        />
        <Box
          position="absolute"
          bottom="15%"
          right="8%"
          w="350px"
          h="350px"
          borderRadius="full"
          bg="purple.600"
          filter="blur(120px)"
          opacity={0.09}
          style={{ animation: "pulse-glow 9s ease-in-out infinite 3s" }}
          pointerEvents="none"
        />

        <Flex
          minH="90vh"
          align="center"
          justify="center"
          direction="column"
          textAlign="center"
          px={6}
          position="relative"
          zIndex={1}
        >
          <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} mb={7}>
            <Tag
              bg="rgba(79,110,247,0.15)"
              color="blue.300"
              border="1px solid rgba(79,110,247,0.35)"
              borderRadius="full"
              px={5}
              py={2}
              fontSize="sm"
              fontWeight="600"
            >
              Live Training &bull; Online &amp; Offline
            </Tag>
          </MotionBox>

          <MotionBox style={{ y }}>
            <Heading
              fontSize={{ base: "4xl", md: "7xl" }}
              lineHeight={1.1}
              fontWeight="800"
              maxW="820px"
              letterSpacing="-0.02em"
            >
              Build a <Text as="span" bgGradient="linear(to-r, blue.400, purple.400)" bgClip="text">Future-Ready</Text> Skillset <Text as="span" color="white">That Matters</Text>
            </Heading>
          </MotionBox>

          <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} maxW="600px">
            <Text mt={6} color="gray.400" fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
              Splen Technologies delivers structured training through live online and offline programs. Learn with expert mentors, build real-world projects, and gain job-ready skills aligned with current industry demands.
            </Text>
          </MotionBox>

          <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
            <Stack direction={{ base: "column", md: "row" }} mt={8} gap={4}>
              <Link href="/explore">
                <Button
                  size="lg"
                  bgGradient="linear(to-r, blue.500, purple.500)"
                  color="white"
                  px={8}
                  _hover={{
                    bgGradient: "linear(to-r, blue.400, purple.400)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 32px rgba(79,110,247,0.45)",
                  }}
                  transition="all 0.3s"
                >
                  Explore Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="rgba(255,255,255,0.2)"
                  color="white"
                  px={8}
                  _hover={{
                    bg: "rgba(255,255,255,0.08)",
                    transform: "translateY(-2px)",
                    borderColor: "rgba(255,255,255,0.4)",
                  }}
                  transition="all 0.3s"
                >
                  Get Started
                </Button>
              </Link>
            </Stack>
          </MotionBox>

          <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} mt={10}>
            <Text fontSize="sm" color="gray.600">
              Trusted by institutions and learners for practical, industry-aligned training.
            </Text>
          </MotionBox>
        </Flex>
      </Box>

      <Stats />

      <Box py={24} px={{ base: 4, md: 10 }}>
        <Box maxW="1200px" mx="auto">
          <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} textAlign="center" mb={14}>
            <Text color="blue.400" fontSize="xs" fontWeight="700" letterSpacing="0.15em" textTransform="uppercase" mb={3}>Services</Text>
            <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="700">
              Explore Our <Text as="span" bgGradient="linear(to-r, blue.400, purple.400)" bgClip="text">Technical Training</Text> Domains
            </Heading>
            <Text mt={4} color="gray.400" maxW="580px" mx="auto" lineHeight={1.8}>
              Our comprehensive curriculum covers the most in-demand technology domains to prepare you for the current job market.
            </Text>
          </MotionBox>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
            {domains.map((domain, i) => (
              <MotionBox
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 0 32px rgba(79,110,247,0.2)" }}
                p={6}
                bg="#141418"
                borderRadius="xl"
                border="1px solid rgba(255,255,255,0.07)"
                cursor="pointer"
                transition="all 0.3s"
              >
                <Box
                  w="46px"
                  h="46px"
                  bg="rgba(79,110,247,0.15)"
                  border="1px solid rgba(79,110,247,0.25)"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="blue.400"
                  fontSize="18px"
                  mb={4}
                >
                  <domain.icon />
                </Box>
                <Heading size="sm" mb={2} color="white">{domain.title}</Heading>
                <Text color="gray.400" fontSize="sm" lineHeight={1.7}>{domain.desc}</Text>
              </MotionBox>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box py={24} bg="#0d0d12" borderTop="1px solid rgba(255,255,255,0.05)" borderBottom="1px solid rgba(255,255,255,0.05)">
        <Box px={{ base: 4, md: 10 }} maxW="1200px" mx="auto">
          <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} textAlign="center" mb={14}>
            <Text color="blue.400" fontSize="xs" fontWeight="700" letterSpacing="0.15em" textTransform="uppercase" mb={3}>Discover Our Features</Text>
            <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="700">
              Why <Text as="span" bgGradient="linear(to-r, blue.400, purple.400)" bgClip="text">Choose Us</Text>
            </Heading>
          </MotionBox>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
            {whyUs.map((item, i) => (
              <MotionBox
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                p={5}
                bg="#141418"
                borderRadius="xl"
                border="1px solid rgba(255,255,255,0.07)"
                display="flex"
                alignItems="center"
                gap={4}
              >
                <Box w="8px" h="8px" borderRadius="full" flexShrink={0} bgGradient="linear(to-r, blue.400, purple.400)" />
                <Text color="gray.300" fontSize="sm" lineHeight={1.6}>{item}</Text>
              </MotionBox>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box py={28} position="relative" overflow="hidden">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="700px"
          h="400px"
          bg="blue.600"
          filter="blur(160px)"
          opacity={0.07}
          borderRadius="full"
          pointerEvents="none"
        />
        <MotionBox initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} textAlign="center" position="relative" zIndex={1} px={4}>
          <Text color="blue.400" fontSize="xs" fontWeight="700" letterSpacing="0.15em" textTransform="uppercase" mb={4}>Careers</Text>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800" mb={4}>
            Join Our Mission to <Text as="span" bgGradient="linear(to-r, blue.400, purple.400)" bgClip="text">Empower Careers</Text>
          </Heading>
          <Text color="gray.400" mb={8} maxW="480px" mx="auto" lineHeight={1.8}>
            Whether you're a student exploring tech or a professional upskilling, we're here to connect you with success.
          </Text>
          <Link href="/contact">
            <Button
              size="lg"
              bgGradient="linear(to-r, blue.500, purple.500)"
              color="white"
              px={10}
              _hover={{
                bgGradient: "linear(to-r, blue.400, purple.400)",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 32px rgba(79,110,247,0.45)",
              }}
              transition="all 0.3s"
            >
              Get Started
            </Button>
          </Link>
        </MotionBox>
      </Box>
    </Box>
  );
}