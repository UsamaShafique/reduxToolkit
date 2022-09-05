import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {

  const [ReservationNameInput, setReservationNameInput] = useState('')

  const reservations = useSelector((state: RootState) => state.reservations.value)
  
  const dispatch = useDispatch()

  const handleReservationClick = () => {
    if (!ReservationNameInput) return;
    dispatch(addReservation(ReservationNameInput))
    setReservationNameInput('')
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index}/>;
              })}
              {/* <div className="reservation-card-container">Laith Harb</div> */}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={ReservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button
              onClick={handleReservationClick}
            >Add
            </button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;