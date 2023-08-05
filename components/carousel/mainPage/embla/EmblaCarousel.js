"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "@styles/components/carousel/embla.module.css";
import "@styles/components/carousel/embla.css";

// const images = [
//   "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b",
//   "https://images.unsplash.com/photo-1517309230475-6736d926b979",
//   "https://images.unsplash.com/photo-1508804052814-cd3ba865a116",
//   "https://images.unsplash.com/photo-1510001618818-4b4e3d86bf0f",
//   "https://plus.unsplash.com/premium_photo-1661936340711-8b2300d5f063",
//   "https://images.unsplash.com/photo-1599729265418-22bc99d22011",
//   "https://images.unsplash.com/photo-1549200517-3218e3040bce",
// ];
const images = [
  "/carousel/arabianSlides/slide1.avif",
  "/carousel/arabianSlides/slide2.avif",
  "/carousel/arabianSlides/slide3.avif",
  "/carousel/arabianSlides/slide4.avif",
  "/carousel/arabianSlides/slide5.avif",
];
const TWEEN_FACTOR = 1.2;
import { flushSync } from "react-dom";
const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const autoplayOptions = {
    delay: 6000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScrollProgress = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScrollProgress(emblaApi);
    emblaApi.on("reInit", onScrollProgress);
    emblaApi.on("scroll", onScrollProgress);
  }, [emblaApi, onScrollProgress]);

  const [tweenValues, setTweenValues] = useState([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      return diffToTarget * (-1 / TWEEN_FACTOR) * 100;
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className={`${styles.embla} `}>
      <div className={styles["embla__viewport"]} ref={emblaRef}>
        <div className={styles["embla__container"]}>
          {images.map((image, index) => (
            <div className={styles["embla__slide"]} key={index}>
              <div className={styles["embla__slide__number"]}>
                <span>{index + 1}</span>
              </div>
              <div className={styles["embla__parallax"]}>
                <div
                  className={styles["embla__parallax__layer"]}
                  style={{
                    ...(tweenValues.length && {
                      transform: `translateX(${tweenValues[index]}%)`,
                    }),
                  }}
                >
                  <img
                    className={`${styles["embla__slide__img"]} ${styles["embla__parallax__img"]}`}
                    src={image}
                    alt="Your alt text"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles["embla__progress"]}>
        <div
          className={styles["embla__progress__bar"]}
          style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
        />
      </div>
    </div>
  );
};

export default EmblaCarousel;
