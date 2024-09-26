import React, { useEffect } from "react";
import Movies from "./Movies";
import Tvshows from "./TvShows";
import People from "./People";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <>
      <div>
        <Movies />
        <hr />
        <Tvshows />
        <hr />
        <People />
      </div>
    </>
  );
}
