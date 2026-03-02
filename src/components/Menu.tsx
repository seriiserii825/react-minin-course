import MenuLink from "./MenuLink";

export default function Menu() {
  return (
    <nav className="hidden lg:flex items-center gap-6 text-white text-sm font-medium">
      <MenuLink href="/" title="Home" />
      <MenuLink href="/favorites" title="Favorites" />
    </nav>
  );
}
