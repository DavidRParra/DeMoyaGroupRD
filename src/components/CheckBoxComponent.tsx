'use client';
import { div } from "framer-motion/client";
import React, { useState } from "react";


interface Option {
    label: string;
    value: string;
}

interface CheckBoxComponentProps {
    options: Option[];
}

function CheckBoxComponent({options}: CheckBoxComponentProps) {

    const [selectedOptions, setSelectedOptions] = useState<string | null>(null);

    const handleChange = (value : string) => {
        setSelectedOptions(prev => (prev === value ? null : value));
    }

    return (
        <div className="flex items-center gap-3">
            {options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id={option.value}
                        value={option.value}
                        checked={selectedOptions === option.value}
                        onChange={() => handleChange(option.value)}
                        className="cursor-pointer"
                    />
                    <label htmlFor={option.value} className="cursor-pointer">
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    )

}

export default CheckBoxComponent;