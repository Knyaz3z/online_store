'use client';
import clsx from 'clsx';
import { useState } from 'react';

interface OptionSelectorProps {
    optionName: string;
    values: { value: string; price: number }[];
    onSelect: (selectedValue: string, price: number) => void;
}

export default function OptionSelector({ optionName, values, onSelect }: OptionSelectorProps) {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="mb-4">
            <p className="font-semibold mb-2">{optionName}:</p>
            <div className="flex gap-2 flex-wrap">
                {values.map((v) => (
                    <button
                        key={v.value}
                        className={clsx(
                            "px-3 py-1 border rounded",
                            selected === v.value ? "bg-blue-500 text-white" : "bg-white text-black"
                        )}
                        onClick={() => {
                            setSelected(v.value);
                            onSelect(v.value, v.price);
                        }}
                    >
                        {v.value}
                    </button>
                ))}
            </div>
        </div>
    );
}
