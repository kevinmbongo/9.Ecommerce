import React, { useState } from "react";
import { useParams } from "react-router-dom";
import inventory from "../../data/inventory.js";
import "./ProductShowcase.css";

export default function ProductShowcase() {

  const [nbMugs, setNbMugs] = useState(1);

  const { id } = useParams();
  const productClicked = inventory.findIndex(
    (obj) => obj.title.replace(/\s/g, "").trim() === id
  );

  console.log(productClicked);

  const updateMugs = e => {
    setNbMugs(Number(e.target.value))
  } 
  return (
    <div className="showcase">
      <div className="container-img-showcase">
        <img
          className="img-showcase"
          src={
            process.env.PUBLIC_URL +
            `/images/${inventory[productClicked].img}.png`
          }
          alt=""
        />
      </div>
      <div className="product-infos">
        <h2>{inventory[productClicked].title}</h2>
        <p>Price: {inventory[productClicked].price}€</p>
        <form>
          <label htmlFor="quantity">Quantité</label>
          <input type="number" id="quantity" value={nbMugs} onChange={updateMugs}/>
          <button>Ajouetr au panier</button>
          <span className="adding-info"></span>
        </form>
      </div>
    </div>
  );
}
