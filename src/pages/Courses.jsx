// import React from "react";
// import { duration, Grid, Typography } from "@mui/material";
// import CourseCard from "../components/CourseCard";
// import { Subject } from "@mui/icons-material";

// const data = [
//   {
//     title: "Humanities",
//     subject:
//       "1.Hindi 2.English 3.Sanskrit 4.Geography 5.Civics 6.Economics 7.Music Vocal",
//     seats: 60,
//   },
//   {
//     title: "Science",
//     subject:
//       "1.General Hindi 2.English 3.physics 4.Chemistry 5.Biology 6.Math 7.Computer ",
//     seats: 50,
//   },
//   {
//     title: "Commerce",
//     subject:
//       "1.General Hindi 2.English 3.Accountancy 4.Business Studies 5.Economics",
//     seats: 80,
//   },
//   {
//     title: "Vocational",
//     subject:
//       "1.General Hindi 2.English 3.Typing Hindi & English 4.General Foundational",
//     seats: 30,
//   },
//   {
//     title: "Agriculture",
//     subject:
//       "1.Agronomy sixith 2.Ag. Economics 3.Ag Zoology 4.Animal Husbandry 5.Ag.Chemistry",
//     seats: 30,
//   },
//   { title: "NCC", subject: "NCC", seats: 30 },
//   { title: "Scout & Guide", subject: "Scout & Guide", seats: 30 },
//   { title: "Music vocal", subject: "Music vocal", seats: 30 },
// ];

// export default function Courses() {
//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>
//         Courses
//       </Typography>
//       <Grid container spacing={2}>
//         {data.map((c, i) => (
//           <Grid item xs={12} sm={6} md={3} key={i}>
//             <CourseCard {...c} />
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogContent,
  IconButton,
  Tab,
  Tabs,
  LinearProgress,
  Avatar,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ScienceIcon from "@mui/icons-material/Science";
import CalculateIcon from "@mui/icons-material/Calculate";
import LanguageIcon from "@mui/icons-material/Language";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ExploreIcon from "@mui/icons-material/Explore";
import LaptopIcon from "@mui/icons-material/Laptop";

// ─── Theme ────────────────────────────────────────────────────────────────────
const theme = createTheme({
  palette: {
    primary: { main: "#E65100", light: "#FF8F00", dark: "#BF360C" },
    background: { default: "#FFF8F5", paper: "#FFFFFF" },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Merriweather', serif", fontWeight: 900 },
    h2: { fontFamily: "'Merriweather', serif", fontWeight: 700 },
    h5: { fontFamily: "'Merriweather', serif", fontWeight: 700 },
    h6: { fontFamily: "'Merriweather', serif", fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        .course-card {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease !important;
          cursor: pointer;
        }
        .course-card:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 28px 60px rgba(0,0,0,0.13) !important;
        }
        .course-card:hover .course-icon-box {
          transform: scale(1.1) rotate(-4deg) !important;
        }
        .course-card:hover .learn-more-btn {
          gap: 10px !important;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { opacity: 0; animation: fadeUp 0.55s ease forwards; }
      `,
    },
  },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const courses = [
  {
    id: 1,
    name: "Humanities",
    stream: "Class XI & XII",
    tagline: "Explore Language, Society & Culture",
    color: "#C62828",
    bg: "#FFF3E0",
    icon: <LanguageIcon />,
    subjects: [
      "General Hindi",
      "English",
      "Sanskrit",
      "Geography",
      "Civics",
      "Economics",
      "Music Vocal",
    ],
    seats: 120,
    duration: "2 Years",
    careers: ["Civil Services", "Journalism", "Law", "Teaching"],
    description:
      "The Humanities stream at Digvijaynath fosters critical thinking, linguistic excellence, and a deep understanding of society. Students develop analytical skills through literature, social sciences, and arts.",
    highlights: [
      "Rich cultural curriculum",
      "Expert language faculty",
      "Literary competitions",
      "Social internships",
    ],
    popularity: 85,
  },
  {
    id: 2,
    name: "Science",
    stream: "Class XI & XII",
    tagline: "Unleash the Scientist Within",
    color: "#1565C0",
    bg: "#E3F2FD",
    icon: <ScienceIcon />,
    subjects: [
      "General Hindi",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
      "Computer",
    ],
    seats: 90,
    duration: "2 Years",
    careers: ["Engineering", "Medicine", "Research", "IT"],
    description:
      "The Science stream provides rigorous training in Physics, Chemistry, Biology, and Mathematics, supported by fully equipped labs and experienced faculty to help students achieve top results.",
    highlights: [
      "State-of-the-art labs",
      "Olympiad coaching",
      "NEET/JEE guidance",
      "Science exhibitions",
    ],
    popularity: 95,
  },
  {
    id: 3,
    name: "Commerce",
    stream: "Class XI & XII",
    tagline: "Build the Business Leaders of Tomorrow",
    color: "#2E7D32",
    bg: "#E8F5E9",
    icon: <CalculateIcon />,
    subjects: [
      "General Hindi",
      "English",
      "Accountancy",
      "Business Studies",
      "Economics",
      "General Foundational",
    ],
    seats: 100,
    duration: "2 Years",
    careers: ["CA/CS", "Banking", "Management", "Entrepreneurship"],
    description:
      "Commerce at Digvijaynath equips students with practical knowledge of accounts, business laws, and economics. Our strong alumni network and industry-focused curriculum opens doors to top universities and careers.",
    highlights: [
      "Practical accounting training",
      "Business simulations",
      "Guest lectures",
      "Commerce Olympiad",
    ],
    popularity: 90,
  },
  {
    id: 4,
    name: "Vocational",
    stream: "Class XI & XII",
    tagline: "Skills That Shape Your Future",
    color: "#6A1B9A",
    bg: "#F3E5F5",
    icon: <LaptopIcon />,
    subjects: [
      "General Hindi",
      "English",
      "Typing Hindi & English",
      "General Foundational",
      "Computer Applications",
    ],
    seats: 60,
    duration: "2 Years",
    careers: [
      "Office Administration",
      "Data Entry",
      "IT Support",
      "Self-employment",
    ],
    description:
      "Our Vocational stream bridges education and employment, offering hands-on training in typing, computer applications, and office skills. Perfect for students seeking direct career readiness after Class XII.",
    highlights: [
      "Typing certification",
      "Computer lab training",
      "Job placement support",
      "Practical-focused",
    ],
    popularity: 72,
  },
  {
    id: 5,
    name: "Agriculture",
    stream: "Class XI & XII",
    tagline: "Cultivating Knowledge for a Green Future",
    color: "#558B2F",
    bg: "#F1F8E9",
    icon: <AgricultureIcon />,
    subjects: [
      "Agronomy",
      "Agricultural Economics",
      "Agricultural Zoology",
      "Animal Husbandry",
      "Agricultural Chemistry",
    ],
    seats: 60,
    duration: "2 Years",
    careers: [
      "Agri Officer",
      "Horticulture",
      "Soil Science",
      "Rural Development",
    ],
    description:
      "The Agriculture stream offers deep insight into crop science, animal husbandry, and sustainable farming. Unique to our college, this stream is highly relevant for UP's agrarian economy and opens doors to state agri services.",
    highlights: [
      "Field-based learning",
      "Government schemes awareness",
      "Agri fairs & expos",
      "Soil & crop labs",
    ],
    popularity: 68,
  },
  {
    id: 6,
    name: "NCC",
    stream: "Elective (All Streams)",
    tagline: "Discipline, Leadership & National Service",
    color: "#37474F",
    bg: "#ECEFF1",
    icon: <MilitaryTechIcon />,
    subjects: [
      "NCC Theory",
      "Drill & Parade",
      "Map Reading",
      "First Aid",
      "Leadership Training",
    ],
    seats: 80,
    duration: "2 Years",
    careers: [
      "Armed Forces",
      "Police Services",
      "Government Jobs",
      "Leadership roles",
    ],
    description:
      "NCC at Digvijaynath instils discipline, patriotism, and leadership. Cadets receive training in drill, first aid, and adventure activities, while earning the prestigious NCC 'C' certificate for additional marks in competitive exams.",
    highlights: [
      "NCC 'C' Certificate",
      "Republic Day camps",
      "Adventure activities",
      "Defence career edge",
    ],
    popularity: 78,
  },
  {
    id: 7,
    name: "Scout & Guide",
    stream: "Elective (All Streams)",
    tagline: "Be Prepared — Serve, Explore, Grow",
    color: "#00695C",
    bg: "#E0F2F1",
    icon: <ExploreIcon />,
    subjects: [
      "Scout/Guide Training",
      "Community Service",
      "Outdoor Skills",
      "First Aid",
      "Environment Awareness",
    ],
    seats: 50,
    duration: "Ongoing",
    careers: ["Social Work", "NGOs", "Public Services", "Community Leadership"],
    description:
      "Scout & Guide activities at our college build character, teamwork, and community responsibility. Students participate in state and national jamborees, earning badges that reflect their practical skills and service commitment.",
    highlights: [
      "State Jamboree participation",
      "Community projects",
      "Merit badge system",
      "Nature camps",
    ],
    popularity: 62,
  },
  {
    id: 8,
    name: "Music Vocal",
    stream: "Elective (All Streams)",
    tagline: "Express, Perform & Inspire Through Music",
    color: "#AD1457",
    bg: "#FCE4EC",
    icon: <MusicNoteIcon />,
    subjects: [
      "Classical Vocal",
      "Hindustani Music Theory",
      "Ragas & Talas",
      "Devotional Music",
      "Performance Practice",
    ],
    seats: 40,
    duration: "2 Years",
    careers: [
      "Performing Artist",
      "Music Teacher",
      "Film & Media",
      "Cultural Tourism",
    ],
    description:
      "Our Music Vocal program celebrates India's rich classical heritage. Under the guidance of experienced maestros, students learn Hindustani classical music, ragas, and talas, and perform at college and inter-college festivals.",
    highlights: [
      "Classical raga training",
      "Annual music festival",
      "State competition entries",
      "Expert guru mentorship",
    ],
    popularity: 58,
  },
];

const STREAM_FILTERS = ["All", "Class XI & XII", "Elective"];

// ─── Course Card ──────────────────────────────────────────────────────────────
function CourseCard({ course, index, onClick }) {
  return (
    <Card
      className="course-card fade-up"
      elevation={0}
      onClick={() => onClick(course)}
      sx={{
        animationDelay: `${index * 0.07}s`,
        border: "1px solid",
        borderColor: `${course.color}22`,
        borderRadius: 4,
        overflow: "visible",
        height: "100%",
      }}
    >
      {/* Top accent bar */}
      <Box
        sx={{
          height: 5,
          borderRadius: "16px 16px 0 0",
          background: `linear-gradient(90deg, ${course.color}, ${course.color}88)`,
        }}
      />

      <CardContent sx={{ p: 3, pb: "24px !important" }}>
        {/* Icon + Name */}
        <Stack direction="row" spacing={2} alignItems="flex-start" mb={2}>
          <Box
            className="course-icon-box"
            sx={{
              width: 52,
              height: 52,
              borderRadius: 3,
              flexShrink: 0,
              bgcolor: course.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: course.color,
              transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              "& svg": { fontSize: 26 },
            }}
          >
            {course.icon}
          </Box>
          <Box flex={1}>
            <Typography
              variant="h6"
              sx={{
                fontSize: 17,
                color: "text.primary",
                lineHeight: 1.2,
                mb: 0.3,
              }}
            >
              {course.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: course.color,
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "0.04em",
              }}
            >
              {course.stream}
            </Typography>
          </Box>
        </Stack>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: 1.6,
            mb: 2.5,
            fontStyle: "italic",
          }}
        >
          "{course.tagline}"
        </Typography>

        {/* Subject chips */}
        <Stack direction="row" flexWrap="wrap" gap={0.75} mb={2.5}>
          {course.subjects.slice(0, 4).map((s) => (
            <Chip
              key={s}
              label={s}
              size="small"
              sx={{
                height: 22,
                fontSize: 10.5,
                fontWeight: 500,
                bgcolor: `${course.color}10`,
                color: course.color,
                border: `1px solid ${course.color}30`,
              }}
            />
          ))}
          {course.subjects.length > 4 && (
            <Chip
              label={`+${course.subjects.length - 4} more`}
              size="small"
              sx={{
                height: 22,
                fontSize: 10.5,
                bgcolor: "#f5f5f5",
                color: "#888",
              }}
            />
          )}
        </Stack>

        <Divider sx={{ borderColor: "rgba(0,0,0,0.06)", mb: 2 }} />

        {/* Meta row */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Stack spacing={0.3}>
            <Typography
              variant="caption"
              color="text.disabled"
              fontWeight={300}
            >
              Seats
            </Typography>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <GroupsIcon sx={{ fontSize: 14, color: course.color }} />
              <Typography variant="body2" fontWeight={600}>
                {course.seats}
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={0.3} alignItems="center">
            <Typography
              variant="caption"
              color="text.disabled"
              fontWeight={300}
            >
              Duration
            </Typography>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <AccessTimeIcon sx={{ fontSize: 14, color: course.color }} />
              <Typography variant="body2" fontWeight={600}>
                {course.duration}
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={0.3} alignItems="flex-end">
            <Typography
              variant="caption"
              color="text.disabled"
              fontWeight={300}
            >
              Popularity
            </Typography>
            <Typography
              variant="body2"
              fontWeight={700}
              sx={{ color: course.color }}
            >
              {course.popularity}%
            </Typography>
          </Stack>
        </Stack>

        {/* Popularity bar */}
        <LinearProgress
          variant="determinate"
          value={course.popularity}
          sx={{
            height: 5,
            borderRadius: 3,
            mb: 2.5,
            bgcolor: `${course.color}18`,
            "& .MuiLinearProgress-bar": {
              bgcolor: course.color,
              borderRadius: 3,
            },
          }}
        />

        {/* Learn more */}
        <Stack
          className="learn-more-btn"
          direction="row"
          alignItems="center"
          sx={{
            gap: "6px",
            color: course.color,
            transition: "gap 0.25s ease",
            cursor: "pointer",
          }}
        >
          <Typography variant="body2" fontWeight={600} sx={{ fontSize: 13 }}>
            Explore Course
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: 16 }} />
        </Stack>
      </CardContent>
    </Card>
  );
}

// ─── Course Dialog ─────────────────────────────────────────────────────────────
function CourseDialog({ course, onClose }) {
  if (!course) return null;
  return (
    <Dialog
      open
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{ sx: { borderRadius: 4, overflow: "hidden" } }}
    >
      {/* Banner */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${course.color} 0%, ${course.color}aa 100%)`,
          pt: 5,
          pb: 4,
          px: 4,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {[
          { s: 200, r: -60, t: -60, o: 0.08 },
          { s: 120, r: 60, b: -40, o: 0.06 },
        ].map((c, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: c.s,
              height: c.s,
              borderRadius: "50%",
              bgcolor: "#fff",
              right: c.r,
              top: c.t,
              bottom: c.b,
              opacity: c.o,
              pointerEvents: "none",
            }}
          />
        ))}
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            bgcolor: "rgba(0,0,0,0.2)",
            color: "#fff",
            "&:hover": { bgcolor: "rgba(0,0,0,0.4)" },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: 3,
            bgcolor: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            mb: 2,
            "& svg": { fontSize: 30 },
          }}
        >
          {course.icon}
        </Box>
        <Typography variant="h5" sx={{ color: "#fff", mb: 0.5 }}>
          {course.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "rgba(255,255,255,0.75)", fontWeight: 300 }}
        >
          {course.tagline}
        </Typography>
      </Box>

      <DialogContent sx={{ p: 3.5 }}>
        {/* Stats row */}
        <Grid container spacing={1.5} mb={3}>
          {[
            { icon: <GroupsIcon />, label: "Seats", value: course.seats },
            {
              icon: <AccessTimeIcon />,
              label: "Duration",
              value: course.duration,
            },
            { icon: <SchoolIcon />, label: "Stream", value: course.stream },
            {
              icon: <MenuBookIcon />,
              label: "Subjects",
              value: `${course.subjects.length} Total`,
            },
          ].map(({ icon, label, value }) => (
            <Grid item xs={6} key={label}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ bgcolor: course.bg, borderRadius: 2.5, p: 1.5 }}
              >
                <Box sx={{ color: course.color, "& svg": { fontSize: 18 } }}>
                  {icon}
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    fontWeight={300}
                    display="block"
                  >
                    {label}
                  </Typography>
                  <Typography variant="body2" fontWeight={700}>
                    {value}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={300}
          lineHeight={1.8}
          mb={3}
        >
          {course.description}
        </Typography>

        {/* Subjects */}
        <Typography
          variant="overline"
          sx={{
            color: "text.secondary",
            letterSpacing: "0.12em",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            mb: 1.5,
          }}
        >
          <MenuBookIcon sx={{ fontSize: 14 }} /> All Subjects
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
          {course.subjects.map((s, i) => (
            <Chip
              key={s}
              label={`${i + 1}. ${s}`}
              size="small"
              sx={{
                bgcolor: `${course.color}12`,
                color: course.color,
                fontWeight: 500,
                border: `1px solid ${course.color}25`,
              }}
            />
          ))}
        </Stack>

        {/* Highlights */}
        <Typography
          variant="overline"
          sx={{
            color: "text.secondary",
            letterSpacing: "0.12em",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            mb: 1.5,
          }}
        >
          <EmojiEventsIcon sx={{ fontSize: 14 }} /> Course Highlights
        </Typography>
        <Grid container spacing={1} mb={3}>
          {course.highlights.map((h) => (
            <Grid item xs={6} key={h}>
              <Stack direction="row" spacing={1} alignItems="center">
                <CheckCircleOutlineIcon
                  sx={{ fontSize: 16, color: course.color, flexShrink: 0 }}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight={400}
                >
                  {h}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Career paths */}
        <Typography
          variant="overline"
          sx={{
            color: "text.secondary",
            letterSpacing: "0.12em",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            mb: 1.5,
          }}
        >
          <SchoolIcon sx={{ fontSize: 14 }} /> Career Paths
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
          {course.careers.map((c) => (
            <Chip
              key={c}
              label={c}
              size="small"
              sx={{ bgcolor: "#f0f4ff", color: "#1A237E", fontWeight: 500 }}
            />
          ))}
        </Stack>

        <Divider sx={{ mb: 2 }} />
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: course.color,
              borderRadius: 2.5,
              textTransform: "none",
              fontWeight: 600,
              py: 1.25,
              boxShadow: `0 6px 20px ${course.color}45`,
              "&:hover": { bgcolor: course.color, filter: "brightness(0.88)" },
            }}
          >
            Apply for Admission
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={onClose}
            sx={{
              borderColor: course.color,
              color: course.color,
              borderRadius: 2.5,
              textTransform: "none",
              fontWeight: 600,
              py: 1.25,
            }}
          >
            Close
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function CoursesSection() {
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState(null);

  const activeFilter = STREAM_FILTERS[tab];
  const filtered =
    activeFilter === "All"
      ? courses
      : courses.filter((c) =>
          activeFilter === "Class XI & XII"
            ? c.stream === "Class XI & XII"
            : c.stream.includes("Elective"),
        );

  const totalSeats = courses.reduce((s, c) => s + c.seats, 0);
  const totalSubjects = [...new Set(courses.flatMap((c) => c.subjects))].length;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        {/* ── Hero ── */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #BF360C 0%, #E65100 55%, #FF8F00 100%)",
            pt: 7,
            pb: 6,
            px: 3,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {[
            { s: 320, r: -90, t: -90, o: 0.07 },
            { s: 200, r: 130, b: -70, o: 0.06 },
            { s: 110, l: 50, t: 30, o: 0.05 },
          ].map((c, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: c.s,
                height: c.s,
                borderRadius: "50%",
                bgcolor: "#fff",
                right: c.r,
                left: c.l,
                top: c.t,
                bottom: c.b,
                opacity: c.o,
                pointerEvents: "none",
              }}
            />
          ))}

          <Container maxWidth="lg">
            <Stack direction="row" alignItems="center" spacing={2} mb={1.5}>
              <Box
                sx={{
                  width: 40,
                  height: 3,
                  bgcolor: "rgba(255,255,255,0.6)",
                  borderRadius: 2,
                }}
              />
              <Typography
                variant="overline"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  letterSpacing: "0.2em",
                  fontSize: 12,
                }}
              >
                Digvijaynath Intermediate College
              </Typography>
            </Stack>

            <Typography
              variant="h1"
              sx={{
                fontSize: "clamp(36px,5vw,60px)",
                color: "#fff",
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Our Courses
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.75)",
                fontWeight: 300,
                maxWidth: 540,
                lineHeight: 1.75,
                mb: 4,
              }}
            >
              Choose your path from a wide range of streams, vocational
              programs, and co-curricular activities designed to prepare you for
              life, career, and beyond.
            </Typography>

            {/* Stats */}
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              {[
                {
                  label: "Streams & Programs",
                  value: courses.length,
                  icon: "📚",
                },
                { label: "Total Seats", value: totalSeats, icon: "👩‍🎓" },
                { label: "Unique Subjects", value: totalSubjects, icon: "📖" },
                { label: "Years of Excellence", value: "75+", icon: "🏆" },
              ].map((s) => (
                <Box
                  key={s.label}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 3,
                    px: 2.5,
                    py: 1.5,
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography sx={{ fontSize: 20 }}>{s.icon}</Typography>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{ color: "#fff", fontSize: 22, lineHeight: 1 }}
                      >
                        {s.value}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 300 }}
                      >
                        {s.label}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Container>
        </Box>

        {/* ── Tabs ── */}
        <Box
          sx={{
            bgcolor: "#fff",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <Container maxWidth="lg">
            <Tabs
              value={tab}
              onChange={(_, v) => setTab(v)}
              TabIndicatorProps={{
                style: { background: "#E65100", height: 3, borderRadius: 2 },
              }}
              sx={{
                "& .MuiTab-root": {
                  fontFamily: "'DM Sans',sans-serif",
                  fontWeight: 500,
                  fontSize: 13,
                  color: "#888",
                  textTransform: "none",
                  minHeight: 52,
                },
                "& .Mui-selected": {
                  color: "#E65100 !important",
                  fontWeight: 600,
                },
              }}
            >
              {STREAM_FILTERS.map((f, i) => {
                const count =
                  f === "All"
                    ? courses.length
                    : f === "Class XI & XII"
                      ? courses.filter((c) => c.stream === "Class XI & XII")
                          .length
                      : courses.filter((c) => c.stream.includes("Elective"))
                          .length;
                return (
                  <Tab
                    key={f}
                    label={f}
                    icon={
                      <Chip
                        label={count}
                        size="small"
                        sx={{
                          height: 18,
                          fontSize: 10,
                          bgcolor: tab === i ? "#E6510015" : "#f0f0f0",
                          color: tab === i ? "#E65100" : "#888",
                        }}
                      />
                    }
                    iconPosition="end"
                  />
                );
              })}
            </Tabs>
          </Container>
        </Box>

        {/* ── Grid ── */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={4}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: 16, color: "text.primary" }}
            >
              {activeFilter === "All" ? "All Programs" : activeFilter}
              <Box
                component="span"
                sx={{
                  color: "text.secondary",
                  fontWeight: 300,
                  ml: 1,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                ({filtered.length} programs)
              </Box>
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {filtered.map((course, i) => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <CourseCard course={course} index={i} onClick={setSelected} />
              </Grid>
            ))}
          </Grid>

          {/* Admission CTA */}
          <Box
            sx={{
              mt: 8,
              borderRadius: 4,
              overflow: "hidden",
              background:
                "linear-gradient(135deg, #BF360C 0%, #E65100 60%, #FF8F00 100%)",
              p: 5,
              textAlign: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: -60,
                top: -60,
                width: 200,
                height: 200,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.06)",
              }}
            />
            <SchoolIcon
              sx={{ fontSize: 44, color: "rgba(255,255,255,0.5)", mb: 1.5 }}
            />
            <Typography variant="h5" sx={{ color: "#fff", mb: 1.5 }}>
              Ready to Begin Your Journey?
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.75)",
                fontWeight: 300,
                mb: 3,
                maxWidth: 480,
                mx: "auto",
                lineHeight: 1.75,
              }}
            >
              Admissions for 2025–26 are open. Join hundreds of students
              building their future at Digvijaynath Intermediate College.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#fff",
                  color: "#E65100",
                  fontWeight: 700,
                  borderRadius: 3,
                  px: 4,
                  py: 1.25,
                  textTransform: "none",
                  fontSize: 15,
                  "&:hover": {
                    bgcolor: "#fff",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  },
                }}
              >
                Apply Now
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.5)",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: 3,
                  px: 4,
                  py: 1.25,
                  textTransform: "none",
                  fontSize: 15,
                  "&:hover": {
                    borderColor: "#fff",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Download Prospectus
              </Button>
            </Stack>
          </Box>
        </Container>

        {/* Footer */}
        <Box sx={{ bgcolor: "#BF360C", py: 3, textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 300 }}
          >
            © 2026 Digvijaynath Intermediate College, Chowk Bazar, Maharajganj —
            All Rights Reserved.
          </Typography>
        </Box>
      </Box>

      <CourseDialog course={selected} onClose={() => setSelected(null)} />
    </ThemeProvider>
  );
}
