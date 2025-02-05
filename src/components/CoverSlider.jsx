import React, { useState, useEffect } from "react";
import "./css/Cover.css";

export default function CoverSlider({ coverUrls }) {
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0);

  useEffect(() => {
    if (coverUrls.length === 0) return;
    const interval = setInterval(() => {
      setCurrentCoverIndex((prevIndex) => (prevIndex + 1) % coverUrls.length);
    }, 500);
    return () => clearInterval(interval);
  }, [coverUrls]);

  return (
    <div className="cover-slider">
      <span className="cover-slider__question-mark">?</span>
      {coverUrls.length > 0 && (
        <img
          className="cover__img"
          src={coverUrls[currentCoverIndex]}
          alt="Random Series Cover"
        />
      )}
    </div>
  );
}
