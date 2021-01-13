// necesitamos recibir la categoria y hacer una http request
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=7&api_key=mUn3MTeYVoARvjgjFYm1z87czngkV1Nz`;
    const resp = await fetch ( url );
    const { data } = await resp.json();
    const gifs = data.map ( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}