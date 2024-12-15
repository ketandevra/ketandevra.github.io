import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

const Display = () => {
  const solankiFightersPlayers = [
    {
      id: "032",
      name: "महेश भाटी",
      role: "ऑल राउंडर",
      price: 10000,
    },
    {
      id: "029",
      name: "श्रीश परिहार",
      role: "बल्लेबाज",
      price: 1000,
    },
    {
      id: "041",
      name: "राहुल परिहार",
      role: "गेंदबाज",
      price: 10000,
    },
    {
      id: "043",
      name: "शांतिलाल पँवार",
      role: "ऑल राउंडर",
      price: 25000,
    },
    {
      id: "105",
      name: "राकेश भाटी",
      role: "बल्लेबाज",
      price: 4000,
    },
    {
      id: "040",
      name: "अनुराग परिहार",
      role: "ऑल राउंडर",
      price: 3000,
    },
    {
      id: "031",
      name: "प्रकाश परिहार",
      role: "गेंदबाज",
      price: 8000,
    },
    {
      id: "012",
      name: "चेतन प्रकाश देवड़ा",
      role: "ऑल राउंडर",
      price: 7000,
    },
    {
      id: "004",
      name: "महेंद्र परिहार",
      role: "ऑल राउंडर",
      price: 12000,
    },
    {
      id: "096",
      name: "हेमंत गेहलोत",
      role: "ऑल राउंडर",
      price: 1000,
    },
    {
      id: "038",
      name: "चंद्रप्रकाश भाटी",
      role: "गेंदबाज",
      price: 8000,
    },
    {
      id: "034",
      name: "नमन सोलंकी",
      role: "बल्लेबाज",
      price: 4000,
    },
    {
      id: "089",
      name: "रवि भाटी",
      role: "गेंदबाज",
      price: 4000,
    },
    {
      id: "078",
      name: "विपुल भाटी",
      role: "ऑल राउंडर",
      price: 3000,
    },
  ];

  const gCCRoyalsPlayers = [
    {
      id: "022",
      name: "गजेंद्र भाटी",
      role: "गेंदबाज",
      price: 10000,
    },
    {
      id: "028",
      name: "मुकेश निकुम",
      role: "ऑल राउंडर",
      price: 8000,
    },
    {
      id: "056",
      name: "प्रवीण परिहार",
      role: "ऑल राउंडर",
      price: 20000,
    },
    {
      id: "018",
      name: "दिनेश भाटी",
      role: "विकेट कीपर",
      price: 17000,
    },
    {
      id: "073",
      name: "विक्रम सोलंकी",
      role: "गेंदबाज",
      price: 5000,
    },
    {
      id: "082",
      name: "मुकेश परमार",
      role: "ऑल राउंडर",
      price: 3000,
    },
    {
      id: "068",
      name: "किशन परमार",
      role: "ऑल राउंडर",
      price: 8000,
    },
    {
      id: "016",
      name: "प्रकाश भाटी",
      role: "बल्लेबाज",
      price: 6000,
    },
    {
      id: "102",
      name: "हेमन्त पँवार",
      role: "बल्लेबाज",
      price: 4000,
    },
    {
      id: "057",
      name: "अनिल सोलंकी",
      role: "ऑल राउंडर",
      price: 12000,
    },
    {
      id: "042",
      name: "पंकज सोलंकी",
      role: "बल्लेबाज",
      price: 3000,
    },
    {
      id: "036",
      name: "धैर्य पँवार",
      role: "बल्लेबाज",
      price: 1000,
    },
    {
      id: "052",
      name: "पंकज भाटी",
      role: "बल्लेबाज",
      price: 1000,
    },
    {
      id: "014",
      name: "छगन भाटी",
      role: "ऑल राउंडर",
      price: 1000,
    },
  ];

  const ShreeNathJiClubPlayers = [
    {
      id: "100",
      name: "हुक्मीचंद पँवार",
      role: "ऑल राउंडर",
      price: 10000,
    },
    {
      id: "097",
      name: "सुजल भाटी",
      role: "बल्लेबाज",
      price: 4000,
    },
    {
      id: "021",
      name: "सोहनलाल भाटी",
      role: "ऑल राउंडर",
      price: 9000,
    },
    {
      id: "112",
      name: "तुसार भाटी",
      role: "बल्लेबाज",
      price: 5000,
    },
    {
      id: "088",
      name: "गौरव कुमार देवड़ा",
      role: "ऑल राउंडर",
      price: 3000,
    },
    {
      id: "099",
      name: "जोगेंद्र पँवार",
      role: "बल्लेबाज",
      price: 1000,
    },
    {
      id: "098",
      name: "भरत कुमार भाटी",
      role: "ऑल राउंडर",
      price: 5000,
    },
    {
      id: "064",
      name: "प्रकाशचंद पँवार",
      role: "ऑल राउंडर",
      price: 10000,
    },
    {
      id: "024",
      name: "समर परिहार",
      role: "ऑल राउंडर",
      price: 7000,
    },
    {
      id: "050",
      name: "सुरेशचंद परिहार",
      role: "ऑल राउंडर",
      price: 10000,
    },
    {
      id: "093",
      name: "प्रभुदयाल परिहार",
      role: "ऑल राउंडर",
      price: 1000,
    },
    {
      id: "104",
      name: "जोगेंद्र भाटी",
      role: "विकेट कीपर",
      price: 4000,
    },
    {
      id: "059",
      name: "सोहन पँवार",
      role: "बल्लेबाज",
      price: 1000,
    },
    {
      id: "081",
      name: "सुभाष",
      role: "ऑल राउंडर",
      price: 27000,
    },
  ];

  const trophyFighterPlayers = [
    {
      id: "106",
      name: "गोपल कृष्णा राठौड़",
      role: "ऑल राउंडर",
      price: 10000,
    },
    {
      id: "091",
      name: "ललित भाटी",
      role: "बल्लेबाज",
      price: 1000,
    },
    {
      id: "048",
      name: "सुनील पँवार",
      role: "ऑल राउंडर",
      price: 23000,
    },
    {
      id: "107",
      name: "नारायण लाल परिहार",
      role: "ऑल राउंडर",
      price: 7000,
    },
    {
      id: "109",
      name: "जवरीलाल राठौड़",
      role: "ऑल राउंडर",
      price: 8000,
    },
    {
      id: "110",
      name: "आर्यन राठौड़",
      role: "बल्लेबाज",
      price: 13000,
    },
    {
      id: "010",
      name: "रमेश परिहार",
      role: "गेंदबाज",
      price: 3000,
    },
    {
      id: "047",
      name: "दीपक पँवार",
      role: "गेंदबाज",
      price: 12000,
    },
    {
      id: "092",
      name: "दुर्गेश बोराणा",
      role: "ऑल राउंडर",
      price: 1000,
    },
    {
      id: "108",
      name: "कुशल बोराणा",
      role: "ऑल राउंडर",
      price: 1000,
    },
    {
      id: "054",
      name: "जिग्नेश कुमार भाटी",
      role: "बल्लेबाज",
      price: 16000,
    },
    {
      id: "015",
      name: "रोहन परिहार",
      role: "बल्लेबाज",
      price: 1000,
    },
    {
      id: "017",
      name: "हितेश पँवार",
      role: "बल्लेबाज",
      price: 2000,
    },
    {
      id: "072",
      name: "हर्षित भाटी",
      role: "ऑल राउंडर",
      price: 1000,
    },
  ];

  const maaTanodClubPlayers = [
    {
      id: "103",
      name: "अमित सोलंकी",
      role: "ऑल राउंडर",
      price: 10000,
    },
    {
      id: "065",
      name: "प्रमोद बोराणा",
      role: "ऑल राउंडर",
      price: 15000,
    },
    {
      id: "080",
      name: "गणपत परमार",
      role: "ऑल राउंडर",
      price: 16000,
    },
    {
      id: "075",
      name: "ललित पँवार",
      role: "ऑल राउंडर",
      price: 11000,
    },
    {
      id: "046",
      name: "संजय पँवार",
      role: "ऑल राउंडर",
      price: 3000,
    },
    {
      id: "003",
      name: "धीरेन पँवार",
      role: "ऑल राउंडर",
      price: 1000,
    },
    {
      id: "076",
      name: "अरविन्द भाटी",
      role: "ऑल राउंडर",
      price: 3000,
    },
    {
      id: "019",
      name: "प्रवीण राठौड़",
      role: "ऑल राउंडर",
      price: 5000,
    },
    {
      id: "070",
      name: "वीरेंद्र भाटी",
      role: "विकेट कीपर",
      price: 8000,
    },
    {
      id: "095",
      name: "नरसिंग परिहार",
      role: "ऑल राउंडर",
      price: 15000,
    },
    {
      id: "011",
      name: "संजय भाटी",
      role: "ऑल राउंडर",
      price: 8000,
    },
    {
      id: "009",
      name: "अमृत",
      role: "ऑल राउंडर",
      price: 3000,
    },
    {
      id: "101",
      name: "भरत",
      role: "बल्लेबाज",
      price: 1000,
    },
    {
      id: "035",
      name: "हेतन परिहार",
      role: "",
      price: 1000,
    },
  ];

  const zafriSuperPlayers = [
    {
      id: "079",
      name: "महेंद्र परिहार",
      role: "ऑल राउंडर",
      price: 10000,
    },
    {
      id: "066",
      name: "ओमप्रकाश परिहारिया",
      role: "बल्लेबाज",
      price: 6000,
    },
    {
      id: "008",
      name: "गौरव सोलंकी",
      role: "ऑल राउंडर",
      price: 14000,
    },
    {
      id: "026",
      name: "राहुल देवड़ा",
      role: "बल्लेबाज",
      price: 6000,
    },
    {
      id: "062",
      name: "नकुल देवड़ा",
      role: "ऑल राउंडर",
      price: 3000,
    },
    {
      id: "013",
      name: "प्रियांशु भाटी",
      role: "ऑल राउंडर",
      price: 1000,
    },
    {
      id: "111",
      name: "योगेश पँवार",
      role: "बल्लेबाज",
      price: 6000,
    },
    {
      id: "051",
      name: "ओमाराम परमार",
      role: "ऑल राउंडर",
      price: 6000,
    },
    {
      id: "006",
      name: "महेंद्र परिहार",
      role: "ऑल राउंडर",
      price: 7000,
    },
    {
      id: "053",
      name: "प्रतापराम परमार",
      role: "ऑल राउंडर",
      price: 8000,
    },
    {
      id: "020",
      name: "सूरज बोराणा",
      role: "ऑल राउंडर",
      price: 19000,
    },
    {
      id: "055",
      name: "पिंटूराम भाटी",
      role: "विकेट कीपर",
      price: 4000,
    },
    {
      id: "025",
      name: "मोहित देवड़ा",
      role: "बल्लेबाज",
      price: 5000,
    },
    {
      id: "085",
      name: "नमन परमार",
      role: "ऑल राउंडर",
      price: 3000,
    },
  ];

  const kisanEleveenPlayers = [
    {
      id: "063",
      name: "कुणाल भाटी",
      role: "ऑल राउंडर",
      price: 10000,
    },
    {
      id: "045",
      name: "पिंटू पँवार",
      role: "बल्लेबाज",
      price: 17000,
    },
    {
      id: "071",
      name: "दिनेश परिहार",
      role: "ऑल राउंडर",
      price: 3000,
    },
    {
      id: "044",
      name: "अशोक राठौड़",
      role: "ऑल राउंडर",
      price: 7000,
    },
    {
      id: "060",
      name: "विनोद भाटी",
      role: "ऑल राउंडर",
      price: 4000,
    },
    {
      id: "058",
      name: "आयुष भाटी",
      role: "ऑल राउंडर",
      price: 13000,
    },
    {
      id: "039",
      name: "अनिरुद्ध भाटी",
      role: "ऑल राउंडर",
      price: 12000,
    },
    {
      id: "023",
      name: "अनिल परिहार",
      role: "ऑल राउंडर",
      price: 3000,
    },
    {
      id: "005",
      name: "विनय भाटी",
      role: "गेंदबाज",
      price: 12000,
    },
    {
      id: "037",
      name: "खुशवंत सोलंकी",
      role: "बल्लेबाज",
      price: 3000,
    },
    {
      id: "007",
      name: "हेमन्त पँवार",
      role: "विकेट कीपर",
      price: 4000,
    },
    {
      id: "074",
      name: "विनोद भाटी",
      role: "बल्लेबाज",
      price: 7000,
    },
    {
      id: "077",
      name: "रमन भाटी",
      role: "बल्लेबाज",
      price: 2000,
    },
    {
      id: "084",
      name: "राजेश पँवार",
      role: "ऑल राउंडर",
      price: 3000,
    },
  ];

  const dineshPipesPlayers = [
    {
      id: "090",
      name: "योगेश भाटी",
      role: "बल्लेबाज",
      price: 10000,
    },
    {
      id: "049",
      name: "दिशांतचंद परिहार",
      role: "ऑल राउंडर",
      price: 6000,
    },
    {
      id: "069",
      name: "रमेश परिहार",
      role: "ऑल राउंडर",
      price: 10000,
    },
    {
      id: "094",
      name: "कपिल परमार",
      role: "ऑल राउंडर",
      price: 18000,
    },
    {
      id: "087",
      name: "गिरीश पँवार",
      role: "ऑल राउंडर",
      price: 18000,
    },
    {
      id: "001",
      name: "मनोज कुमार",
      role: "ऑल राउंडर",
      price: 20000,
    },
    {
      id: "067",
      name: "अशोक परिहारिया",
      role: "ऑल राउंडर",
      price: 9000,
    },
    {
      id: "083",
      name: "अविनाश लाटेचा",
      role: "बल्लेबाज",
      price: 2000,
    },
    {
      id: "027",
      name: "अशोक कुमार भाटी",
      role: "ऑल राउंडर",
      price: 1000,
    },
    {
      id: "030",
      name: "रक्षित भाटी",
      role: "ऑल राउंडर",
      price: 1000,
    },
    {
      id: "002",
      name: "जीतेन्द्र पँवार",
      role: "ऑल राउंडर",
      price: 1000,
    },
    {
      id: "033",
      name: "अरुण पँवार",
      role: "बल्लेबाज",
      price: 1000,
    },
    {
      id: "061",
      name: "राजवीर बोराणा",
      role: "ऑल राउंडर",
      price: 1000,
    },
    {
      id: "086",
      name: "योगेन्द्र देवड़ा",
      role: "ऑल राउंडर",
      price: 1000,
    },
  ];

  return (
    <div style={{ padding: 20, backgroundColor: "#9546fa" }}>
      <Typography
        style={{
          fontSize: 40,
          fontWeight: "bold",
          color: "white",
          paddingBottom: 20,
          textAlign: "center",
        }}
      >
        GYMPL - 2024
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 8, lg: 4 }}>
          <div style={{ backgroundColor: "#00bf63" }}>
            <Typography
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Solanki Fighters
            </Typography>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
              <TableHead style={{ backgroundColor: "#00bf63" }}>
                <TableRow>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Id
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Role
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Point
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {solankiFightersPlayers.map((row) => (
                  <TableRow key={row.playerId}>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.id}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.role}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid size={{ xs: 6, md: 8, lg: 4 }}>
          <div style={{ backgroundColor: "#004aad" }}>
            <Typography
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              GCC Royals
            </Typography>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
              <TableHead style={{ backgroundColor: "#004aad" }}>
                <TableRow>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Id
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Role
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Point
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {gCCRoyalsPlayers.map((row) => (
                  <TableRow key={row.playerId}>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.id}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.role}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid size={{ xs: 6, md: 8, lg: 4 }}>
          <div style={{ backgroundColor: "#f80f30" }}>
            <Typography
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Shree Nath Ji Club
            </Typography>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
              <TableHead style={{ backgroundColor: "#f80f30" }}>
                <TableRow>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Id
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Role
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Point
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ShreeNathJiClubPlayers.map((row) => (
                  <TableRow key={row.playerId}>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.id}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.role}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid size={{ xs: 6, md: 8, lg: 4 }}>
          <div style={{ backgroundColor: "#00bf63" }}>
            <Typography
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Trophy Fighter
            </Typography>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
              <TableHead style={{ backgroundColor: "#00bf63" }}>
                <TableRow>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Id
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Role
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Point
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {trophyFighterPlayers.map((row) => (
                  <TableRow key={row.playerId}>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.id}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.role}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid size={{ xs: 6, md: 8, lg: 4 }}>
          <div style={{ backgroundColor: "#004aad" }}>
            <Typography
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Maa Tanod Club
            </Typography>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
              <TableHead style={{ backgroundColor: "#004aad" }}>
                <TableRow>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Id
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Role
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Point
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {maaTanodClubPlayers.map((row) => (
                  <TableRow key={row.playerId}>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.id}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.role}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid size={{ xs: 6, md: 8, lg: 4 }}>
          <div style={{ backgroundColor: "#f80f30" }}>
            <Typography
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Zafri Super
            </Typography>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
              <TableHead style={{ backgroundColor: "#f80f30" }}>
                <TableRow>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Id
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Role
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Point
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {zafriSuperPlayers.map((row) => (
                  <TableRow key={row.playerId}>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.id}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.role}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid size={{ xs: 6, md: 8, lg: 4 }}>
          <div style={{ backgroundColor: "#00bf63" }}>
            <Typography
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Kisan Eleveen
            </Typography>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
              <TableHead style={{ backgroundColor: "#00bf63" }}>
                <TableRow>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Id
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Role
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Point
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {kisanEleveenPlayers.map((row) => (
                  <TableRow key={row.playerId}>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.id}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.role}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid size={{ xs: 6, md: 8, lg: 4 }}>
          <div style={{ backgroundColor: "#004aad" }}>
            <Typography
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Ganpati Silk Mills
            </Typography>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
              <TableHead style={{ backgroundColor: "#004aad" }}>
                <TableRow>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Id
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Role
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontWeight: "bold" }}
                    align="center"
                  >
                    Point
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dineshPipesPlayers.map((row) => (
                  <TableRow key={row.playerId}>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.id}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.role}
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <div style={{ paddingBottom: 400 }} />
      </Grid>
    </div>
  );
};

export default Display;
