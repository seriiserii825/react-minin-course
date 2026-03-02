import {
  useIsMiniCartOpen,
  useMiniCartProducts,
  useSetIsMiniCartOpen,
} from "@/store/useMiniCartStorage";
import { Link } from "react-router-dom";
import FavoritesBtn from "./FavoritesBtn";
import Logo from "./Logo";
import Menu from "./Menu";
import MiniCartBtn from "./MiniCartBtn";
import Search from "./Search";

export default function MainHeader() {
  const setIsOpen = useSetIsMiniCartOpen();
  const isOpen = useIsMiniCartOpen();
  const miniCartProducts = useMiniCartProducts();
  function toggleMiniCart() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="container mx-auto">
        <div className="py-4 flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 mr-auto">
            <Logo />
          </Link>
          <Search />
          <Menu />

          <div className="flex items-center gap-3 shrink-0 ml-auto lg:ml-0">
            <FavoritesBtn />
            <MiniCartBtn
              onClick={toggleMiniCart}
              productsCount={miniCartProducts ? miniCartProducts.length : 0}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
