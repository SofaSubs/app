import "./SubtitleItem.css";

interface ItemProps {
  backgroundColor: string;
}

const SubtitleItem: React.FC<ItemProps> = ({ backgroundColor }) => {
  return (
    <div className={`container bg-${backgroundColor}`}>
      <div className="content">
        <h4>Subtitle Box {backgroundColor}</h4>
      </div>
    </div>
  );
};

export default SubtitleItem;
