import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  Stack,
  Divider,
  Tabs,
  Tab,
  Tooltip,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// ─── Theme ────────────────────────────────────────────────────────────────────
const theme = createTheme({
  palette: {
    primary: { main: "#E65100", light: "#FF8F00", dark: "#BF360C" },
    secondary: { main: "#1A237E" },
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

        .faculty-card {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease !important;
        }
        .faculty-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 50px rgba(230,81,0,0.18) !important;
        }
        .faculty-card:hover .avatar-ring {
          box-shadow: 0 0 0 4px #E65100, 0 0 0 8px rgba(230,81,0,0.15) !important;
        }
        .faculty-card:hover .dept-chip {
          background: #E65100 !important;
          color: #fff !important;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          opacity: 0;
          animation: fadeUp 0.55s ease forwards;
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `,
    },
  },
});

// ─── Faculty Data ─────────────────────────────────────────────────────────────
const departments = [
  "All",
  "Science",
  "Commerce",
  "Arts",
  "Mathematics",
  "Computer Science",
];

const faculty = [
  {
    id: 1,
    name: "Dr. Arvind Kumar Mehta",
    dept: "Computer Science",
    designation: "Head of Department",
    exp: "18 yrs",
    qual: "Ph.D. (IIT Delhi)",
    subjects: ["Data Structures", "Algorithms", "DBMS"],
    awards: ["Best Teacher 2022", "Research Excellence"],
    email: "a.mehta@digvijay.edu.in",
    avatar: "https://i.pravatar.cc/150?img=12",
    color: "#E65100",
  },
  {
    id: 2,
    name: "Dr. Reena Sharma",
    dept: "Science",
    designation: "Senior Lecturer",
    exp: "14 yrs",
    qual: "Ph.D. (BHU)",
    subjects: ["Physics", "Applied Physics", "Lab Work"],
    awards: ["State Science Award 2021"],
    email: "r.sharma@digvijay.edu.in",
    avatar: "https://i.pravatar.cc/150?img=47",
    color: "#1565C0",
  },
  {
    id: 3,
    name: "Prof. Prakash Verma",
    dept: "Commerce",
    designation: "Associate Professor",
    exp: "11 yrs",
    qual: "M.Com, NET",
    subjects: ["Accountancy", "Business Studies", "Economics"],
    awards: ["Outstanding Educator 2023"],
    email: "p.verma@digvijay.edu.in",
    avatar: "https://i.pravatar.cc/150?img=33",
    color: "#2E7D32",
  },
  {
    id: 4,
    name: "Dr. Sunita Patel",
    dept: "Mathematics",
    designation: "Senior Lecturer",
    exp: "16 yrs",
    qual: "Ph.D. Mathematics",
    subjects: ["Calculus", "Algebra", "Statistics"],
    awards: ["Best Research Paper 2020"],
    email: "s.patel@digvijay.edu.in",
    avatar: "https://i.pravatar.cc/150?img=45",
    color: "#6A1B9A",
  },
  {
    id: 5,
    name: "Mr. Rakesh Tiwari",
    dept: "Arts",
    designation: "Lecturer",
    exp: "9 yrs",
    qual: "M.A., B.Ed.",
    subjects: ["Hindi Literature", "Sanskrit", "History"],
    awards: [],
    email: "r.tiwari@digvijay.edu.in",
    avatar: "https://i.pravatar.cc/150?img=15",
    color: "#AD1457",
  },
  {
    id: 6,
    name: "Dr. Meena Gupta",
    dept: "Science",
    designation: "Associate Professor",
    exp: "20 yrs",
    qual: "Ph.D. (Lucknow Univ.)",
    subjects: ["Chemistry", "Organic Chemistry"],
    awards: ["Science Olympiad Mentor", "Excellence Award 2019"],
    email: "m.gupta@digvijay.edu.in",
    avatar: "https://i.pravatar.cc/150?img=48",
    color: "#00695C",
  },
  {
    id: 7,
    name: "Mr. Vikas Srivastava",
    dept: "Mathematics",
    designation: "Lecturer",
    exp: "7 yrs",
    qual: "M.Sc., B.Ed.",
    subjects: ["Trigonometry", "Coordinate Geometry"],
    awards: [],
    email: "v.srivastava@digvijay.edu.in",
    avatar: "https://i.pravatar.cc/150?img=22",
    color: "#4527A0",
  },
  {
    id: 8,
    name: "Mrs. Anjali Singh",
    dept: "Commerce",
    designation: "Lecturer",
    exp: "6 yrs",
    qual: "MBA, B.Ed.",
    subjects: ["Marketing", "Entrepreneurship"],
    awards: ["Young Educator 2023"],
    email: "a.singh@digvijay.edu.in",
    avatar: "https://i.pravatar.cc/150?img=44",
    color: "#E65100",
  },
  {
    id: 9,
    name: "Prof. Dinesh Yadav",
    dept: "Arts",
    designation: "Senior Lecturer",
    exp: "13 yrs",
    qual: "M.A. Geography, NET",
    subjects: ["Geography", "Civics", "Political Science"],
    awards: ["Best Mentor 2022"],
    email: "d.yadav@digvijay.edu.in",
    avatar: "https://i.pravatar.cc/150?img=18",
    color: "#0277BD",
  },
];

// ─── Faculty Card ─────────────────────────────────────────────────────────────
function FacultyCard({ member, index, onClick }) {
  return (
    <Card
      className="faculty-card fade-up"
      onClick={() => onClick(member)}
      elevation={0}
      sx={{
        animationDelay: `${index * 0.07}s`,
        cursor: "pointer",
        border: "1px solid",
        borderColor: "rgba(230,81,0,0.1)",
        borderRadius: 4,
        overflow: "visible",
        position: "relative",
        bgcolor: "background.paper",
      }}
    >
      {/* Top color bar */}
      <Box
        sx={{
          height: 6,
          borderRadius: "16px 16px 0 0",
          background: `linear-gradient(90deg, ${member.color}, ${member.color}99)`,
        }}
      />

      <CardContent sx={{ pt: 3, pb: "20px !important", px: 3 }}>
        <Stack direction="row" spacing={2} alignItems="flex-start">
          {/* Avatar */}
          <Box sx={{ position: "relative", flexShrink: 0 }}>
            <Avatar
              className="avatar-ring"
              src={member.avatar}
              alt={member.name}
              sx={{
                width: 72,
                height: 72,
                border: `3px solid ${member.color}`,
                boxShadow: `0 0 0 0px ${member.color}`,
                transition: "box-shadow 0.3s ease",
              }}
            />
            {member.awards.length > 0 && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: -4,
                  right: -4,
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "#FF8F00",
                  border: "2px solid #fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EmojiEventsIcon sx={{ fontSize: 12, color: "#fff" }} />
              </Box>
            )}
          </Box>

          {/* Info */}
          <Box flex={1} minWidth={0}>
            <Typography
              variant="h6"
              sx={{
                fontSize: 15,
                lineHeight: 1.3,
                color: "text.primary",
                mb: 0.4,
              }}
              noWrap
            >
              {member.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                fontSize: 12,
                mb: 0.75,
              }}
            >
              {member.designation}
            </Typography>

            <Chip
              className="dept-chip"
              label={member.dept}
              size="small"
              sx={{
                bgcolor: `${member.color}15`,
                color: member.color,
                fontWeight: 600,
                fontSize: 11,
                border: `1px solid ${member.color}40`,
                transition: "all 0.25s ease",
                height: 22,
              }}
            />
          </Box>
        </Stack>

        <Divider sx={{ my: 2, borderColor: "rgba(0,0,0,0.06)" }} />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={2}>
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                fontWeight={300}
              >
                Experience
              </Typography>
              <Typography variant="body2" fontWeight={600} color="text.primary">
                {member.exp}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                fontWeight={300}
              >
                Qualification
              </Typography>
              <Typography
                variant="body2"
                fontWeight={600}
                color="text.primary"
                sx={{ fontSize: 12 }}
              >
                {member.qual}
              </Typography>
            </Box>
          </Stack>

          <Tooltip title="View Profile">
            <IconButton
              size="small"
              sx={{
                bgcolor: `${member.color}12`,
                color: member.color,
                "&:hover": { bgcolor: member.color, color: "#fff" },
                transition: "all 0.2s",
              }}
              onClick={(e) => {
                e.stopPropagation();
                onClick(member);
              }}
            >
              <SchoolIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      </CardContent>
    </Card>
  );
}

// ─── Profile Dialog ───────────────────────────────────────────────────────────
function ProfileDialog({ member, onClose }) {
  if (!member) return null;
  return (
    <Dialog
      open
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{ sx: { borderRadius: 4, overflow: "hidden" } }}
    >
      {/* Header banner */}
      <Box
        sx={{
          height: 120,
          position: "relative",
          background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}88 100%)`,
        }}
      >
        {/* Decorative circles */}
        <Box
          sx={{
            position: "absolute",
            right: -30,
            top: -30,
            width: 150,
            height: 150,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: 40,
            bottom: -40,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
          }}
        />

        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            bgcolor: "rgba(0,0,0,0.25)",
            color: "#fff",
            "&:hover": { bgcolor: "rgba(0,0,0,0.45)" },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <DialogContent sx={{ px: 4, pt: 0, pb: 4 }}>
        {/* Avatar straddling banner */}
        <Box sx={{ mt: -5, mb: 2 }}>
          <Avatar
            src={member.avatar}
            alt={member.name}
            sx={{
              width: 90,
              height: 90,
              border: `4px solid #fff`,
              boxShadow: `0 8px 24px rgba(0,0,0,0.15)`,
            }}
          />
        </Box>

        <Typography variant="h5" sx={{ color: "text.primary", mb: 0.5 }}>
          {member.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "primary.main", fontWeight: 600, mb: 0.5 }}
        >
          {member.designation}
        </Typography>
        <Chip
          label={member.dept}
          size="small"
          sx={{
            bgcolor: `${member.color}15`,
            color: member.color,
            fontWeight: 600,
            border: `1px solid ${member.color}40`,
            mb: 3,
          }}
        />

        <Grid container spacing={2} mb={3}>
          {[
            { label: "Experience", value: member.exp },
            { label: "Qualification", value: member.qual },
          ].map(({ label, value }) => (
            <Grid item xs={6} key={label}>
              <Box sx={{ bgcolor: "#f8f4f0", borderRadius: 2, p: 1.5 }}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  fontWeight={300}
                >
                  {label}
                </Typography>
                <Typography variant="body2" fontWeight={600}>
                  {value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

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
          <MenuBookIcon sx={{ fontSize: 14 }} /> Subjects Taught
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mb={3}>
          {member.subjects.map((s) => (
            <Chip
              key={s}
              label={s}
              size="small"
              sx={{
                bgcolor: "#f0f4ff",
                color: "#1A237E",
                fontWeight: 500,
                mb: 0.5,
              }}
            />
          ))}
        </Stack>

        {/* Awards */}
        {member.awards.length > 0 && (
          <>
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
              <EmojiEventsIcon sx={{ fontSize: 14 }} /> Awards & Recognition
            </Typography>
            <Stack spacing={1} mb={3}>
              {member.awards.map((a) => (
                <Stack key={a} direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: "#FF8F00",
                      flexShrink: 0,
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {a}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </>
        )}

        {/* Contact */}
        <Divider sx={{ mb: 2 }} />
        <Stack direction="row" spacing={1} alignItems="center">
          <EmailIcon sx={{ fontSize: 16, color: "text.secondary" }} />
          <Typography variant="body2" color="text.secondary">
            {member.email}
          </Typography>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function FacultySection() {
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState(null);

  const activeDept = departments[tab];
  const filtered =
    activeDept === "All"
      ? faculty
      : faculty.filter((f) => f.dept === activeDept);

  const stats = [
    { label: "Total Faculty", value: faculty.length },
    { label: "Departments", value: departments.length - 1 },
    {
      label: "Ph.D. Holders",
      value: faculty.filter((f) => f.qual.startsWith("Ph.D")).length,
    },
    {
      label: "Award Winners",
      value: faculty.filter((f) => f.awards.length > 0).length,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        {/* ── Hero Banner ── */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #BF360C 0%, #E65100 50%, #FF8F00 100%)",
            pt: 7,
            pb: 6,
            px: 3,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative circles */}
          {[
            { size: 300, right: -80, top: -80, opacity: 0.07 },
            { size: 180, right: 120, bottom: -60, opacity: 0.06 },
            { size: 100, left: 60, top: 20, opacity: 0.05 },
          ].map((c, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: c.size,
                height: c.size,
                borderRadius: "50%",
                background: "#fff",
                right: c.right,
                left: c.left,
                top: c.top,
                bottom: c.bottom,
                opacity: c.opacity,
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
              Our Faculty
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.75)",
                fontWeight: 300,
                maxWidth: 520,
                lineHeight: 1.7,
              }}
            >
              Meet our distinguished educators — experienced, passionate, and
              committed to shaping the future of every student at Digvijaynath
              Intermediate College.
            </Typography>

            {/* Stat pills */}
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              useFlexGap
              mt={4}
            >
              {stats.map((s) => (
                <Box
                  key={s.label}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 3,
                    px: 2.5,
                    py: 1.25,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#fff", fontSize: 24, lineHeight: 1 }}
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
              variant="scrollable"
              scrollButtons="auto"
              TabIndicatorProps={{
                style: { background: "#E65100", height: 3, borderRadius: 2 },
              }}
              sx={{
                "& .MuiTab-root": {
                  fontFamily: "'DM Sans', sans-serif",
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
              {departments.map((d, i) => (
                <Tab
                  key={d}
                  label={d}
                  icon={
                    <Chip
                      label={
                        d === "All"
                          ? faculty.length
                          : faculty.filter((f) => f.dept === d).length
                      }
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
              ))}
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
              sx={{ color: "text.primary", fontSize: 16 }}
            >
              {activeDept === "All"
                ? "All Faculty Members"
                : `${activeDept} Department`}
              <Box
                component="span"
                sx={{
                  color: "text.secondary",
                  fontWeight: 300,
                  ml: 1,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                ({filtered.length} members)
              </Box>
            </Typography>
          </Stack>

          <Grid container spacing={2.5}>
            {filtered.map((member, i) => (
              <Grid item xs={12} sm={6} md={4} key={member.id}>
                <FacultyCard member={member} index={i} onClick={setSelected} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <ProfileDialog member={selected} onClose={() => setSelected(null)} />
    </ThemeProvider>
  );
}
