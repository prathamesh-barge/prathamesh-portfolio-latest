'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
];

export default function Navbar() {
  return (
    <AppBar component="nav" position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portfolio
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Link href={item.path} key={item.label} passHref>
              <Button sx={{ color: '#fff' }}>{item.label}</Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}