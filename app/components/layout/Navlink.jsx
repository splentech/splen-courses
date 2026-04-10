"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

// ✅ Motion wrapper
const MotionBox = motion(Box);

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const pathname = usePathname();

  return (
    <MotionBox
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      position="sticky"
      top="0"
      zIndex="1000"
      bg="white"
      boxShadow="sm"
    >
      <Flex
        maxW="1200px"          // ✅ CENTER ALIGN FIX
        mx="auto"              // ✅ CENTER ALIGN FIX
        justify="space-between"
        align="center"
        px={{ base: 4, md: 6 }}
        py={4}
      >
        {/* 🔥 LOGO */}
        <Link href="/">
          <Heading
            size="md"
            color="blue.600"
            cursor="pointer"
          >
            Splen Tech.
          </Heading>
        </Link>

        {/* ✅ DESKTOP NAV */}
        <Flex
          gap={6}
          align="center"
          display={{ base: "none", md: "flex" }}
        >
          <NavItem href="/" label="Home" active={pathname === "/"} />
          {/* <NavItem label="About" /> */}
          <NavItem href="/explore" label="Courses" />
          {/* <NavItem label="Resources" /> */}
          <NavItem href="/contact" label="Contact" />
          {/* <NavItem label="Support" /> */}
        </Flex>

        {/* ✅ RIGHT SIDE */}
        <Flex align="center" gap={3}>
          {/* CTA */}
          {/* <Link href="/contact">
            <Text
              px={4}
              py={2}
              bg="blue.600"
              color="white"
              borderRadius="md"
              fontSize="sm"
              _hover={{ bg: "blue.700" }}
              cursor="pointer"
            >
              Get Started
            </Text>
          </Link> */}

          {/* SUN ICON */}
          <IconButton
            icon={<FiSun />}
            variant="outline"
            borderRadius="md"
            aria-label="theme"
          />

          {/* MOBILE MENU BUTTON */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            icon={isOpen ? <FaTimes /> : <FaBars />}
            onClick={onToggle}
            variant="ghost"
            aria-label="menu"
          />
        </Flex>
      </Flex>

      {/* 📱 MOBILE MENU */}
      {isOpen && (
        <MotionBox
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          px={6}
          pb={6}
          display={{ md: "none" }}
        >
          <Stack spacing={4}>
            <NavItem href="/" label="Home" />
            <NavItem href="/explore" label="Courses" />
            <NavItem href="/placements" label="Placements" />
            <NavItem href="/contact" label="Contact" />
          </Stack>
        </MotionBox>
      )}
    </MotionBox>
  );
}

/* 🔥 Nav Item (Updated) */
function NavItem({ href, label, active }) {
  const content = (
    <Text
      px={3}
      py={1}
      borderRadius="md"
      fontSize="sm"
      bg={active ? "gray.100" : "transparent"}
      color={active ? "black" : "gray.700"}
      _hover={{ bg: "gray.100" }}
      cursor="pointer"
      transition="0.2s"
    >
      {label}
    </Text>
  );

  if (!href) return content;

  return <Link href={href}>{content}</Link>;
}