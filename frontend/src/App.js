import "./App.css";
import Header from "./Header";
import SwipeButton from "./SwipeButton";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className='App'>
      {/* SEM naming convension */}
      {/* header */}
      <Header />
      {/* tinder cards */}
      <TinderCards />
      {/* swipe button */}
      <SwipeButton />
    </div>
  );
}

export default App;
