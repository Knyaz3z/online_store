// DescriptionToggle.tsx (client)
'use client'
import {useState} from "react";

interface DescriptionToggleProps {
    fullText: string;
    previewText: string;
}

export default function DescriptionToggle({fullText, previewText}: DescriptionToggleProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            {expanded ? fullText : previewText}
            {fullText.length > previewText.length && (
                <button
                    className="ml-2 text-blue-600 hover:text-orange-500 font-medium transition-colors"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? 'Свернуть' : 'Развернуть'}
                </button>
            )}
        </>
    );
}
