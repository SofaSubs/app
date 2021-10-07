import "./SubtitleItem.css";

interface ItemProps {
  backgroundColor: string;
  language: string;
  content: string;
}

const SubtitleItem: React.FC<ItemProps> = ({ backgroundColor, language, content }) => {
  return (
    <div className={`container bg-${backgroundColor}`}>
      <div className="content">
      <h5><b>{language.toUpperCase()}</b></h5>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SubtitleItem;
