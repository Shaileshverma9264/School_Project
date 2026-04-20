import { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  Chip,
  Grid,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const departments = [
  {
    name: "Physics",
    tag: "Science",
    icon: "⚛️",
    color: "#2980B9",
    bg: "#EBF5FB",
  },
  {
    name: "Chemistry",
    tag: "Science",
    icon: "🧪",
    color: "#27AE60",
    bg: "#EAFAF1",
  },
  {
    name: "Arts",
    tag: "Humanities",
    icon: "🎨",
    color: "#e85d04",
    bg: "#fff5eb",
  },
  {
    name: "Computer",
    tag: "Technology",
    icon: "💻",
    color: "#8E44AD",
    bg: "#F4ECF7",
  },
  {
    name: "Home Science",
    tag: "Applied",
    icon: "🏠",
    color: "#f48c06",
    bg: "#fff8ec",
  },
  {
    name: "Agriculture",
    tag: "Applied",
    icon: "🌱",
    color: "#1E8449",
    bg: "#E9F7EF",
  },
  {
    name: "Biology",
    tag: "Science",
    icon: "🧬",
    color: "#C0392B",
    bg: "#FDEDEC",
  },
  { name: "NCC", tag: "Defence", icon: "⭐", color: "#1A5276", bg: "#EAF2F8" },
  {
    name: "Scout & Guide",
    tag: "Co-curricular",
    icon: "🏕️",
    color: "#c97d00",
    bg: "#FEFDE7",
  },
];

const tagGroups = [
  "All",
  "Science",
  "Humanities",
  "Technology",
  "Applied",
  "Defence",
  "Co-curricular",
];

const StyledCard = styled(Card)(({ delay, cardcolor }) => ({
  borderRadius: 20,
  border: "1.5px solid #ece8e2",
  animation: `${fadeUp} 0.45s ease ${delay}s both`,
  position: "relative",
  overflow: "hidden",
  background: "#fff",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: `linear-gradient(90deg, ${cardcolor}, ${cardcolor}88)`,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease",
  },
  "&:hover::before": { transform: "scaleX(1)" },
  "&:hover": {
    transform: "translateY(-7px)",
    boxShadow: `0 20px 48px ${cardcolor}22`,
    borderColor: `${cardcolor}44`,
  },
  transition:
    "transform 0.28s cubic-bezier(.22,.68,0,1.2), box-shadow 0.28s, border-color 0.2s",
}));

export default function DepartmentsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? departments
      : departments.filter((d) => d.tag === activeFilter);

  return (
    <Box sx={{ bgcolor: "#f5f0eb", minHeight: "100vh" }}>
      {/* ── Hero Header ── */}
      <Box
        sx={{
          background:
            "linear-gradient(150deg,#1a0a00 0%,#3d1200 45%,#7a2600 75%,#e85d04 100%)",
          px: { xs: 3, sm: 5, md: 8 },
          pt: { xs: 6, md: 8 },
          pb: { xs: 5, md: 7 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        {[
          { size: 400, top: -120, right: -100 },
          { size: 200, bottom: -60, left: -40 },
        ].map((c, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: c.size,
              height: c.size,
              borderRadius: "50%",
              border: "1.5px solid rgba(244,140,6,0.2)",
              top: c.top,
              bottom: c.bottom,
              left: c.left,
              right: c.right,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Top accent bar */}
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

        <Box sx={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
          <Chip
            label="Academic Structure"
            size="small"
            sx={{
              background: "rgba(244,140,6,0.18)",
              color: "#ffd580",
              border: "1px solid rgba(244,140,6,0.3)",
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: 11, sm: 12 },
              fontFamily: "'DM Sans',sans-serif",
            }}
          />
          <Typography
            sx={{
              fontFamily: "'Playfair Display',serif",
              fontWeight: 800,
              color: "#fff",
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.4rem" },
              lineHeight: 1.15,
              mb: 1.5,
            }}
          >
            Our{" "}
            <Box component="span" sx={{ color: "#f48c06" }}>
              Departments
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.62)",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              maxWidth: 500,
              fontFamily: "'DM Sans',sans-serif",
              lineHeight: 1.7,
            }}
          >
            Explore {departments.length} specialized departments offering
            world-class education across science, humanities, technology and
            beyond.
          </Typography>

          {/* Mini stats */}
          <Stack
            direction="row"
            spacing={{ xs: 3, sm: 4 }}
            mt={3}
            flexWrap="wrap"
            gap={1}
          >
            {[
              [departments.length, "Departments"],
              ["5000+", "Students"],
              ["45+", "Faculty"],
            ].map(([n, l]) => (
              <Box key={l}>
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: { xs: "1.4rem", sm: "1.8rem" },
                    fontWeight: 800,
                    color: "#f48c06",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.45)",
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
        </Box>
      </Box>

      {/* ── Filter Bar ── */}
      <Box
        sx={{
          bgcolor: "#fff",
          borderBottom: "2px solid #f0ebe5",
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 1.5, sm: 2 },
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            overflowX: "auto",
            pb: 0.5,
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {tagGroups.map((tag) => {
            const isActive = activeFilter === tag;
            return (
              <Chip
                key={tag}
                label={tag}
                onClick={() => setActiveFilter(tag)}
                sx={{
                  cursor: "pointer",
                  flexShrink: 0,
                  fontWeight: 700,
                  fontSize: { xs: 11, sm: 12 },
                  fontFamily: "'DM Sans',sans-serif",
                  bgcolor: isActive ? "#e85d04" : "#f5f0eb",
                  color: isActive ? "#fff" : "#6b4f3a",
                  border: isActive
                    ? "1.5px solid #e85d04"
                    : "1.5px solid transparent",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: isActive ? "#c44d00" : "#ece8e2",
                  },
                }}
              />
            );
          })}
        </Stack>
      </Box>

      {/* ── Cards Grid ── */}
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 4, md: 6 },
        }}
      >
        {/* Count label */}
        <Typography
          sx={{
            fontSize: { xs: "0.78rem", sm: "0.82rem" },
            color: "#999",
            fontFamily: "'DM Sans',sans-serif",
            mb: 2.5,
            fontWeight: 500,
          }}
        >
          Showing {filtered.length} of {departments.length} departments
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 2.5 }}>
          {filtered.map((dept, i) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={dept.name}>
              <StyledCard delay={i * 0.05} cardcolor={dept.color} elevation={0}>
                <CardActionArea sx={{ p: { xs: 2, sm: 2.5 } }}>
                  {/* Icon box */}
                  <Box
                    sx={{
                      width: { xs: 44, sm: 52 },
                      height: { xs: 44, sm: 52 },
                      borderRadius: "14px",
                      fontSize: { xs: 20, sm: 24 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: dept.bg,
                      mb: 1.5,
                      border: `1.5px solid ${dept.color}22`,
                      transition: "transform 0.3s",
                      "&:hover": { transform: "rotate(-4deg) scale(1.1)" },
                    }}
                  >
                    {dept.icon}
                  </Box>

                  <Typography
                    fontWeight={700}
                    fontSize={{ xs: 13, sm: 15 }}
                    mb={0.8}
                    lineHeight={1.2}
                    sx={{ color: "#1a0a00" }}
                  >
                    {dept.name}
                  </Typography>

                  <Chip
                    label={dept.tag}
                    size="small"
                    sx={{
                      bgcolor: dept.bg,
                      color: dept.color,
                      fontWeight: 700,
                      fontSize: { xs: 10, sm: 11 },
                      border: `1px solid ${dept.color}33`,
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  />

                  {/* Bottom color accent dot */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 12,
                      right: 14,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: dept.color,
                      opacity: 0.35,
                    }}
                  />
                </CardActionArea>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* Empty state */}
        {filtered.length === 0 && (
          <Box textAlign="center" py={8}>
            <Typography fontSize={40} mb={1}>
              🔍
            </Typography>
            <Typography
              sx={{ color: "#999", fontFamily: "'DM Sans',sans-serif" }}
            >
              No departments in this category
            </Typography>
          </Box>
        )}
      </Box>

      {/* ── CTA Footer ── */}
      <Box
        sx={{
          background: "linear-gradient(120deg,#1a0a00,#3d1200 50%,#e85d04)",
          mx: { xs: 2, sm: 3, md: 4 },
          mb: { xs: 3, md: 5 },
          borderRadius: 4,
          p: { xs: 3, sm: 4, md: 5 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: 3,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 200,
            height: 200,
            borderRadius: "50%",
            border: "1px solid rgba(244,140,6,0.15)",
            pointerEvents: "none",
          }}
        />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            sx={{
              fontFamily: "'Playfair Display',serif",
              color: "#fff",
              fontWeight: 700,
              fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
              mb: 0.5,
            }}
          >
            Interested in Joining?
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: { xs: "0.82rem", sm: "0.9rem" },
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Admissions for 2026–27 are now open across all departments.
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#f48c06",
            color: "#fff",
            fontWeight: 700,
            px: { xs: 3, sm: 4 },
            py: 1.4,
            borderRadius: 50,
            whiteSpace: "nowrap",
            alignSelf: { xs: "stretch", sm: "auto" },
            textAlign: "center",
            boxShadow: "0 8px 24px rgba(232,93,4,0.4)",
            "&:hover": { bgcolor: "#e07a00", transform: "translateY(-2px)" },
            transition: "all 0.2s",
            position: "relative",
            zIndex: 1,
          }}
        >
          Apply Now →
        </Button>
      </Box>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>
    </Box>
  );
}
