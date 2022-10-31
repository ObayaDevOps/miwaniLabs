import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextImage from 'next/image';
import { getCloudinaryImage, getCloudinaryImageBlur } from "../cloudinaryImageRetreival";

//OD: Currently hardcoded for landing page images
// Now Modified for Cloudinary - Just pass in strings

const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop autoPlay stopOnHover showThumbs={false} interval="3700">
      {slides.map((slide) => {
        return <NextImage src={getCloudinaryImage('Med-Optics-Slide1.png')} key={slide} width ={1349} height={550} blur blurDataURL={getCloudinaryImageBlur('Med-Optics-Slide1.png')}/>;
      })}
    </Carousel>
  );
};

export default ImageSlider;
