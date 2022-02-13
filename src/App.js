import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
        <div className="container">
        	<header className="App-header">
          	<img src={logo} className="App-logo img-fluid" alt="logo" />
        		<main>
				<Dictionary />
				</main>
			</header>
        	<footer className="text-center">Coded by SheCodes
        	</footer>
      </div>
    </div>
  );
}
