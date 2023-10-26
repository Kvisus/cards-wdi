type CardTypes = {
  card: string[];
  title: string;
};

function Card({ card, title }: CardTypes) {
  return (
    <div className="single-card">
      <h1>{title}</h1>
      <ul>
        {card.map((cardItem) => (
          <li key={cardItem}>{cardItem}</li>
        ))}
      </ul>
    </div>
  );
}
export default Card;
