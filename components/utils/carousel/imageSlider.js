import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextImage from 'next/image';
import { getCloudinaryImage, getCloudinaryImageBlur } from "../cloudinaryImageRetreival";

//OD: Currently hardcoded for landing page images
// Now Modified for Cloudinary - Just pass in strings

// pass to image component to make it more reusable
const slides = [
  "Slide-1.png", 
  "Slide-2.png", 
  "Slide-3.png",
  "Slide-4.png",
];

//we need a collection of the slide names - why do the other images not show ?


// const ImageSlider = ({ slides }) => {

const ImageSlider = () => {
  return (
    <Carousel infiniteLoop autoPlay stopOnHover showThumbs={false} interval="3700">
      {slides.map((slide) => {
        console.log(getCloudinaryImage(slide));
        return <NextImage src={getCloudinaryImage(slide)} key={slide} width ={1349} height={550} blur blurDataURL={getCloudinaryImageBlur(slide)}/>;
      })}
    </Carousel>
  );
};

export default ImageSlider;
