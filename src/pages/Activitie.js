import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getAsyncActivitie } from "../reducers/activitieReducer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

const Activitie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const activitie = useSelector((state) => state.activitieReducer.activitie);
  const { name, start_date, distance, elapsed_time, total_elevation_gain } =
    activitie;
  const photo = activitie.photos?.primary.urls[600]; //600

  useEffect(() => {
    dispatch(getAsyncActivitie(id));
  }, [dispatch, id]);

  return (
    <Card sx={{ maxWidth: 285, marginTop: 15 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date: {start_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Distance: {distance}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Time: {elapsed_time}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Elevation gain: {total_elevation_gain}
          </Typography>
        </CardContent>
        <img src={photo} alt="imagen" width={288} height={175} />
      </CardActionArea>
      <Button>
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </Button>
    </Card>
  );
};

export default Activitie;
