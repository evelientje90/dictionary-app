import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
        <div className="container">
        	<header className="App-header">
          	<img src={logo} className="App-logo img-fluid mb-3" alt="logo" />
        		<main>
				<Dictionary defaultKeyword="dog"/>
				</main>
			</header>
        	<footer className="App-footer">
          This project was coded by Evelina Kupryte and is open-sourced on {" "}
        		<a
        			href="https://github.com/evelientje90/dictionary-app"
        			target="_blank"
        			rel="noopener noreferrer"
       			 >
          		GitHub
      			</a>{" "}
      			and hosted on {" "}
      			<a
       				href="https://laughing-fermat-7f961f.netlify.app/"
      				target="_blank"
      				rel="noopener noreferrer"
      			>Netlify</a>
			</footer>
      </div>
    </div>
  );
}
