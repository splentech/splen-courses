import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Navbar from "../../components/layout/Navlink";
import { courseMap } from "../../lib/courses/index";
import Link from "next/link";

export default function CourseDetail({ params }) {
  const course = courseMap[params.slug]; // 🔥 THIS IS KEY

  if (!course) {
    return (
      <>
        <Navbar />
        <Box p={10}>Course not found</Box>
      </>
    );
  }

return (
  <>
    <Navbar />

    <Box maxW="1100px" mx="auto" p={6}>
      {/* BACK */}
      <Link href="/explore">
        <Button mb={6}>← Back</Button>
      </Link>

      {/* TITLE */}
      <Heading color="blue.600">{course.title}</Heading>

      {/* DESCRIPTION */}
      <Text mt={4}>{course.description}</Text>

      {/* JOBS */}
      <Heading size="md" mt={8}>
        Career Opportunities
      </Heading>

      {(course.jobs || []).map((job, i) => (
        <Text key={i}>• {job}</Text>
      ))}

      {/* 🔥 NEW: BLOG STYLE CONTENT */}
      <Box mt={10}>
        {course.content?.map((block, i) => {
          if (block.type === "heading") {
            return (
              <Heading key={i} size="md" mt={6} color="blue.600">
                {block.text}
              </Heading>
            );
          }

          if (block.type === "text") {
            return (
              <Text key={i} mt={3} color="gray.700" lineHeight="1.7">
                {block.text}
              </Text>
            );
          }

          if (block.type === "list") {
            return (
              <Box key={i} mt={3}>
                {block.items.map((item, j) => (
                  <Text key={j} ml={3} color="gray.600">
                    • {item}
                  </Text>
                ))}
              </Box>
            );
          }

          return null;
        })}
      </Box>
    </Box>
  </>
);
}