// import React from "react";
// import { Typography } from "@mui/material";
// import GalleryGrid from "../components/GalleryGrid";

// export default function Gallery() {
//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>
//         Gallery
//       </Typography>
//       <GalleryGrid />
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Card,
  CardActionArea,
  Dialog,
  DialogContent,
  IconButton,
  Zoom,
  Stack,
  Divider,
  createTheme,
  ThemeProvider,
  CssBaseline,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

// ─── Theme ────────────────────────────────────────────────────────────────────
const theme = createTheme({
  palette: {
    background: { default: "#fdf7f0" },
    primary: { main: "#5c4a30" },
    secondary: { main: "#b89e7e" },
    text: {
      primary: "#2a1f12",
      secondary: "#8a7560",
      disabled: "#c4b49a",
    },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Playfair Display', serif", fontWeight: 900 },
    h2: { fontFamily: "'Playfair Display', serif", fontWeight: 700 },
    h6: { fontFamily: "'Playfair Display', serif", fontWeight: 700 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');
        .gallery-card:hover .card-img {
          transform: scale(1.07);
        }
        .gallery-card:hover .card-overlay {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .gallery-card:hover { z-index: 2; }
        @keyframes gridIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gallery-grid-enter {
          opacity: 0;
          animation: gridIn 0.5s ease forwards;
        }
      `,
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          letterSpacing: "0.03em",
          borderRadius: 50,
          transition: "all 0.25s ease",
        },
        colorPrimary: {
          background: "#5c4a30",
          borderColor: "#5c4a30",
          color: "#fff8ef",
          "&:hover": { background: "#4a3a22 !important" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition:
            "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px) scale(1.02)",
            boxShadow: "0 24px 48px rgba(0,0,0,0.22)",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
        },
        backdrop: { backdropFilter: "blur(8px)" },
      },
    },
  },
});

// ─── Data  (replace image URLs with your own photos) ─────────────────────────
const galleryData = [
  {
    id: 1,
    category: "Events",
    title: "Annual Sports Day",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80",
    span: { col: 1, row: 2 },
  },
  {
    id: 2,
    category: "Science",
    title: "Chemistry Lab Experiments",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&q=80",
    span: { col: 2, row: 1 },
  },
  {
    id: 3,
    category: "Arts",
    title: "Painting Exhibition",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1526285759904-71d1170ed2ac?w=600&q=80",
    span: { col: 1, row: 1 },
  },
  {
    id: 4,
    category: "Events",
    title: "Graduation Ceremony",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    span: { col: 2, row: 1 },
  },
  {
    id: 5,
    category: "Science",
    title: "Robotics Club Showcase",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1561144257-e32e8506-0baa?w=600&q=80",
    span: { col: 1, row: 1 },
  },
  {
    id: 6,
    category: "Arts",
    title: "Drama & Theater Night",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80",
    span: { col: 1, row: 2 },
  },
  {
    id: 7,
    category: "Sports",
    title: "Basketball Tournament",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1546519638405-a9f06f3b4f47?w=600&q=80",
    span: { col: 1, row: 1 },
  },
  {
    id: 8,
    category: "Events",
    title: "Cultural Heritage Fair",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    span: { col: 2, row: 1 },
  },
  {
    id: 9,
    category: "Sports",
    title: "Swimming Gala",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80",
    span: { col: 1, row: 2 },
  },
  {
    id: 10,
    category: "Arts",
    title: "Music Recital Evening",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80",
    span: { col: 1, row: 1 },
  },
  {
    id: 11,
    category: "Science",
    title: "Astronomy Night",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
    span: { col: 2, row: 1 },
  },
  {
    id: 12,
    category: "Sports",
    title: "Athletics Track Meet",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
    span: { col: 1, row: 1 },
  },
];

const CATEGORIES = ["All", "Events", "Science", "Arts", "Sports"];

// ─── GalleryCard ──────────────────────────────────────────────────────────────
function GalleryCard({ item, index, onClick }) {
  return (
    <Card
      className="gallery-card gallery-grid-enter"
      elevation={3}
      sx={{
        gridColumn: `span ${item.span.col}`,
        gridRow: `span ${item.span.row}`,
        minHeight: item.span.row === 2 ? 320 : 180,
        animationDelay: `${index * 0.06}s`,
        position: "relative",
        overflow: "hidden",
        bgcolor: "#ddd",
      }}
    >
      <CardActionArea
        onClick={onClick}
        sx={{ height: "100%", display: "block", position: "relative" }}
      >
        {/* Image */}
        <Box
          className="card-img"
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            display: "block",
          }}
        />

        {/* Permanent dark gradient at bottom for badge readability */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)",
          }}
        />

        {/* Year badge */}
        <Chip
          label={item.year}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 1,
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(6px)",
            fontSize: 11,
            fontWeight: 500,
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            height: 22,
          }}
        />

        {/* Category badge */}
        <Chip
          label={item.category}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            zIndex: 1,
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(6px)",
            fontSize: 11,
            fontWeight: 500,
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)",
            height: 22,
          }}
        />

        {/* Hover overlay — title reveal */}
        <Box
          className="card-overlay"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
            px: 2.5,
            pb: 2.5,
            pt: 6,
            opacity: 0,
            transform: "translateY(10px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#fff", fontSize: 15, lineHeight: 1.35 }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "rgba(255,255,255,0.65)", mt: 0.4, display: "block" }}
          >
            {item.category} · {item.year}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}

// ─── Lightbox Dialog ──────────────────────────────────────────────────────────
function Lightbox({ item, filtered, onClose, onNavigate }) {
  const idx = filtered.findIndex((i) => i.id === item.id);

  return (
    <Dialog
      open
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      TransitionComponent={Zoom}
      transitionDuration={300}
      slotProps={{ backdrop: { sx: { background: "rgba(10,8,5,0.92)" } } }}
    >
      {/* Prev */}
      <IconButton
        onClick={() =>
          onNavigate((idx - 1 + filtered.length) % filtered.length)
        }
        sx={{
          position: "fixed",
          left: "calc(50% - 320px)",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.12)",
          color: "#fff",
          backdropFilter: "blur(4px)",
          "&:hover": { background: "rgba(255,255,255,0.28)" },
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      {/* Next */}
      <IconButton
        onClick={() => onNavigate((idx + 1) % filtered.length)}
        sx={{
          position: "fixed",
          right: "calc(50% - 320px)",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.12)",
          color: "#fff",
          backdropFilter: "blur(4px)",
          "&:hover": { background: "rgba(255,255,255,0.28)" },
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>

      {/* Close */}
      <IconButton
        onClick={onClose}
        size="small"
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 10,
          background: "rgba(0,0,0,0.4)",
          color: "#fff",
          "&:hover": { background: "rgba(0,0,0,0.65)" },
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <DialogContent
        sx={{ p: 0, position: "relative", overflow: "hidden", bgcolor: "#111" }}
      >
        {/* Full image */}
        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            width: "100%",
            maxHeight: "65vh",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Info panel */}
        <Box sx={{ px: 3, py: 2.5, bgcolor: "#1a1410" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={0.75}
          >
            <Chip
              label={item.category}
              size="small"
              sx={{
                background: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.06em",
                border: "1px solid rgba(255,255,255,0.15)",
                height: 22,
              }}
            />
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}
            >
              Class of {item.year}
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{ fontSize: 22, color: "#fff", lineHeight: 1.3, mb: 2 }}
          >
            {item.title}
          </Typography>

          {/* Dot navigation */}
          <Stack direction="row" spacing={0.75} justifyContent="center">
            {filtered.map((_, i) => (
              <Box
                key={i}
                onClick={() => onNavigate(i)}
                sx={{
                  width: i === idx ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  cursor: "pointer",
                  backgroundColor:
                    i === idx ? "#b89e7e" : "rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function SchoolGallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === "All"
      ? galleryData
      : galleryData.filter((i) => i.category === active);

  useEffect(() => {
    const handleKey = (e) => {
      if (!lightbox) return;
      const idx = filtered.findIndex((i) => i.id === lightbox.id);
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox(filtered[(idx + 1) % filtered.length]);
      if (e.key === "ArrowLeft")
        setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length]);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, filtered]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 8 }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Box mb={6}>
            <Typography
              variant="overline"
              sx={{
                color: "secondary.main",
                letterSpacing: "0.18em",
                fontWeight: 500,
              }}
            >
              Capturing Our Journey
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: "clamp(48px, 6vw, 80px)",
                lineHeight: 1,
                mt: 1.5,
                mb: 2,
              }}
            >
              School Gallery
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontWeight: 300,
                lineHeight: 1.65,
                maxWidth: 480,
              }}
            >
              A living archive of our community's brightest moments — from
              classrooms to championship podiums.
            </Typography>
          </Box>

          <Divider sx={{ borderColor: "#e8ddd0", mb: 4 }} />

          {/* Filters */}
          <Stack
            direction="row"
            spacing={1.25}
            flexWrap="wrap"
            useFlexGap
            mb={3}
          >
            {CATEGORIES.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                clickable
                color={active === cat ? "primary" : "default"}
                variant={active === cat ? "filled" : "outlined"}
                onClick={() => setActive(cat)}
              />
            ))}
          </Stack>

          {/* Stats bar */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={3.5}
          >
            <Typography variant="body2" color="text.secondary" fontWeight={300}>
              Showing{" "}
              <Box
                component="strong"
                sx={{ color: "text.primary", fontWeight: 600 }}
              >
                {filtered.length}
              </Box>{" "}
              photos
              {active !== "All" && (
                <>
                  {" "}
                  in{" "}
                  <Box
                    component="strong"
                    sx={{ color: "text.primary", fontWeight: 600 }}
                  >
                    {active}
                  </Box>
                </>
              )}
            </Typography>
            <Stack direction="row" spacing={0.5}>
              {filtered.map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "#d4c5a9",
                  }}
                />
              ))}
            </Stack>
          </Stack>

          {/* Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gridAutoRows: 180,
              gap: 2,
            }}
          >
            {filtered.map((item, i) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={i}
                onClick={() => setLightbox(item)}
              />
            ))}
          </Box>

          {/* Footer */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            mt={8}
          >
            <PhotoCameraIcon sx={{ fontSize: 16, color: "text.disabled" }} />
            <Typography
              variant="caption"
              color="text.disabled"
              letterSpacing="0.02em"
            >
              Click any photo to view · Use arrow keys to navigate
            </Typography>
          </Stack>
        </Container>
      </Box>

      {lightbox && (
        <Lightbox
          item={lightbox}
          filtered={filtered}
          onClose={() => setLightbox(null)}
          onNavigate={(idx) => setLightbox(filtered[idx])}
        />
      )}
    </ThemeProvider>
  );
}
