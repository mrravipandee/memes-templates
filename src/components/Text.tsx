import React, { useState } from 'react';
import Draggable from 'react-draggable';

interface TextProps {
    text: string;
}

const Text: React.FC<TextProps> = ({ text }) => {
    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState(text);

    return (
        <Draggable>
            <div className="text-gray-800 font-semibold text-2xl">
                {editMode ? (
                    <input
                        onDoubleClick={() => setEditMode(false)}
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                        className="bg-transparent border-none focus:outline-none text-gray-400"
                    />
                ) : (
                    <h2 onDoubleClick={() => setEditMode(true)}>{val}</h2>
                )}
            </div>
        </Draggable>
    );
};

export default Text;
