import React from "react";
import styles from "@styles/components/animation/slider.module.css";
import Product from "@components/infiniteScroll/Product";
const FeaturedSlider = () => {
  return (
    <div class={`${styles.sliderContainer} my-10`}>
      <ul class={`${styles.slider}`}>
        <li class={`${styles.slider__slide}`}>
          <div class={`${styles.slide__content} py-7`}>
            <Product />
          </div>
        </li>
        <li class={`${styles.slider__slide}`}>
          <div class={`${styles.slide__content} py-7`}>
            <Product />
          </div>
        </li>
        <li class={`${styles.slider__slide}`}>
          <div class={`${styles.slide__content} py-7`}>
            {" "}
            <Product />
          </div>
        </li>
        <li class={`${styles.slider__slide}`}>
          <div class={`${styles.slide__content} py-7`}>
            {" "}
            <Product />
          </div>
        </li>
        <li class={`${styles.slider__slide}`}>
          <div class={`${styles.slide__content} py-7`}>
            {" "}
            <Product />
          </div>
        </li>
        <li class={`${styles.slider__slide}`}>
          <div class={`${styles.slide__content} py-7`}>
            {" "}
            <Product />
          </div>
        </li>
        <li class={`${styles.slider__slide}`}>
          <div class={`${styles.slide__content} py-7`}>
            {" "}
            <Product />
          </div>
        </li>
        <li class={`${styles.slider__slide}`}>
          <div class={`${styles.slide__content} py-7`}>
            {" "}
            <Product />
          </div>
        </li>
        <li class={`${styles.slider__slide}`}>
          <div class={`${styles.slide__content} py-7 `}>
            {" "}
            <Product />
          </div>
        </li>
        <li class={`${styles.slider__slide}`}>
          <div class={`${styles.slide__content} py-7`}>
            {" "}
            <Product />
          </div>
        </li>
        <li class={`${styles.slider__slide}`}>
          <div class={`${styles.slide__content} py-7`}>
            {" "}
            <Product />
          </div>
        </li>
        <li class={`${styles.slider__slide}`}>
          <div class={`${styles.slide__content} py-7`}>
            {" "}
            <Product />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FeaturedSlider;
