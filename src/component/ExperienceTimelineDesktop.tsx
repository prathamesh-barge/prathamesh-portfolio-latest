"use client";

import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Box, Paper, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import { motion } from "framer-motion";

/**
 * Animated wrapper with subtle depth
 */
const AnimatedCard = ({
  children,
  from,
}: {
  children: React.ReactNode;
  from: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: from, scale: 0.98 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

/**
 * Reusable card wrapper
 */
const TimelineCard = ({
  align,
  children,
}: {
  align: "left" | "right";
  children: React.ReactNode;
}) => (
  <Paper
    sx={{
      p: 3,
      borderRadius: 3,
      textAlign: align === "left" ? "right" : "left",
      border: "1px solid",
      borderColor: "divider",
      borderLeft: align === "right" ? "4px solid" : undefined,
      borderRight: align === "left" ? "4px solid" : undefined,
      borderLeftColor: align === "right" ? "warning.main" : undefined,
      borderRightColor: align === "left" ? "warning.main" : undefined,
      transition: "box-shadow 0.3s ease",
      "&:hover": {
        boxShadow: 4,
      },
    }}
  >
    {children}
  </Paper>
);

export default function ExperienceTimelineDesktop() {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Experience & Journey
      </Typography>

      <Timeline position="alternate">
        {/* FULL TIME */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <AnimatedCard from={30}>
              <TimelineCard align="right">
                <Typography variant="caption" color="text.secondary">
                  Jul 2025 – Present
                </Typography>

                <Typography variant="h6" fontWeight={600}>
                  Software Developer (Full-Time)
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  PI Techniques Pvt. Ltd. · Mumbai
                </Typography>

                <Typography variant="body2">
                  Building scalable web applications using React, Next.js,
                  NestJS, and TypeScript with microservices and automated
                  reporting.
                </Typography>
              </TimelineCard>
            </AnimatedCard>
          </TimelineContent>
        </TimelineItem>

        {/* INTERNSHIP */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: 1 }}>
            <AnimatedCard from={-30}>
              <TimelineCard align="left">
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ textAlign: "left", display: "block" }}
                >
                  Jan 2025 – Jun 2025
                </Typography>

                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ textAlign: "left" }}
                >
                  Software Developer Intern
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1, textAlign: "left" }}
                >
                  PI Techniques Pvt. Ltd.
                </Typography>

                <Typography variant="body2" sx={{ textAlign: "left" }}>
                  Contributed to frontend and backend features and earned a
                  full-time role through strong performance.
                </Typography>
              </TimelineCard>
            </AnimatedCard>
          </TimelineContent>
        </TimelineItem>

        {/* EDUCATION */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning">
              <SchoolIcon />
            </TimelineDot>
          </TimelineSeparator>

          <TimelineContent>
            <AnimatedCard from={30}>
              <TimelineCard align="right">
                <Typography variant="caption" color="text.secondary">
                  2023 – 2025
                </Typography>

                <Typography variant="h6" fontWeight={600}>
                  Master of Computer Applications (MCA)
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  MET Institute of Computer Science
                </Typography>

                <Typography variant="body2">
                  Developed a strong foundation in software engineering,
                  problem-solving, and modern web technologies.
                </Typography>
              </TimelineCard>
            </AnimatedCard>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}














