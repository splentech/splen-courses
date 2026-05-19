import { Box, Heading, Text, Button, Flex, Tag } from "@chakra-ui/react";
import Navbar from "../../components/layout/Navlink";
import { trainerMap } from "../../lib/trainers/index";
import Link from "next/link";

export default function TrainerPage({ params }) {
  const trainer = trainerMap[params.slug];

  if (!trainer) {
    return (
      <>
        <Navbar />
        <Box bg="#0a0a0b" minH="100vh" p={10} color="gray.400">
          Trainer not found.
        </Box>
      </>
    );
  }

  return (
    <Box bg="#0a0a0b" color="white" minH="100vh">
      <Navbar />

      <Box
        position="fixed"
        top="15%"
        right="10%"
        w="350px"
        h="350px"
        borderRadius="full"
        bg="purple.600"
        filter="blur(140px)"
        opacity={0.07}
        pointerEvents="none"
        zIndex={0}
      />

      <Box maxW="860px" mx="auto" px={{ base: 4, md: 6 }} py={14} position="relative" zIndex={1}>
        <Link href="/explore">
          <Button
            mb={8}
            size="sm"
            variant="outline"
            borderColor="rgba(255,255,255,0.15)"
            color="gray.400"
            _hover={{ bg: "rgba(255,255,255,0.07)", color: "white" }}
          >
            ← Back
          </Button>
        </Link>

        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "flex-start" }}
          gap={8}
          mb={10}
          p={8}
          bg="#141418"
          borderRadius="2xl"
          border="1px solid rgba(255,255,255,0.07)"
        >
          <Box textAlign={{ base: "center", md: "left" }}>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="800"
              bgGradient="linear(to-r, blue.400, purple.400)"
              bgClip="text"
              mb={2}
            >
              {trainer.name}
            </Heading>
            <Text color="gray.400" mb={1}>Senior Instructor • {trainer.experience}</Text>
            <Text fontSize="sm" color="gray.500">⭐ 4.8 Rating • 1200+ Students • 5+ Courses</Text>
          </Box>
        </Flex>

        <Box mb={6} p={6} bg="#141418" borderRadius="xl" border="1px solid rgba(255,255,255,0.07)">
          <Heading size="sm" mb={3} color="gray.300" textTransform="uppercase" letterSpacing="0.1em">About</Heading>
          <Text color="gray.400" lineHeight={1.8}>{trainer.bio}</Text>
        </Box>

        <Box mb={6} p={6} bg="#141418" borderRadius="xl" border="1px solid rgba(255,255,255,0.07)">
          <Heading size="sm" mb={4} color="gray.300" textTransform="uppercase" letterSpacing="0.1em">Expertise</Heading>
          <Flex wrap="wrap" gap={2}>
            {trainer.skills.map((skill, i) => (
              <Tag
                key={i}
                bg="rgba(79,110,247,0.15)"
                color="blue.300"
                border="1px solid rgba(79,110,247,0.3)"
                borderRadius="full"
                px={3}
                py={1}
                fontSize="sm"
              >
                {skill}
              </Tag>
            ))}
          </Flex>
        </Box>

        <Box p={6} bg="#141418" borderRadius="xl" border="1px solid rgba(255,255,255,0.07)">
          <Heading size="sm" mb={4} color="gray.300" textTransform="uppercase" letterSpacing="0.1em">Achievements</Heading>
          {[
            "Trained 1000+ students across multiple domains",
            "Industry experience in top tech companies",
            "Hands-on project mentorship",
          ].map((a, i) => (
            <Flex key={i} align="center" gap={3} mb={3}>
              <Box w="6px" h="6px" borderRadius="full" flexShrink={0} bgGradient="linear(to-r, blue.400, purple.400)" />
              <Text color="gray.400" fontSize="sm">{a}</Text>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
}