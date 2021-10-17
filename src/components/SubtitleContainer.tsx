import "./SubtitleContainer.css";
import SubtitleItem from "./SubtitleItem";

import { IonIcon } from "@ionic/react";
import { play, time } from "ionicons/icons";
import { Subtitle } from "../models/models";

interface ContainerProps {
  fileName: string;
  timeFormat: string;
  subtitle: Subtitle;
}

const SubtitleContainer: React.FC<ContainerProps> = ({ fileName, timeFormat, subtitle }) => {

  const txtEnglish = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  const txtSpanish = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.";
  return (
    <div className="container">
      <p><IonIcon icon={play}/> {fileName}    <IonIcon icon={time}/> {timeFormat}</p>
      <SubtitleItem backgroundColor="white" language="Inglés" content={subtitle?.original} />
      <SubtitleItem backgroundColor="blue" language="Español" content={subtitle?.translate} />
    </div>
  );
};

export default SubtitleContainer;
