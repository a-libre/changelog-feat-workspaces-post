import React from "react";
import NextImage from "next/image";
import { defaultPx } from "lib/utils/default-container-px";
import {
  Box,
  chakra,
  Container,
  ContainerProps,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FooterTitle } from "./footer-title";
import { FooterLink } from "./footer-link";
import { NextResponsiveImage } from "../next-responsive-image";

const LINK_GAPS = [2, 2, 8];

interface FooterProps {
  _wrapper?: ContainerProps;
  mode?: "light" | "dark";
}

export function Footer(props: FooterProps) {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <Grid
        gap={[6, 6, 4]}
        templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(5, 1fr)"]}
        gridTemplateAreas={[
          "'logo logo' 'solution for' 'company company'",
          "'logo logo' 'solution for' 'company company'",
          "'logo . solution for company'",
        ]}
      >
        <GridItem gridArea="logo">
          <Box flexShrink={0} mb={8}>
            <NextResponsiveImage
              src="/create-logo-symbol-only.svg"
              alt="create"
              width={["96px"]}
              height={["80px"]}
            />
          </Box>
        </GridItem>
        <GridItem gridArea="solution">
          <VStack align="start" spacing={LINK_GAPS}>
            <FooterTitle mode={props.mode}>Experiences</FooterTitle>
            <FooterLink
              mode={props.mode}
              title="Build prototype"
              href="https://create.xyz/onboarding"
            />
            <FooterLink
              mode={props.mode}
              title="Build production app"
              href="https://create.xyz/upgrade"
            />
          </VStack>
        </GridItem>
        <GridItem gridArea="for">
          <VStack align="start" spacing={LINK_GAPS}>
            <FooterTitle mode={props.mode}>Resources</FooterTitle>
            <FooterLink
              mode={props.mode}
              title="Code Generation"
              href="https://create.xyz/feature-generation"
            />
            <FooterLink
              mode={props.mode}
              title="How it Works"
              href="https://create.xyz/how-it-works"
            />
            <FooterLink mode={props.mode} title="Pricing" href="https://create.xyz/pricing" />
            <FooterLink
              mode={props.mode}
              title="Terms"
              type="external"
              href="https://create.xyz/terms"
            />
          </VStack>
        </GridItem>
        <GridItem gridArea="company">
          <VStack align="start" spacing={LINK_GAPS}>
            <FooterTitle mode={props.mode}>Company</FooterTitle>
            <FooterLink
              mode={props.mode}
              title="Changelog"
              type="external"
              href="https://changelog.create.xyz"
            />
            <FooterLink
              mode={props.mode}
              title="Linkedin"
              type="external"
              href="https://www.linkedin.com/company/createxyz/"
            />
            <FooterLink
              mode={props.mode}
              title="Twitter"
              type="external"
              href="https://twitter.com/create_xyz"
            />
            <FooterLink
              mode={props.mode}
              title="Careers"
              type="external"
              href="https://jobs.ashbyhq.com/create"
            />
            <FooterLink
              mode={props.mode}
              title="Contact us"
              type="external"
              href="mailto:dhruv@create.xyz"
            />
            {/* <VStack align="start"> */}
            {/*   <FooterLink */}
            {/*     style={{ display: ["none", "none", "block"] }} */}
            {/*     mode={props.mode} */}
            {/*     title="Backed by" */}
            {/*     type="text" */}
            {/*   /> */}
            {/*   <FooterLink */}
            {/*     type="node" */}
            {/*     title={ */}
            {/*       <Box */}
            {/*         position="relative" */}
            {/*         sx={{ aspectRatio: "5" }} */}
            {/*         h={6} */}
            {/*         w="auto" */}
            {/*         display={["none", "none", "block"]} */}
            {/*       > */}
            {/*         <NextImage src="/yc-orange-logo.png" alt="y-combinator logo" layout="fill" /> */}
            {/*       </Box> */}
            {/*     } */}
            {/*   /> */}
            {/* </VStack> */}
            <FooterLink
              mode={props.mode}
              title={`© ${new Date().getFullYear().toString()} Create, Inc.`}
              type="text"
            />
          </VStack>
        </GridItem>
        {/* <GridItem display={["block", "block", "none"]}> */}
        {/*   <VStack align="start"> */}
        {/*     <FooterLink mode={props.mode} title="Backed by" type="text" /> */}
        {/*     <FooterLink */}
        {/*       type="node" */}
        {/*       title={ */}
        {/*         <Box> */}
        {/*           <NextImage */}
        {/*             src="/yc-orange-logo.png" */}
        {/*             alt="y-combinator logo" */}
        {/*             width={120} */}
        {/*             height={24} */}
        {/*           /> */}
        {/*         </Box> */}
        {/*       } */}
        {/*     /> */}
        {/*   </VStack> */}
        {/* </GridItem> */}
      </Grid>
    </Container>
  );
}
