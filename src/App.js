import "./App.scss";
import Body from "./components/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import MyServices from "./components/MyServices";
import RecentProjects from "./components/RecentProjects/RecentProjects";


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <MyServices />
      <RecentProjects/>
      <Footer />
    </div>
  );
}

export default App;
