import { SearchIcon } from "../../assets/icon/search.tsx";
import { AccountIcon } from "../../assets/icon/account.tsx";

export function Header() {
  return (
    <header className="py-6 px-[8%] flex justify-between">
      <a href="#" className="font-montserrat font-semibold text-4xl">
        VOYAGO
      </a>
      <div className="flex gap-4">
        <a href="#">
          <SearchIcon />
        </a>
        <a href="#">
          <AccountIcon />
        </a>
      </div>
    </header>
  );
}
