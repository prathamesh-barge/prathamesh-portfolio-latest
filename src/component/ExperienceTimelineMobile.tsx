"use client";

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

const AnimatedCard = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const MobileCard = ({ children }: { children: React.ReactNode }) => (
  <Paper
    sx={{
      p: 3,
      borderRadius: 3,
      width: "100%",
      maxWidth: 420,
      mx: "auto",
      borderLeft: "4px solid",
      borderColor: "warning.main",
    }}
  >
    {children}
  </Paper>
);

export default function ExperienceTimelineMobile() {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography
        variant="h4"
        fontWeight={600}
        textAlign="center"
        gutterBottom
      >
        Experience & Journey
      </Typography>

      <Timeline position="right">
        {/* Full-time */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <AnimatedCard>
              <MobileCard>
                <Typography variant="caption" color="text.secondary">
                  Jul 2025 – Present
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  Software Developer (Full-Time)
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  PI Techniques Pvt. Ltd. · Mumbai
                </Typography>
                <Typography variant="body2">
                  Building scalable web applications using React, Next.js,
                  NestJS, and TypeScript.
                </Typography>
              </MobileCard>
            </AnimatedCard>
          </TimelineContent>
        </TimelineItem>

        {/* Internship */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <AnimatedCard>
              <MobileCard>
                <Typography variant="caption" color="text.secondary">
                  Jan 2025 – Jun 2025
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  Software Developer Intern
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  PI Techniques Pvt. Ltd.
                </Typography>
                <Typography variant="body2">
                  Contributed to frontend and backend features and earned a
                  full-time role.
                </Typography>
              </MobileCard>
            </AnimatedCard>
          </TimelineContent>
        </TimelineItem>

        {/* Education */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning">
              <SchoolIcon />
            </TimelineDot>
          </TimelineSeparator>

          <TimelineContent>
            <AnimatedCard>
              <MobileCard>
                <Typography variant="caption" color="text.secondary">
                  2023 – 2025
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  MCA
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  MET Institute of Computer Science
                </Typography>
                <Typography variant="body2">
                  Strong foundation in software engineering and modern web tech.
                </Typography>
              </MobileCard>
            </AnimatedCard>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
