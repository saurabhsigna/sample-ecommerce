import styles from "@styles/components/minicomponents/inverted.module.css";

export default function App() {
  return (
    <div className={`${styles.card}  w-[256px]  img-fluid `}>
      <div className={`${styles.imgBox} absolute top-0 left-0   img-fluid`}>
        <img
          src={`https://e1.pxfuel.com/desktop-wallpaper/989/434/desktop-wallpaper-cute-anime-girl-anime-attitude-girl.jpg`}
          className={`${styles.imgStyle} h-auto w-full object-cover`}
        />
      </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.price}`}></div>
      </div>
    </div>
  );
}
