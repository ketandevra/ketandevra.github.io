import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

const Dashbaord = () => {
  return (
    <div style={{ backgroundColor: "#6926bc", minHeight: '800px', textAlign: "center" }}>
      <Grid container spacing={1}>
        <Grid size={12}>
          <Typography
            style={{ fontSize: 60, fontWeight: 600, color: "#f6e22b" }}
          >
            श्री क्षत्रीय घाँची युवा महासभा समिति, पाली
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: 100 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img
            src={require("../assets/yogesh.jpg")}
            style={{ width: 250, height: 250, borderRadius: 20 }}
          />
          <Typography
            style={{ fontSize: 25, fontWeight: 600, color: "#f6e22b" }}
          >
            योगेश सोलंकी
          </Typography>
          <Typography
            style={{ fontSize: 20, fontWeight: 600, color: "#f6e22b" }}
          >
            अध्यक्ष
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img
            src={require("../assets/jitu.jpg")}
            style={{ width: 250, height: 250, borderRadius: 20 }}
          />
          <Typography
            style={{ fontSize: 25, fontWeight: 600, color: "#f6e22b" }}
          >
            जितेन्द्र पंवार
          </Typography>
          <Typography
            style={{ fontSize: 20, fontWeight: 600, color: "#f6e22b" }}
          >
            उपाध्यक्ष
          </Typography>
        </Grid><Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img
            src={require("../assets/suresh.jpg")}
            style={{ width: 250, height: 250, borderRadius: 20 }}
          />
          <Typography
            style={{ fontSize: 25, fontWeight: 600, color: "#f6e22b" }}
          >
            सुरेश परिहार
          </Typography>
          <Typography
            style={{ fontSize: 20, fontWeight: 600, color: "#f6e22b" }}
          >
            सचिव
          </Typography>
        </Grid><Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img
            src={require("../assets/deepak.jpg")}
            style={{ width: 250, height: 250, borderRadius: 20 }}
          />
          <Typography
            style={{ fontSize: 25, fontWeight: 600, color: "#f6e22b" }}
          >
           दीपक देवड़ा
          </Typography>
          <Typography
            style={{ fontSize: 20, fontWeight: 600, color: "#f6e22b" }}
          >
            कोषाध्यक्ष
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashbaord;
