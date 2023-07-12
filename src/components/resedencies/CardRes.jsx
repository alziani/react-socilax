import React from "react";
import Card from "react-bootstrap/Card";
import "./resedencies.css";

function CardRes({ image, price, name, detail }) {
  return (
    <Card className="r-card flexColStart">
      <Card.Img className="image" src={image} />
      <Card.Body>
        <Card.Text className="secondaryText r-price">$ {price} </Card.Text>
        <Card.Title className="primaryText name">{name}</Card.Title>
        <Card.Text className="secondaryText det">{detail} </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardRes;
