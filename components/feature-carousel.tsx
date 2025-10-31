import React, { JSX, useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TWEEN_FACTOR_BASE = 0.84;
const numberWithinRange = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

type Slide = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type EmblaCarouselProps = {
  slides: Slide[];
  options?: any; // keep flexible to accept Embla options; change to concrete type if you have it
};

export default function EmblaCarousel({
  slides,
  options,
}: EmblaCarouselProps): JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options || { align: "center", loop: true }
  ) as [React.RefCallback<HTMLElement>, any];

  const tweenFactor = useRef<number>(0);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const setTweenFactor = useCallback((api: any) => {
    const snapList = typeof api?.scrollSnapList === "function" ? api.scrollSnapList() : [];
    tweenFactor.current = TWEEN_FACTOR_BASE * snapList.length;
  }, []);

  const MIN_OPACITY = 0.3;
  const tweenOpacity = useCallback((api: any, eventName?: string) => {
    if (!api) return;
    // internalEngine is an internal API; keep typed as any
    const engine = typeof api.internalEngine === "function" ? api.internalEngine() : undefined;
    const scrollProgress = typeof api.scrollProgress === "function" ? api.scrollProgress() : 0;
    const slidesInView = typeof api.slidesInView === "function" ? api.slidesInView() : [];
    const isScrollEvent = eventName === "scroll";

    const scrollSnapList = typeof api.scrollSnapList === "function" ? api.scrollSnapList() : [];

    scrollSnapList.forEach((origScrollSnap: number, snapIndex: number) => {
      // engine.slideRegistry maps snapIndex -> array of slide indices
      const slidesInSnap: number[] =
        engine?.slideRegistry?.[snapIndex] ?? [];

      slidesInSnap.forEach((slideIndex: number) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        let scrollSnap = origScrollSnap;

        if (engine?.options?.loop && engine?.slideLooper?.loopPoints) {
          engine.slideLooper.loopPoints.forEach((loopItem: any) => {
            const target = typeof loopItem.target === "function" ? loopItem.target() : 0;
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) scrollSnap = scrollSnap - (1 + scrollProgress);
              if (sign === 1) scrollSnap = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        const tweenValue =
          1 - Math.abs((scrollSnap - scrollProgress) * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, MIN_OPACITY, 1).toString();

        const slideNode = typeof api.slideNodes === "function" ? api.slideNodes()?.[slideIndex] : undefined;
        if (slideNode) {
          (slideNode as HTMLElement).style.opacity = opacity;
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);

    const onSelect = () => {
      const selected = typeof emblaApi.selectedScrollSnap === "function" ? emblaApi.selectedScrollSnap() : 0;
      const snapList = typeof emblaApi.scrollSnapList === "function" ? emblaApi.scrollSnapList() : [];
      setSelectedIndex(selected);
      setScrollSnaps(snapList);
    };

    // register listeners (guarding with function checks)
    if (emblaApi.on) {
      emblaApi
        .on?.("reInit", setTweenFactor)
        .on?.("reInit", () => tweenOpacity(emblaApi))
        .on?.("scroll", () => tweenOpacity(emblaApi, "scroll"))
        .on?.("slideFocus", () => tweenOpacity(emblaApi))
        .on?.("select", onSelect)
        .on?.("reInit", onSelect);
    }

    onSelect();
    // cleanup: remove listeners if emblaApi.off exists
    return () => {
      if (!emblaApi || !emblaApi.off) return;
      emblaApi.off("reInit", setTweenFactor);
      emblaApi.off("reInit", () => tweenOpacity(emblaApi));
      emblaApi.off("scroll", () => tweenOpacity(emblaApi, "scroll"));
      emblaApi.off("slideFocus", () => tweenOpacity(emblaApi));
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, setTweenFactor, tweenOpacity]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev?.(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext?.(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo?.(index), [emblaApi]);

  return (
    <div className="relative h-full">
      <div ref={emblaRef} className="overflow-visible h-full">
        <div className="flex gap-1 sm:gap-6 md:gap-8 lg:gap-10 h-full items-stretch will-change-transform px-4 sm:px-6 md:px-8 lg:px-10">
          {slides.map((feature, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <div
                key={idx}
                className="flex-shrink-0 w-[75%] sm:w-[80%] md:w-[45%] lg:w-[35%] min-h-full  px-0 lg:px-2"
                aria-hidden={!isSelected}
              >
                <div
                  className={`transition-transform duration-500  ease-in-out transform py-4 lg:py-14 px-2 lg:px-8 text-center min-h-full lg:min-h-[260px] rounded-[6px] lg:rounded-[18.631px] bg-white flex flex-col items-center justify-center border-[1.1px] border-[#CCC] ${
                    isSelected ? "scale-105" : "scale-95 opacity-90"
                  }`}
                  style={{ boxShadow: "0 0 27px rgba(0,0,0,0.18)" }}
                >
                  <div
                    className="rounded-xl p-4 mb-3 lg:mb-6 sm:mb-8  items-center justify-center lg:flex hidden"
                    style={{
                      background: "rgba(70, 133, 240, 0.10)",
                      width: 72,
                      height: 72,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div
                    className="rounded-xl p-3 mb-3 lg:mb-6 sm:mb-8 items-center justify-center lg:hidden flex "
                    style={{
                      background: "rgba(70, 133, 240, 0.10)",
                      width: 42,
                      height: 42,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    className={`font-bold mb-2 sm:mb-4 text-sec-h2 transition-colors duration-300  lg:block hidden ${
                      isSelected ? "text-[#06b981]" : "text-[#0f172a] opacity-50"
                    }`}
                  >
                    {feature.title}
                  </h3>{" "}
                  <h3
                    className={`font-bold mb-2 sm:mb-4 text-[12px] transition-colors duration-300  lg:hidden block  ${
                      isSelected ? "text-[#06b981]" : "text-[#0f172a] opacity-50"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-black text-txt2 w-[90%] lg:block hidden">
                    {feature.description}
                  </p>
                  <p className="text-black text-[10px] w-[90%] lg:hidden block ">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-5 md:mt-12 mx-auto flex flex-wrap sm:flex-nowrap max-w-[70%] items-center justify-evenly gap-3 sm:gap-8">
        <button
          onClick={scrollPrev}
          className="w-8 h-8 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border border-transparent transition"
          aria-label="Previous slide"
        >
          <ArrowLeft className="text-primary" />
        </button>

        <div className="flex items-center gap-1 sm:gap-3 flex-wrap justify-center">
          {Array.from({ length: scrollSnaps.length || slides.length }).map((_, i) => {
            const active = selectedIndex === i;
            return (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all duration-200 ${
                  active
                    ? "w-3 sm:w-8 h-2 sm:h-2 bg-[#2563EB]"
                    : "w-2 h-2 sm:w-3 sm:h-3 bg-white border border-gray-200"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            );
          })}
        </div>

        <button
          onClick={scrollNext}
          className="w-8 h-8 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border border-transparent transition"
          aria-label="Next slide"
        >
          <ArrowRight className="text-primary" />
        </button>
      </div>
    </div>
  );
}
