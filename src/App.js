import "./App.css";
import { Background } from "./components/Background";
import { Logo } from "./components/Logo";

function App() {
  return (
    <div>
      <div className="logo-container">
        <div className="logo">
          <Logo />
        </div>
      </div>
      <div className="link-container">
        <a href="mailto:contact@storie.ai">Contact us</a>
      </div>
      <Background />
    </div>
  );
}

export default App;
