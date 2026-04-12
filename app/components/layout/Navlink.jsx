"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const MotionBox = motion(Box);

const TICKER_ITEMS = [
  "Live Training", "Online & Offline", "Skill Development",
  "Corporate Training", "Engineering Tech", "Certification",
  "Live Training", "Online & Offline", "Skill Development",
  "Corporate Training", "Engineering Tech", "Certification",
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const pathname = usePathname();

  return (
    <Box position="sticky" top="0" zIndex="1000">
      <Box
        bg="rgba(79, 110, 247, 0.12)"
        borderBottom="1px solid rgba(79, 110, 247, 0.2)"
        py="6px"
        overflow="hidden"
      >
        <Box
          display="flex"
          whiteSpace="nowrap"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {TICKER_ITEMS.map((item, i) => (
            <Text key={i} as="span" fontSize="xs" color="blue.300" fontWeight="500" mx={5}>
              {item} &bull;
            </Text>
          ))}
        </Box>
      </Box>

      <MotionBox
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        bg="rgba(10, 10, 11, 0.82)"
        style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
        borderBottom="1px solid rgba(255,255,255,0.06)"
      >
        <Flex
          maxW="1200px"
          mx="auto"
          justify="space-between"
          align="center"
          px={{ base: 4, md: 6 }}
          py={4}
        >
          <Link href="/">
            <Heading
              size="md"
              bgGradient="linear(to-r, blue.400, purple.400)"
              bgClip="text"
              cursor="pointer"
            >
              Splen Tech.
            </Heading>
          </Link>

          <Flex gap={2} align="center" display={{ base: "none", md: "flex" }}>
            <NavItem href="/" label="Home" active={pathname === "/"} />
            <NavItem href="/explore" label="Courses" active={pathname === "/explore"} />
            <NavItem href="/contact" label="Contact" active={pathname === "/contact"} />
          </Flex>

          <Flex align="center" gap={3}>
            <Link href="/contact">
              <Button
                size="sm"
                bgGradient="linear(to-r, blue.500, purple.500)"
                color="white"
                borderRadius="md"
                px={5}
                _hover={{
                  bgGradient: "linear(to-r, blue.400, purple.400)",
                  transform: "translateY(-1px)",
                  boxShadow: "0 4px 20px rgba(79,110,247,0.4)",
                }}
                transition="all 0.2s"
                display={{ base: "none", md: "flex" }}
              >
                Get Started
              </Button>
            </Link>

            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={isOpen ? <FaTimes /> : <FaBars />}
              onClick={onToggle}
              variant="ghost"
              color="white"
              _hover={{ bg: "rgba(255,255,255,0.08)" }}
              aria-label="menu"
            />
          </Flex>
        </Flex>

        {isOpen && (
          <MotionBox
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            px={6}
            pb={6}
            display={{ md: "none" }}
            borderTop="1px solid rgba(255,255,255,0.06)"
          >
            <Stack spacing={3} pt={4}>
              <NavItem href="/" label="Home" />
              <NavItem href="/explore" label="Courses" />
              <NavItem href="/contact" label="Contact" />
            </Stack>
          </MotionBox>
        )}
      </MotionBox>
    </Box>
  );
}

function NavItem({ href, label, active }) {
  const content = (
    <Text
      px={3}
      py="6px"
      borderRadius="md"
      fontSize="sm"
      fontWeight={active ? "600" : "400"}
      color={active ? "white" : "gray.400"}
      borderBottom="2px solid"
      borderColor={active ? "blue.400" : "transparent"}
      _hover={{ color: "white", bg: "rgba(255,255,255,0.07)" }}
      cursor="pointer"
      transition="all 0.2s"
    >
      {label}
    </Text>
  );

  if (!href) return content;
  return <Link href={href}>{content}</Link>;
}