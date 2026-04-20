import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Tab,
  Tabs,
  Stack,
  Chip,
  Paper,
  Divider,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const features = [
  { icon: "📊", text: "View exam results & marksheets instantly" },
  { icon: "📅", text: "Track attendance & timetable" },
  { icon: "📚", text: "Download study materials & notes" },
  { icon: "💳", text: "Pay fees and view receipts online" },
  { icon: "🔔", text: "Get real-time notices & announcements" },
];

const quickLinks = [
  { icon: "📋", title: "Admit Card", sub: "Download now" },
  { icon: "📊", title: "Results", sub: "View marks" },
  { icon: "📅", title: "Time Table", sub: "Class schedule" },
  { icon: "💰", title: "Fee Receipt", sub: "Download" },
];

const notices = [
  { title: "Half-Yearly Examination Schedule Released", date: "Apr 14, 2025" },
  { title: "Annual Sports Day – Registration Open", date: "Apr 10, 2025" },
  { title: "Scholarship Form Deadline: Apr 30", date: "Apr 5, 2025" },
];

const results = [
  { sub: "Physics", grade: "A+ (95)", color: "success" },
  { sub: "Chemistry", grade: "A  (88)", color: "success" },
  { sub: "Mathematics", grade: "A+ (97)", color: "success" },
  { sub: "English", grade: "B+ (78)", color: "primary" },
];

const actions = [
  "📋 Admit Card",
  "📄 Marksheet",
  "📅 Time Table",
  "💰 Pay Fees",
  "📚 Notes",
  "📝 Leave",
];

const cardHover = {
  borderRadius: 4,
  border: "1.5px solid #ece8e2",
  elevation: 0,
  transition: "transform .25s, box-shadow .25s, border-color .2s",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 32px rgba(232,93,4,.1)",
    borderColor: "#fad4b0",
  },
};

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    "&.Mui-focused fieldset": { borderColor: "#e85d04" },
  },
  "& label.Mui-focused": { color: "#e85d04" },
};

export default function StudentPortal() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState(0);
  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");

  return loggedIn ? (
    <Dashboard onLogout={() => setLoggedIn(false)} />
  ) : (
    <LoginPage
      tab={tab}
      uid={uid}
      pwd={pwd}
      onTab={(_, v) => setTab(v)}
      onUid={setUid}
      onPwd={setPwd}
      onLogin={() => {
        if (uid && pwd) setLoggedIn(true);
      }}
    />
  );
}

function LoginPage({ tab, uid, pwd, onTab, onUid, onPwd, onLogin }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
      }}
    >
      {/* Left Panel */}
      <Box
        sx={{
          background: "linear-gradient(145deg,#1a0a00,#3d1200 45%,#7a2600)",
          p: { xs: 3, sm: 4, md: 7 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: { md: 1 },
        }}
      >
        <Chip
          label="🎓 Student Portal"
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            color: "#ffd580",
            mb: 2,
            alignSelf: "flex-start",
            fontWeight: 700,
            fontSize: { xs: 12, sm: 13 },
          }}
        />
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display',serif",
            color: "#fff",
            mb: 1.5,
            fontSize: { xs: "22px", sm: "28px", md: "38px" },
            lineHeight: 1.2,
          }}
        >
          Your Academic{" "}
          <Box component="span" sx={{ color: "#f48c06" }}>
            Hub
          </Box>{" "}
          Awaits
        </Typography>
        <Typography
          sx={{
            color: "rgba(255,255,255,.65)",
            mb: { xs: 2.5, md: 4 },
            lineHeight: 1.7,
            fontSize: { xs: 13, sm: 14 },
          }}
        >
          Access results, attendance, resources, and everything you need — all
          secure.
        </Typography>

        {/* Hide features list on very small screens to save space */}
        <Stack
          spacing={1}
          mb={{ xs: 2.5, md: 4 }}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          {features.map((f) => (
            <Stack key={f.text} direction="row" gap={1.5} alignItems="center">
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  minWidth: 36,
                  borderRadius: 2,
                  bgcolor: "rgba(255,255,255,.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                }}
              >
                {f.icon}
              </Box>
              <Typography sx={{ color: "rgba(255,255,255,.8)", fontSize: 13 }}>
                {f.text}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Stack direction="row" gap={{ xs: 2, sm: 3 }} flexWrap="wrap">
          {[
            ["5000+", "Students"],
            ["70+", "Years"],
            ["9", "Depts"],
            ["98%", "Pass"],
          ].map(([n, l]) => (
            <Box key={l} textAlign="center">
              <Typography
                sx={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: { xs: 20, sm: 24 },
                  color: "#f48c06",
                  fontWeight: 800,
                }}
              >
                {n}
              </Typography>
              <Typography
                sx={{
                  fontSize: 10,
                  color: "rgba(255,255,255,.5)",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                {l}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Right Panel */}
      <Box
        sx={{
          bgcolor: "#fff",
          p: { xs: 3, sm: 4, md: 7 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: { md: 1 },
        }}
      >
        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 700,
            color: "#e85d04",
            letterSpacing: 2,
            textTransform: "uppercase",
            mb: 0.5,
          }}
        >
          Digvijaynath College
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Playfair Display',serif",
            mb: 0.5,
            fontSize: { xs: "22px", sm: "28px", md: "34px" },
          }}
        >
          Welcome Back 👋
        </Typography>
        <Typography color="text.secondary" fontSize={13.5} mb={3}>
          Sign in to access your student dashboard
        </Typography>

        <Tabs
          value={tab}
          onChange={onTab}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 3,
            bgcolor: "#f5f0eb",
            borderRadius: 2.5,
            p: 0.5,
            "& .MuiTab-root": {
              borderRadius: 2,
              fontWeight: 600,
              color: "#888",
              textTransform: "none",
              minHeight: 40,
              fontSize: { xs: 13, sm: 14 },
            },
            "& .Mui-selected": { color: "#e85d04 !important" },
            "& .MuiTabs-indicator": { display: "none" },
          }}
        >
          <Tab label="🎓 Student" />
          <Tab label="👨‍🏫 Faculty" />
          <Tab label="🛡️ Admin" />
        </Tabs>

        <TextField
          fullWidth
          label="Roll Number / User ID"
          value={uid}
          onChange={(e) => onUid(e.target.value)}
          sx={{ ...fieldSx, mb: 2 }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={pwd}
          onChange={(e) => onPwd(e.target.value)}
          sx={{ ...fieldSx, mb: 1 }}
        />
        <Box textAlign="right" mb={2.5}>
          <Typography
            component="span"
            sx={{
              fontSize: 12.5,
              color: "#e85d04",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          endIcon={<LoginIcon />}
          onClick={onLogin}
          sx={{
            background: "linear-gradient(135deg,#e85d04,#f48c06)",
            borderRadius: 3,
            py: { xs: 1.5, md: 1.8 },
            fontWeight: 700,
            fontSize: { xs: 14, md: 15 },
            minHeight: 48,
            "&:hover": {
              boxShadow: "0 10px 28px rgba(232,93,4,.35)",
              transform: "translateY(-2px)",
            },
          }}
        >
          Sign In to Portal
        </Button>

        <Divider sx={{ my: 3 }}>
          <Typography fontSize={12} color="text.secondary">
            Quick Access
          </Typography>
        </Divider>

        <Grid container spacing={1.5}>
          {quickLinks.map((q) => (
            <Grid item xs={6} key={q.title}>
              <Card elevation={0} sx={{ ...cardHover, cursor: "pointer" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    py: "12px !important",
                    px: { xs: "10px !important", sm: "16px !important" },
                  }}
                >
                  <Typography fontSize={18}>{q.icon}</Typography>
                  <Box overflow="hidden">
                    <Typography fontWeight={600} fontSize={12} noWrap>
                      {q.title}
                    </Typography>
                    <Typography fontSize={11} color="text.secondary" noWrap>
                      {q.sub}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

function Dashboard({ onLogout }) {
  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: "auto",
        px: { xs: 1.5, sm: 3, md: 4 },
        py: { xs: 2, sm: 4 },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: "linear-gradient(120deg,#1a0a00,#3d1200 40%,#e85d04)",
          borderRadius: { xs: 3, md: 4 },
          p: { xs: 2.5, sm: 3, md: 4 },
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display',serif",
              color: "#fff",
              fontSize: { xs: "18px", sm: "22px", md: "24px" },
            }}
          >
            Welcome back,{" "}
            <Box component="span" sx={{ color: "#f48c06" }}>
              Rahul Sharma
            </Box>{" "}
            👋
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,.65)",
              mt: 0.5,
              fontSize: { xs: 12, sm: 14 },
            }}
          >
            Roll No: 2024-SC-0042 | Class XII – Science | Session 2025–26
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<LogoutIcon />}
          onClick={onLogout}
          size="small"
          sx={{
            color: "#fff",
            borderColor: "rgba(255,255,255,.3)",
            minHeight: 40,
            whiteSpace: "nowrap",
            "&:hover": { bgcolor: "rgba(255,255,255,.1)" },
          }}
        >
          Log Out
        </Button>
      </Box>

      {/* Stats */}
      <Grid container spacing={{ xs: 1.5, sm: 2 }} mb={3}>
        {[
          ["📊", "Attendance", "87%", "This semester"],
          ["🏆", "Overall Grade", "A+", "Last exam"],
          ["📚", "Subjects", "6", "Enrolled"],
          ["💳", "Fee Status", "Paid ✓", "2025–26"],
        ].map(([icon, lbl, val, sub]) => (
          <Grid item xs={6} sm={6} md={3} key={lbl}>
            <Card elevation={0} sx={cardHover}>
              <CardContent
                sx={{ p: { xs: "12px !important", sm: "16px !important" } }}
              >
                <Typography fontSize={20} mb={0.5}>
                  {icon}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#999",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {lbl}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: { xs: 22, sm: 28 },
                    color: "#e85d04",
                    fontWeight: 800,
                    lineHeight: 1.1,
                  }}
                >
                  {val}
                </Typography>
                <Typography fontSize={11} color="text.secondary">
                  {sub}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Main Grid */}
      <Grid container spacing={{ xs: 2, sm: 2.5 }}>
        <Grid item xs={12} md={7}>
          <Card elevation={0} sx={{ ...cardHover, mb: { xs: 2, sm: 2.5 } }}>
            <CardContent
              sx={{ p: { xs: "16px !important", sm: "20px !important" } }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Playfair Display',serif",
                  mb: 2,
                  fontSize: { xs: "16px", sm: "18px" },
                }}
              >
                🔔 Latest Notices
              </Typography>
              {notices.map((n) => (
                <Box
                  key={n.title}
                  sx={{
                    borderLeft: "3px solid #e85d04",
                    pl: 1.5,
                    py: 1,
                    bgcolor: "#fff5eb",
                    borderRadius: "0 8px 8px 0",
                    mb: 1,
                  }}
                >
                  <Typography
                    fontWeight={600}
                    fontSize={{ xs: 12.5, sm: 13.5 }}
                  >
                    {n.title}
                  </Typography>
                  <Typography fontSize={11} color="text.secondary">
                    {n.date}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>

          <Card elevation={0} sx={cardHover}>
            <CardContent
              sx={{ p: { xs: "16px !important", sm: "20px !important" } }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Playfair Display',serif",
                  mb: 2,
                  fontSize: { xs: "16px", sm: "18px" },
                }}
              >
                📊 Recent Results
              </Typography>
              {results.map((r, i) => (
                <Stack
                  key={r.sub}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  py={1.2}
                  borderBottom={
                    i < results.length - 1 ? "1px solid #f5f0eb" : ""
                  }
                >
                  <Typography fontWeight={600} fontSize={{ xs: 13, sm: 14 }}>
                    {r.sub}
                  </Typography>
                  <Chip
                    label={r.grade}
                    size="small"
                    color={r.color}
                    sx={{ fontWeight: 700, fontSize: { xs: 11, sm: 12 } }}
                  />
                </Stack>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card elevation={0} sx={cardHover}>
            <CardContent
              sx={{ p: { xs: "16px !important", sm: "20px !important" } }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Playfair Display',serif",
                  mb: 2,
                  fontSize: { xs: "16px", sm: "18px" },
                }}
              >
                ⚡ Quick Actions
              </Typography>
              <Grid container spacing={1.5}>
                {actions.map((a) => (
                  <Grid item xs={6} key={a}>
                    <Card
                      elevation={0}
                      sx={{
                        ...cardHover,
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                    >
                      <CardContent
                        sx={{
                          py: "14px !important",
                          px: "8px !important",
                          minHeight: 44,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 0.5,
                        }}
                      >
                        <Typography fontSize={20}>{a.split(" ")[0]}</Typography>
                        <Typography
                          fontSize={{ xs: 11, sm: 12 }}
                          fontWeight={700}
                        >
                          {a.split(" ").slice(1).join(" ")}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
