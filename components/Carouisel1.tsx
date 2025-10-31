"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./EmblaCarouselSelectedSnapDisplay";

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <section className="embla w-full relative">
      {/* --- Viewport --- */}
      <div className="embla__viewport overflow-hidden w-full" ref={emblaRef}>
        <div className="embla__container w-full flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0 px-0 lg:px-2 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
