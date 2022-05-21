import React, {useState} from "react";
import Rating from "./components/Rating";
import Submit from "./components/Submit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Rating rating={rating} setRating={setRating}/>} />
        <Route path="/submit" element={<Submit rating={rating} setRating={setRating}/>} />
      </Routes>
    </Router>
  );
}

export default App;
