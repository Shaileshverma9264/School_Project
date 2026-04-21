import { useState, useEffect, useRef } from "react";
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
  Stack,
  Fade,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { keyframes } from "@mui/material/styles";

// ── Animations ────────────────────────────────────────────────────────────────
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position: 600px 0; }
`;
const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.15); opacity: 0.7; }
`;

// ── Gallery Data ──────────────────────────────────────────────────────────────
const galleryData = [
  {
    id: 1,
    category: "Events",
    title: "Annual Sports Day",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
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
      "https://images.unsplash.com/photo-1526285759904-71d1170ed2ac?w=800&q=80",
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
    title: "Physics Demonstration",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    span: { col: 1, row: 1 },
  },
  {
    id: 6,
    category: "Arts",
    title: "Drama & Theater Night",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80",
    span: { col: 1, row: 2 },
  },
  {
    id: 7,
    category: "Sports",
    title: "Basketball Tournament",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1546519638405-a9f06f3b4f47?w=800&q=80",
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
    title: "Athletics Track Meet",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    span: { col: 1, row: 2 },
  },
  {
    id: 10,
    category: "Arts",
    title: "Music Recital Evening",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
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
    title: "Kabaddi Championship",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&q=80",
    span: { col: 1, row: 1 },
  },
];

const CATEGORIES = ["All", "Events", "Science", "Arts", "Sports"];

const CAT_META = {
  All: { color: "#e85d04", bg: "#fff5eb", emoji: "✨" },
  Events: { color: "#2980B9", bg: "#EBF5FB", emoji: "🎉" },
  Science: { color: "#27AE60", bg: "#EAFAF1", emoji: "🔬" },
  Arts: { color: "#8E44AD", bg: "#F4ECF7", emoji: "🎨" },
  Sports: { color: "#e85d04", bg: "#fff5eb", emoji: "🏆" },
};

// ── Skeleton loader ───────────────────────────────────────────────────────────
function ImageSkeleton() {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(90deg, #f0ebe5 25%, #faf7f4 50%, #f0ebe5 75%)",
        backgroundSize: "600px 100%",
        animation: `${shimmer} 1.4s infinite`,
      }}
    />
  );
}

// ── Gallery Card ──────────────────────────────────────────────────────────────
function GalleryCard({ item, index, onClick, isMasonry }) {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const meta = CAT_META[item.category] || CAT_META.All;

  return (
    <Box
      className="gallery-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      sx={{
        gridColumn: isMasonry ? `span ${item.span.col}` : "span 1",
        gridRow: isMasonry ? `span ${item.span.row}` : "span 1",
        minHeight: isMasonry ? (item.span.row === 2 ? 340 : 180) : 200,
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        animation: `${fadeUp} 0.45s ease ${index * 0.055}s both`,
        border: `2px solid ${hovered ? meta.color : "transparent"}`,
        transition:
          "border-color 0.25s, transform 0.3s cubic-bezier(0.34,1.2,0.64,1), box-shadow 0.3s",
        transform: hovered ? "translateY(-6px) scale(1.015)" : "none",
        boxShadow: hovered
          ? `0 24px 56px ${meta.color}33`
          : "0 2px 12px rgba(0,0,0,0.1)",
      }}
    >
      {/* Skeleton */}
      {!loaded && <ImageSkeleton />}

      {/* Image */}
      <Box
        component="img"
        src={item.image}
        alt={item.title}
        onLoad={() => setLoaded(true)}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          opacity: loaded ? 1 : 0,
        }}
      />

      {/* Base gradient */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
        }}
      />

      {/* Hover full overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${meta.color}55 0%, rgba(0,0,0,0.55) 100%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
      />

      {/* Category badge */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          zIndex: 2,
          bgcolor: meta.bg,
          color: meta.color,
          borderRadius: 2,
          px: 1.2,
          py: 0.3,
          fontSize: 11,
          fontWeight: 700,
          border: `1px solid ${meta.color}44`,
          fontFamily: "'DM Sans',sans-serif",
          backdropFilter: "blur(8px)",
          opacity: hovered ? 1 : 0.85,
          transition: "opacity 0.25s",
        }}
      >
        {meta.emoji} {item.category}
      </Box>

      {/* Year badge */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 2,
          bgcolor: "rgba(0,0,0,0.45)",
          color: "#fff",
          borderRadius: 2,
          px: 1.2,
          py: 0.3,
          fontSize: 11,
          fontWeight: 600,
          border: "1px solid rgba(255,255,255,0.2)",
          fontFamily: "'DM Sans',sans-serif",
          backdropFilter: "blur(8px)",
        }}
      >
        {item.year}
      </Box>

      {/* Title (always visible at bottom) */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          px: 2,
          pb: 2,
          pt: 5,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
          transform: hovered ? "translateY(0)" : "translateY(4px)",
          transition: "transform 0.3s",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: { xs: 13, sm: 14 },
            fontFamily: "'Playfair Display',serif",
            lineHeight: 1.3,
            textShadow: "0 1px 4px rgba(0,0,0,0.5)",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.65)",
            fontSize: 11,
            fontFamily: "'DM Sans',sans-serif",
            mt: 0.3,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s 0.05s",
          }}
        >
          {item.category} · {item.year}
        </Typography>
      </Box>

      {/* Center zoom icon on hover */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.25s",
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(8px)",
            border: "2px solid rgba(255,255,255,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: hovered ? `${pulse} 1.5s infinite` : "none",
          }}
        >
          <PhotoCameraIcon sx={{ color: "#fff", fontSize: 22 }} />
        </Box>
      </Box>
    </Box>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ item, filtered, onClose, onNavigate }) {
  const idx = filtered.findIndex((i) => i.id === item.id);
  const meta = CAT_META[item.category] || CAT_META.All;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [item.id]);

  return (
    <Dialog
      open
      onClose={onClose}
      maxWidth="md"
      fullWidth
      TransitionComponent={Fade}
      transitionDuration={250}
      slotProps={{
        backdrop: {
          sx: { background: "rgba(10,5,0,0.92)", backdropFilter: "blur(12px)" },
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: "hidden",
          bgcolor: "#111",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: `0 40px 100px ${meta.color}44`,
          mx: { xs: 1, sm: 3 },
        },
      }}
    >
      {/* Header bar */}
      <Box
        sx={{
          background: `linear-gradient(90deg,#1a0a00,${meta.color}88)`,
          px: 2.5,
          py: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `2px solid ${meta.color}`,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            sx={{
              bgcolor: meta.bg,
              color: meta.color,
              borderRadius: 2,
              px: 1.2,
              py: 0.3,
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {meta.emoji} {item.category}
          </Box>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 12,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {idx + 1} / {filtered.length}
          </Typography>
        </Stack>
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            color: "#fff",
            bgcolor: "rgba(255,255,255,0.1)",
            borderRadius: 2,
            "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <DialogContent sx={{ p: 0, position: "relative", bgcolor: "#0d0d0d" }}>
        {/* Nav arrows */}
        {[
          {
            dir: "left",
            Icon: ArrowBackIosNewIcon,
            action: () =>
              onNavigate((idx - 1 + filtered.length) % filtered.length),
          },
          {
            dir: "right",
            Icon: ArrowForwardIosIcon,
            action: () => onNavigate((idx + 1) % filtered.length),
          },
        ].map(({ dir, Icon, action }) => (
          <IconButton
            key={dir}
            onClick={action}
            sx={{
              position: "absolute",
              [dir]: { xs: 6, sm: 12 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "rgba(255,255,255,0.12)",
              color: "#fff",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 2,
              "&:hover": { bgcolor: `${meta.color}99` },
              transition: "background 0.2s",
            }}
          >
            <Icon sx={{ fontSize: 18 }} />
          </IconButton>
        ))}

        {/* Image */}
        <Box sx={{ position: "relative", minHeight: { xs: 220, sm: 360 } }}>
          {!loaded && <ImageSkeleton />}
          <Box
            component="img"
            src={item.image}
            alt={item.title}
            onLoad={() => setLoaded(true)}
            sx={{
              width: "100%",
              maxHeight: { xs: "55vh", sm: "65vh" },
              objectFit: "cover",
              display: "block",
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.4s",
            }}
          />
        </Box>

        {/* Info panel */}
        <Box sx={{ px: { xs: 2.5, sm: 3 }, py: 2.5, bgcolor: "#141414" }}>
          <Typography
            sx={{
              fontFamily: "'Playfair Display',serif",
              color: "#fff",
              fontWeight: 700,
              fontSize: { xs: 18, sm: 22 },
              mb: 0.5,
              lineHeight: 1.3,
            }}
          >
            {item.title}
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 12,
              fontFamily: "'DM Sans',sans-serif",
              mb: 2,
            }}
          >
            Captured in {item.year} · {item.category}
          </Typography>

          {/* Dot navigation */}
          <Stack direction="row" spacing={0.6} flexWrap="wrap" gap={0.5}>
            {filtered.map((fi, i) => (
              <Box
                key={i}
                onClick={() => onNavigate(i)}
                sx={{
                  width: i === idx ? 24 : 7,
                  height: 7,
                  borderRadius: 4,
                  cursor: "pointer",
                  bgcolor: i === idx ? meta.color : "rgba(255,255,255,0.18)",
                  border:
                    i === idx
                      ? `1px solid ${meta.color}`
                      : "1px solid transparent",
                  transition: "all 0.3s",
                  "&:hover": {
                    bgcolor: i === idx ? meta.color : "rgba(255,255,255,0.38)",
                  },
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Keyboard hint */}
        <Box
          sx={{
            px: 3,
            pb: 2,
            display: "flex",
            justifyContent: "flex-end",
            bgcolor: "#141414",
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              color: "rgba(255,255,255,0.2)",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            ← → arrow keys to navigate · Esc to close
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function SchoolGallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [isMasonry, setIsMasonry] = useState(true);

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

  const counts = CATEGORIES.reduce((acc, cat) => {
    acc[cat] =
      cat === "All"
        ? galleryData.length
        : galleryData.filter((i) => i.category === cat).length;
    return acc;
  }, {});

  return (
    <Box sx={{ bgcolor: "#f5f0eb", minHeight: "100vh", pb: 8 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>

      {/* ── Hero ── */}
      <Box
        sx={{
          background:
            "linear-gradient(150deg,#1a0a00 0%,#3d1200 45%,#7a2600 75%,#e85d04 100%)",
          position: "relative",
          overflow: "hidden",
          px: { xs: 3, sm: 5, md: 8 },
          pt: { xs: 6, md: 8 },
          pb: { xs: 5, md: 7 },
        }}
      >
        {/* Decorative rings */}
        {[
          { s: 500, t: -160, r: -120 },
          { s: 280, b: -80, l: -60 },
        ].map((c, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: c.s,
              height: c.s,
              borderRadius: "50%",
              border: "1.5px solid rgba(244,140,6,0.18)",
              top: c.t,
              bottom: c.b,
              left: c.l,
              right: c.r,
              pointerEvents: "none",
            }}
          />
        ))}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg,#e85d04,#f48c06,#ffd580,#f48c06,#e85d04)",
          }}
        />

        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Chip
            label="📸 College Life"
            size="small"
            sx={{
              bgcolor: "rgba(244,140,6,0.18)",
              color: "#ffd580",
              border: "1px solid rgba(244,140,6,0.3)",
              fontWeight: 700,
              mb: 2,
              fontFamily: "'DM Sans',sans-serif",
            }}
          />
          <Typography
            sx={{
              fontFamily: "'Playfair Display',serif",
              fontWeight: 800,
              color: "#fff",
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
              lineHeight: 1.15,
              mb: 1.5,
            }}
          >
            Our{" "}
            <Box component="span" sx={{ color: "#f48c06" }}>
              Gallery
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              maxWidth: 480,
              fontSize: { xs: "0.88rem", md: "1rem" },
              fontFamily: "'DM Sans',sans-serif",
              lineHeight: 1.7,
              mb: 3,
            }}
          >
            A living archive of our community's brightest moments — from
            classrooms to championship podiums.
          </Typography>

          {/* Stat pills */}
          <Stack direction="row" flexWrap="wrap" gap={1.5}>
            {[
              ["📷", galleryData.length, "Photos"],
              ["🗂️", CATEGORIES.length - 1, "Categories"],
              ["📅", "2023–24", "Sessions"],
            ].map(([icon, val, lbl]) => (
              <Box
                key={lbl}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  bgcolor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(244,140,6,0.2)",
                  borderRadius: 3,
                  px: 2,
                  py: 0.8,
                }}
              >
                <Typography fontSize={16}>{icon}</Typography>
                <Box>
                  <Typography
                    sx={{
                      color: "#f48c06",
                      fontWeight: 800,
                      fontSize: "1rem",
                      fontFamily: "'Playfair Display',serif",
                      lineHeight: 1,
                    }}
                  >
                    {val}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "0.62rem",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    {lbl}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: 3, md: 4 } }}>
        {/* ── Controls ── */}
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: 4,
            p: { xs: 2, sm: 2.5 },
            mb: 3,
            border: "1.5px solid #ece8e2",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* Category filters */}
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {CATEGORIES.map((cat) => {
              const isActive = active === cat;
              const meta = CAT_META[cat];
              return (
                <Box
                  key={cat}
                  onClick={() => setActive(cat)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                    px: 2,
                    py: 0.8,
                    borderRadius: 3,
                    cursor: "pointer",
                    bgcolor: isActive ? meta.color : "#f5f0eb",
                    color: isActive ? "#fff" : "#6b4f3a",
                    border: `1.5px solid ${isActive ? meta.color : "transparent"}`,
                    transition: "all 0.2s",
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: 12, sm: 13 },
                    "&:hover": { bgcolor: isActive ? meta.color : "#ece8e2" },
                  }}
                >
                  <span>{meta.emoji}</span>
                  <span>{cat}</span>
                  <Box
                    sx={{
                      bgcolor: isActive
                        ? "rgba(255,255,255,0.25)"
                        : "rgba(232,93,4,0.1)",
                      color: isActive ? "#fff" : meta.color,
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 800,
                    }}
                  >
                    {counts[cat]}
                  </Box>
                </Box>
              );
            })}
          </Stack>

          {/* Layout toggle + count */}
          <Stack direction="row" alignItems="center" gap={1.5}>
            <Typography
              sx={{
                fontSize: 12,
                color: "#999",
                fontFamily: "'DM Sans',sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              {filtered.length} photos
            </Typography>
            <Stack direction="row" gap={0.5}>
              {[
                {
                  icon: <ViewModuleIcon fontSize="small" />,
                  val: true,
                  label: "Masonry",
                },
                {
                  icon: <GridViewIcon fontSize="small" />,
                  val: false,
                  label: "Grid",
                },
              ].map(({ icon, val, label }) => (
                <Tooltip title={label} key={label}>
                  <IconButton
                    onClick={() => setIsMasonry(val)}
                    size="small"
                    sx={{
                      borderRadius: 2,
                      p: 0.8,
                      bgcolor: isMasonry === val ? "#e85d04" : "#f5f0eb",
                      color: isMasonry === val ? "#fff" : "#999",
                      "&:hover": {
                        bgcolor: isMasonry === val ? "#c44d00" : "#ece8e2",
                      },
                      transition: "all 0.2s",
                    }}
                  >
                    {icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Stack>
        </Box>

        {/* ── Grid ── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMasonry
              ? {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                }
              : {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                },
            gridAutoRows: isMasonry
              ? { xs: 130, sm: 160, md: 180 }
              : { xs: 150, sm: 180, md: 200 },
            gap: { xs: 1.5, sm: 2 },
          }}
        >
          {filtered.map((item, i) => (
            <GalleryCard
              key={`${item.id}-${active}`}
              item={item}
              index={i}
              onClick={() => setLightbox(item)}
              isMasonry={isMasonry}
            />
          ))}
        </Box>

        {/* Empty state */}
        {filtered.length === 0 && (
          <Box textAlign="center" py={10}>
            <Typography fontSize={48} mb={2}>
              📷
            </Typography>
            <Typography
              sx={{ color: "#999", fontFamily: "'DM Sans',sans-serif" }}
            >
              No photos in this category yet.
            </Typography>
          </Box>
        )}

        {/* ── Footer ── */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          mt={6}
        >
          <PhotoCameraIcon sx={{ fontSize: 15, color: "#ccc" }} />
          <Typography
            sx={{
              fontSize: 12,
              color: "#bbb",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Click any photo · Arrow keys to navigate · Esc to close
          </Typography>
        </Stack>
      </Container>

      {/* ── Lightbox ── */}
      {lightbox && (
        <Lightbox
          item={lightbox}
          filtered={filtered}
          onClose={() => setLightbox(null)}
          onNavigate={(idx) => setLightbox(filtered[idx])}
        />
      )}
    </Box>
  );
}
