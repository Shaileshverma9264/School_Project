import {
  Box,
  Card,
  CardActionArea,
  Chip,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const departments = [
  { name: "Physics", tag: "Science", icon: "⚛️" },
  { name: "Chemistry", tag: "Science", icon: "🧪" },
  { name: "Arts", tag: "Humanities", icon: "🎨" },
  { name: "Computer", tag: "Technology", icon: "💻" },
  { name: "Home Science", tag: "Applied", icon: "🏠" },
  { name: "Agriculture", tag: "Applied", icon: "🌱" },
  { name: "Biology", tag: "Science", icon: "🧬" },
  { name: "NCC", tag: "Defence", icon: "⭐" },
  { name: "Scout & Guide", tag: "Co-curricular", icon: "🏕️" },
];

const StyledCard = styled(Card)(({ theme, delay }) => ({
  borderRadius: 16,
  border: "1.5px solid #ece8e2",
  animation: `${fadeUp} 0.4s ease ${delay}s both`,
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    background: "linear-gradient(90deg, #e85d04, #f48c06)",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease",
  },
  "&:hover::before": { transform: "scaleX(1)" },
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 16px 40px rgba(232,93,4,0.12)",
    borderColor: "#f9c784",
  },
  transition:
    "transform 0.28s cubic-bezier(.22,.68,0,1.2), box-shadow 0.28s, border-color 0.2s",
}));

export default function DepartmentsSection() {
  return (
    <Box sx={{ bgcolor: "#f5f0eb", minHeight: "100vh", py: 7, px: 4 }}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Typography variant="overline" sx={{ color: "#888", letterSpacing: 2 }}>
          Academic Structure
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            mb: 5,
            "&::after": {
              content: '""',
              display: "block",
              width: 60,
              height: 4,
              background: "#e85d04",
              borderRadius: 2,
              mt: 1,
            },
          }}
        >
          Departments
        </Typography>

        <Grid container spacing={2.5}>
          {departments.map((dept, i) => (
            <Grid item xs={12} sm={6} md={3} key={dept.name}>
              <StyledCard delay={i * 0.06} elevation={0}>
                <CardActionArea sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 3,
                      fontSize: 22,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "#fff5eb",
                      mb: 1.5,
                    }}
                  >
                    {dept.icon}
                  </Box>
                  <Typography fontWeight={600} fontSize={16} mb={1}>
                    {dept.name}
                  </Typography>
                  <Chip
                    label={dept.tag}
                    size="small"
                    sx={{
                      bgcolor: "#fff5eb",
                      color: "#e85d04",
                      fontWeight: 600,
                      fontSize: 11,
                    }}
                  />
                </CardActionArea>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
