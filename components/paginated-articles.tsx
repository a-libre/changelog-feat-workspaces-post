import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { defaultPx } from "lib/utils/default-container-px";
import TryBanner from "components/core/try-banner";
import Navbar from "components/core/navbar";
import { Footer } from "components/core/footer";
import { Box, Button, Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import TimeSelectionTabs from "./core/time-selection-tabs";
import useTimelineStore from "lib/state/use-timeline-store";
import { motion } from "framer-motion";

export interface PaginatedArticlesProps {
  page: number;
  children: ReactNode;
  itemsPerPage: number;
  totalItems: {
    weeks: number;
    months: number;
    years: number;
  };
}

export const PaginatedArticles = ({
  page,
  children,
  itemsPerPage,
  totalItems,
}: PaginatedArticlesProps) => {
  const metaTitle = `${page > 0 ? `Page ${page} -` : ""} create. Changelog`;
  const timeline = useTimelineStore();

  React.useEffect(() => {
    const hash = window?.location.hash ?? "";

    timeline.setView(
      hash ? (hash === "#months" ? "months" : hash === "#years" ? "years" : "weeks") : "weeks"
    );
  }, []);

  const hasMorePage = page < Math.floor(totalItems[timeline.view] / itemsPerPage);

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={metaTitle} />
        <meta name="description" content="Discover new updates and improvements to Create." />
        <meta name="image" content="https://changelog.create.xyz/social.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://changelog.create.xyz" />
        <meta property="og:title" content={metaTitle} />
        <meta
          property="og:description"
          content="Discover new updates and improvements to Create."
        />
        <meta property="og:image" content="https://changelog.create.xyz/social.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://changelog.create.xyz" />
        <meta name="twitter:title" content={metaTitle} />
        <meta
          name="twitter:description"
          content="Discover new updates and improvements to Create."
        />
        <meta name="twitter:image" content="https://changelog.create.xyz/social.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="create. - Changelog"
          href="https://changelog.create.xyz/rss.xml"
        />
      </Head>
      <motion.div initial="hidden" animate="visible">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6 } },
          }}
        >
          <Navbar mode="dark" />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
          }}
          style={{
            position: "sticky",
            top: "32px",
            zIndex: 1,
            paddingBottom: "32px",
          }}
        >
          {/* <TimeSelectionTabs /> */}
        </motion.div>
        <Box w="100vw" maxW={"100%"} zIndex="docked">
          <Container maxW="landingMax" display="flex" justifyContent="center" px={defaultPx(32)}>
            <VStack spacing={8} alignItems="center" w="full">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
                }}
              >
                <VStack display="flex" justifyContent="center" alignItems="start" gap={[8, 8, 14]}>
                  <VStack alignItems="start" width="100%">
                    <Text fontSize="xl" color="gray.100" textAlign={"start"}>
                      The latest from Create
                    </Text>
                    <Heading as="h1" fontSize={["5xl"]} color="white" textAlign={"start"}>
                      Changelog
                    </Heading>
                  </VStack>
                  <VStack spacing={0} justifyContent="center">
                    {children}
                  </VStack>
                </VStack>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
                }}
              >
                <VStack align={["stretch", "stretch", "center"]}>
                  {page === 0 && hasMorePage ? (
                    <Link href={`/page/1#${timeline.view}`}>
                      <Button variant="landingOutline" size="landingLg">
                        Load more
                      </Button>
                    </Link>
                  ) : (
                    <HStack justifyContent="center" spacing={4}>
                      {page > 0 && (
                        <Link href={`/page/${page - 1}${"#" + timeline.view}`}>
                          <Button variant="landingOutline" size="landingLg">
                            Previous page
                          </Button>
                        </Link>
                      )}
                      {hasMorePage && (
                        <Link href={`/page/${page + 1}${"#" + timeline.view}`}>
                          <Button variant="landingOutline" size="landingLg">
                            Next page
                          </Button>
                        </Link>
                      )}
                    </HStack>
                  )}
                </VStack>
              </motion.div>
            </VStack>
          </Container>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1, delay: 0.4 } },
            }}
          >
            <TryBanner mode="dark" _wrapper={{ my: [50, 50, 120] }} />

            <Footer mode="dark" _wrapper={{ mt: [50, 50, 120], mb: 20 }} />
          </motion.div>
        </Box>
      </motion.div>
    </>
  );
};
