"use client";

import Image from "next/image";

import { Carousel } from "react-bootstrap";

export const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          src="/img/slide-2.jpg"
          alt="Descripción de la imagen"
          width={1600}
          height={400}
          priority={true}
        />
        <Carousel.Caption>
          <h3 className="text-dark">Compra tus instrumentos</h3>
          <p className="text-dark">Tenemos todo lo que necesitas para que desarrolles tu carrera musical</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
