import { comics } from "./comics.js";
import Card from "./Card.jsx";

export default function ComicsList({ onSelectComic }) {
  return (
    <>
      {comics.map((comic) => {
        return (
          <Card
            key={comic.id}
            comicData={comic}
            onCardClick={() => onSelectComic && onSelectComic(comic)}
          />
        );
      })}
    </>
  );
}

