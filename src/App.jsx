import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateBook } from "./createBook";
import { AllBooks } from "./Homepage";
import { BookById } from "./Book";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<CreateBook/>}/>
          <Route path="/create-new-book" element={<CreateBook/>}/>
          <Route path="/books" element={<AllBooks/>}/>
          <Route path="/books/:id" element={<BookById/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}