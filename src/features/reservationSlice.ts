import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
    value: string[]
}

const initialState: ReservationState = {
    value: []
}

export const reservationSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        removeReseravtion: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1)
        }
    }
})

export const { addReservation, removeReseravtion } = reservationSlice.actions

export default reservationSlice.reducer;