import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import HorizontalRule from "@/components/HorizontalRule";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <NavBar/>
      <HorizontalRule/>
      <Articles/>
      <HorizontalRule/>
      <Footer />
    </main>
  );
}
