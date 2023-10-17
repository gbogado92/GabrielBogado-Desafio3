import React from "react";

const Card = ({ id, name, description, type, precio }) => {
  // Construye la ruta de la imagen basada en el tipo y el ID de la prenda.
  const path = `/assets/${type}-${id}.png`;

  // Estilos para el precio de la prenda.
  const precioStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  return (
    <div className="card m-3 col-12 col-md-4 mx-auto" style={{ width: 250 }}>
      <img className="card-img-top" src={path} alt={id} />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <h4 style={precioStyle}>Precio: {precio}</h4>
      </div>
    </div>
  );
};

export default Card;
