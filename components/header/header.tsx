import Link from "next/link";
import MenuOptions from "./menuOptions";

export default function Header() {
  return (
    <div className="fixed w-full h-20 drop-shadow-2xl">
      <div className="flex justify-between h-full mx-80">
        <div className="flex items-center h-full">
          <button className="text-3xl text-white">
            <Link href="/">MoonDogs</Link>
          </button>
        </div>
        <MenuOptions />
      </div>
    </div>
  );
}
