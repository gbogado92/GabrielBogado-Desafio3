import React from "react";
import Card from "../components/Card";
import { clothes } from "../models/clothes";

const WomenScreen = () => {
  // Filtra las prendas de ropa para mujeres (tipo "m") de la lista completa.
  const womens = clothes.filter((clothe) => clothe.type === "m");

  return (
    <div className="container mt-3 text-center">
      <h1>Women's Collection</h1>
      <hr />
      <div className="row">
        {/* Mapea las prendas filtradas y crea un componente Card para cada una. */}
        {womens.map((women) => (
          <Card key={women.id} {...women} />
        ))}
      </div>
    </div>
  );
};

export default WomenScreen;
