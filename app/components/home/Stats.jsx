"use client";

import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaUserGraduate, FaBriefcase, FaUsers, FaChartLine } from "react-icons/fa";

const MotionBox = motion(Box);

export default function Stats() {
  const stats = [
    { icon: <FaUserGraduate />, value: 5000, suffix: "+", label: "Students Trained" },
    { icon: <FaBriefcase />, value: 95, suffix: "%", label: "Placement Rate" },
    { icon: <FaUsers />, value: 50, suffix: "+", label: "Expert Mentors" },
    { icon: <FaChartLine />, value: 100, suffix: "+", label: "Courses Offered" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;

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
            clearInterval(timers[index]);
          } else {
            updated[index] = Math.floor(current);
          }

          return updated;
        });
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, [start]);

  return (
    <MotionBox
      py={16}
      bg="white"
      onViewportEnter={() => setStart(true)} // 🔥 TRIGGER HERE
      viewport={{ once: true }} // run only once
    >
      <Grid
        templateColumns={{ base: "1fr 1fr", md: "repeat(4,1fr)" }}
        gap={8}
        maxW="1100px"
        mx="auto"
      >
        {stats.map((stat, i) => (
          <MotionBox
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            textAlign="center"
            whileHover={{ y: -5 }}
          >
            <Flex justify="center" mb={4}>
              <Box
                bg="gray.100"
                p={4}
                borderRadius="full"
                fontSize="22px"
                color="blue.500"
              >
                {stat.icon}
              </Box>
            </Flex>

            <Text fontSize="3xl" fontWeight="bold">
              {counts[i]}{stat.suffix}
            </Text>

            <Text color="gray.600" mt={2}>
              {stat.label}
            </Text>

            <Box w="40px" h="2px" bg="blue.500" mx="auto" mt={2} />
          </MotionBox>
        ))}
      </Grid>
    </MotionBox>
  );
}