// import React from 'react';
// import { Typography, Box, List, ListItem } from '@mui/material';

// export default function Admissions(){
//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>Admissions 2025-26</Typography>
//       <Typography>Join our UG & PG programs. Below are quick links and information:</Typography>
//       <List>
//         <ListItem>Online Application Form (placeholder)</ListItem>
//         <ListItem>Eligibility Criteria</ListItem>
//         <ListItem>Important Dates</ListItem>
//         <ListItem>Fee Structure</ListItem>
//       </List>
//     </Box>
//   );
//      <h1></h1>
// }

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Divider,
  Stack,
  Paper,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const quickLinks = [
  {
    icon: "📝",
    title: "Online Application",
    desc: "Fill and submit your form digitally.",
    link: "Apply Now",
  },
  {
    icon: "✅",
    title: "Eligibility Criteria",
    desc: "Check if you qualify before applying.",
    link: "View Criteria",
  },
  {
    icon: "📅",
    title: "Important Dates",
    desc: "Registration, exams, and result dates.",
    link: "See Timeline",
  },
  {
    icon: "💰",
    title: "Fee Structure",
    desc: "Transparent fee breakdown by program.",
    link: "View Fees",
  },
];

const dates = [
  {
    date: "Apr 1 – May 15, 2025",
    event: "Online Registration Opens",
    note: "Available on portal",
  },
  {
    date: "June 1–10, 2025",
    event: "Document Verification",
    note: "Bring originals",
  },
  {
    date: "June 20, 2025",
    event: "Merit List Published",
    note: "Check portal",
  },
  { date: "July 1, 2025", event: "Classes Commence", note: "Session 2025–26" },
];

const fees = [
  { name: "Class 11 (Science)", amount: "₹4,200", tag: "Annual" },
  { name: "Class 11 (Arts)", amount: "₹3,500", tag: "Annual" },
  { name: "Class 12 (Science)", amount: "₹4,500", tag: "Annual" },
  { name: "Exam / Reg. Fee", amount: "₹850", tag: "" },
];

const eligibility = [
  "Min. 45% in Class 10 for Science stream",
  "Min. 40% for Arts & Commerce streams",
  "UP Board or equivalent certificate required",
  "Age limit: 14–18 years for Class 11",
  "NCC/Scout students get priority",
  "Reserved category relaxation per UP Govt.",
];

export default function AdmissionsSection() {
  return (
    <Box sx={{ bgcolor: "#f5f0eb" }}>
      {/* Hero */}
      <Box
        sx={{
          background:
            "linear-gradient(120deg,#1a0a00 0%,#3d1200 40%,#e85d04 100%)",
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 8 },
        }}
      >
        <Chip
          label="🎓 Admissions Open 2025–26"
          sx={{
            bgcolor: "rgba(255,255,255,0.12)",
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
          Shape Your Future
          <br />
          at{" "}
          <Box component="span" sx={{ color: "#f48c06" }}>
            Digvijaynath
          </Box>{" "}
          College
        </Typography>
        <Typography
          sx={{ color: "rgba(255,255,255,0.72)", mb: 4, maxWidth: 520 }}
        >
          Join our UG & PG programs at Chowk Bazar, Maharajganj. A legacy of
          excellence since 1950.
        </Typography>
        <Stack direction="row" gap={2}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: "#e85d04",
              borderRadius: 2,
              fontWeight: 700,
              "&:hover": { bgcolor: "#cf4f00" },
            }}
          >
            Apply Online Now
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "rgba(255,255,255,0.4)",
              borderRadius: 2,
              fontWeight: 600,
            }}
          >
            Download Prospectus
          </Button>
        </Stack>
      </Box>

      {/* Stats */}
      <Box
        sx={{
          bgcolor: "#fff",
          borderBottom: "3px solid #f48c06",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {[
          ["70+", "Years of Excellence"],
          ["5000+", "Students Enrolled"],
          ["9", "Departments"],
          ["98%", "Pass Rate"],
        ].map(([n, l]) => (
          <Box
            key={l}
            sx={{
              px: 6,
              py: 3,
              textAlign: "center",
              borderRight: "1px solid #f0ebe5",
              "&:last-child": { borderRight: "none" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Playfair Display',serif",
                fontSize: 30,
                color: "#e85d04",
                fontWeight: 800,
              }}
            >
              {n}
            </Typography>
            <Typography
              sx={{
                fontSize: 11,
                color: "#888",
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              {l}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Quick Links */}
      <Box sx={{ maxWidth: 1060, mx: "auto", px: 4, pt: 7 }}>
        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#e85d04",
          }}
        >
          Quick Access
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Playfair Display',serif",
            mb: 4,
            "&::after": {
              content: '""',
              display: "block",
              width: 48,
              height: 3,
              background: "#e85d04",
              borderRadius: 2,
              mt: 1,
            },
          }}
        >
          Admission Resources
        </Typography>
        <Grid container spacing={2.5} mb={7}>
          {quickLinks.map((q) => (
            <Grid item xs={12} sm={6} md={3} key={q.title}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 4,
                  border: "1.5px solid #ece8e2",
                  height: "100%",
                  transition:
                    "transform .25s, box-shadow .25s, border-color .2s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 14px 36px rgba(232,93,4,.1)",
                    borderColor: "#fad4b0",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography fontSize={28} mb={1.5}>
                    {q.icon}
                  </Typography>
                  <Typography fontWeight={700} fontSize={15} mb={0.5}>
                    {q.title}
                  </Typography>
                  <Typography fontSize={12.5} color="text.secondary" mb={1.5}>
                    {q.desc}
                  </Typography>
                  <Button
                    size="small"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ color: "#e85d04", fontWeight: 700, p: 0 }}
                  >
                    {q.link}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Dates + Fees */}
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{ borderRadius: 4, border: "1.5px solid #ece8e2", p: 3 }}
            >
              <Typography
                variant="h6"
                sx={{ fontFamily: "'Playfair Display',serif", mb: 2.5 }}
              >
                📅 Important Dates
              </Typography>
              {dates.map((d, i) => (
                <Stack key={i} direction="row" gap={2} mb={2.5}>
                  <Box>
                    <Box
                      sx={{
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        bgcolor: "#e85d04",
                        mt: 0.5,
                      }}
                    />
                    {i < dates.length - 1 && (
                      <Box
                        sx={{
                          width: 2,
                          bgcolor: "#fad4b0",
                          height: 28,
                          ml: 0.75,
                          mt: 0.5,
                        }}
                      />
                    )}
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
                      {d.date}
                    </Typography>
                    <Typography fontWeight={600} fontSize={14}>
                      {d.event}
                    </Typography>
                    <Typography fontSize={12} color="text.secondary">
                      {d.note}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{ borderRadius: 4, border: "1.5px solid #ece8e2", p: 3 }}
            >
              <Typography
                variant="h6"
                sx={{ fontFamily: "'Playfair Display',serif", mb: 2.5 }}
              >
                💰 Fee Structure
              </Typography>
              {fees.map((f, i) => (
                <Box key={i}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    py={1.5}
                  >
                    <Typography fontSize={14} fontWeight={500}>
                      {f.name}
                    </Typography>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <Typography
                        fontSize={15}
                        fontWeight={700}
                        color="#e85d04"
                      >
                        {f.amount}
                      </Typography>
                      {f.tag && (
                        <Chip
                          label={f.tag}
                          size="small"
                          sx={{
                            bgcolor: "#fff5eb",
                            color: "#e85d04",
                            fontWeight: 700,
                            fontSize: 10,
                          }}
                        />
                      )}
                    </Stack>
                  </Stack>
                  {i < fees.length - 1 && <Divider />}
                </Box>
              ))}
            </Card>
          </Grid>
        </Grid>

        {/* Eligibility */}
        <Paper
          sx={{
            background: "linear-gradient(135deg,#1a0a00,#3d1200)",
            borderRadius: 4,
            p: 4,
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display',serif",
              color: "#fff",
              mb: 3,
            }}
          >
            ✅ Eligibility Criteria
          </Typography>
          <Grid container spacing={2}>
            {eligibility.map((e, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Stack direction="row" gap={1.5} alignItems="flex-start">
                  <CheckCircleOutlineIcon
                    sx={{ color: "#e85d04", mt: 0.2, fontSize: 20 }}
                  />
                  <Typography
                    fontSize={13.5}
                    sx={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {e}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* CTA */}
        <Box
          sx={{
            background: "linear-gradient(120deg,#e85d04,#f48c06)",
            borderRadius: 4,
            p: { xs: 4, md: 5 },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{ fontFamily: "'Playfair Display',serif", color: "#fff" }}
            >
              Ready to Begin Your Journey?
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.8)", mt: 0.5 }}>
              Applications for 2025–26 are open. Secure your seat today.
            </Typography>
          </Box>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: "#fff",
              color: "#e85d04",
              fontWeight: 700,
              borderRadius: 2,
              "&:hover": {
                bgcolor: "#fff",
                boxShadow: "0 8px 24px rgba(0,0,0,.15)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Start Application
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
