export default function Card({ comicData }) {
  const { id, thumb, title, series } = comicData;
  return (
    <div key={id} className="w-[180px] hover:bg-sky-500 hover:font-bold">
      <img
        src={thumb}
        alt={title}
        className="aspect-[2/3] object-cover object-top"
      />
      <p className="text-white uppercase py-2 p-1 ">{series}</p>
    </div>
  );
}
