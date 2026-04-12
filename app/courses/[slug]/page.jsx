import { Box, Heading, Text, Button, Tag } from "@chakra-ui/react";
import Navbar from "../../components/layout/Navlink";
import { courseMap } from "../../lib/courses/index";
import Link from "next/link";

export default function CourseDetail({ params }) {
  const course = courseMap[params.slug];

  if (!course) {
    return (
      <>
        <Navbar />
        <Box bg="#0a0a0b" minH="100vh" p={10} color="gray.400">
          Course not found.
        </Box>
      </>
    );
  }

  return (
    <Box bg="#0a0a0b" color="white" minH="100vh">
      <Navbar />

      <Box maxW="900px" mx="auto" px={{ base: 4, md: 6 }} py={14}>
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

        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="800"
          bgGradient="linear(to-r, blue.400, purple.400)"
          bgClip="text"
          mb={4}
        >
          {course.title}
        </Heading>

        {course.description && (
          <Text color="gray.400" fontSize="lg" lineHeight={1.8} mb={8}>
            {course.description}
          </Text>
        )}

        {(course.jobs || []).length > 0 && (
          <Box mb={10} p={6} bg="#141418" borderRadius="xl" border="1px solid rgba(255,255,255,0.07)">
            <Heading size="sm" mb={4} color="gray.300" textTransform="uppercase" letterSpacing="0.1em">
              Career Opportunities
            </Heading>
            <Box display="flex" flexWrap="wrap" gap={2}>
              {course.jobs.map((job, i) => (
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
                  {job}
                </Tag>
              ))}
            </Box>
          </Box>
        )}

        {(course.content || []).map((block, i) => {
          if (block.type === "heading") {
            return (
              <Heading key={i} size="md" mt={8} mb={3} color="white" fontWeight="700">
                {block.text}
              </Heading>
            );
          }
          if (block.type === "text") {
            return (
              <Text key={i} mt={3} color="gray.400" lineHeight={1.8}>
                {block.text}
              </Text>
            );
          }
          if (block.type === "list") {
            return (
              <Box key={i} mt={3}>
                {block.items.map((item, j) => (
                  <Box key={j} display="flex" alignItems="flex-start" gap={2} mb={2}>
                    <Box w="5px" h="5px" borderRadius="full" mt="8px" bgGradient="linear(to-r, blue.400, purple.400)" flexShrink={0} />
                    <Text color="gray.400" fontSize="sm" lineHeight={1.7}>{item}</Text>
                  </Box>
                ))}
              </Box>
            );
          }
          return null;
        })}

        {course.trainerSlug && (
          <Box mt={14}>
            <Link href={`/trainers/${course.trainerSlug}`}>
              <Button
                bgGradient="linear(to-r, blue.500, purple.500)"
                color="white"
                _hover={{
                  bgGradient: "linear(to-r, blue.400, purple.400)",
                  transform: "translateY(-1px)",
                  boxShadow: "0 6px 24px rgba(79,110,247,0.4)",
                }}
                transition="all 0.2s"
              >
                Meet the Trainer
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
}