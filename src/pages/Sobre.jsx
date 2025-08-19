import { Habilidades } from "../components/Habilidades";
import { Header } from "../components/Header";

export function Sobre() {
  return (
    <section className="flex flex-col h-screen">
      <Header />
      <main className="2xl:h-full flex items-center justify-center bg-background">
        <Habilidades />
      </main>
    </section>
  );
}
