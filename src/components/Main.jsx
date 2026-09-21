import { useState } from "react";
import heroImg from "../assets/jumbotron.jpg";
import ComicsList from "./comics-list/ComicsList.jsx";
import ComicModal from "./ComicModal.jsx";

export default function Main() {
  const [selectedComic, setSelectedComic] = useState(null);

  return (
    <main>
      <img
        src={heroImg}
        alt=""
        className="w-full aspect-[4/1] object-cover object-top"
      />

      <div className="bg-black flex px-[150px] pb-6 flex-wrap gap-5 justify-center">
        <div className="w-full flex justify-start">
          <div className="bg-sky-500 px-7 py-3 relative top-[-25px] ">
            <p className="text-white font-bold uppercase">Current series</p>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-5 pb-6">
          <ComicsList onSelectComic={setSelectedComic} />
        </div>
        <button className="bg-sky-500 text-white font-bold p-3">
          LOAD MORE
        </button>
      </div>

      <ComicModal
        comic={selectedComic}
        onClose={() => setSelectedComic(null)}
      />
    </main>
  );
}

