"use client";

import { Box, Button } from "@mui/material";
import Link from "next/link";

export default function Navigation() {
  return (
    <Box
      component="nav"
      display="flex"
      gap={2}
      justifyContent="center"
      p={2}
    >
      <Link href="/" passHref>
        <Button variant="outlined">Home</Button>
      </Link>
      <Link href="/about" passHref>
        <Button variant="outlined">About</Button>
      </Link>
      <Link href="/blog" passHref>
        <Button variant="outlined">Blog</Button>
      </Link>
    </Box>
  );
}