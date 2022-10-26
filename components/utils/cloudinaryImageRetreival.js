import { buildUrl } from 'cloudinary-build-url';


export function getCloudinaryImage(cloudinaryImageId) {
    const url  = buildUrl('Med-Optics-Slide1.png', {
      cloud: {
        cloudName: 'medoptics-image-cloud',
      }
    });

    return url;
  }


export function getCloudinaryImageBlur(cloudinaryImageId){
    const blurUrl = buildUrl('Med-Optics-Slide1.png', {
      cloud: {
        cloudName: 'medoptics-image-cloud',
      },
      transformations: {
        effect: "blur:1000",
        quality: 1
      }
    });

    return blurUrl;
  }