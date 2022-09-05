import React from 'react'
import { useDispatch } from 'react-redux';
import { removeReseravtion } from '../features/reservationSlice';

interface ReservationCardTypes {
    name: string;
    index: number;
}

export default function ReservationCard({ name, index }: ReservationCardTypes) {
    const dispatch = useDispatch();
    return (
        <div onClick={() => {
            dispatch(removeReseravtion(index))
        }
        } className="reservation-card-container">{name}</div>
    )
}
