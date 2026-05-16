import {
  Box,
  Heading,
  Text,
  Button,
  Tag,
  Flex,
  Grid,
  Stack,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  FaBolt,
  FaLaptopCode,
  FaBriefcase,
  FaClock,
  FaCheckCircle,
  FaUserTie,
  FaRocket,
} from "react-icons/fa";
import Navbar from "../../components/layout/Navlink";
import { courseMap } from "../../lib/courses/index";
import { trainerMap } from "../../lib/trainers/index";

function findBlock(content = [], title = "") {
  const idx = content.findIndex(
    (b) => b.type === "heading" && b.text?.toLowerCase() === title.toLowerCase()
  );
  if (idx === -1) return null;
  return content[idx + 1] || null;
}

function extractWeeks(content = []) {
  return content.filter(
    (b) => b.type === "heading" && /^week\s+\d+/i.test(b.text || "")
  );
}

function extractWeekSections(content = []) {
  const sections = [];
  let current = null;

  for (const block of content) {
    const isHeading = block.type === "heading";
    const isWeekHeading = isHeading && /^week\s+\d+/i.test(block.text || "");

    if (isWeekHeading) {
      if (current) sections.push(current);
      current = { title: block.text, blocks: [] };
      continue;
    }

    if (isHeading && current) {
      sections.push(current);
      current = null;
      continue;
    }

    if (current) current.blocks.push(block);
  }

  if (current) sections.push(current);
  return sections;
}

export default function CourseDetail({ params }) {
  const course = courseMap[params.slug];
  const trainer = trainerMap[course?.trainerSlug];

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

  const content = course.content || [];
  const toolsBlock = findBlock(content, "Tools & Technologies");
  const outcomesBlock = findBlock(content, "Learning Outcomes");
  const weeks = extractWeeks(content);
  const weekSections = extractWeekSections(content);
  const weekCount = weeks.length || 6;

  return (
    <Box bg="#0a0a0b" color="white" minH="100vh">
      <Navbar />

      <Box
        position="fixed"
        top="12%"
        right="6%"
        w={{ base: "220px", md: "360px" }}
        h={{ base: "220px", md: "360px" }}
        borderRadius="full"
        bg="blue.600"
        filter="blur(130px)"
        opacity={0.08}
        pointerEvents="none"
        zIndex={0}
      />

      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 10, md: 14 }} position="relative" zIndex={1}>
        <Link href="/explore">
          <Button
            mb={8}
            size="sm"
            variant="outline"
            borderColor="rgba(255,255,255,0.15)"
            color="gray.300"
            _hover={{ bg: "rgba(255,255,255,0.07)", color: "white" }}
          >
            ← Back to Courses
          </Button>
        </Link>

        <Grid templateColumns={{ base: "1fr", lg: "1.5fr 0.9fr" }} gap={8} alignItems="start">
          <Box>
            <Box>
              <Tag
                mb={4}
                bg="rgba(79,110,247,0.16)"
                border="1px solid rgba(79,110,247,0.35)"
                color="blue.300"
                borderRadius="full"
                px={4}
                py={2}
                fontWeight="600"
              >
                <Flex align="center" gap={2}>
                  <FaBolt />
                  <Text fontSize="sm">Industry-ready software program</Text>
                </Flex>
              </Tag>

              <Heading
                fontSize={{ base: "3xl", md: "5xl" }}
                lineHeight={1.1}
                fontWeight="800"
                maxW="900px"
                mb={4}
              >
                Become a <Text as="span" bgGradient="linear(to-r, blue.400, purple.400)" bgClip="text">{course.title}</Text> in {weekCount} Weeks
              </Heading>

              <Text color="gray.300" fontSize={{ base: "md", md: "lg" }} lineHeight={1.8} maxW="800px">
                {course.description || "A practical, mentor-led course designed to help you build production-level software projects and become job ready."}
              </Text>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4} mt={8}>
              {[
                { icon: FaClock, title: `${weekCount} Weeks`, text: "Structured live roadmap" },
                { icon: FaLaptopCode, title: "Hands-on Projects", text: "Portfolio-driven learning" },
                { icon: FaBriefcase, title: "Placement Focus", text: "Interview and career prep" },
              ].map((item, i) => (
                <Box
                  key={item.title}
                  p={5}
                  bg="#141418"
                  border="1px solid rgba(255,255,255,0.08)"
                  borderRadius="xl"
                >
                  <Text color="blue.300" fontSize="18px" mb={2}><item.icon /></Text>
                  <Heading size="sm" mb={1}>{item.title}</Heading>
                  <Text color="gray.400" fontSize="sm">{item.text}</Text>
                </Box>
              ))}
            </Grid>

            {(course.jobs || []).length > 0 && (
              <Box mt={8}>
                <Text mb={3} color="gray.300" fontWeight="700" letterSpacing="0.08em" textTransform="uppercase" fontSize="xs">
                  Career Opportunities
                </Text>
                <Flex wrap="wrap" gap={2}>
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
                </Flex>
              </Box>
            )}
          </Box>

          <Box
            position={{ base: "static", lg: "sticky" }}
            top="120px"
            p={6}
            bg="#141418"
            border="1px solid rgba(255,255,255,0.08)"
            borderRadius="2xl"
          >
            <Text color="gray.400" fontSize="xs" fontWeight="600" letterSpacing="0.1em" textTransform="uppercase">
              Enrollment · 2026 Batch
            </Text>

            {course.discountPrice ? (
              <Box
                mt={4}
                p={4}
                bg="rgba(79,110,247,0.08)"
                border="1px solid rgba(79,110,247,0.22)"
                borderRadius="xl"
                position="relative"
                overflow="hidden"
              >
                {/* subtle glow */}
                <Box
                  position="absolute"
                  top="-30px"
                  right="-30px"
                  w="100px"
                  h="100px"
                  borderRadius="full"
                  bg="blue.500"
                  filter="blur(50px)"
                  opacity={0.15}
                  pointerEvents="none"
                />

                <Flex align="center" gap={2} mb={1}>
                  <Text color="gray.500" fontSize="sm" textDecoration="line-through">
                    ₹{(course.originalPrice || 0).toLocaleString("en-IN")}
                  </Text>
                  <Tag
                    size="sm"
                    bg="rgba(34,197,94,0.14)"
                    color="green.300"
                    border="1px solid rgba(34,197,94,0.3)"
                    borderRadius="full"
                    px={2}
                    fontWeight="700"
                  >
                    {Math.round((1 - course.discountPrice / course.originalPrice) * 100)}% OFF
                  </Tag>
                </Flex>

                <Flex align="baseline" gap={1} mb={1}>
                  <Heading
                    fontSize="3xl"
                    bgGradient="linear(to-r, blue.300, purple.300)"
                    bgClip="text"
                    lineHeight={1}
                  >
                    ₹{course.discountPrice.toLocaleString("en-IN")}
                  </Heading>
                </Flex>

                <Text fontSize="xs" color="gray.500" mt={1}>
                  You save{" "}
                  <Text as="span" color="green.400" fontWeight="700">
                    ₹{(course.originalPrice - course.discountPrice).toLocaleString("en-IN")}
                  </Text>{" "}
                  with LPU discount
                </Text>
              </Box>
            ) : (
              <Box mt={4}>
                <Heading size="lg">Limited Seats</Heading>
                <Text color="gray.500" fontSize="sm" mt={1}>Contact us for pricing</Text>
              </Box>
            )}

            <Stack spacing={3} mt={5} color="gray.300" fontSize="sm">
              {[
                "Live mentor-led classes",
                "Real-world capstone projects",
                "Interview prep + resume support",
                "Completion certificate",
              ].map((item) => (
                <Flex key={item} gap={2} align="flex-start">
                  <Text color="green.300" mt="3px"><FaCheckCircle /></Text>
                  <Text>{item}</Text>
                </Flex>
              ))}
            </Stack>

            <Link href="/contact">
              <Button
                w="100%"
                mt={6}
                size="lg"
                bgGradient="linear(to-r, blue.500, purple.500)"
                color="white"
                _hover={{
                  bgGradient: "linear(to-r, blue.400, purple.400)",
                  transform: "translateY(-1px)",
                  boxShadow: "0 8px 24px rgba(79,110,247,0.35)",
                }}
              >
                <Flex align="center" gap={2}>
                  <FaRocket />
                  <Text>Enroll Now</Text>
                </Flex>
              </Button>
            </Link>

            {course.trainerSlug && (
              <Link href={`/trainers/${course.trainerSlug}`}>
                <Button mt={3} w="100%" variant="outline" borderColor="rgba(255,255,255,0.2)" color="gray.200">
                  <Flex align="center" gap={2}>
                    <FaUserTie />
                    <Text>Meet Trainer {trainer?.name ? `(${trainer.name})` : ""}</Text>
                  </Flex>
                </Button>
              </Link>
            )}
          </Box>
        </Grid>

        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mt={12}>
          <Box p={6} bg="#141418" border="1px solid rgba(255,255,255,0.08)" borderRadius="xl">
            <Heading size="md" mb={4}>Tech Stack You&apos;ll Learn</Heading>
            {toolsBlock?.type === "list" ? (
              <Stack spacing={2}>
                {toolsBlock.items.map((item, i) => (
                  <Flex key={i} align="flex-start" gap={2}>
                    <Box w="6px" h="6px" borderRadius="full" mt="8px" bgGradient="linear(to-r, blue.400, purple.400)" />
                    <Text color="gray.300" fontSize="sm">{item}</Text>
                  </Flex>
                ))}
              </Stack>
            ) : (
              <Text color="gray.400">Modern frontend, backend, databases, deployment and collaboration tools.</Text>
            )}
          </Box>

          <Box p={6} bg="#141418" border="1px solid rgba(255,255,255,0.08)" borderRadius="xl">
            <Heading size="md" mb={4}>Outcomes You Can Sell in Interviews</Heading>
            {outcomesBlock?.type === "list" ? (
              <Stack spacing={2}>
                {outcomesBlock.items.map((item, i) => (
                  <Flex key={i} align="flex-start" gap={2}>
                    <Text color="green.300" mt="3px"><FaCheckCircle /></Text>
                    <Text color="gray.300" fontSize="sm">{item}</Text>
                  </Flex>
                ))}
              </Stack>
            ) : (
              <Text color="gray.400">Ship production-ready projects, explain architecture decisions, and present outcomes confidently.</Text>
            )}
          </Box>
        </Grid>

        <Box mt={12}>
          <Heading size="lg" mb={5}>Course Roadmap</Heading>
          {weekSections.length > 0 ? (
            <Accordion allowToggle borderRadius="xl" overflow="hidden">
              {weekSections.map((week, i) => (
                <AccordionItem
                  key={week.title}
                  border="1px solid rgba(255,255,255,0.08)"
                  bg="#141418"
                  mb={3}
                  borderRadius="xl"
                >
                  <h3>
                    <AccordionButton
                      py={4}
                      px={5}
                      _hover={{ bg: "rgba(255,255,255,0.04)" }}
                      borderRadius="xl"
                    >
                      <Box flex="1" textAlign="left">
                        <Text fontSize="xs" color="blue.300" letterSpacing="0.1em" textTransform="uppercase" mb={1}>
                          Week {i + 1}
                        </Text>
                        <Heading size="sm" color="white">{week.title}</Heading>
                      </Box>
                      <AccordionIcon color="blue.300" />
                    </AccordionButton>
                  </h3>

                  <AccordionPanel pb={5} pt={1} px={5}>
                    <Stack spacing={3}>
                      {week.blocks.length > 0 ? (
                        week.blocks.map((block, bi) => {
                          if (block.type === "text") {
                            return (
                              <Text key={bi} color="gray.300" lineHeight={1.8} fontSize="sm">
                                {block.text}
                              </Text>
                            );
                          }
                          if (block.type === "list") {
                            return (
                              <Stack key={bi} spacing={2}>
                                {block.items.map((item, ii) => (
                                  <Flex key={ii} align="flex-start" gap={2}>
                                    <Box
                                      w="5px"
                                      h="5px"
                                      borderRadius="full"
                                      mt="9px"
                                      bgGradient="linear(to-r, blue.400, purple.400)"
                                      flexShrink={0}
                                    />
                                    <Text color="gray.300" fontSize="sm" lineHeight={1.7}>{item}</Text>
                                  </Flex>
                                ))}
                              </Stack>
                            );
                          }
                          return null;
                        })
                      ) : (
                        <Text color="gray.400" fontSize="sm">Detailed points will be shared during onboarding.</Text>
                      )}
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <Box p={6} bg="#141418" border="1px solid rgba(255,255,255,0.08)" borderRadius="xl">
              <Text color="gray.400">Roadmap details are being updated. Contact us to get the latest syllabus PDF.</Text>
            </Box>
          )}
        </Box>

        {content.length > 0 && (
          <Box mt={14}>
            <Heading size="lg" mb={6}>Detailed Curriculum</Heading>
            <Stack spacing={4}>
              {content.map((block, i) => {
                if (block.type === "heading") {
                  return (
                    <Heading key={i} size="md" mt={4} color="gray.100">
                      {block.text}
                    </Heading>
                  );
                }
                if (block.type === "text") {
                  return (
                    <Text key={i} color="gray.400" lineHeight={1.8}>
                      {block.text}
                    </Text>
                  );
                }
                if (block.type === "list") {
                  return (
                    <Box key={i}>
                      {block.items.map((item, j) => (
                        <Flex key={j} align="flex-start" gap={2} mb={2}>
                          <Box w="5px" h="5px" borderRadius="full" mt="9px" bgGradient="linear(to-r, blue.400, purple.400)" />
                          <Text color="gray.400" fontSize="sm" lineHeight={1.7}>{item}</Text>
                        </Flex>
                      ))}
                    </Box>
                  );
                }
                return null;
              })}
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
}