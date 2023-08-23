import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import dynamic from "next/dynamic";
import { defaultPx } from "lib/utils/default-container-px";
import { gradients } from "lib/constants/gradients";
import { Box, Button, Container, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { NavbarMobileMenuProps } from "./navbar-mobile-menu";
import { DesktopNavItem, desktopNavItemStyle } from "./desktop-nav-item";
import { NextResponsiveImage } from "../next-responsive-image";
import { SelectedTick } from "../custom-icons/selected-tick";

const DynamicNavbarMobileMenu = dynamic<NavbarMobileMenuProps>(
  () => import("./navbar-mobile-menu").then((mod) => mod.NavbarMobileMenu),
  { ssr: false }
);

const ROUTES = [
  { href: "https://jobs.ashbyhq.com/create", title: "Careers", type: "external-link" },
  { href: "/", title: "Changelog", type: "internal-link" },
] as const;

interface NavbarProps {
  activeHref?: typeof ROUTES[number]["href"] | "/" | "/feature-launches" | "/ai";
  mode?: "light" | "dark";
}

function Navbar(props: NavbarProps) {
  const { isOpen: isMobileMenuOpen, onToggle: onMobileMenuToggle } = useDisclosure();

  const [showLogoMenu, setShowLogoMenu] = useState(false);

  return (
    <>
      {/* Mobile navbar */}
      {isMobileMenuOpen ? (
        // @ts-ignore
        <DynamicNavbarMobileMenu backgroundColor="gray.900" toggle={onMobileMenuToggle} />
      ) : (
        <Box
          w="100%"
          zIndex="overlay"
          display={["block", "block", "block", "none"]}
          position="relative"
        >
          <Flex direction="column">
            <Flex align="center" justify="space-between">
              <Flex p={4} as="a" href="https://create.xyz/">
                <NextImage
                  height={48}
                  width={48}
                  src="/create-logo-symbol-only.svg"
                  alt="create-logo"
                />
              </Flex>
              <Flex p={4} onClick={onMobileMenuToggle}>
                <Box>
                  <HamburgerIcon
                    boxSize={7}
                    color={props.mode === "dark" ? "white" : "landing.almostBlack.500"}
                  />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      )}
      {/* Desktop Navbar */}
      <Container
        position="relative"
        maxW="landingMax"
        zIndex={15}
        overflowX="hidden"
        display={["none", "none", "none", "block"]}
        px={defaultPx("120px")}
        my={[6]}
        top={0}
      >
        <Flex direction="row" alignItems="center" justify="space-between">
          {/* Logo */}
          <Box
            onContextMenu={(e) => {
              e.preventDefault();
              setShowLogoMenu(!showLogoMenu);
            }}
          >
            <Link href="https://create.xyz/" passHref prefetch={false}>
              <NextResponsiveImage
                // display={["none", "none", "block"]}
                src="/create-logo-word.png"
                alt="Create's logo"
                width={["210px"]}
                height={["36px"]}
                cursor="pointer"
              />
            </Link>
          </Box>
          {/* Navigation items */}
          <HStack spacing={[0, 0, 4, 12, 20]} align="center">
            {ROUTES.map((route) => (
              <DesktopNavItem
                key={route.href}
                mode={props.mode}
                {...route}
                isActive={props.activeHref === route.href}
              />
            ))}
          </HStack>
          {/* CTAs */}
          <HStack spacing={4} align="center">
            <Button
              as="a"
              size="landingMd"
              variant="landingOutline"
              href={`https://create.xyz/waitlist`}
              {...(props.mode === "dark" && {
                variant: "landingOutlineDark",
              })}
            >
              Join Waitlist
            </Button>
          </HStack>
        </Flex>
      </Container>
    </>
  );
}

export default Navbar;
