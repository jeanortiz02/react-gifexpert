
import { useState, useEffect } from 'react';
import { getGif } from './../helpers/getGift';

export const useFetchGifs = (category) => {

    // Funcion para obtener imagenes y guardarlas en un estado
  const [ images, setImages ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const getImages = async() => {
    const response = await getGif(category);
    setImages(response);
    setIsLoading(false);
  }
  
  useEffect( () => {
    getImages();
    }, [ ])

    return {
        images,
        isLoading
    }

}
