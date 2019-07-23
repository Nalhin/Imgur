import axios from 'axios';

export const fetchFavorites = () => {
    const favorites = [];
    axios.get('https://imgurgenerator.firebaseio.com/images.json')
    .then(response =>
        Object.keys(response.data).forEach(element => {
            favorites.push(response.data[element].image);
        })
        
    )
    return favorites
}