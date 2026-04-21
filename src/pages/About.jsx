import { useState } from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Chip,
  Stack,
  Paper,
  Card,
} from "@mui/material";
import { keyframes } from "@mui/material/styles";
import DigvijayNathImage from "../images/digvijay.jpg";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const timelineEvents = [
  { year: "1894 ई.", event: "जन्म बैशाखी पूर्णिमा" },
  { year: "1899 ई.", event: "गोरखपुर आगमन" },
  {
    year: "1920 ई.",
    event:
      "महात्मा गाँधी का गोरखपुर में स्वागत एवं असहयोग आन्दोलन में भाग लेने के लिए अवतारपुरी ठहराव एवं विद्यालय का परित्याग",
  },
  {
    year: "1922 ई.",
    event: "क्षेत्रीय कार्य में सहयोग, शिक्षण के प्रमुख कार्य",
  },
  { year: "1932 ई.", event: "महाराणा प्रताप शिक्षा परिषद की स्थापना" },
  { year: "15 जनवरी 1933 ई.", event: "योग दीक्षा" },
  {
    year: "15 अगस्त 1935 ई.",
    event: "गोरखनाथ मन्दिर में महन्त पद पर अभिषेक श्रावण पूर्णिमा",
  },
  { year: "1939 ई.", event: "हिन्दू महासभा की सदस्यता" },
  {
    year: "1943 ई.",
    event:
      "अखिल भारतीय हिन्दू परिषद के सर्वोच्च पद पर आसीन रहना और राज्यस्तरीय आयोजनों में नेतृत्व",
  },
  {
    year: "1944 ई.",
    event:
      "डॉ. श्यामा प्रसाद मुखर्जी के साथ प्रांतीय हिन्दू महायोजन में योगदान",
  },
  { year: "1945 ई.", event: "अन्य सार्वजनिक और धार्मिक कार्यों में सक्रियता" },
  {
    year: "1946 ई.",
    event: "स्वतंत्रता संग्राम और सामाजिक कार्यों में भागीदारी",
  },
  { year: "1947 ई.", event: "गोरखपुर विश्वविद्यालय के सन्दर्भ में योगदान" },
  { year: "1956 ई.", event: "अन्य उल्लेखनीय क्रियाएँ व स्मृतियाँ" },
];

const highlights = [
  { icon: "🏛️", label: "स्थापना", value: "1932 ई." },
  { icon: "🎓", label: "छात्र", value: "5000+" },
  { icon: "📚", label: "विभाग", value: "9" },
  { icon: "🏆", label: "उत्तीर्णता", value: "98%" },
];

export default function About() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <Box
      sx={{
        bgcolor: "#f5f0eb",
        minHeight: "100vh",
        pb: 8,
        fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;600;700;800&display=swap');
      `}</style>

      {/* ── Hero Banner ── */}
      <Box
        sx={{
          background:
            "linear-gradient(150deg,#1a0a00 0%,#3d1200 40%,#7a2600 70%,#e85d04 100%)",
          position: "relative",
          overflow: "hidden",
          px: { xs: 3, sm: 5, md: 8 },
          pt: { xs: 6, md: 8 },
          pb: { xs: 5, md: 7 },
        }}
      >
        {/* Decorative rings */}
        {[
          { s: 500, t: -150, r: -130 },
          { s: 260, b: -80, l: -60 },
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

        {/* Gold top accent */}
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
            label="गोरक्षपीठ संचालित संस्था"
            size="small"
            sx={{
              bgcolor: "rgba(244,140,6,0.18)",
              color: "#ffd580",
              border: "1px solid rgba(244,140,6,0.3)",
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: 11, sm: 12 },
              fontFamily: "'Noto Sans Devanagari',sans-serif",
            }}
          />
          <Typography
            sx={{
              fontFamily: "'Noto Sans Devanagari',serif",
              fontWeight: 800,
              color: "#fff",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.2rem" },
              lineHeight: 1.2,
              mb: 1,
            }}
          >
            दिग्विजयनाथ{" "}
            <Box component="span" sx={{ color: "#f48c06" }}>
              इंटरमीडिएट
            </Box>{" "}
            कॉलेज
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.55)",
              fontSize: { xs: "0.78rem", sm: "0.88rem" },
              letterSpacing: 2,
              textTransform: "uppercase",
              fontFamily: "'DM Sans',sans-serif",
              mb: 3,
            }}
          >
            Digvijaynath Intermediate College · Chowk Bazar, Maharajganj
          </Typography>

          {/* Stat pills */}
          <Stack direction="row" flexWrap="wrap" gap={2}>
            {highlights.map(({ icon, label, value }) => (
              <Box
                key={label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  bgcolor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(244,140,6,0.2)",
                  borderRadius: 3,
                  px: 2,
                  py: 1,
                }}
              >
                <Typography fontSize={{ xs: 16, sm: 20 }}>{icon}</Typography>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Playfair Display',serif",
                      color: "#f48c06",
                      fontWeight: 800,
                      fontSize: { xs: "1rem", sm: "1.2rem" },
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.65rem",
                      color: "rgba(255,255,255,0.45)",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      <Container
        maxWidth="lg"
        sx={{ mt: { xs: -2, md: -3 }, position: "relative", zIndex: 2 }}
      >
        {/* ── Founder Card ── */}
        <Card
          elevation={0}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            border: "1.5px solid #ece8e2",
            animation: `${fadeUp} 0.5s ease 0.1s both`,
            mb: 4,
          }}
        >
          {/* Card header bar */}
          <Box
            sx={{
              background: "linear-gradient(90deg,#1a0a00,#3d1200 60%,#7a2600)",
              px: { xs: 2.5, md: 4 },
              py: 1.5,
              borderBottom: "3px solid #e85d04",
            }}
          >
            <Typography
              sx={{
                color: "#ffd580",
                fontWeight: 700,
                fontSize: { xs: 11, sm: 12 },
                letterSpacing: 2,
                textTransform: "uppercase",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              संस्था परिचय
            </Typography>
          </Box>

          <Box sx={{ bgcolor: "#fff", p: { xs: 2.5, sm: 3, md: 4 } }}>
            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
              {/* Founder image */}
              <Grid item xs={12} sm={4} md={3}>
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    width: "100%",
                    maxWidth: { xs: 180, sm: "100%" },
                    mx: { xs: "auto", sm: 0 },
                  }}
                >
                  {/* Decorative orange frame */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      right: -8,
                      bottom: -8,
                      borderRadius: 3,
                      background: "linear-gradient(135deg,#e85d04,#f48c06)",
                      zIndex: 0,
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      borderRadius: 3,
                      overflow: "hidden",
                      border: "3px solid #fff",
                      boxShadow: "0 8px 32px rgba(232,93,4,0.18)",
                    }}
                  >
                    <Box
                      component="img"
                      src={DigvijayNathImage}
                      alt="महन्त दिग्विजयनाथ जी महाराज"
                      sx={{
                        width: "100%",
                        display: "block",
                        aspectRatio: "3/4",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  {/* Name badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -14,
                      left: "50%",
                      transform: "translateX(-50%)",
                      bgcolor: "#e85d04",
                      color: "#fff",
                      borderRadius: 2,
                      px: 1.5,
                      py: 0.5,
                      zIndex: 2,
                      whiteSpace: "nowrap",
                      boxShadow: "0 4px 12px rgba(232,93,4,0.35)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 10, sm: 11 },
                        fontWeight: 700,
                        fontFamily: "'Noto Sans Devanagari',sans-serif",
                      }}
                    >
                      संस्थापक महाराज
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Description */}
              <Grid item xs={12} sm={8} md={9}>
                <Box
                  sx={{
                    borderLeft: { sm: "3px solid #e85d04" },
                    pl: { sm: 3, md: 4 },
                    pt: { xs: 2, sm: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                      fontWeight: 700,
                      color: "#1a0a00",
                      mb: 1.5,
                      lineHeight: 1.3,
                    }}
                  >
                    शिक्षा, सेवा और संस्कृति का संगम
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", sm: "14px", md: "15px" },
                      lineHeight: 2,
                      color: "#444",
                      fontFamily: "'Noto Sans Devanagari','Mangal',sans-serif",
                    }}
                  >
                    गोरक्षपीठ द्वारा संचालित दिग्विजयनाथ इंटरमीडिएट कॉलेज शिक्षा
                    क्षेत्र की एक अग्रणी संस्था है। पूर्वी उत्तर प्रदेश में
                    गोरखपुर को केन्द्र बनाकर प्राथमिक से उच्च शिक्षा तक लगभग
                    साढ़े तीन दर्जन शिक्षण-प्रशिक्षण संस्थानों एवं सेवा
                    केन्द्रों का संचालन करने वाली महाराणा प्रताप शिक्षा परिषद की
                    स्थापना 1932 ई. में गोरक्षपीठाधीश्वर महन्त दिग्विजयनाथ जी
                    महाराज ने की थी तथा उसे गोरक्षपीठाधीश्वर महन्त अवेद्यनाथ जी
                    महाराज ने पुष्टित पल्लवित किया।
                  </Typography>

                  {/* Tags */}
                  <Stack direction="row" flexWrap="wrap" gap={1} mt={2.5}>
                    {[
                      "गोरक्षपीठ संचालित",
                      "UP Board मान्यता प्राप्त",
                      "1932 से सक्रिय",
                      "महाराजगंज",
                    ].map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          bgcolor: "#fff5eb",
                          color: "#e85d04",
                          fontWeight: 600,
                          fontSize: { xs: 10, sm: 11 },
                          border: "1px solid rgba(232,93,4,0.2)",
                          fontFamily: "'Noto Sans Devanagari',sans-serif",
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>

        {/* ── Timeline Section ── */}
        <Box sx={{ animation: `${fadeUp} 0.5s ease 0.2s both` }}>
          {/* Section header */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#e85d04",
                fontFamily: "'DM Sans',sans-serif",
                mb: 0.5,
              }}
            >
              जीवन-वृत्त
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Playfair Display',serif",
                fontWeight: 700,
                fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.2rem" },
                color: "#1a0a00",
                mb: 0.5,
              }}
            >
              संस्थापक महन्त दिग्विजयनाथ जी महाराज
            </Typography>
            <Box
              sx={{ width: 56, height: 4, bgcolor: "#e85d04", borderRadius: 2 }}
            />
          </Box>

          {/* Timeline cards */}
          <Box sx={{ position: "relative" }}>
            {/* Vertical line (desktop) */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 2,
                background: "linear-gradient(180deg,#e85d04,#fad4b0,#e85d04)",
                transform: "translateX(-50%)",
                zIndex: 0,
              }}
            />

            <Grid container spacing={2.5}>
              {timelineEvents.map((item, i) => {
                const isLeft = i % 2 === 0;
                const isHovered = hoveredIdx === i;
                return (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    key={i}
                    sx={{
                      // Alternate left/right on desktop
                      ml: { md: isLeft ? 0 : "auto" },
                      mr: { md: isLeft ? "auto" : 0 },
                      pl: { md: isLeft ? 0 : 2 },
                      pr: { md: isLeft ? 2 : 0 },
                    }}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        bgcolor: "#fff",
                        border: `1.5px solid ${isHovered ? "#e85d04" : "#ece8e2"}`,
                        borderRadius: 3,
                        p: { xs: 2, sm: 2.5 },
                        transition: "all 0.25s",
                        transform: isHovered
                          ? "translateY(-4px)"
                          : "translateY(0)",
                        boxShadow: isHovered
                          ? "0 12px 32px rgba(232,93,4,0.12)"
                          : "none",
                        // Left orange accent
                        borderLeft: `4px solid ${isHovered ? "#e85d04" : "#fad4b0"}`,
                      }}
                    >
                      {/* Year badge */}
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          bgcolor: isHovered ? "#e85d04" : "#fff5eb",
                          borderRadius: 2,
                          px: 1.5,
                          py: 0.4,
                          mb: 1,
                          transition: "background 0.25s",
                          border: `1px solid ${isHovered ? "#e85d04" : "rgba(232,93,4,0.2)"}`,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: 11, sm: 12 },
                            fontWeight: 800,
                            color: isHovered ? "#fff" : "#e85d04",
                            fontFamily: "'DM Sans',sans-serif",
                            letterSpacing: 0.5,
                            transition: "color 0.25s",
                          }}
                        >
                          {item.year}
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          fontSize: { xs: "12.5px", sm: "13.5px" },
                          lineHeight: 1.8,
                          color: "#333",
                          fontFamily:
                            "'Noto Sans Devanagari','Mangal',sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        {item.event}
                      </Typography>

                      {/* Corner dot */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 14,
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: isHovered ? "#e85d04" : "#fad4b0",
                          transition: "background 0.25s",
                        }}
                      />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>

        {/* ── Legacy Banner ── */}
        <Paper
          sx={{
            background:
              "linear-gradient(135deg,#1a0a00 0%,#3d1200 50%,#7a2600 100%)",
            borderRadius: 4,
            p: { xs: 3, sm: 4, md: 5 },
            mt: 5,
            overflow: "hidden",
            position: "relative",
            animation: `${fadeUp} 0.5s ease 0.3s both`,
          }}
        >
          {/* Rings */}
          <Box
            sx={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 240,
              height: 240,
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
                fontSize: { xs: "1.2rem", sm: "1.6rem", md: "1.9rem" },
                mb: 1.5,
                lineHeight: 1.3,
              }}
            >
              "शिक्षा ही राष्ट्र की{" "}
              <Box component="span" sx={{ color: "#f48c06" }}>
                नींव है
              </Box>
              "
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: { xs: "12px", sm: "13.5px" },
                fontFamily: "'Noto Sans Devanagari','Mangal',sans-serif",
                lineHeight: 1.9,
                maxWidth: 680,
                mb: 3,
              }}
            >
              महन्त दिग्विजयनाथ जी महाराज के आदर्शों पर चलते हुए यह महाविद्यालय
              आज भी हजारों विद्यार्थियों के जीवन को दिशा देने का कार्य कर रहा
              है। शिक्षा, संस्कृति और सेवा — यही हमारी पहचान है।
            </Typography>

            {/* Stats row */}
            <Grid container spacing={2}>
              {[
                ["70+", "वर्षों की विरासत"],
                ["5000+", "छात्र नामांकित"],
                ["9", "विभाग"],
                ["98%", "उत्तीर्णता दर"],
              ].map(([n, l]) => (
                <Grid item xs={6} sm={3} key={l}>
                  <Box
                    sx={{
                      bgcolor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(244,140,6,0.2)",
                      borderRadius: 2.5,
                      p: { xs: 1.5, sm: 2 },
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Playfair Display',serif",
                        color: "#f48c06",
                        fontWeight: 800,
                        fontSize: { xs: "1.4rem", sm: "1.7rem" },
                        lineHeight: 1,
                      }}
                    >
                      {n}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.62rem", sm: "0.68rem" },
                        color: "rgba(255,255,255,0.45)",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        fontFamily: "'DM Sans',sans-serif",
                        mt: 0.5,
                      }}
                    >
                      {l}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
