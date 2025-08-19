import { Header } from "../components/Header";
import { FaDownload } from "react-icons/fa";

import pdf from "../assets/documents/VictorAlves_DevFullStack_2025.pdf";

export function Contato() {
  return (
    <section className="flex flex-col h-screen">
      <Header />
      <main className="h-full flex flex-col justify-center gap-10 items-center bg-background font-poppins">
        <div className="">
          <a
            href={pdf}
            className="text-white bg-button hover:opacity-90 p-4 font-bold text-lg rounded-lg flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaDownload /> Dowload CV
          </a>
        </div>
      </main>
    </section>
  );
}
