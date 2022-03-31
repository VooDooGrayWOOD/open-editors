import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ];
    
    const [counters, setCounters] = useState(initialState);
    
    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState);
    };
    const onIncrement = (id) => {
        const newCounters = [...counters];
        const index = counters.findIndex(c => c.id === id)
        newCounters[index].value += 1;
        setCounters(newCounters)
    }
    
    const onDecrement = (id) => {
        const newCounters = [...counters];
        const index = counters.findIndex(c => c.id === id)
        newCounters[index].value -= 1;
        setCounters(newCounters)
    }
    return (
        <>
            {counters.map((count) => (
                <Counter key={count.id} onDelete={handleDelete} onIncrement={onIncrement} onDecrement={onDecrement} {...count} />
            ))}
            <button key={initialState.id} className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
            
        </>
    );
};

export default CountersList;
