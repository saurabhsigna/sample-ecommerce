import EmblaCarousel from "./EmblaCarousel";
const OPTIONS = {
  align: "center",
  inViewThreshold: 0,
  containScroll: false,
  loop: true,
};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
import styles from "@styles/components/carousel/embla.module.css";
export default function App() {
  return (
    <main className={styles.sandbox}>
      <section className={styles.sandbox__carousel}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </main>
  );
}
