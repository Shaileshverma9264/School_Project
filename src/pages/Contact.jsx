import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack,
  Chip,
  Alert,
  Divider,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const contactInfo = [
  {
    icon: <LocationOnIcon sx={{ color: "#e85d04" }} />,
    label: "Address",
    value: "Chowk Bazar, Maharajganj",
    sub: "Pin Code 273012, Uttar Pradesh",
  },
  {
    icon: <PhoneIcon sx={{ color: "#e85d04" }} />,
    label: "Phone",
    value: "+91 05522-123456",
    sub: "Mon–Sat, 9:00 AM – 5:00 PM",
  },
  {
    icon: <EmailIcon sx={{ color: "#e85d04" }} />,
    label: "Email",
    value: "info@digvijaynath.edu.in",
    sub: "admissions@digvijaynath.edu.in",
  },
];

const hours = [
  { day: "Mon–Fri", time: "9AM – 5PM", open: true },
  { day: "Saturday", time: "9AM – 2PM", open: true },
  { day: "Sunday", time: "—", open: false },
];

const cardSx = {
  borderRadius: 4,
  border: "1.5px solid #ece8e2",
  elevation: 0,
  transition: "transform .25s, box-shadow .25s, border-color .2s",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 32px rgba(232,93,4,.1)",
    borderColor: "#fad4b0",
  },
};

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Box sx={{ bgcolor: "#f5f0eb" }}>
      {/* Hero */}
      <Box
        sx={{
          background: "linear-gradient(120deg,#1a0a00,#3d1200 50%,#e85d04)",
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 7 },
        }}
      >
        <Chip
          label="📬 Get in Touch"
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            color: "#ffd580",
            mb: 2,
            fontWeight: 700,
          }}
        />
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Playfair Display',serif",
            color: "#fff",
            mb: 1.5,
          }}
        >
          We're Here to{" "}
          <Box component="span" sx={{ color: "#f48c06" }}>
            Help You
          </Box>
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.72)", maxWidth: 480 }}>
          Have questions about admissions or courses? Our team responds within
          24 hours.
        </Typography>
      </Box>

      {/* Main Grid */}
      <Box sx={{ maxWidth: 1080, mx: "auto", px: 4, py: 7 }}>
        <Grid container spacing={4}>
          {/* LEFT – Info */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              {contactInfo.map((c) => (
                <Card key={c.label} elevation={0} sx={cardSx}>
                  <CardContent
                    sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
                  >
                    <Box
                      sx={{
                        width: 46,
                        height: 46,
                        borderRadius: 3,
                        bgcolor: "#fff5eb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#e85d04",
                          letterSpacing: 1,
                          textTransform: "uppercase",
                        }}
                      >
                        {c.label}
                      </Typography>
                      <Typography fontWeight={600} fontSize={14}>
                        {c.value}
                      </Typography>
                      <Typography fontSize={12.5} color="text.secondary">
                        {c.sub}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}

              {/* Map placeholder */}
              <Card
                elevation={0}
                sx={{
                  borderRadius: 4,
                  border: "1.5px solid #ece8e2",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    height: 160,
                    background: "linear-gradient(135deg,#fef3e8,#fad4b0)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <Typography fontSize={36}>📌</Typography>
                  <Typography fontWeight={600} fontSize={13} color="#e85d04">
                    Digvijaynath Intermediate College
                  </Typography>
                  <Typography
                    fontSize={12}
                    color="text.secondary"
                    textAlign="center"
                  >
                    Chowk Bazar, Maharajganj, UP
                  </Typography>
                </Box>
              </Card>

              {/* Social */}
              <Grid container spacing={1.5}>
                {[
                  [<FacebookIcon />, "Facebook"],
                  [<InstagramIcon />, "Instagram"],
                  [<TwitterIcon />, "Twitter"],
                  [<YouTubeIcon />, "YouTube"],
                ].map(([icon, name]) => (
                  <Grid item xs={6} key={name}>
                    <Card elevation={0} sx={{ ...cardSx, cursor: "pointer" }}>
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 0.5,
                          py: "12px !important",
                        }}
                      >
                        <Box sx={{ color: "#e85d04" }}>{icon}</Box>
                        <Typography
                          fontSize={11}
                          fontWeight={600}
                          color="text.secondary"
                        >
                          {name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>

          {/* RIGHT – Form */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 5,
                border: "1.5px solid #ece8e2",
                p: { xs: 3, md: 5 },
                boxShadow: "0 8px 40px rgba(0,0,0,.06)",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontFamily: "'Playfair Display',serif", mb: 0.5 }}
              >
                Send Us a Message
              </Typography>
              <Typography color="text.secondary" fontSize={13.5} mb={3.5}>
                Fill out the form and we'll get back to you shortly.
              </Typography>

              <Grid container spacing={2} mb={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    placeholder="Rahul"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    sx={fieldSx}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    placeholder="Sharma"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    sx={fieldSx}
                  />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                label="Email Address"
                placeholder="rahul@example.com"
                sx={{ ...fieldSx, mb: 2 }}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <TextField
                fullWidth
                label="Phone Number"
                placeholder="+91 98765 43210"
                sx={{ ...fieldSx, mb: 2 }}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Subject</InputLabel>
                <Select
                  value={form.subject}
                  label="Subject"
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  sx={{
                    borderRadius: 2,
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e85d04",
                    },
                  }}
                >
                  {[
                    "Admission Enquiry",
                    "Fee Structure",
                    "Course Information",
                    "Scholarship",
                    "Other",
                  ].map((s) => (
                    <MenuItem key={s} value={s}>
                      {s}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                multiline
                rows={4}
                label="Message"
                placeholder="Write your message here…"
                sx={{ ...fieldSx, mb: 3 }}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <Button
                fullWidth
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSubmit}
                sx={{
                  background: "linear-gradient(135deg,#e85d04,#f48c06)",
                  borderRadius: 3,
                  py: 1.8,
                  fontWeight: 700,
                  fontSize: 15,
                  "&:hover": {
                    boxShadow: "0 10px 28px rgba(232,93,4,.35)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Send Message
              </Button>

              {sent && (
                <Alert severity="success" sx={{ mt: 2, borderRadius: 3 }}>
                  ✅ Message sent! We'll reply within 24 hours.
                </Alert>
              )}

              <Divider sx={{ my: 3 }}>
                <Typography fontSize={12} color="text.secondary">
                  Office Hours
                </Typography>
              </Divider>

              <Stack direction="row" justifyContent="space-around">
                {hours.map((h) => (
                  <Box key={h.day} textAlign="center">
                    <Typography
                      fontSize={11}
                      fontWeight={700}
                      color="text.secondary"
                      textTransform="uppercase"
                      letterSpacing={1}
                    >
                      {h.day}
                    </Typography>
                    <Typography fontWeight={600} fontSize={13} mt={0.5}>
                      {h.time}
                    </Typography>
                    <Chip
                      label={h.open ? "Open" : "Closed"}
                      size="small"
                      sx={{
                        mt: 0.5,
                        bgcolor: h.open ? "#e8f5e9" : "#fde8e8",
                        color: h.open ? "#388e3c" : "#c62828",
                        fontWeight: 700,
                        fontSize: 10,
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    "&.Mui-focused fieldset": { borderColor: "#e85d04" },
  },
  "& label.Mui-focused": { color: "#e85d04" },
};
