import React from "react";

interface GalleryProps {
    className?: string;
}

const Gallery: React.FC<GalleryProps> = ({className}) => {
    return (
        <div className={className}>
            {/* Gallery component */}
        </div>
    );
};

export default Gallery;
