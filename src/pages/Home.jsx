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
  Stack,
  Divider,
  Paper,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

// ── Theme ─────────────────────────────────────────────────────────────────────
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#e85d04", light: "#f48c06", dark: "#c44d00" },
    secondary: { main: "#f48c06", light: "#ffd580", dark: "#c97d00" },
    background: { default: "#faf7f4", paper: "#FFFFFF" },
    text: { primary: "#1a0a00", secondary: "#6b4f3a" },
  },
  typography: {
    fontFamily: "'Playfair Display', 'Georgia', serif",
    body1: {
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      lineHeight: 1.7,
    },
    body2: { fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" },
    button: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600,
      letterSpacing: "0.4px",
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
          fontSize: "0.93rem",
          padding: "10px 26px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { boxShadow: "0 2px 20px rgba(232,93,4,0.07)", borderRadius: 20 },
      },
    },
  },
});

// ── Data ──────────────────────────────────────────────────────────────────────
const courses = [
  {
    title: "Humanities",
    icon: "📚",
    color: "#e85d04",
    bg: "#fff5eb",
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
    color: "#c97d00",
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
    color: "#e85d04",
    bg: "#fff5eb",
    subjects: ["NCC Training", "Physical Fitness", "Discipline & Leadership"],
    students: "80+",
  },
  {
    title: "Scout & Guide",
    icon: "⛺",
    color: "#f48c06",
    bg: "#fff8ec",
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
  { label: "Students Enrolled", value: "5000+", icon: "🎓" },
  { label: "Courses Offered", value: "8", icon: "📖" },
  { label: "Years of Excellence", value: "70+", icon: "🏆" },
  { label: "Faculty Members", value: "45+", icon: "👨‍🏫" },
];

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

const whyUs = [
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
  return count.toLocaleString() + target.replace(/[\d,]/g, "");
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "100svh", md: "92vh" },
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(150deg, #1a0a00 0%, #3d1200 40%, #7a2600 70%, #e85d04 100%)",
      }}
    >
      {/* Decorative orbs */}
      {[
        { size: 600, top: -200, right: -180, opacity: 0.07 },
        { size: 350, bottom: -120, left: -80, opacity: 0.06 },
        { size: 220, top: "35%", right: "12%", opacity: 0.05 },
      ].map((c, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: c.size,
            height: c.size,
            borderRadius: "50%",
            border: "1.5px solid rgba(244,140,6,0.4)",
            top: c.top,
            bottom: c.bottom,
            left: c.left,
            right: c.right,
            opacity: c.opacity,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Glowing top accent */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          background:
            "linear-gradient(90deg, #e85d04, #f48c06, #ffd580, #f48c06, #e85d04)",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1, py: { xs: 10, md: 12 } }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          {/* Left: text */}
          <Grid item xs={12} md={6}>
            <Chip
              label="Est. 1950 · Maharajganj, UP"
              size="small"
              sx={{
                background: "rgba(244,140,6,0.18)",
                color: "#ffd580",
                border: "1px solid rgba(244,140,6,0.35)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
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
                fontSize: {
                  xs: "2.2rem",
                  sm: "3rem",
                  md: "3.6rem",
                  lg: "4.2rem",
                },
                lineHeight: 1.12,
                mb: 2.5,
                fontWeight: 800,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: "all 0.75s 0.2s",
              }}
            >
              Shape Your{" "}
              <Box
                component="span"
                sx={{
                  color: "#f48c06",
                  textShadow: "0 0 40px rgba(244,140,6,0.5)",
                }}
              >
                Future
              </Box>
              <br />
              With Quality{" "}
              <Box component="span" sx={{ color: "#ffd580" }}>
                Education
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.65)",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                maxWidth: 480,
                mb: 4.5,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.75s 0.35s",
              }}
            >
              Digvijaynath Intermediate College — empowering students through
              holistic development, academic excellence, and career-ready skills
              since 1950.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.75s 0.5s",
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: "linear-gradient(135deg,#e85d04,#f48c06)",
                  px: { xs: 3, md: 4 },
                  py: 1.6,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  boxShadow: "0 8px 32px rgba(232,93,4,0.45)",
                  "&:hover": {
                    background: "linear-gradient(135deg,#f48c06,#e85d04)",
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
                onClick={() => {
                  navigate("/courses");
                }}
                sx={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#fff",
                  px: { xs: 3, md: 4 },
                  py: 1.6,
                  "&:hover": {
                    borderColor: "#f48c06",
                    color: "#f48c06",
                    background: "rgba(244,140,6,0.08)",
                  },
                  transition: "all 0.25s",
                }}
              >
                View Courses →
              </Button>
            </Stack>

            {/* Mini stats row */}
            <Stack
              direction="row"
              spacing={{ xs: 2, sm: 4 }}
              mt={5}
              flexWrap="wrap"
              sx={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.75s 0.65s",
              }}
            >
              {[
                ["5000+", "Students"],
                ["70+", "Years"],
                ["8", "Streams"],
                ["98%", "Pass Rate"],
              ].map(([n, l]) => (
                <Box key={l} sx={{ textAlign: { xs: "left", sm: "center" } }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.4rem", md: "1.7rem" },
                      fontWeight: 800,
                      color: "#f48c06",
                      lineHeight: 1,
                    }}
                  >
                    {n}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    {l}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Right: Why Choose Us card */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(36px)",
                transition: "all 0.9s 0.45s",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(244,140,6,0.2)",
                  borderRadius: 4,
                  p: { xs: 3, md: 4 },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                    mb: 3,
                    fontWeight: 700,
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                  }}
                >
                  Why Choose Us?
                </Typography>
                <Stack spacing={2.5}>
                  {whyUs.map((item, i) => (
                    <Stack
                      key={i}
                      direction="row"
                      spacing={2}
                      alignItems="flex-start"
                    >
                      <Box
                        sx={{
                          width: 46,
                          height: 46,
                          minWidth: 46,
                          borderRadius: "13px",
                          flexShrink: 0,
                          background: "rgba(244,140,6,0.15)",
                          border: "1px solid rgba(244,140,6,0.2)",
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
                            fontFamily: "'DM Sans',sans-serif",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "rgba(255,255,255,0.52)",
                            lineHeight: 1.5,
                          }}
                        >
                          {item.desc}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
                <Box
                  mt={3}
                  pt={3}
                  sx={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(255,255,255,0.45)",
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    Affiliated to UP Board · Est. 1950 · Chowk Bazar,
                    Maharajganj
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          opacity: visible ? 0.6 : 0,
          transition: "opacity 1s 1.2s",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.65rem",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: 2,
            textTransform: "uppercase",
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          Scroll
        </Typography>
        <Box
          sx={{
            width: 1,
            height: 32,
            background: "rgba(244,140,6,0.6)",
            borderRadius: 1,
            animation: "pulse 1.5s infinite",
          }}
        />
      </Box>
    </Box>
  );
}

// ── Stats Strip ───────────────────────────────────────────────────────────────
function StatsStrip() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        background:
          "linear-gradient(135deg,#1a0a00 0%,#3d1200 50%,#7a2600 100%)",
        borderBottom: "3px solid #e85d04",
        py: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          {stats.map((s, i) => {
            const displayed = visible ? undefined : "0";
            return (
              <Grid item xs={6} md={3} key={i}>
                <StatCardInner
                  {...s}
                  delay={i * 0.12}
                  visible={visible}
                  isLast={i === stats.length - 1}
                  index={i}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

function StatCardInner({ icon, label, value, delay, visible, index }) {
  const displayed = useCountUp(value, 1600, visible);
  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 2.5, md: 3 },
        px: { xs: 1, md: 2 },
        borderRight: {
          xs: index % 2 === 0 ? "1px solid rgba(244,140,6,0.15)" : "none",
          md: index < 3 ? "1px solid rgba(244,140,6,0.15)" : "none",
        },
        borderBottom: {
          xs: index < 2 ? "1px solid rgba(244,140,6,0.1)" : "none",
          md: "none",
        },
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ${delay}s, transform 0.6s ${delay}s`,
      }}
    >
      <Typography sx={{ fontSize: { xs: 26, md: 32 }, mb: 0.5 }}>
        {icon}
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Playfair Display',serif",
          fontWeight: 800,
          color: "#f48c06",
          fontSize: { xs: "1.6rem", md: "2.2rem" },
          lineHeight: 1,
        }}
      >
        {displayed}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "0.65rem", sm: "0.7rem" },
          color: "rgba(255,255,255,0.5)",
          fontWeight: 700,
          letterSpacing: 1,
          textTransform: "uppercase",
          fontFamily: "'DM Sans',sans-serif",
          mt: 0.5,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

// ── Course Card ───────────────────────────────────────────────────────────────
function CourseCard({ course }) {
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
        border: `2px solid ${hovered ? course.color : "transparent"}`,
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 18px 44px ${alpha(course.color, 0.2)}`
          : "0 2px 20px rgba(232,93,4,0.07)",
      }}
    >
      <Box
        sx={{
          height: 5,
          background: `linear-gradient(90deg,${course.color},${alpha(course.color, 0.5)})`,
        }}
      />
      <CardContent sx={{ p: { xs: 2, sm: 2.5 } }}>
        <Stack direction="row" alignItems="center" spacing={1.5} mb={1.5}>
          <Box
            sx={{
              width: 46,
              height: 46,
              minWidth: 46,
              borderRadius: "13px",
              background: course.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              transition: "transform 0.3s",
              transform: hovered ? "scale(1.12) rotate(-4deg)" : "scale(1)",
            }}
          >
            {course.icon}
          </Box>
          <Box overflow="hidden">
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                lineHeight: 1.2,
                color: "text.primary",
              }}
            >
              {course.title}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: course.color, fontWeight: 700 }}
            >
              {course.students} students
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ mb: 1.5, opacity: 0.35 }} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6 }}>
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
                fontSize: "0.67rem",
                border: `1px solid ${alpha(course.color, 0.18)}`,
                transition: "background 0.3s",
                fontFamily: "'DM Sans',sans-serif",
              }}
            />
          ))}
          {course.subjects.length > 5 && (
            <Chip
              label={`+${course.subjects.length - 5}`}
              size="small"
              sx={{
                background: "#f5f0eb",
                color: "#6b4f3a",
                fontSize: "0.67rem",
                fontFamily: "'DM Sans',sans-serif",
              }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

// ── Courses Section ───────────────────────────────────────────────────────────
function CoursesSection() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, background: "#faf7f4" }} ref={ref}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Chip
            label="Academics"
            sx={{
              background: "#fff5eb",
              color: "#e85d04",
              fontWeight: 700,
              mb: 1.5,
              fontFamily: "'DM Sans',sans-serif",
              border: "1px solid rgba(232,93,4,0.2)",
            }}
          />
          <Typography
            variant="h2"
            sx={{
              mb: 1.5,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
            }}
          >
            Popular Courses
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 500,
              mx: "auto",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            Explore our wide range of streams designed to prepare students for
            competitive exams and careers.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
          {courses.map((course, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <Box
                sx={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.5s ${i * 0.06}s, transform 0.5s ${i * 0.06}s`,
                  height: "100%",
                }}
              >
                <CourseCard course={course} />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={{ xs: 4, md: 5 }}>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            onClick={() => {
              navigate("/courses");
            }}
            sx={{
              px: 5,
              borderColor: "#e85d04",
              color: "#e85d04",
              "&:hover": {
                background: "rgba(232,93,4,0.06)",
                borderColor: "#c44d00",
              },
            }}
          >
            View All Courses →
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

// ── Notice Board ──────────────────────────────────────────────────────────────
function NoticeBoard() {
  return (
    <Box sx={{ py: { xs: 6, md: 9 }, background: "#fff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <Chip
              label="Latest Updates"
              sx={{
                background: "#fff5eb",
                color: "#e85d04",
                fontWeight: 700,
                mb: 2,
                fontFamily: "'DM Sans',sans-serif",
                border: "1px solid rgba(232,93,4,0.2)",
              }}
            />
            <Typography
              variant="h2"
              sx={{
                mb: 1.5,
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
              }}
            >
              Notice Board
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 4,
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              Stay updated with the latest announcements, exam schedules, and
              college events.
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(135deg,#e85d04,#f48c06)",
                px: 4,
                py: 1.4,
                fontWeight: 700,
                boxShadow: "0 6px 24px rgba(232,93,4,0.3)",
                "&:hover": {
                  background: "linear-gradient(135deg,#f48c06,#e85d04)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.25s",
              }}
            >
              All Notices →
            </Button>

            {/* Decorative accent */}
            <Box
              sx={{
                mt: 5,
                p: 3,
                borderRadius: 3,
                background: "linear-gradient(135deg,#1a0a00,#3d1200)",
                display: { xs: "none", md: "block" },
              }}
            >
              <Typography
                sx={{
                  color: "#ffd580",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  fontFamily: "'DM Sans',sans-serif",
                  mb: 1,
                }}
              >
                📢 Admissions 2026–27 Open
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "rgba(255,255,255,0.55)" }}
              >
                Secure your seat in Class 11. Limited seats available across all
                streams.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              {notices.map((n, i) => (
                <Paper
                  key={i}
                  elevation={0}
                  sx={{
                    p: { xs: 2, sm: 2.5 },
                    border: "1.5px solid rgba(232,93,4,0.1)",
                    borderRadius: 3,
                    transition: "all 0.25s",
                    cursor: "pointer",
                    "&:hover": {
                      borderColor: tagColors[n.tag],
                      boxShadow: `0 6px 24px ${alpha(tagColors[n.tag], 0.12)}`,
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        minWidth: 46,
                        height: 46,
                        borderRadius: "11px",
                        background: alpha(tagColors[n.tag], 0.1),
                        border: `1px solid ${alpha(tagColors[n.tag], 0.2)}`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.58rem",
                          fontWeight: 700,
                          color: tagColors[n.tag],
                          fontFamily: "'DM Sans',sans-serif",
                          lineHeight: 1,
                          textTransform: "uppercase",
                        }}
                      >
                        {n.date.split(" ")[0]}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 800,
                          color: tagColors[n.tag],
                          fontFamily: "'DM Sans',sans-serif",
                          lineHeight: 1,
                        }}
                      >
                        {n.date.split(" ")[1]}
                      </Typography>
                    </Box>
                    <Box flex={1} overflow="hidden">
                      <Chip
                        label={n.tag}
                        size="small"
                        sx={{
                          background: alpha(tagColors[n.tag], 0.1),
                          color: tagColors[n.tag],
                          fontWeight: 700,
                          fontSize: "0.67rem",
                          mb: 0.5,
                          fontFamily: "'DM Sans',sans-serif",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.primary",
                          lineHeight: 1.55,
                          fontWeight: 500,
                          fontSize: { xs: "0.82rem", sm: "0.88rem" },
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

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg,#1a0a00 0%,#3d1200 45%,#e85d04 100%)",
        py: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: "1px solid rgba(244,140,6,0.15)",
          pointerEvents: "none",
        }}
      />
      <Container
        maxWidth="md"
        sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <Chip
          label="🎓 2026–27 Admissions Open"
          sx={{
            background: "rgba(244,140,6,0.2)",
            color: "#ffd580",
            border: "1px solid rgba(244,140,6,0.35)",
            fontWeight: 700,
            mb: 3,
            fontFamily: "'DM Sans',sans-serif",
          }}
        />
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
            mb: 1.5,
            fontWeight: 700,
          }}
        >
          Ready to Begin Your{" "}
          <Box component="span" sx={{ color: "#f48c06" }}>
            Journey?
          </Box>
        </Typography>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.65)",
            mb: 4,
            maxWidth: 480,
            mx: "auto",
            fontFamily: "'DM Sans',sans-serif",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Applications for 2026–27 are open. Secure your seat today before the
          deadline.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              background: "linear-gradient(135deg,#e85d04,#f48c06)",
              px: 5,
              py: 1.6,
              fontWeight: 700,
              fontSize: "0.95rem",
              boxShadow: "0 8px 28px rgba(232,93,4,0.4)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 12px 36px rgba(232,93,4,0.5)",
              },
              transition: "all 0.25s",
            }}
          >
            Start Application →
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: "rgba(255,255,255,0.3)",
              color: "#fff",
              px: 5,
              py: 1.6,
              "&:hover": {
                borderColor: "#f48c06",
                color: "#f48c06",
                background: "rgba(244,140,6,0.08)",
              },
              transition: "all 0.25s",
            }}
          >
            Download Prospectus
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

// ── App Root ──────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { margin: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        @keyframes pulse { 0%,100%{opacity:0.4;transform:scaleY(0.8)} 50%{opacity:1;transform:scaleY(1)} }
      `}</style>
      <Hero />
      <StatsStrip />
      <CoursesSection />
      <NoticeBoard />
      <CTABanner />
    </ThemeProvider>
  );
}
