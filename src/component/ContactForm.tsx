"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Alert,
  CircularProgress,
  Paper,
  Divider,
} from "@mui/material";

type ContactFormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data: ContactFormInputs) => {
    setLoading(true);
    setSuccess(false);
    setErrorMsg("");

    try {
      await emailjs.send(
        "service_ey6cojf",
        "template_np4aqow",
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "p_HojeZ3p0rMijKRY"
      );

      setSuccess(true);
      reset();
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: { xs: 3, md: 5 },
        borderRadius: 3,
      }}
    >
      {/* ================= HEADER ================= */}
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Get in Touch
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Have a project, opportunity, or just want to say hi?  
        Fill out the form and I’ll get back to you.
      </Typography>

      {/* ================= FORM ================= */}
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={3}>
          {/* Name */}
          <TextField
            label="Your Name"
            fullWidth
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z\s.'-]+$/,
                message:
                  "Name can contain only letters and common special characters",
              },
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          {/* Email */}
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          {/* Subject */}
          <TextField
            label="Subject"
            fullWidth
            {...register("subject", { required: "Subject is required" })}
            error={!!errors.subject}
            helperText={errors.subject?.message}
          />

          {/* Message */}
          <TextField
            label="Message"
            multiline
            rows={5}
            fullWidth
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters",
              },
            })}
            error={!!errors.message}
            helperText={errors.message?.message}
          />

          {/* Feedback */}
          {success && (
            <Alert severity="success">
              Message sent successfully!
            </Alert>
          )}
          {errorMsg && <Alert severity="error">{errorMsg}</Alert>}

          {/* Submit */}
          <Button
            type="submit"
            variant="contained"
            color="warning"
            size="large"
            disabled={loading}
            sx={{
              py: 1.5,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Send Message"
            )}
          </Button>
        </Stack>
      </Box>

      {/* ================= DIRECT EMAIL ================= */}
      <Divider sx={{ my: 4 }} />

      <Stack spacing={1.5} alignItems="center" textAlign="center">
        <Typography variant="body2" color="text.secondary">
          Prefer direct contact?
        </Typography>

        <Typography
          component="a"
          href="mailto:prathameshbarge88@gmail.com"
          sx={{
            fontWeight: 600,
            color: "warning.main",
            textDecoration: "none",
            transition: "all 0.2s ease",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          prathameshbarge88@gmail.com
        </Typography>
      </Stack>
    </Paper>
  );
}
