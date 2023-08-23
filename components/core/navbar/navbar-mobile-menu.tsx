import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import CloseIcon from "../custom-icons/CloseIcon";

export interface NavbarMobileMenuProps {
  toggle: () => void;
}

const MOBILE_MENU_COLOR = "white";
const MOBILE_FONT_WEIGHT = 600;

export const NavbarMobileMenu = ({ toggle }: NavbarMobileMenuProps) => (
  <>
    <Box
      w="100%"
      maxWidth="100vw"
      position="fixed"
      zIndex="overlay"
      display={["block", "block", "none"]}
    >
      <Flex direction="column">
        <Flex align="center" justify="space-between">
          <Flex p={4} as="a" href="https://create.xyz/">
            <NextImage
              height={54}
              width={54}
              src="/create-logo-symbol-only.svg"
              alt="create-logo"
            />
          </Flex>
          <Flex p={4} onClick={toggle}>
            <Box pr={1}>
              <CloseIcon color="gray.100" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
    <Flex
      px={5}
      py="30%"
      h="100vh"
      w="100vw"
      position="fixed"
      bg="gray.600"
      zIndex="sticky"
      direction="column"
      justify="space-between"
      overflowY="hidden"
    >
      <Flex width="100%" direction="column" h="20%" justify="space-between">
        <Link prefetch={false} href="https://jobs.ashbyhq.com/create" passHref>
          <Flex align="center" style={{ textDecoration: "none" }}>
            <Text fontSize="4xl" fontWeight="bold" color={MOBILE_MENU_COLOR}>
              Careers
            </Text>
          </Flex>
        </Link>
        <Flex align="center" as="a" href="/" style={{ textDecoration: "none" }}>
          <Text fontSize="4xl" fontWeight="bold" color={MOBILE_MENU_COLOR}>
            Changelog
          </Text>
        </Flex>
      </Flex>
      <Stack spacing={4} mt={16}>
        <Button
          colorScheme="purple"
          size="md"
          h={50}
          as="a"
          href={`https://create.xyz/waitlist`}
          borderRadius={6}
          fontWeight={MOBILE_FONT_WEIGHT}
          className="g-conversion-button"
        >
          Join waitlist
        </Button>
      </Stack>
    </Flex>
  </>
);
