import { Box, Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";


type ServiceCardProps = {
  title: string;
  description: string;
  icon:ReactNode
};

const ServiceCard = ({ title, description,icon }: ServiceCardProps) => {
  return (
    <Card
      sx={{
        p: 2,
        height: "100%",
        textAlign: "center",
        transition: "all 0.3s ease",
        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
      elevation={1}
    >
      <CardContent>
        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: "center",
            color: "warning.main",
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
