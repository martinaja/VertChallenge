import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activitie from "../components/Activities";
import { getAsyncActivities } from "../reducers/activitieReducer";

const Home = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activitieReducer.activities);
  useEffect(() => {
    dispatch(getAsyncActivities());
  }, [dispatch]);

  return (
    <div>
      {activities?.map((activitie, index) => {
        return <Activitie key={index} activitie={activitie} />;
      })}
    </div>
  );
};

export default Home;
