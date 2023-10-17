import React from "react";
import Card from "../components/Card";
import { clothes } from "../models/clothes";

const MenScreen = () => {
  const mens = clothes.filter((clothe) => clothe.type === "h");

  return (
    <div className="container mt-3 text-center">
      <h1>Men's Collection</h1>
      <hr />
      <div className="row">
        {mens.map((men) => (
          <Card key={men.id} {...men} />
        ))}
      </div>
    </div>
  );
};

export default MenScreen;
