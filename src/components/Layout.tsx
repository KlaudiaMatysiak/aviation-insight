import { ReactNode } from "react";
import Header from "../components/Header.tsx";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="bg-av">
        <Header />
        <div className="row">
          <div className="col-11 mx-auto">{children}</div>
        </div>
      </main>
    </>
  );
}
