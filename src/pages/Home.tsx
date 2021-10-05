import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import SubtitleContainer from "../components/SubtitleContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SofaSubs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">SofaSubs</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SubtitleContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
