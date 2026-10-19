import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <Card
        name="Nguyễn Văn Tài"
        learningClass="Code Intensive"
        slogan="Trở thành master coding là ước mơ của tôi"
      />
      <Card
        name="Trịnh Mẫn Nhi"
        learningClass="Web Fullstack"
        slogan="Học nữa, học mãi"
      />
      <Card name="Vũ Long Môn" learningClass="Code For Everyone" />
    </>
  );
}

export default App;
