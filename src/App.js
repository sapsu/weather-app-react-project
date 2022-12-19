import "./App.css";
import Header from "./Header";
import Search from "./Search";
import Location from "./Location";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Location />
      <Weather />
      <Footer />
    </div>
  );
}
