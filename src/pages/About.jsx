import { Typography, Box, Container, Grid, Divider } from "@mui/material";
import DigvijayNathImage from "../images/digvijay.jpg";

export default function About() {
  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh", pb: 6 }}>
      {/* Top red header */}
      <Box
        component="header"
        sx={{
          bgcolor: "#c72b1f", // red matching screenshot
          color: "#fff",
          py: 1.2,
          px: 2,
          boxShadow: "inset 0 2px 0 rgba(255,255,255,0.15)",
          borderBottom: "4px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "18px", sm: "20px", md: "22px" },
              lineHeight: 1.1,
              letterSpacing: "0.2px",
              fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif",
            }}
          >
            दिग्विजयनाथ इंटरमीडिएट कॉलेज
          </Typography>
        </Container>
      </Box>

      {/* Intro area */}
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: 0,
            px: { xs: 1, sm: 1.5, md: 0 },
          }}
        >
          <Grid container spacing={2} alignItems="flex-start">
            {/* Left image */}
            <Grid item xs={12} md={2.2}>
              <Box
                sx={{
                  bgcolor: "#ffb74d", // orange background block like screenshot
                  p: 0.5,
                  width: "100%",
                  display: "inline-block",
                }}
              >
                <Box
                  component="img"
                  src={DigvijayNathImage}
                  alt="Founder"
                  sx={{
                    width: "100%",
                    display: "block",
                    border: "4px solid #fff",
                    boxSizing: "border-box",
                  }}
                />
              </Box>
            </Grid>

            {/* Right paragraph */}
            <Grid item xs={12} md={9.8}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "13px", sm: "14px", md: "15px" },
                  lineHeight: 1.9,
                  color: "#333",
                  fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif",
                }}
              >
                गोरक्षपीठ द्वारा संचालित दिग्विजयनाथ इंटरमीडिएट कॉलेज शिक्षा
                क्षेत्र की एक अग्रणी संस्था है। पूर्वी उत्तर प्रदेश में गोरखपुर
                को केन्द्र बनाकर प्राथमिक से उच्च शिक्षा तक लगभग साढ़े तीन दर्जन
                शिक्षण-प्रशिक्षण संस्थानों एवं सेवा केन्द्रों का संचालन करने
                वाली महाराणा प्रताप शिक्षा परिषद की स्थापना 1932 ई. में
                गोरक्षपीठाधीश्वर महन्त दिग्विजयनाथ जी महाराज ने की थी तथा उसे
                गोरक्षपीठाधीश्वर महन्त अवेद्यनाथ जी महाराज ने पुष्टित प्रलालित
                किया।
              </Typography>
            </Grid>
          </Grid>

          {/* thin red divider below */}
          <Divider sx={{ borderColor: "#f2a5a0", my: 2 }} />

          {/* Section title (red link-like) */}
          <Typography
            variant="h6"
            sx={{
              color: "#c72b1f",
              fontWeight: 700,
              fontSize: { xs: "16px", sm: "17px" },
              textDecoration: "underline",
              textDecorationColor: "#c72b1f",
              textDecorationThickness: "2px",
              mb: 1,
              fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif",
            }}
          >
            दिग्विजयनाथ इंटरमीडिएट कॉलेज संस्थापक महन्त दिग्विजयनाथ जी महाराज
          </Typography>

          {/* timeline two columns */}
          <Grid container spacing={1}>
            <Grid item xs={12} md={8}>
              <Typography
                component="div"
                sx={{
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  lineHeight: 1.9,
                  color: "#333",
                  fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif",
                }}
              >
                जन्म बैशाखी पूर्णिमा
                <br />
                गोरखपुर आगमन
                <br />
                महात्मा गाँधी का गोरखपुर में स्वागत एवं असहयोग आन्दोलन में भाग
                लेने के लिए अवतारपुरी ठहराव एवं विद्यालय का परित्याग
                <br />
                क्षेत्रीय कार्य में सहयोग, शिक्षण के अमुख कार्य
                <br />
                महाराणा प्रताप शिक्षा परिषद की स्थापना
                <br />
                योग दीक्षा
                <br />
                गोरखनाथ मन्दिर में महन्त पद पर अभिषेक श्रावण पूर्णिमा
                <br />
                हिन्दू महासभा की सदस्यता
                <br />
                अखिल भारतीय हिन्दू परिषद के सर्वोच्च पद पर आसीन रहना और
                राज्यस्तरीय आयोजनों में नेतृत्व
                <br />
                डॉ. श्यामा प्रसाद मुखर्जी के साथ प्रांतीय हिन्दू महायोजन में
                योगदान
                <br />
                अन्य सार्वजनिक और धार्मिक कार्यों में सक्रियता
                <br />
                स्वतंत्रता संग्राम और सामाजिक कार्यों में भागीदारी
                <br />
                गोरखपुर विश्वविद्यालय के सन्दर्भ में योगदान
                <br />
                अन्य उल्लेखनीय क्रियाएँ व स्मृतियाँ
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: 2,
                    color: "#333",
                    fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif",
                  }}
                >
                  1894 ई.
                  <br />
                  1899 ई.
                  <br />
                  1920 ई.
                  <br />
                  1922 ई.
                  <br />
                  1932 ई.
                  <br />
                  15 जनवरी 1933 ई.
                  <br />
                  15 अगस्त 1935 ई.
                  <br />
                  1939 ई.
                  <br />
                  1943 ई.
                  <br />
                  1944 ई.
                  <br />
                  1945 ई.
                  <br />
                  1946 ई.
                  <br />
                  1947 ई.
                  <br />
                  1956 ई.
                  <br />
                  1958 ई.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
