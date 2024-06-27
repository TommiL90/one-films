"use client";

import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";


export function LayoutGridDemo() {
  return (
    <div className="h-screen py-4 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <h3 className="font-bold text-4xl text-white">Produção Audiovisual Premium</h3>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Produzimos vídeos de alta qualidade que refletem a essência da sua marca.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <h3 className="font-bold text-4xl text-white">Storytelling Persuasivo</h3>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Criamos narrativas envolventes que cativam e inspiram seu público.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <video className="h-full w-full rounded-lg" controls>
        <source
          src="https://docs.material-tailwind.com/demo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h3 className="font-bold text-4xl text-white">Locução de Qualidade</h3>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Oferecemos locução profissional para dar credibilidade e sofisticação aos seus vídeos..
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <h3 className="font-bold text-4xl text-white">Vídeos Estratégicos para Redes Sociais</h3>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Desenvolvemos vídeos otimizados para cada plataforma, aumentando engajamento e alcance.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
