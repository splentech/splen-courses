"use client";

import {
  Box,
  Heading,
  Input,
  Grid,
  Text,
  Button,
  Flex,
  Tag,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { courses } from "../lib/courses";
import Link from "next/link";
import Navlinks from "../components/layout/Navlink";
import { FaSearch } from "react-icons/fa";

const MotionBox = motion(Box);

export default function Explore() {
  const [search, setSearch] = useState("");

  const filtered = (courses || []).filter((c) =>
    (c?.title || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box bg="#0a0a0b" minH="100vh" color="white">
      <Navlinks />

      <Box
        position="fixed"
        top="20%"
        left="5%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="blue.600"
        filter="blur(160px)"
        opacity={0.06}
        pointerEvents="none"
        zIndex={0}
      />

      <Box px={{ base: 4, md: 10 }} py={14} maxW="1200px" mx="auto" position="relative" zIndex={1}>
        <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} mb={10}>
          <Text color="blue.400" fontSize="xs" fontWeight="700" letterSpacing="0.15em" textTransform="uppercase" mb={3}>
            Programs
          </Text>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800">
            Explore <Text as="span" bgGradient="linear(to-r, blue.400, purple.400)" bgClip="text">Courses</Text>
          </Heading>
          <Text mt={3} color="gray.400" maxW="480px">
            Browse our full catalog of instructor-led, placement-focused programs.
          </Text>
        </MotionBox>

        <InputGroup mb={10} maxW="480px">
          <InputLeftElement pointerEvents="none" color="gray.500" mt="1px">
            <FaSearch />
          </InputLeftElement>
          <Input
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            bg="#141418"
            border="1px solid rgba(255,255,255,0.1)"
            color="white"
            borderRadius="lg"
            _placeholder={{ color: "gray.500" }}
            _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px #4f6ef7", bg: "#141418" }}
            _hover={{ borderColor: "rgba(255,255,255,0.2)" }}
          />
        </InputGroup>

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
          {filtered.map((course, i) => (
            <CourseCard key={course.slug || i} course={course} index={i} />
          ))}
        </Grid>

        {filtered.length === 0 && (
          <Text color="gray.500" mt={8} textAlign="center">
            No courses found for "{search}"
          </Text>
        )}
      </Box>
    </Box>
  );
}

function CourseCard({ course, index }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, boxShadow: "0 0 32px rgba(79,110,247,0.18)" }}
      p={6}
      bg="#141418"
      borderRadius="xl"
      border="1px solid rgba(255,255,255,0.07)"
      display="flex"
      flexDirection="column"
      gap={4}
    >
      <Flex justify="space-between" align="center">
        <Heading size="sm" color="white" maxW="75%">
          {course.title}
        </Heading>
        <Box
          boxSize="42px"
          borderRadius="full"
          overflow="hidden"
          bg="rgba(255,255,255,0.06)"
          border="1px solid rgba(255,255,255,0.1)"
          flexShrink={0}
        >
          <img src={course?.trainerImage || "/trainer.png"} alt="trainer" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
      </Flex>

      {course.description && (
        <Text color="gray.400" fontSize="sm" noOfLines={2} lineHeight={1.6}>
          {course.description}
        </Text>
      )}

      {course.discountPrice ? (
        <Box
          px={4}
          py={3}
          bg="rgba(79,110,247,0.07)"
          border="1px solid rgba(79,110,247,0.18)"
          borderRadius="xl"
        >
          <Flex align="center" gap={2} mb={1}>
            <Text
              color="gray.500"
              fontSize="xs"
              textDecoration="line-through"
            >
              ₹{(course.originalPrice || 0).toLocaleString("en-IN")}
            </Text>
            <Tag
              size="sm"
              bg="rgba(34,197,94,0.14)"
              color="green.300"
              border="1px solid rgba(34,197,94,0.28)"
              borderRadius="full"
              px={2}
              fontWeight="700"
              fontSize="10px"
            >
              {Math.round((1 - course.discountPrice / course.originalPrice) * 100)}% OFF
            </Tag>
          </Flex>
          <Flex align="baseline" gap={1}>
            <Text fontSize="2xl" fontWeight="800" color="white" lineHeight={1}>
              ₹{course.discountPrice.toLocaleString("en-IN")}
            </Text>
            <Text fontSize="xs" color="gray.500" fontWeight="400">
              / program
            </Text>
          </Flex>
          <Text fontSize="10px" color="blue.400" fontWeight="600" mt={1} letterSpacing="0.06em" textTransform="uppercase">
            LPU Exclusive Price
          </Text>
        </Box>
      ) : (
        <Box
          px={4}
          py={3}
          bg="rgba(255,255,255,0.03)"
          border="1px dashed rgba(255,255,255,0.1)"
          borderRadius="xl"
        >
          <Text fontSize="sm" color="gray.500">Contact us for pricing</Text>
        </Box>
      )}

      <Flex mt="auto" gap={3}>
        <Link href={`/courses/${course.slug}`} style={{ flex: 1 }}>
          <Button
            w="100%"
            size="sm"
            bgGradient="linear(to-r, blue.500, purple.500)"
            color="white"
            _hover={{ bgGradient: "linear(to-r, blue.400, purple.400)", transform: "translateY(-1px)" }}
            transition="all 0.2s"
          >
            View Details
          </Button>
        </Link>
        <Link href={`/trainers/${course.trainerSlug}`} style={{ flex: 1 }}>
          <Button
            w="100%"
            size="sm"
            variant="outline"
            borderColor="rgba(255,255,255,0.15)"
            color="gray.300"
            _hover={{ bg: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.3)", color: "white" }}
            transition="all 0.2s"
          >
            Meet Trainer
          </Button>
        </Link>
      </Flex>
    </MotionBox>
  );
}