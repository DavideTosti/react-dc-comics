export default function Card({ comicData, onCardClick }) {
  const { id, thumb, title, series } = comicData;
  return (
    <div
      key={id}
      onClick={onCardClick}
      className="w-[180px] cursor-pointer group hover:bg-sky-500 transition-all rounded-sm overflow-hidden"
    >
      <div className="overflow-hidden aspect-[2/3]">
        <img
          src={thumb}
          alt={title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="text-white uppercase py-2 p-1 group-hover:font-bold">
        {series}
      </p>
    </div>
  );
}

