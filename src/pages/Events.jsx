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
  Tab,
  Tabs,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import PeopleIcon from "@mui/icons-material/People";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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

        .event-card {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease !important;
          cursor: pointer;
        }
        .event-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 24px 56px rgba(230,81,0,0.16) !important;
        }
        .event-card:hover .event-img {
          transform: scale(1.06) !important;
        }
        .event-card:hover .arrow-icon {
          transform: translateX(5px) !important;
          opacity: 1 !important;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { opacity: 0; animation: fadeUp 0.55s ease forwards; }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }
        .live-dot { animation: pulse 1.6s ease-in-out infinite; }

        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `,
    },
  },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const FILTERS = [
  "All",
  "Upcoming",
  "Ongoing",
  "Completed",
  "Academic",
  "Cultural",
  "Sports",
  "Science",
];

const events = [
  {
    id: 1,
    title: "TechFest 2025",
    subtitle: "Annual Technical Innovation Festival",
    date: "Jan 12, 2025",
    time: "9:00 AM – 5:00 PM",
    location: "Main Auditorium",
    category: "Science",
    status: "Completed",
    description:
      "A grand celebration of technology and innovation where students showcase their projects, compete in coding challenges, robotics, and quiz competitions. Open to all streams.",
    attendees: 320,
    capacity: 400,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    color: "#1565C0",
    highlights: [
      "Robotics Contest",
      "Coding Hackathon",
      "Science Quiz",
      "Project Exhibition",
    ],
    organizer: "Computer Science Dept.",
  },
  {
    id: 2,
    title: "Cultural Night",
    subtitle: "A Night Full of Performances & Creativity",
    date: "Feb 25, 2025",
    time: "6:00 PM – 10:00 PM",
    location: "College Ground",
    category: "Cultural",
    status: "Completed",
    description:
      "An enchanting evening showcasing the diverse talents of our students through dance, drama, music, and art. A night that celebrates our rich cultural heritage.",
    attendees: 500,
    capacity: 500,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    color: "#AD1457",
    highlights: [
      "Classical Dance",
      "Drama Performance",
      "Live Music",
      "Art Display",
    ],
    organizer: "Arts Department",
  },
  {
    id: 3,
    title: "Annual Sports Meet",
    subtitle: "Inter-House Athletics Championship 2025",
    date: "Mar 15, 2025",
    time: "8:00 AM – 4:00 PM",
    location: "Sports Ground",
    category: "Sports",
    status: "Upcoming",
    description:
      "The biggest sporting event of the year! Students compete across 20+ disciplines in this inter-house championship. Track & field, team games, and much more await.",
    attendees: 0,
    capacity: 600,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
    color: "#2E7D32",
    highlights: ["Track & Field", "Football", "Basketball", "Kabaddi"],
    organizer: "Sports Committee",
  },
  {
    id: 4,
    title: "Science Exhibition",
    subtitle: "Innovations for a Sustainable Tomorrow",
    date: "Apr 5, 2025",
    time: "10:00 AM – 3:00 PM",
    location: "Science Block",
    category: "Academic",
    status: "Upcoming",
    description:
      "Students from all classes present their scientific models, experiments, and innovations. Industry experts and judges will evaluate projects for awards.",
    attendees: 0,
    capacity: 250,
    image:
      "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=600&q=80",
    color: "#6A1B9A",
    highlights: [
      "Model Display",
      "Live Experiments",
      "Award Ceremony",
      "Expert Talk",
    ],
    organizer: "Science Faculty",
  },
  {
    id: 5,
    title: "Annual Prize Distribution",
    subtitle: "Celebrating Academic Excellence 2024-25",
    date: "Apr 20, 2025",
    time: "11:00 AM – 1:00 PM",
    location: "Main Hall",
    category: "Academic",
    status: "Upcoming",
    description:
      "A prestigious ceremony to honour the outstanding academic performers, attendance champions, and co-curricular achievers of the year.",
    attendees: 0,
    capacity: 350,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    color: "#E65100",
    highlights: [
      "Merit Awards",
      "Topper Felicitation",
      "Sports Trophy",
      "Special Honours",
    ],
    organizer: "Principal's Office",
  },
  {
    id: 6,
    title: "Holi Celebration",
    subtitle: "Festival of Colours — College Edition",
    date: "Mar 25, 2025",
    time: "10:00 AM – 1:00 PM",
    location: "College Courtyard",
    category: "Cultural",
    status: "Ongoing",
    description:
      "Join us in welcoming the festival of colours with organic gulal, music, and traditional sweets. A joyful event bringing together students, faculty, and staff.",
    attendees: 210,
    capacity: 300,
    image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=600&q=80",
    color: "#FF6F00",
    highlights: [
      "Organic Colours",
      "Folk Music",
      "Traditional Sweets",
      "Photography",
    ],
    organizer: "Student Council",
  },
];

const statusConfig = {
  Upcoming: {
    color: "#1565C0",
    bg: "#E3F2FD",
    icon: <NotificationsActiveIcon sx={{ fontSize: 12 }} />,
  },
  Ongoing: {
    color: "#2E7D32",
    bg: "#E8F5E9",
    icon: (
      <Box
        className="live-dot"
        sx={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          bgcolor: "#2E7D32",
          display: "inline-block",
        }}
      />
    ),
  },
  Completed: {
    color: "#757575",
    bg: "#F5F5F5",
    icon: <CheckCircleIcon sx={{ fontSize: 12 }} />,
  },
};

// ─── Featured Card ─────────────────────────────────────────────────────────────
function FeaturedCard({ event, onClick }) {
  const sc = statusConfig[event.status];
  return (
    <Card
      className="event-card fade-up"
      elevation={0}
      onClick={() => onClick(event)}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid rgba(230,81,0,0.1)",
        animationDelay: "0s",
      }}
    >
      <Box sx={{ position: "relative", height: 220, overflow: "hidden" }}>
        <Box
          className="event-img"
          component="img"
          src={event.image}
          alt={event.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
          }}
        />
        <Chip
          label={event.category}
          size="small"
          sx={{
            position: "absolute",
            top: 14,
            left: 14,
            bgcolor: event.color,
            color: "#fff",
            fontWeight: 600,
            fontSize: 11,
          }}
        />
        <Chip
          icon={sc.icon}
          label={event.status}
          size="small"
          sx={{
            position: "absolute",
            top: 14,
            right: 14,
            bgcolor: sc.bg,
            color: sc.color,
            fontWeight: 600,
            fontSize: 11,
            border: `1px solid ${sc.color}40`,
          }}
        />
        <Box sx={{ position: "absolute", bottom: 16, left: 20 }}>
          <Typography
            variant="h5"
            sx={{ color: "#fff", fontSize: 20, lineHeight: 1.3 }}
          >
            {event.title}
          </Typography>
        </Box>
      </Box>
      <CardContent sx={{ p: 2.5 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={300}
          sx={{ mb: 2, lineHeight: 1.65 }}
        >
          {event.description.slice(0, 110)}...
        </Typography>
        <Stack spacing={1} mb={2}>
          {[
            {
              icon: <CalendarMonthIcon sx={{ fontSize: 14 }} />,
              text: event.date,
            },
            {
              icon: <LocationOnIcon sx={{ fontSize: 14 }} />,
              text: event.location,
            },
          ].map(({ icon, text }) => (
            <Stack
              key={text}
              direction="row"
              spacing={0.75}
              alignItems="center"
            >
              <Box sx={{ color: event.color }}>{icon}</Box>
              <Typography variant="caption" color="text.secondary">
                {text}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={0.5} alignItems="center">
            <PeopleIcon sx={{ fontSize: 14, color: "text.disabled" }} />
            <Typography variant="caption" color="text.secondary">
              {event.status === "Upcoming"
                ? `${event.capacity} seats`
                : `${event.attendees} attended`}
            </Typography>
          </Stack>
          <Button
            size="small"
            endIcon={
              <ArrowForwardIcon
                className="arrow-icon"
                sx={{
                  transition: "transform 0.2s",
                  fontSize: "14px !important",
                }}
              />
            }
            sx={{
              color: event.color,
              fontWeight: 600,
              fontSize: 12,
              textTransform: "none",
              p: 0,
              minWidth: 0,
              "&:hover": { background: "transparent" },
            }}
          >
            View Details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

// ─── Compact Card ──────────────────────────────────────────────────────────────
function CompactCard({ event, index, onClick }) {
  const sc = statusConfig[event.status];
  return (
    <Card
      className="event-card fade-up"
      elevation={0}
      onClick={() => onClick(event)}
      sx={{
        borderRadius: 3,
        border: "1px solid rgba(0,0,0,0.07)",
        animationDelay: `${index * 0.07}s`,
        overflow: "hidden",
      }}
    >
      <Stack direction="row" sx={{ height: 100 }}>
        {/* Date sidebar */}
        <Box
          sx={{
            width: 72,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(160deg, ${event.color} 0%, ${event.color}bb 100%)`,
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 900,
              fontSize: 22,
              lineHeight: 1,
              fontFamily: "'Merriweather', serif",
            }}
          >
            {event.date.split(" ")[1].replace(",", "")}
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: 11,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {event.date.split(" ")[0]}
          </Typography>
        </Box>

        <CardContent
          sx={{
            p: "12px 16px !important",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              fontWeight={600}
              sx={{ lineHeight: 1.3, mb: 0.3 }}
              noWrap
            >
              {event.title}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={300}
              noWrap
            >
              {event.location}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Chip
              icon={sc.icon}
              label={event.status}
              size="small"
              sx={{
                height: 20,
                fontSize: 10,
                bgcolor: sc.bg,
                color: sc.color,
                fontWeight: 600,
                border: `1px solid ${sc.color}30`,
              }}
            />
            <Chip
              label={event.category}
              size="small"
              sx={{
                height: 20,
                fontSize: 10,
                bgcolor: `${event.color}15`,
                color: event.color,
                fontWeight: 600,
              }}
            />
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
}

// ─── Detail Dialog ────────────────────────────────────────────────────────────
function EventDialog({ event, onClose }) {
  if (!event) return null;
  const sc = statusConfig[event.status];
  const pct =
    event.capacity > 0
      ? Math.round((event.attendees / event.capacity) * 100)
      : 0;

  return (
    <Dialog
      open
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{ sx: { borderRadius: 4, overflow: "hidden" } }}
    >
      <Box sx={{ position: "relative", height: 200, overflow: "hidden" }}>
        <Box
          component="img"
          src={event.image}
          alt={event.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
          }}
        />
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            bgcolor: "rgba(0,0,0,0.35)",
            color: "#fff",
            "&:hover": { bgcolor: "rgba(0,0,0,0.55)" },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        <Box sx={{ position: "absolute", bottom: 16, left: 20 }}>
          <Chip
            label={event.category}
            size="small"
            sx={{ bgcolor: event.color, color: "#fff", fontWeight: 600, mr: 1 }}
          />
          <Chip
            icon={sc.icon}
            label={event.status}
            size="small"
            sx={{
              bgcolor: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(4px)",
              color: "#fff",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          />
        </Box>
      </Box>

      <DialogContent sx={{ p: 3.5 }}>
        <Typography variant="h5" sx={{ mb: 0.5, color: "text.primary" }}>
          {event.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={300}
          sx={{ mb: 2.5 }}
        >
          {event.subtitle}
        </Typography>

        {/* Meta info */}
        <Grid container spacing={1.5} mb={3}>
          {[
            { icon: <CalendarMonthIcon />, label: "Date", value: event.date },
            { icon: <AccessTimeIcon />, label: "Time", value: event.time },
            { icon: <LocationOnIcon />, label: "Venue", value: event.location },
            {
              icon: <PeopleIcon />,
              label: "Capacity",
              value: `${event.capacity} seats`,
            },
          ].map(({ icon, label, value }) => (
            <Grid item xs={6} key={label}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ bgcolor: "#f8f4f0", borderRadius: 2, p: 1.25 }}
              >
                <Box sx={{ color: event.color, "& svg": { fontSize: 18 } }}>
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
                  <Typography variant="body2" fontWeight={600}>
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
          lineHeight={1.75}
          mb={3}
        >
          {event.description}
        </Typography>

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
          <EmojiEventsIcon sx={{ fontSize: 14 }} /> Event Highlights
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
          {event.highlights.map((h) => (
            <Chip
              key={h}
              label={h}
              size="small"
              sx={{
                bgcolor: `${event.color}12`,
                color: event.color,
                fontWeight: 500,
                border: `1px solid ${event.color}30`,
              }}
            />
          ))}
        </Stack>

        {/* Attendance bar */}
        {event.status !== "Upcoming" && (
          <>
            <Divider sx={{ mb: 2 }} />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={1}
            >
              <Typography variant="caption" color="text.secondary">
                Attendance
              </Typography>
              <Typography
                variant="caption"
                fontWeight={600}
                sx={{ color: event.color }}
              >
                {event.attendees} / {event.capacity}
              </Typography>
            </Stack>
            <Box
              sx={{
                height: 6,
                bgcolor: "#f0e8e0",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: `${pct}%`,
                  bgcolor: event.color,
                  borderRadius: 3,
                  background: `linear-gradient(90deg, ${event.color}, ${event.color}99)`,
                }}
              />
            </Box>
          </>
        )}

        <Divider sx={{ my: 2 }} />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="caption" color="text.secondary">
            Organised by <strong>{event.organizer}</strong>
          </Typography>
          {event.status === "Upcoming" && (
            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: event.color,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                boxShadow: `0 4px 14px ${event.color}50`,
                "&:hover": { bgcolor: event.color, filter: "brightness(0.9)" },
              }}
            >
              Register Now
            </Button>
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function EventsSection() {
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState(null);

  const activeFilter = FILTERS[tab];
  const filtered =
    activeFilter === "All"
      ? events
      : events.filter(
          (e) => e.status === activeFilter || e.category === activeFilter,
        );

  const upcoming = events.filter((e) => e.status === "Upcoming").length;
  const ongoing = events.filter((e) => e.status === "Ongoing").length;
  const completed = events.filter((e) => e.status === "Completed").length;

  const featured = filtered.slice(0, 2);
  const rest = filtered.slice(2);

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
            { s: 300, r: -80, t: -80, o: 0.07 },
            { s: 180, r: 120, b: -60, o: 0.06 },
            { s: 100, l: 60, t: 20, o: 0.05 },
          ].map((c, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: c.s,
                height: c.s,
                borderRadius: "50%",
                background: "#fff",
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
              Events & Activities
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.75)",
                fontWeight: 300,
                maxWidth: 520,
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              From academic achievements to cultural celebrations — explore all
              the exciting events happening at Digvijaynath Intermediate
              College.
            </Typography>

            {/* Stats */}
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              {[
                { label: "Total Events", value: events.length, icon: "📅" },
                { label: "Upcoming", value: upcoming, icon: "🔔" },
                { label: "Ongoing", value: ongoing, icon: "🟢" },
                { label: "Completed", value: completed, icon: "✅" },
              ].map((s) => (
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
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography sx={{ fontSize: 18 }}>{s.icon}</Typography>
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
              variant="scrollable"
              scrollButtons="auto"
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
              {FILTERS.map((f, i) => (
                <Tab
                  key={f}
                  label={f}
                  icon={
                    <Chip
                      label={
                        f === "All"
                          ? events.length
                          : events.filter(
                              (e) => e.status === f || e.category === f,
                            ).length
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

        {/* ── Content ── */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          {filtered.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 10 }}>
              <Typography variant="h6" color="text.secondary">
                No events found for this filter.
              </Typography>
            </Box>
          ) : (
            <>
              {/* Featured */}
              {featured.length > 0 && (
                <>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "text.secondary",
                      letterSpacing: "0.15em",
                      mb: 2,
                      display: "block",
                    }}
                  >
                    ✦ Featured Events
                  </Typography>
                  <Grid container spacing={3} mb={5}>
                    {featured.map((ev) => (
                      <Grid item xs={12} sm={6} key={ev.id}>
                        <FeaturedCard event={ev} onClick={setSelected} />
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}

              {/* Remaining */}
              {rest.length > 0 && (
                <>
                  <Divider sx={{ borderColor: "rgba(230,81,0,0.12)", mb: 4 }}>
                    <Chip
                      label="More Events"
                      size="small"
                      sx={{
                        bgcolor: "#fff4ee",
                        color: "#E65100",
                        fontWeight: 600,
                        border: "1px solid #E6510030",
                      }}
                    />
                  </Divider>
                  <Grid container spacing={2}>
                    {rest.map((ev, i) => (
                      <Grid item xs={12} sm={6} md={4} key={ev.id}>
                        <CompactCard
                          event={ev}
                          index={i}
                          onClick={setSelected}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
            </>
          )}
        </Container>
      </Box>

      <EventDialog event={selected} onClose={() => setSelected(null)} />
    </ThemeProvider>
  );
}
