import React, { useState } from 'react';
import { Button } from './Button';

export default function TaskInput({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text);
        setText('');
    };

    return (
        <form className="task-input" onSubmit={handleSubmit}>
            <input
                className="task-input_field"
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Новая задача"
            />
            
            <Button
                className="btn"
                name="Создать"
                type="submit" 
            />
        </form>
    );
}