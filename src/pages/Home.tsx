import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import { save, sync, play } from "ionicons/icons";
import { useState, useEffect } from "react";

import axios from 'axios';
import moment from 'moment';

import SubtitleContainer from "../components/SubtitleContainer";
import "./Home.css";

const Home: React.FC = () => {

  const [time, setTime] = useState(0);
  const [timeFormat, setTimeFormat] = useState('');

  const getSubtitles = async () => {
    try {
      const res = await axios.get('localhost:8000/api/v1/subs');
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };
  
  useEffect(() => {
    (async () => {
      await getSubtitles();
    })(); 
    const startTimestamp = moment().startOf("day");
    let time = 0;

    const timer = setInterval(() => {
      setTimeFormat(startTimestamp.format('HH:mm:ss'));
      setTime(time);
      startTimestamp.add(1, 'second');
      time++;
    }, 1000);

    return clearInterval(timer);
  }, []);

  return (
    <IonPage>
      <IonHeader color="warning">
        <IonToolbar color="primary">
          <div className="header">
            <IonTitle>SofaSubs</IonTitle>
            <IonIcon icon={sync} size="large"/>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">SofaSubs</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="success">
            <IonIcon icon={save} />
          </IonFabButton>
        </IonFab>

        <IonFab vertical="bottom" horizontal="start" slot="fixed" onClick={() => alert('hola')}>
          <IonFabButton color="warning">
            <IonIcon icon={play} />
          </IonFabButton>
        </IonFab>
        <div className="container">
          <SubtitleContainer fileName="peaky_blinders_cap12.mp4" timeFormat={timeFormat} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
