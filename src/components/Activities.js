import { Link } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Activities = (activitie) => {
  const { name, start_date, distance, elapsed_time, total_elevation_gain, id } =
    activitie.activitie;

  return (
    <Card sx={{ maxWidth: 285, marginTop: 5, marginBottom: 5 }}>
      <CardContent>
        <Typography
          variant="inherit"
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          {start_date}
        </Typography>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="subtitle1" color="text.secondary">
          Distance: {distance}
        </Typography>
        <Typography variant="body2"></Typography>
        Time: {elapsed_time}
        <Typography variant="body1">Gain: {total_elevation_gain}</Typography>
      </CardContent>
      <CardContent>
        <Link to={`/activitie/${id}`} style={{ textDecoration: "none" }}>
          ver
        </Link>
      </CardContent>
    </Card>
  );
};

export default Activities;
