"use client";

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ProfileSidebar from "./ProfileSidebar ";
import ProfileCard from "./ProfileCard";
import ServiceCard from "./ServiceCard ";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import LayersIcon from "@mui/icons-material/Layers";
import TechnologyStack from "./TechnologyStack";
import NextStepsCTA from "./NextStepsCTA";
import Footer from "./Footer";
import ResumeDownload from "./ResumeDownload";
import ContactForm from "./ContactForm";
import { Container, Stack } from "@mui/material";
import { px } from "framer-motion";
import ProjectsSection from "./ProjectSection";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceTimelineDesktop from "./ExperienceTimelineDesktop";
import { useEffect } from "react";

const menuItems = [
  {
    label: "Profile",
    icon: <PersonIcon />,
  },
  {
    label: "Projects",
    icon: <WorkIcon />,
  },
  {
    label: "Contact",
    icon: <ContactMailIcon />,
  },
];

const drawerWidth = 240;

/**
 * MAIN CONTENT AREA
 * Moves right when drawer is open
 */
const Main = styled("main")<{ open: boolean }>(({ theme, open }) => ({
  flexGrow: 1,
  // padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

/**
 * SPACE BELOW APP BAR
 * Prevents content from going under AppBar
 */
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();

  /**
   * DRAWER OPEN / CLOSE STATE
   */
  const [open, setOpen] = React.useState(false);

  const [selectedPage, setSelectedPage] = React.useState("Profile");

  const handlePageChange = (page: string) => {
    setSelectedPage(page);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }, [open, selectedPage]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* ================= APP BAR (TOP NAV) ================= */}
      <AppBar position="fixed" sx={{ bgcolor: "#ed6c02" }}>
        <Toolbar>
          {/* MENU BUTTON */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setOpen(true)}
            sx={{ mr: 2, display: open ? "none" : "block" }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {/* My Sidebar Layout */}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* ================= SIDEBAR / DRAWER ================= */}
      <Drawer
        variant="temporary"
        open={open}
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        {/* CLOSE BUTTON */}
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>

        <Divider />

        {/* MENU ITEMS (CHANGE THIS DATA TO LEARN) */}

        {/* <List>
          {["Profile", "Projects", "Contact"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                selected={selectedPage === text}
                onClick={() => setSelectedPage(text)}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}

        <List>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                selected={selectedPage === item.label}
                onClick={() => setSelectedPage(item.label)}
              >
                <ListItemIcon
                  sx={{
                    color:
                      selectedPage === item.label
                        ? "warning.main"
                        : "text.secondary",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* ================= MAIN PAGE CONTENT ================= */}
      <Main open={open} sx={{ backgroundColor: "#dfdee2" }} key={selectedPage}>
        <DrawerHeader />

        {selectedPage === "Projects" && (
          <>
            <Box>
              <ProjectsSection />
            </Box>

            <Footer />
          </>
        )}

        {selectedPage === "Profile" && (
          <>
            <Box display="flex" gap={1} width="100%" alignItems="flex-start">
              <Box sx={{ flexGrow: 1, p: 2.5 }}>
                <ProfileCard
                  onHireMeClick={() => {
                    setSelectedPage("Contact");
                  }}
                />

                <Box sx={{ mt: 6 }}>
                  <Typography
                    variant="h5"
                    fontSize={"2.125rem"}
                    fontWeight={600}
                    textAlign="center"
                    gutterBottom
                  >
                    My Services
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="center"
                    sx={{ maxWidth: 500, mx: "auto", mb: 4 }}
                  >
                    I specialize in building modern, scalable, and
                    high-performance web applications using today’s best
                    technologies.
                  </Typography>
                </Box>

                <Box
                  display="grid"
                  gridTemplateColumns={{
                    xs: "1fr",
                    md: "repeat(3, 1fr)",
                  }}
                  gap={3}
                >
                  <ServiceCard
                    icon={<CodeIcon fontSize="large" />}
                    title="Frontend Development"
                    description="Building responsive and performant user interfaces using React, Next.js, and Material UI."
                  />

                  <ServiceCard
                    icon={<StorageIcon fontSize="large" />}
                    title="Backend Development"
                    description="Developing secure and scalable APIs using Node.js, NestJS, Express, and MongoDB."
                  />

                  <ServiceCard
                    icon={<LayersIcon fontSize="large" />}
                    title="Full-Stack Applications"
                    description="End-to-end application development using the MERN stack, from UI to deployment."
                  />
                </Box>

                <Box>
                  <TechnologyStack />
                </Box>

                {/* <Box mt={8}>
                  <ExperienceTimeline />
                </Box> */}
              </Box>

              <Box sx={{ flexShrink: 0, marginLeft: "67px", mr: 2.5, my: 1 }}>
                <ProfileSidebar />
              </Box>
            </Box>

            <Box mt={9} pl={2}>
              <ExperienceTimelineDesktop />
            </Box>

            <Box sx={{ m: 6 }}>
              {/* <NextStepsCTA
                onProjectsClick={() => setSelectedPage("Projects")}
                onContactClick={() => setSelectedPage("Contact")}
              /> */}

              <NextStepsCTA
                onProjectsClick={() => handlePageChange("Projects")}
                onContactClick={() => handlePageChange("Contact")}
              />
            </Box>

            {/* 
            <Box
              sx={{
                mt: 10,
                mb: 10,
                px: { xs: 2, md: 4 }, // responsive horizontal breathing
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "100%", maxWidth: 1100 }}>
                <NextStepsCTA
                  onProjectsClick={() => setSelectedPage("Projects")}
                  onContactClick={() => setSelectedPage("Contact")}
                />
              </Box>
            </Box> */}

            <Footer />
          </>
        )}

        {selectedPage === "Contact" && (
          <>
            {/* <Typography variant="h5" gutterBottom>
              Contact
            </Typography>
            <Typography>This is the Contact page content.</Typography> */}
            <Box
              sx={{
                borderBottom: (theme) =>
                  `2px dashed ${theme.palette.warning.main}`,
              }}
            >
              <ResumeDownload
                title="Interested in working together?"
                description="Download my resume for a detailed look at my experience, skills, and professional journey."
              />
            </Box>

            {/* <ContactForm/> */}

            <Box
              sx={{
                py: { xs: 10, md: 14 },
                background: (theme) =>
                  `linear-gradient(135deg,
        ${theme.palette.warning.light}15,
        ${theme.palette.grey[100]}
      )`,
              }}
            >
              <Container maxWidth="lg">
                {/* Section Header */}
                <Stack spacing={2} alignItems="center" sx={{ mb: 6 }}>
                  {/* Accent line */}
                  <Box
                    sx={{
                      width: 48,
                      height: 3,
                      borderRadius: 2,
                      backgroundColor: "warning.main",
                    }}
                  />

                  <Typography variant="h3" fontWeight={700}>
                    Let’s Talk
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    textAlign="center"
                    sx={{ maxWidth: 520 }}
                  >
                    Have a project in mind or just want to say hello? I’m always
                    open to discussing new ideas and opportunities.
                  </Typography>
                </Stack>

                {/* Contact Form */}
                <ContactForm />
              </Container>
            </Box>
            <Footer />
          </>
        )}
      </Main>
    </Box>
  );
}
