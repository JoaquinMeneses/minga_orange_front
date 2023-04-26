import React, { useState, useEffect } from 'react';
<<<<<<< HEAD

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
=======
import axios from 'axios';
import apiUrl from '../../api';

export default function Carousel() {
    useEffect(
        () => {
            axios(apiUrl + 'resources').then(res => setImages(res.data.resources)).catch(err => console.log(err))
        },
        [] //array vacio, ya que necesitamos fetchear una sola vez al montar el componente
    )

    let [images, setImages] = useState([])
    console.log(images)
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        // Cambiar de imagen cada 4 segundos
        const interval = setInterval(() => {
            setCounter(prevCounter => (prevCounter + 1) % images.length);
        }, 4000);
        return () => {
            clearInterval(interval); // Limpiar el intervalo al desmontar el componente
        };
    }, [images]);

    return (
        <div>
            <img className="hidden sm:flex h-full w-[100vw] md:w-[40%] md:ml-[8%] object-cover filter brightness-50 md:filter md:brightness-100" src={images[counter]?.cover_photo} alt="" />
        </div>
    )
>>>>>>> ca9dd8ecbe7614df1f054b651574b2322e5a1617
}