import './styles.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Home from "./Home";
import UeberMich from "./UeberMich";
import BeispielSeite from "./BeispielSeite";
import frontifyLogo from './img/frontify_logo_off-white_rgb.png';


function App() {
  return (
      <Router>
        <header>
            <Link exact to={"/"}><img className="logo" alt="Frontify" src={frontifyLogo} /></Link>
            <ul>
                <li><Link to={"/ueber-mich"}>Über mich</Link></li>
                <li><Link to={"/beispiel-seite"}>Beispiel Seite</Link></li>
            </ul>
        </header>

        <main>
            <Route exact path="/" component={Home} />
            <Route path="/ueber-mich" component={UeberMich} />
            <Route path="/beispiel-seite" component={BeispielSeite} />
        </main>

        <footer>Diese Website habe ich während meiner Schnupperlehre bei Frontify gebaut.</footer>
      </Router>
  );
}

export default App;
