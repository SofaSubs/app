import "./SubtitleContainer.css";
import SubtitleItem from "./SubtitleItem";

const SubtitleContainer: React.FC = () => {
  return (
    <div className="container">
      <SubtitleItem backgroundColor="white" />
      <SubtitleItem backgroundColor="blue" />
    </div>
  );
};

export default SubtitleContainer;
