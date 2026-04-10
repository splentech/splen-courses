import { Box, Heading, Text, Image, Button, Flex, Tag } from "@chakra-ui/react";
import Navbar from "../../components/layout/Navlink";
import { trainerMap } from "../../lib/trainers/index";
import Link from "next/link";


export default function TrainerPage({ params }) {
  const trainer = trainerMap[params.slug];

  if (!trainer) {
    return (
      <>
        <Navbar />
        <Box p={10}>Trainer not found</Box>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <Box maxW="900px" mx="auto" p={6}>
        <Link href="/explore">
          <Button mb={6}>← Back</Button>
        </Link>

        {/* 🔥 PROFILE SECTION */}
        <Flex align="center" gap={6} mb={8}>
          <Image
            src={trainer.image}
            alt={trainer.name}
            boxSize="200px"   // ✅ SMALL IMAGE
            borderRadius="full"
            objectFit="cover"
          />

          <Box>
            <Heading color="blue.600">{trainer.name}</Heading>
            <Text color="gray.600">
              Senior Instructor • {trainer.experience}
            </Text>

            <Text mt={2} fontSize="sm" color="gray.500">
              ⭐ 4.8 Rating • 1200+ Students • 5+ Courses
            </Text>
          </Box>
        </Flex>

        {/* 🔥 BIO */}
        <Box mb={6}>
          <Heading size="md" mb={2}>
            About Trainer
          </Heading>
          <Text color="gray.700">{trainer.bio}</Text>
        </Box>

        {/* 🔥 SKILLS */}
        <Box mb={6}>
          <Heading size="md" mb={3}>
            Expertise
          </Heading>

          <Flex wrap="wrap" gap={2}>
            {trainer.skills.map((skill, i) => (
              <Tag key={i} colorScheme="blue">
                {skill}
              </Tag>
            ))}
          </Flex>
        </Box>

        {/* 🔥 STATS */}
        <Box>
          <Heading size="md" mb={3}>
            Achievements
          </Heading>

          <Text color="gray.700">
            • Trained 1000+ students across multiple domains  
          </Text>
          <Text color="gray.700">
            • Industry experience in top tech companies  
          </Text>
          <Text color="gray.700">
            • Hands-on project mentorship  
          </Text>
        </Box>
      </Box>
    </>
  );
}