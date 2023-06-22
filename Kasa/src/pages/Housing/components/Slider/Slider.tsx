import { useState } from "react";
import { BtnSlider } from "./BtnSlider/BtnSlider";

import style from './slider.module.css';


export function Slider({ title, images }: { title: string, images: string[] }) {
    const [slideIndex, setSlideIndex] = useState(1);

    function prevSlide() {
        if (slideIndex !== 1) {
            return setSlideIndex(slideIndex - 1);
        }

        setSlideIndex(images.length);
    }

    function nextSlide() {
        if (slideIndex !== images.length) {
            return setSlideIndex(slideIndex + 1);
        }

        setSlideIndex(1);
    }

    const goToImage = (index: number) => setSlideIndex(index);

    return (
        <div className={style.slider}>
            {
                images.map((img, i) => (
                    <div key={i} className={[style.slide, slideIndex === (i + 1) ? style.active_anim : ""].join(' ')}>
                        <img  src={img} alt={title} className={style.img} />
                    </div>
                ))
            }

            {
                images.length > 1 && (
                    <>
                        <div className={style.action}>
                            <BtnSlider direction="prev" action={prevSlide} />
                            <BtnSlider direction="next" action={nextSlide} />
                        </div>

                        <div className={style.container_dot}>
                            {
                                images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goToImage(i + 1)}
                                        className={[style.dot, slideIndex === (i + 1) ? style.dot_active : ""].join(' ')}
                                    ></button>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    );
}