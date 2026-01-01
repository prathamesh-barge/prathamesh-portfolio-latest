import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

type ProfileCardProps = {
  onHireMeClick: () => void;
};

const ProfileCard = ({ onHireMeClick }: ProfileCardProps) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        p: 3,
        // mr:2.5
        // marginLeft:"20px;",
        // marginTop:"20px;"
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          I’m Prathamesh Barge
        </Typography>

        <Typography variant="h5" color="warning.main" gutterBottom>
          Software Developer
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 500 }}>
          Software developer experienced in building modern web applications
          using the MERN stack, React, Next.js, and NestJS.
        </Typography>
        <Button
          variant="outlined"
          onClick={onHireMeClick}
          sx={{
            position: "relative",
            overflow: "hidden",
            zIndex: 0, // ✅ CREATE STACKING CONTEXT

            px: 4,
            py: 1.2,
            fontSize: "16px",
            letterSpacing: "1px",

            // Initial state
            color: "#000",
            borderColor: "warning.main",
            backgroundColor: "warning.light",
            transition: "color 0.35s ease",

            // FILL LAYER
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundColor: "warning.main",
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.35s ease",
              zIndex: -1, // 👈 BEHIND TEXT, ABOVE BACKGROUND
            },

            "&:hover::before": {
              transform: "scaleX(1)",
            },

            "&:hover": {
              color: "#fff",
              borderColor: "warning.main",
              backgroundColor: "warning.light", // base stays light
            },
          }}
        >
          Hire Me →
        </Button>

        


      </CardContent>

      <CardMedia
        component="img"
        image="/prathamesh.jpg"
        sx={{
          width: 280,
          display: { xs: "none", md: "block" },
        }}
      />
    </Card>
  );
};

export default ProfileCard;
