// import React from "react";
// import { Box, Typography, Button, Grid, Paper } from "@mui/material";
// import CourseCard from "../components/CourseCard";
// import { useNavigate } from "react-router-dom";
// import ImageCarousel from "../components/ImageCarausel";

// export default function Home() {
//   const navigate = useNavigate();
//   const courses = [
//     {
//       title: "Humanities",
//       subject:
//         "1.Hindi 2.English 3.Sanskrit 4.Geography 5.Civics 6.Economics 7.Music Vocal",
//       seats: 60,
//     },
//     {
//       title: "Science",
//       subject:
//         "1.General Hindi 2.English 3.physics 4.Chemistry 5.Biology 6.Math 7.Computer ",
//       seats: 50,
//     },
//     {
//       title: "Commerce",
//       subject:
//         "1.General Hindi 2.English 3.Accountancy 4.Business Studies 5.Economics",
//       seats: 80,
//     },
//     {
//       title: "Vocational",
//       subject:
//         "1.General Hindi 2.English 3.Typing Hindi & English 4.General Foundational",
//       seats: 30,
//     },
//     {
//       title: "Agriculture",
//       subject:
//         "1.Agronomy sixith 2.Ag. Economics 3.Ag Zoology 4.Animal Husbandry 5.Ag.Chemistry",
//       seats: 30,
//     },
//     { title: "NCC", subject: "NCC", seats: 30 },
//     { title: "Scout & Guide", subject: "Scout & Guide", seats: 30 },
//     { title: "Music vocal", subject: "Music vocal", seats: 30 },
//   ];

//   return (
//     <Box>
//       <Paper sx={{ p: 4, mb: 4 }}>
//         <Box
//           sx={{
//             backgroundColor: "#fff",
//             p: 2,
//             borderRadius: 2,
//             boxShadow: 2,
//           }}
//         >
//           <ImageCarousel />
//         </Box>
//         <Typography variant="h3" gutterBottom>
//           Welcome to MyCollege
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 2 }}>
//           Empowering students for a better future through quality education and
//           holistic development.
//         </Typography>
//         <Button variant="contained" onClick={() => navigate("/admissions")}>
//           Explore Admissions
//         </Button>
//       </Paper>

//       <Typography variant="h5" sx={{ mb: 2 }}>
//         Popular Courses
//       </Typography>
//       <Grid container spacing={2}>
//         {courses.map((c, i) => (
//           <Grid item xs={12} sm={6} md={4} key={i}>
//             <CourseCard {...c} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }
import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  Stack,
  Divider,
  IconButton,
  useTheme,
  alpha,
  Paper,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// ── Theme ────────────────────────────────────────────────────────────────────
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#C0392B", light: "#E74C3C", dark: "#922B21" },
    secondary: { main: "#F39C12", light: "#F8C471", dark: "#D68910" },
    background: { default: "#FAFAF8", paper: "#FFFFFF" },
    text: { primary: "#e5b486ff", secondary: "#555566" },
  },
  typography: {
    fontFamily: "'Playfair Display', 'Georgia', serif",
    h1: { fontWeight: 800, letterSpacing: "-1px" },
    h2: { fontWeight: 700, letterSpacing: "-0.5px" },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    body1: {
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      lineHeight: 1.7,
    },
    body2: { fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" },
    button: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600,
      letterSpacing: "0.5px",
    },
    caption: { fontFamily: "'DM Sans', sans-serif" },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: "none",
          fontSize: "0.95rem",
          padding: "10px 28px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { boxShadow: "0 2px 24px rgba(0,0,0,0.07)", borderRadius: 20 },
      },
    },
  },
});

// ── Data ─────────────────────────────────────────────────────────────────────
const courses = [
  {
    title: "Humanities",
    icon: "📚",
    color: "#E74C3C",
    bg: "#FEF0EE",
    subjects: [
      "Hindi",
      "English",
      "Sanskrit",
      "Geography",
      "Civics",
      "Economics",
      "Music Vocal",
    ],
    students: "240+",
  },
  {
    title: "Science",
    icon: "🔬",
    color: "#2980B9",
    bg: "#EBF5FB",
    subjects: [
      "General Hindi",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "Math",
      "Computer",
    ],
    students: "310+",
  },
  {
    title: "Commerce",
    icon: "📊",
    color: "#27AE60",
    bg: "#EAFAF1",
    subjects: [
      "General Hindi",
      "English",
      "Accountancy",
      "Business Studies",
      "Economics",
    ],
    students: "190+",
  },
  {
    title: "Vocational",
    icon: "🛠",
    color: "#8E44AD",
    bg: "#F4ECF7",
    subjects: [
      "General Hindi",
      "English",
      "Typing Hindi & English",
      "General Foundational",
    ],
    students: "95+",
  },
  {
    title: "Agriculture",
    icon: "🌾",
    color: "#D4AC0D",
    bg: "#FEFDE7",
    subjects: [
      "Agronomy",
      "Ag. Economics",
      "Ag. Zoology",
      "Animal Husbandry",
      "Ag. Chemistry",
    ],
    students: "130+",
  },
  {
    title: "NCC",
    icon: "🎖",
    color: "#f1a478ff",
    bg: "#EAF2F8",
    subjects: ["NCC Training", "Physical Fitness", "Discipline & Leadership"],
    students: "80+",
  },
  {
    title: "Scout & Guide",
    icon: "⛺",
    color: "#f3bd6cff",
    bg: "#E8F8F5",
    subjects: [
      "Scout & Guide Activities",
      "Community Service",
      "Outdoor Skills",
    ],
    students: "60+",
  },
  {
    title: "Music Vocal",
    icon: "🎵",
    color: "#C0392B",
    bg: "#FDEDEC",
    subjects: ["Classical Vocal", "Music Theory", "Performance"],
    students: "45+",
  },
];

const stats = [
  { label: "Students Enrolled", value: "1,200+", icon: "🎓" },
  { label: "Courses Offered", value: "8", icon: "📖" },
  { label: "Years of Excellence", value: "50+", icon: "🏆" },
  { label: "Faculty Members", value: "45+", icon: "👨‍🏫" },
];

// ── useCountUp ────────────────────────────────────────────────────────────────
function useCountUp(target, duration = 1800, trigger = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const num = parseInt(target.replace(/\D/g, ""), 10);
    if (!num) return;
    let start = 0;
    const step = num / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  const suffix = target.replace(/[\d,]/g, "");
  return count.toLocaleString() + suffix;
}

// ── StatCard ──────────────────────────────────────────────────────────────────
function StatCard({ icon, label, value, delay, visible }) {
  const displayed = useCountUp(value, 1600, visible);
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 3,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ${delay}s, transform 0.6s ${delay}s`,
      }}
    >
      <Typography sx={{ fontSize: 36, mb: 1 }}>{icon}</Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: "primary.main",
          fontSize: { xs: "1.8rem", md: "2.4rem" },
        }}
      >
        {displayed}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", fontWeight: 500, mt: 0.5 }}
      >
        {label}
      </Typography>
    </Box>
  );
}

// ── CourseCard ────────────────────────────────────────────────────────────────
function CourseCard({ course, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        height: "100%",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        border: hovered ? `2px solid ${course.color}` : "2px solid transparent",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 48px ${alpha(course.color, 0.22)}`
          : "0 2px 24px rgba(0,0,0,0.07)",
      }}
    >
      {/* Coloured top band */}
      <Box sx={{ height: 6, background: course.color }} />
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Stack direction="row" alignItems="center" spacing={1.5} mb={2}>
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: "14px",
              background: course.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              transition: "transform 0.3s",
              transform: hovered ? "scale(1.15) rotate(-4deg)" : "scale(1)",
            }}
          >
            {course.icon}
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                lineHeight: 1.2,
                fontSize: "1rem",
              }}
            >
              {course.title}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: course.color, fontWeight: 600 }}
            >
              {course.students} students
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mb: 2, opacity: 0.4 }} />

        {/* Subjects */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7 }}>
          {course.subjects.slice(0, 5).map((s) => (
            <Chip
              key={s}
              label={s}
              size="small"
              sx={{
                background: hovered
                  ? alpha(course.color, 0.12)
                  : alpha(course.color, 0.07),
                color: course.color,
                fontWeight: 600,
                fontSize: "0.7rem",
                border: `1px solid ${alpha(course.color, 0.2)}`,
                transition: "background 0.3s",
                fontFamily: "'DM Sans', sans-serif",
              }}
            />
          ))}
          {course.subjects.length > 5 && (
            <Chip
              label={`+${course.subjects.length - 5} more`}
              size="small"
              sx={{
                background: "#F5F5F5",
                color: "text.secondary",
                fontSize: "0.7rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "88vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #fca14cff 0%, #f5d694ff 50%, #f1b667ff 100%)",
      }}
    >
      {/* Decorative circles */}
      {[
        { size: 520, top: -160, right: -120, opacity: 0.06 },
        { size: 320, bottom: -100, left: -60, opacity: 0.05 },
        { size: 200, top: "30%", right: "15%", opacity: 0.04 },
      ].map((c, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: c.size,
            height: c.size,
            borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.3)",
            top: c.top,
            bottom: c.bottom,
            left: c.left,
            right: c.right,
            opacity: c.opacity,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Red accent strip */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #eea858ff, #F39C12, #C0392B)",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1, py: { xs: 8, md: 10 } }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* Left: text */}
          <Grid item xs={12} md={6}>
            <Box>
              <Chip
                label="Est. 1975 · Maharajganj, UP"
                size="small"
                sx={{
                  background: "rgba(192,57,43,0.25)",
                  color: "#F39C12",
                  border: "1px solid rgba(243,156,18,0.3)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  mb: 3,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: "all 0.6s 0.1s",
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  fontSize: { xs: "2.4rem", md: "3.4rem", lg: "4rem" },
                  lineHeight: 1.15,
                  mb: 2,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: "all 0.7s 0.2s",
                }}
              >
                Shape Your{" "}
                <Box component="span" sx={{ color: "#F39C12" }}>
                  Future
                </Box>
                <br />
                With Quality{" "}
                <Box component="span" sx={{ color: "#E74C3C" }}>
                  Education
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.68)",
                  fontSize: "1.05rem",
                  maxWidth: 480,
                  mb: 4,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: "all 0.7s 0.35s",
                }}
              >
                Digvijaynath Intermediate College — empowering students through
                holistic development, academic excellence, and career-ready
                skills since 1975.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: "all 0.7s 0.5s",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: "linear-gradient(135deg, #C0392B, #E74C3C)",
                    px: 4,
                    py: 1.5,
                    fontSize: "0.95rem",
                    boxShadow: "0 8px 32px rgba(238, 164, 114, 0.45)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #E74C3C, #C0392B)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.25s",
                  }}
                >
                  Explore Admissions
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "rgba(255,255,255,0.35)",
                    color: "#fff",
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      borderColor: "#F39C12",
                      color: "#F39C12",
                      background: "rgba(243,156,18,0.08)",
                    },
                    transition: "all 0.25s",
                  }}
                >
                  View Courses →
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Right: Info card */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(40px)",
                transition: "all 0.9s 0.4s",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 4,
                  p: { xs: 3, md: 4 },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "#fff", mb: 3, fontWeight: 700 }}
                >
                  Why Choose Us?
                </Typography>
                {[
                  {
                    icon: "🏫",
                    title: "Modern Infrastructure",
                    desc: "Well-equipped labs, library & sports facilities",
                  },
                  {
                    icon: "📜",
                    title: "UP Board Affiliated",
                    desc: "Recognized by Uttar Pradesh Madhyamik Shiksha Parishad",
                  },
                  {
                    icon: "🎯",
                    title: "8 Diverse Streams",
                    desc: "From Sciences to NCC, Scout & Music",
                  },
                  {
                    icon: "👥",
                    title: "Experienced Faculty",
                    desc: "45+ dedicated educators committed to excellence",
                  },
                ].map((item, i) => (
                  <Stack
                    key={i}
                    direction="row"
                    spacing={2}
                    alignItems="flex-start"
                    mb={2.5}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        flexShrink: 0,
                        background: "rgba(243, 164, 128, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ── Stats strip ───────────────────────────────────────────────────────────────
function StatsStrip() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        background: "linear-gradient(135deg, #e28980ff 0%, #faae3dff 100%)",
        py: { xs: 4, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          {stats.map((s, i) => (
            <Grid item xs={6} md={3} key={i}>
              <Box
                sx={{
                  borderRight:
                    i < 3 ? "1px solid rgba(157, 113, 216, 0.15)" : "none",
                  px: 1,
                }}
              >
                <StatCard {...s} delay={i * 0.12} visible={visible} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ── Courses section ───────────────────────────────────────────────────────────
function CoursesSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, background: "#FAFAF8" }} ref={ref}>
      <Container maxWidth="lg">
        {/* Section header */}
        <Box textAlign="center" mb={6}>
          <Chip
            label="Academics"
            sx={{
              background: "#FEF0EE",
              color: "#C0392B",
              fontWeight: 700,
              mb: 1.5,
              fontFamily: "'DM Sans', sans-serif",
            }}
          />
          <Typography
            variant="h2"
            sx={{ mb: 1.5, fontSize: { xs: "2rem", md: "2.8rem" } }}
          >
            Popular Courses
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 520, mx: "auto" }}
          >
            Explore our wide range of streams designed to prepare students for
            competitive exams and careers.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {courses.map((course, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <Box
                sx={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(32px)",
                  transition: `opacity 0.5s ${i * 0.07}s, transform 0.5s ${i * 0.07}s`,
                  height: "100%",
                }}
              >
                <CourseCard course={course} index={i} />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={5}>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            sx={{ px: 5 }}
          >
            View All Courses
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

// ── Notice board ──────────────────────────────────────────────────────────────
function NoticeBoard() {
  const notices = [
    {
      tag: "Admissions",
      date: "Apr 15",
      text: "Class 11 admissions open for session 2026–27. Apply before May 31.",
    },
    {
      tag: "Exam",
      date: "Apr 10",
      text: "UP Board practical exams scheduled for May 2–10, 2026.",
    },
    {
      tag: "Event",
      date: "Apr 05",
      text: "Annual Sports Day on April 28 — all students to participate.",
    },
    {
      tag: "Holiday",
      date: "Mar 28",
      text: "College closed on April 14 for Dr. Ambedkar Jayanti.",
    },
  ];
  const tagColors = {
    Admissions: "#2980B9",
    Exam: "#C0392B",
    Event: "#27AE60",
    Holiday: "#8E44AD",
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: "#fff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Chip
              label="Updates"
              sx={{
                background: "#EAF2F8",
                color: "#2980B9",
                fontWeight: 700,
                mb: 2,
                fontFamily: "'DM Sans', sans-serif",
              }}
            />
            <Typography
              variant="h2"
              sx={{ mb: 1.5, fontSize: { xs: "1.8rem", md: "2.4rem" } }}
            >
              Notice Board
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
              Stay updated with the latest announcements, exam schedules, and
              college events.
            </Typography>
            <Button variant="contained" color="primary">
              All Notices →
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              {notices.map((n, i) => (
                <Paper
                  key={i}
                  elevation={0}
                  sx={{
                    p: 2.5,
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: 3,
                    "&:hover": {
                      borderColor: tagColors[n.tag],
                      boxShadow: `0 4px 20px ${alpha(tagColors[n.tag], 0.12)}`,
                    },
                    transition: "all 0.25s",
                    cursor: "pointer",
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        minWidth: 44,
                        height: 44,
                        borderRadius: "10px",
                        background: alpha(tagColors[n.tag], 0.1),
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          color: tagColors[n.tag],
                          fontFamily: "'DM Sans', sans-serif",
                          lineHeight: 1,
                        }}
                      >
                        {n.date.split(" ")[0].toUpperCase()}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 800,
                          color: tagColors[n.tag],
                          fontFamily: "'DM Sans', sans-serif",
                          lineHeight: 1,
                        }}
                      >
                        {n.date.split(" ")[1]}
                      </Typography>
                    </Box>
                    <Box flex={1}>
                      <Chip
                        label={n.tag}
                        size="small"
                        sx={{
                          background: alpha(tagColors[n.tag], 0.1),
                          color: tagColors[n.tag],
                          fontWeight: 700,
                          fontSize: "0.68rem",
                          mb: 0.5,
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.primary",
                          lineHeight: 1.5,
                          fontWeight: 500,
                        }}
                      >
                        {n.text}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { margin: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Hero />
      <StatsStrip />
      <CoursesSection />
      <NoticeBoard />
    </ThemeProvider>
  );
}
