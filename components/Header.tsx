import { useRouter } from "next/router";
import React from "react";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const routes = useRouter();
  const handleLogout = () => {};
  return <div>{children}</div>;
};

export default Header;
