import { useParams } from "react-router-dom";

function CarDetails() {

  const { id } = useParams();

  const cars = {
    1: {
      name: "BMW M4",
      price: "₹1.53 Crore",
      color: "Black",
      engine: "2993cc",
      mileage: "10 kmpl"
    },

    2: {
      name: "Audi R8",
      price: "₹2.30 Crore",
      color: "White",
      engine: "5204cc",
      mileage: "8 kmpl"
    },

    3: {
      name: "Mercedes C-Class",
      price: "₹65 Lakh",
      color: "Silver",
      engine: "1999cc",
      mileage: "15 kmpl"
    },

    4: {
      name: "Toyota Fortuner",
      price: "₹52 Lakh",
      color: "Grey",
      engine: "2755cc",
      mileage: "14 kmpl"
    },

    5: {
      name: "Tesla Model S",
      price: "₹1.50 Crore",
      color: "Red",
      engine: "Electric",
      mileage: "600 km Range"
    },

    6: {
      name: "Hyundai Creta",
      price: "₹20 Lakh",
      color: "Blue",
      engine: "1497cc",
      mileage: "18 kmpl"
    }
  };

  const selectedCar = cars[id];

  return (
    <div className="page">

      <h1>
        {selectedCar?.name}
      </h1>

      <br />

      <h3>
        Price: {selectedCar?.price}
      </h3>

      <br />

      <p>
        Color: {selectedCar?.color}
      </p>

      <p>
        Engine: {selectedCar?.engine}
      </p>

      <p>
        Mileage: {selectedCar?.mileage}
      </p>

    </div>
  );
}

export default CarDetails;