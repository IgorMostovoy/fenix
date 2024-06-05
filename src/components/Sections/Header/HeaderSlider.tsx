'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getBasicData } from '@/src/api/basicData';
import Image from 'next/image';
import { HeaderSlide } from '@/src/interfaces/basicData.interface';
import styles from './HeaderSlider.module.css';
import ArrowBack from '@/public/svg/ArrowBack.svg';
import ArrowNext from '@/public/svg/ArrowNext.svg';
import Button from '../../UI/Button/Button';

export default function HeaderSlider() {
  const [images, setImages] = useState<HeaderSlide[]>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBasicData();
      setImages(data?.slider_img);
    };
    fetchData();
  }, []);
  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="absolute bottom-14 right-0 z-10 cursor-pointer w-1/2 flex items-center ml-20"
        onClick={onClick}
      >
        <span className="scale-125">
          <ArrowNext className=" hover:fill-white transition-colors duration-200" />
        </span>
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="absolute bottom-14 right-0 z-10 cursor-pointer w-1/2 flex items-center mr-20"
        onClick={onClick}
      >
        <span className="scale-125">
          <ArrowBack className="hover:fill-white  transition-colors duration-200" />
        </span>
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (next: any) => setCurrentSlide(next),
  };

  const progressBarHeight = `${100 / (images?.length || 1)}%`;
  const activeBarTop = `${currentSlide * parseFloat(progressBarHeight)}%`;

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.progressBar}>
        <div
          className={styles.activeBar}
          style={{ height: progressBarHeight, top: activeBarTop }}
        />
      </div>
      <Slider {...settings}>
        {images?.map((image) => (
          <div key={image.img_name} className={styles.imageContainer}>
            <Image
              src={image.img_url}
              alt={image.name_tag_rus}
              fill={true}
              object-fit="contain"
              priority
            />
          </div>
        ))}
      </Slider>
      <div className="flex absolute left-[15%] -bottom-[6%]">
        <Button color="primary-dark" uppercase className="px-7">
          Позвонить
        </Button>
        <Button color="primary" whatsAppIcon className="py-3 px-3" />
      </div>
    </div>
  );
}
