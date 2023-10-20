import Footer from "./components/Footer";
import Header from "./components/Header"
import TitleWithText from "./components/TitleWithText"


function App() {
  return (
    <>
      <Header />
      <TitleWithText
        title="Título do bloco"
        content=" Conteúdo do primeiro bloco"
      />

      <TitleWithText
        title=" Outro Título"
        content=" Conteúdo do segundo bloco"
      />
      <Footer author=" Maria Eduarda Carvalho" />
    </>
  );
}

export default App
