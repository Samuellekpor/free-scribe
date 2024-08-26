import { useState } from "react";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import FileDisplay from "./components/fileDisplay";
function App() {
  const [file, setFile] = useState(null);
  const [audioStream, setAudioStream] = useState(null);

  const isAudioAvailable = file || audioStream;

  function handleAudioReset() {
    setAudioStream(null);
    setFile(null);
  }
  return (
    <div className="flex flex-col max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />
        {isAudioAvailable ? (
          <FileDisplay file={file} audioStream={audioStream} handleAudioReset={handleAudioReset} />
        ) : <HomePage setFile={setFile} setAudioStream={setAudioStream} />}
      </section>
      <h1 className="text-3xl font-bold text-red-800">hello</h1>
      <footer></footer>
    </div>
  );
}

export default App;
