"use client";

import { Box, Flex, Heading, Text, Button, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navlinks from "../components/layout/Navlink";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const MotionBox = motion(Box);

const APPLY_URL = "https://forms.gle/b9zuUD5LDw1Ks1JC8";

export default function Contact() {
  return (
    <Box bg="#0a0a0b" minH="100vh" color="white">
      <Navlinks />

      <Box
        position="fixed"
        top="10%"
        left="5%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="blue.600"
        filter="blur(160px)"
        opacity={0.07}
        pointerEvents="none"
        zIndex={0}
      />
      <Box
        position="fixed"
        bottom="10%"
        right="5%"
        w="350px"
        h="350px"
        borderRadius="full"
        bg="purple.600"
        filter="blur(140px)"
        opacity={0.06}
        pointerEvents="none"
        zIndex={0}
      />

      <Box px={{ base: 4, md: 10 }} py={14} maxW="1100px" mx="auto" position="relative" zIndex={1}>
        <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} textAlign="center" mb={14}>
          <Text color="blue.400" fontSize="xs" fontWeight="700" letterSpacing="0.15em" textTransform="uppercase" mb={3}>
            Contact Splen Technologies
          </Text>

          <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800" lineHeight={1.1}>
            Let's Discuss Your <Text as="span" bgGradient="linear(to-r, blue.400, purple.400)" bgClip="text">Learning Goals</Text>
          </Heading>

          <Box w="50px" h="3px" bgGradient="linear(to-r, blue.400, purple.400)" mx="auto" mt={5} borderRadius="full" />

          <Text mt={5} color="gray.400" maxW="560px" mx="auto" lineHeight={1.8}>
            Reach out for student programs, institutional training, corporate upskilling, or partnerships. We respond within 24 hours.
          </Text>
        </MotionBox>

        <Grid templateColumns={{ base: "1fr", md: "1.1fr 1fr" }} gap={8}>
          <MotionBox
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            p={{ base: 7, md: 10 }}
            bg="#141418"
            borderRadius="2xl"
            border="1px solid rgba(255,255,255,0.07)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Text color="blue.400" fontSize="xs" fontWeight="700" letterSpacing="0.15em" textTransform="uppercase" mb={4}>
              Apply Now
            </Text>
            <Heading size="lg" fontWeight="800" mb={4}>Join Splen Technologies Bootcamp 🚀</Heading>
            <Text color="gray.400" fontSize="md" lineHeight={1.8} mb={8}>
              Apply for instructor-led, project-based courses and unlock placement opportunities with industry-ready skills.
            </Text>

            <Flex justify="center">
              <Button
                as="a"
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                px={10}
                bgGradient="linear(to-r, blue.500, purple.500)"
                color="white"
                _hover={{
                  bgGradient: "linear(to-r, blue.400, purple.400)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 32px rgba(79,110,247,0.45)",
                }}
                transition="all 0.3s"
              >
                Apply Now
              </Button>
            </Flex>

            <Flex mt={8} justify="center" gap={{ base: 4, md: 8 }} wrap="wrap">
              {["2 Certificates Included", "24hr Response", "Placement Assistance"].map((b, i) => (
                <Text key={i} fontSize="xs" color="gray.500">{b}</Text>
              ))}
            </Flex>
          </MotionBox>

          <Flex direction="column" gap={5}>
            <Grid templateColumns="1fr 1fr" gap={4}>
              <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} p={5} bg="#141418" borderRadius="xl" border="1px solid rgba(255,255,255,0.07)">
                <Flex align="center" gap={2} mb={2}>
                  <Box color="blue.400" fontSize="14px"><FaEnvelope /></Box>
                  <Text fontWeight="600" fontSize="sm">Email</Text>
                </Flex>
                <Text color="gray.400" fontSize="sm">info@splentechnologies.com</Text>
              </MotionBox>

              <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} p={5} bg="#141418" borderRadius="xl" border="1px solid rgba(255,255,255,0.07)">
                <Flex align="center" gap={2} mb={2}>
                  <Box color="blue.400" fontSize="14px"><FaPhone /></Box>
                  <Text fontWeight="600" fontSize="sm">Phone</Text>
                </Flex>
                <Text color="gray.400" fontSize="sm">+91 9056503989</Text>
              </MotionBox>
            </Grid>

            <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} p={5} bg="#141418" borderRadius="xl" border="1px solid rgba(255,255,255,0.07)">
              <Flex align="center" gap={2} mb={3}>
                <Box color="blue.400" fontSize="14px"><FaMapMarkerAlt /></Box>
                <Text fontWeight="600" fontSize="sm">Our Office</Text>
              </Flex>
              <Text color="gray.400" fontSize="sm" lineHeight={1.8}>
                Splen Technologies
                <br />
                Technology &amp; Training Office
                <br />
                Chandigarh, India
              </Text>
            </MotionBox>

            <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} p={5} bg="#141418" borderRadius="xl" border="1px solid rgba(255,255,255,0.07)">
              <Text fontWeight="600" fontSize="sm" mb={3}>Who Typically Reaches Out?</Text>
              {[
                "Students exploring skill-based programs",
                "Universities planning training events",
                "Corporates seeking workforce upskilling",
                "Trainers and academic collaborators",
              ].map((item, i) => (
                <Flex key={i} align="center" gap={2} mb={2}>
                  <Box w="5px" h="5px" borderRadius="full" bgGradient="linear(to-r, blue.400, purple.400)" flexShrink={0} />
                  <Text color="gray.400" fontSize="sm">{item}</Text>
                </Flex>
              ))}
            </MotionBox>

            <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} p={5} bg="#141418" borderRadius="xl" border="1px solid rgba(255,255,255,0.07)">
              <Text fontWeight="600" fontSize="sm" mb={3}>Follow Us</Text>
              <Flex gap={4}>
                {[
                  { icon: FaInstagram, href: "https://www.instagram.com/Splen.tech", label: "Instagram" },
                  { icon: FaFacebook, href: "https://www.facebook.com/Splen.techn", label: "Facebook" },
                  { icon: FaTwitter, href: "https://twitter.com/SplenTech", label: "Twitter" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/company/splen-technologies-and-education", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <Box
                    as="a"
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    w="36px"
                    h="36px"
                    bg="rgba(79,110,247,0.12)"
                    border="1px solid rgba(79,110,247,0.25)"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="blue.400"
                    fontSize="14px"
                    _hover={{ bg: "rgba(79,110,247,0.25)", color: "white", transform: "translateY(-2px)" }}
                    transition="all 0.2s"
                    aria-label={label}
                  >
                    <Icon />
                  </Box>
                ))}
              </Flex>
            </MotionBox>
          </Flex>
        </Grid>
      </Box>
    </Box>
  );
}