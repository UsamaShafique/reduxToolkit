import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
    value: Customer[]
}

interface CustomerFoodInput {
    id: string;
    food: string;
}

interface Customer {
    id: string;
    name: string;
    food: string[];
}

const initialState: CustomerState = {
    value: []
}

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload)
        },
        addFoodToCustomer: (state, action: PayloadAction<CustomerFoodInput>) => {
            state.value.forEach((customer) => {
                if (customer.id === action.payload.id) {
                    customer.food.push(action.payload.food)
                }
            });
        },
    }
})

export const { addCustomer, addFoodToCustomer } = customerSlice.actions

export default customerSlice.reducer;