

export const getGif = async( category ) => {
        

    const url = `https://api.giphy.com/v1/gifs/search?api_key=D9xjrAaapnvJLkY1nsVcL9PUbWlUUYTH&q=${category}&limit=5`;
  
    const resp = await fetch(url);
  
    const { data } = await resp.json();
  
    const gifts = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
  
    // console.log(gifts);
    return gifts;
  }