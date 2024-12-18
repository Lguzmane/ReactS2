const CardPizza = ({ name, price, ingredients, img }) => {
    return (
      <div className="card">
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <p><strong>Precio:</strong> ${price}</p>
        <p><strong>Ingredientes:</strong> {ingredients.join(", ")}</p>
        <button>Ver más</button>
        <button>Añadir</button>
      </div>
    );
  };
  
  export default CardPizza;
  