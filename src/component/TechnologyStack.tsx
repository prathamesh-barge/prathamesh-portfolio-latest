import { Box, Typography } from '@mui/material';
import React from 'react';

const techStack = [
  { name: 'React', icon: '/React.svg' },
  { name: 'Next.js', icon: '/Next.js.svg' },
  { name: 'JavaScript', icon: '/JavaScript.svg' },
  { name: 'HTML', icon: '/HTML5.svg' },
  { name: 'CSS', icon: '/CSS3.svg' },
  { name: 'Node.js', icon: '/Node.js.svg' },
  { name: 'NestJS', icon: '/Nest.js.svg' },
  { name: 'Express.js', icon: '/Express.svg' },
  { name: 'MongoDB', icon: '/MongoDB.svg' },
];

const TechnologyStack = () => {
  return (
    <Box sx={{ mt: 8 }}>
      {/* SECTION TITLE */}
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Technology Stack
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 5, maxWidth: 600 }}
      >
        Tools and technologies I use to build scalable and modern web applications.
      </Typography>

      {/* ICON GRID */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(3, 1fr)',
            sm: 'repeat(4, 1fr)',
            md: 'repeat(6, 1fr)',
          },
          gap: 4,
        }}
      >
        {techStack.map((tech) => (
          <Box
            key={tech.name}
            sx={{
              textAlign: 'center',
              transition: 'all 0.25s ease',
              cursor: 'default',

              '&:hover': {
                transform: 'translateY(-6px)',
              },
            }}
          >
            {/* SVG ICON */}
            <Box
              component="img"
              src={tech.icon}
              alt={tech.name}
              sx={{
                width: 40,
                height: 40,
                mb: 1,
                filter: 'grayscale(100%)',
                transition: 'all 0.25s ease',

                '&:hover': {
                  filter: 'grayscale(0%)',
                },
              }}
            />

            <Typography variant="body2" fontWeight={500}>
              {tech.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TechnologyStack;
