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

import SubtitleContainer from "../components/SubtitleContainer";
import "./Home.css";

const Home: React.FC = () => {
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

        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton color="warning">
            <IonIcon icon={play} />
          </IonFabButton>
        </IonFab>
        <div className="container">
          <SubtitleContainer fileName="peaky_blinders_cap12.mp4" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
