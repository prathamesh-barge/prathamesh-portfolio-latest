"use client";

import { useTheme, useMediaQuery } from "@mui/material";
import ExperienceTimelineDesktop from "./ExperienceTimelineDesktop";
import ExperienceTimelineMobile from "./ExperienceTimelineMobile";

export default function ExperienceTimeline() {
  const theme = useTheme();

  // Tablet + Mobile
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  return isMobileOrTablet ? (
    <ExperienceTimelineMobile />
  ) : (
    <ExperienceTimelineDesktop />
  );
}
