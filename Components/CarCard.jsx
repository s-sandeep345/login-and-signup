import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="card">

      <img
        src={car.image}
        alt={car.name}
        className="car-image"
      />

      <h2>{car.name}</h2>

      <p>
        <strong>Brand:</strong> {car.brand}
      </p>

      <p>
        <strong>Price:</strong> {car.price}
      </p>

      <p>
        <strong>Year:</strong> {car.year}
      </p>

      <Link to={`/car/${car.id}`}>
        <button>
          View Details
        </button>
      </Link>

    </div>
  );
}

export default CarCard;