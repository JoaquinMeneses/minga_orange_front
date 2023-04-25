import React, { useState, useEffect } from 'react';

export default function Carousel({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        // Función para cambiar a la siguiente imagen
        const slideNext = () => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        };
        // Inicia el cambio automático de imagen cada 3 segundos
        const interval = setInterval(slideNext, 3000);
        // Limpia el intervalo cuando el componente se desmonta
        return () => {
            clearInterval(interval);
        };
    }, [images]);
    return (
        <div>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute h-full w-[100vw] md:w-[40%] md:ml-[8%] object-cover filter brightness-75 md:filter md:brightness-100 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
        </div>
    );
}