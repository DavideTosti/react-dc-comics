import dcLogo from "../assets/dc-logo.png";

const headerMobileStyle = "max-md:flex-col max-md:items-center ";
const headerDesktopStyle = "min-md:justify-evenly min-md:items-center";

const listItems = [
  "CHARACTERS",
  "COMICS",
  "MOVIES",
  "TV",
  "GAMES",
  "COLLECTABLES",
  "VIDEOS",
  "FANS",
  "NEWS",
  "SHOP",
];

export default function Header() {
  return (
    <header
      className={`flex w-full ${headerMobileStyle} ${headerDesktopStyle} gap-5 p-5`}
    >
      <img src={dcLogo} alt="DC company logo" className="max-md:w-30" />
      <ul className="flex flex-wrap justify-center p-3 gap-4 ">
        {listItems.map((listItem) => (
          <li
            key={listItem}
            className="hover:text-sky-500 hover:underline decoration-5 underline-offset-8 hover:font-bold p-2"
          >
            {listItem}
          </li>
        ))}
      </ul>
    </header>
  );
}
