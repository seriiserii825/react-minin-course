import FavoritesBtn from "./FavoritesBtn";
import Logo from "./Logo";
import Menu from "./Menu";
import MiniCartBtn from "./MiniCartBtn";
import Search from "./Search";

export default function MainHeader() {
  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="container mx-auto">
        <div className="py-4 flex items-center gap-6">
          <Logo />
          <Search />
          <Menu />

          <div className="flex items-center gap-3 shrink-0 ml-auto lg:ml-0">
            <FavoritesBtn />
            <MiniCartBtn />
          </div>
        </div>
      </div>
    </header>
  );
}
