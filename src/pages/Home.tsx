// src/pages/Home.tsx
import { Contato } from "../components/Contact";
import { Header } from "../components/Header";
import Hero from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contato />
        
      </main>
    </>
  );
}
