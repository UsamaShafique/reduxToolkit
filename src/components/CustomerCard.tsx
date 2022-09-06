import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/customerSlice'

interface customerCardType {
    id: string;
    name: string;
    food: string[];
}

export const CustomerCard = ({ id, name, food }: customerCardType) => {
    const [CustomerFoodInput, setCustomerFoodInput] = useState('')
    const dispatch = useDispatch()
    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {food.map((food) => {
                        return <p>{food}</p>;
                    })}
                </div>
                <div className="customer-food-input-container">
                    <input
                        value={CustomerFoodInput}
                        onChange={(e) => setCustomerFoodInput(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            dispatch(addFoodToCustomer({
                                id,
                                food: CustomerFoodInput,
                            }))
                            setCustomerFoodInput('');
                        }}
                    >Add</button>
                </div>
            </div>
        </div >
    )
}
