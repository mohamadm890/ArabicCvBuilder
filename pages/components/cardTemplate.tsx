"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  id: number;
}

const Card: React.FC<CardProps> = ({ name, id }) => {

  return (
    <Link
    href={`/cv?id=${id}`}
      className="relative group cursor-pointer rounded overflow-hidden shadow-xl block"
      style={{ width: "330px", height: "100%" }}
    >

      <Image
        src={name}
        alt={`Template ${id}`}
        width={330}
        height={200}
        style={{
          objectFit: "cover",
          borderRadius: "4px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease",
        }}
        className="group-hover:blur-sm"
        priority
      />

      {/* Overlay Button (now purely decorative) */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#167FFC',
          color: 'white',
          padding: '0.5rem 1rem',
          fontWeight: 'bold',
          zIndex: 10,
          fontSize: "12px",
          borderRadius: "24px",
        }}
        className="opacity-100 md:opacity-0 lg:opacity-0 group-hover:opacity-100 pointer-events-none"
      >
        اختر هذا القالب
      </div>
    </Link>
  );
};

export default Card;