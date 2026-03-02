import { NavLink } from "react-router-dom";

interface IMenuLinkProps {
  href: string;
  title: string;
}

export default function MenuLink({ href, title }: IMenuLinkProps) {
  const activeStyles = "font-semibold  border-white";
  const linkClasses =
    "text-white/75 hover:text-white transition-colors border-b-2  border-transparent  pb-0.5";
  const combinedClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${linkClasses} ${activeStyles}` : linkClasses;
  return (
    <NavLink to={href} className={combinedClasses}>
      {title}
    </NavLink>
  );
}
