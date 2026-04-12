"use client";

import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaUserGraduate, FaBriefcase, FaUsers, FaChartLine } from "react-icons/fa";

const MotionBox = motion(Box);

export default function Stats() {
  const stats = [
    { icon: <FaUserGraduate />, value: 5000, suffix: "+", label: "Students Trained" },
    { icon: <FaBriefcase />,    value: 95,   suffix: "%", label: "Placement Rate" },
    { icon: <FaUsers />,        value: 50,   suffix: "+", label: "Expert Mentors" },
    { icon: <FaChartLine />,    value: 100,  suffix: "+", label: "Courses Offered" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const interval = 16;
    const timers = stats.map((stat, index) => {
      let current = 0;
      const increment = stat.value / (duration / interval);
      return setInterval(() => {
        current += increment;
        setCounts((prev) => {
          const updated = [...prev];
          if (current >= stat.value) {
            updated[index] = stat.value;
          } else {
            updated[index] = Math.floor(current);
          }
          return updated;
        });
      }, interval);
    });
    return () => timers.forEach(clearInterval);
  }, [started]);

  return (
    <MotionBox
      py={16}
      bg="rgba(79, 110, 247, 0.05)"
      borderTop="1px solid rgba(255,255,255,0.06)"
      borderBottom="1px solid rgba(255,255,255,0.06)"
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
    >
      <Grid
        templateColumns={{ base: "1fr 1fr", md: "repeat(4, 1fr)" }}
        gap={{ base: 8, md: 10 }}
        maxW="1100px"
        mx="auto"
        px={{ base: 4, md: 0 }}
      >
        {stats.map((stat, i) => (
          <MotionBox
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            textAlign="center"
          >
            <Flex justify="center" mb={4}>
              <Box
                bg="rgba(79, 110, 247, 0.15)"
                border="1px solid rgba(79, 110, 247, 0.3)"
                p={4}
                borderRadius="full"
                fontSize="22px"
                color="blue.400"
              >
                {stat.icon}
              </Box>
            </Flex>
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" color="white">
              {counts[i]}{stat.suffix}
            </Text>
            <Text color="gray.400" mt={1} fontSize="sm" letterSpacing="wide">
              {stat.label}
            </Text>
            <Box
              w="40px"
              h="2px"
              bgGradient="linear(to-r, blue.400, purple.400)"
              mx="auto"
              mt={3}
              borderRadius="full"
            />
          </MotionBox>
        ))}
      </Grid>
    </MotionBox>
  );
}