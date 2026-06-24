import { useState } from "react";

function AdminPanel() {

  const [cars, setCars] =
    useState([
      {
        id: 1,
        name: "BMW M4"
      },
      {
        id: 2,
        name: "Audi R8"
      }
    ]);

  const [carName,
    setCarName] =
    useState("");

  const [editId,
    setEditId] =
    useState(null);

  const addCar = () => {

    if (!carName.trim())
      return;

    const newCar = {
      id: Date.now(),
      name: carName
    };

    setCars([
      ...cars,
      newCar
    ]);

    setCarName("");
  };

  const deleteCar =
    (id) => {

    setCars(
      cars.filter(
        (car) =>
          car.id !== id
      )
    );
  };

  const startEdit =
    (car) => {

    setEditId(car.id);

    setCarName(
      car.name
    );
  };

  const updateCar = () => {

    setCars(
      cars.map((car) =>
        car.id === editId
          ? {
              ...car,
              name:
                carName
            }
          : car
      )
    );

    setEditId(null);

    setCarName("");
  };

  return (
    <div className="page">

      <h1>
        Admin Panel
      </h1>

      <br />

      <input
        type="text"
        placeholder="Car Name"
        value={carName}
        onChange={(e) =>
          setCarName(
            e.target.value
          )
        }
      />

      {editId ? (

        <button
          onClick={
            updateCar
          }
        >
          Update Car
        </button>

      ) : (

        <button
          onClick={
            addCar
          }
        >
          Add Car
        </button>

      )}

      <br />
      <br />

      {cars.map(
        (car) => (

          <div
            key={car.id}
            className="crud-card"
          >

            <h3>
              {car.name}
            </h3>

            <button
              onClick={() =>
                startEdit(
                  car
                )
              }
            >
              Edit
            </button>

            <button
              onClick={() =>
                deleteCar(
                  car.id
                )
              }
            >
              Delete
            </button>

          </div>

        )
      )}

    </div>
  );
}

export default AdminPanel;