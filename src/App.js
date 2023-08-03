import "./App.css";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
function App() {
  return (
    <div className="App">
      <Title></Title>
      <UploadForm />
      <ImageGrid></ImageGrid>
    </div>
  );
}

export default App;
