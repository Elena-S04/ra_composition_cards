import Cards from "./components/CardsFunc";
import imageCap from "./img/ImageCap.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const arrCards = [
    {
      image: {
        src: imageCap,
        alt: "some alt",
      },
      title: "Card title",
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: {
        text: "Go somewhere",
        href: "https:#0",
      },
    },
    {
      title: "Special title treatment",
      paragraph:
        "With supporting text below as a natural lead-in to additional content.",
      link: {
        text: "Go somewhere",
        href: "https:#0",
      },
    },
  ];
  return (
    <div className="main-content">
      <Cards cards={arrCards} />
    </div>
  );
}

export default App;
