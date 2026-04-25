import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;