import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

type Props = {
  images: string[]
}

const Carousel: React.FC<Props> = ({ images }) => {
  const [index, setIndex] = useState(0);
  function handlePrevClick() {
    setIndex((index) => {
      if (index === 0) {
        return images.length - 1;
      }
      return index - 1;
    });
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((value) => {
        return (value + 1) % images.length;
      });
    }, 12000);
    return () => clearTimeout(timeout);
  });

  function handleNextClick() {
    setIndex((index) => {
      return (index + 1) % images.length;
    });
  }

  return (
    <div className="Carousel">
      {images.length > 1 && <GrPrevious className="Prev-Button-Icon"
        onClick={handlePrevClick} size="100" />}
      <img className="Carousel-Img" onClick={handleNextClick}
        src={images[index]} alt="special image"/>
      {images.length > 1 && <GrNext className="Next-Button-Icon"
        onClick={handleNextClick} size="100" />}
      <style jsx>
        {`
            .Carousel {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              user-select: none;
            }
            .Carousel-Img {
              max-width: 100%;
              max-height: 50vh;
              width: 100%;
              height: 100%;
              cursor: ${images.length > 1 ? "pointer" : "default"};
              border: 15px inset sandybrown;
            }
            .Prev-Button-Icon {
              cursor: pointer;
              margin: 5px;
              z-index: 1;
            }
            .Next-Button-Icon {
              cursor: pointer;
              margin: 5px;
              z-index: 1;
            }
            .Prev-Button-Icon:hover, .Next-Button-Icon:hover {
              background: gray;
            }
            @media only screen and (min-width: 750px) {
              .Carousel-Img {
                max-width: 40vw;
                border: 20px inset sandybrown;
              }
            }
          `}
      </style>
    </div>
  );
};

export default Carousel;
