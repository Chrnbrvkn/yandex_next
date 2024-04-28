import React from "react";
import { FilmDetails } from "@/components/FilmDetails/FilmDetails";
import { filmsData } from "@/data/filmsData";

export default function Home() {
  // "use client";

  
  return (
    <div>
      {filmsData.map((film) => (
        <FilmDetails
          key={film.id}
          id={film.id}
          title={film.title}
          genre={film.genre}
          seasonsCount={film.seasonsCount}
          reviews={film.reviews}
        />
      ))}
    </div>
  );
}
