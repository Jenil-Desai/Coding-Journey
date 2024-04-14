import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UmbrellaOutlinedIcon from "@mui/icons-material/UmbrellaOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345, background: "rgba( 255, 255, 255, 0.1 )", backdropFilter: "blur( 2px )", borderRadius: "10px" }}>
          {/* <CardMedia sx={{ height: 100 }} image="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="green iguana" /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", justifyContent: "center", gap: "6px", alignItems: "center" }}>
              {info.city}&nbsp;
              {info.humidity > 80 ? <UmbrellaOutlinedIcon /> : info.temp > 15 ? <WbSunnyOutlinedIcon /> : <AcUnitOutlinedIcon />}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <div className="InfoText">
                The weather is {info.weather} and feels like {info.feelsLike}&deg;C
              </div>
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <TableContainer component={Paper} sx={{ background: "rgba( 255, 255, 255, 0.1 )", backdropFilter: "blur( 2px )", borderRadius: "10px" }}>
                <Table sx={{ minWidth: 310 }} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell align="left">Temperature</TableCell>
                      <TableCell align="center">{info.temp}&deg;C</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Humidity</TableCell>
                      <TableCell align="center">{info.humidity}%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Min Temp</TableCell>
                      <TableCell align="center">{info.tempMin}&deg;C</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Max Temp</TableCell>
                      <TableCell align="center">{info.tempMax}&deg;C</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
