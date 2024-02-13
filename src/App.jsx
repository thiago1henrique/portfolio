import Header from "./components/header";
import BannerHero from "./components/BannerHero";
import Carrossel from "./components/Carrossel"
import Experiencia from "./components/Experiencia";
import Formacao from "./components/Formacao";
import Competencias from "./components/Competencias";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  console.clear()
  console.log("Desenvolvido por Thiago")
  return (
    <div>
      <Header/>
      <BannerHero/>
      <Carrossel/>
      <Experiencia/>
      <Formacao/>
      <Competencias/>
      <Contato/>
      <Footer/>
    </div>
  )
}