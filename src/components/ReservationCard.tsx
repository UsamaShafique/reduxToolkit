import React from 'react'
import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customerSlice';
import { removeReservation } from '../features/reservationSlice';
import { v4 as uuid } from 'uuid'

interface ReservationCardTypes {
    name: string;
    index: number;
}

export default function ReservationCard({ name, index }: ReservationCardTypes) {
    const dispatch = useDispatch();
    return (
        <div onClick={() => {
            dispatch(addCustomer({
                id: uuid(),
                name: name,
                food: [],
            }))
            dispatch(removeReservation(index))
        }
        } className="reservation-card-container">{name}</div>
    )
}
