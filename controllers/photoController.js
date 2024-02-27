//Require axios to make API calls
import axios from "axios";
const BASE_URL = process.env.BASE_URL;
const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

// @desc Get Photos
// @route GET /api/photos/
// @access Public
export const getPhotos = async () => {
    try {
        console.log('reached photo controller')
        const response = await axios.get(`${process.env.BASE_URL}/photos/`, {
            params: {client_id : process.env.UNSPLASH_ACCESS_KEY}
        });
        return response.data;
    }
    catch(error){
        console.error(error);
        throw new Error('Server error. Please try again later.')
    }
};

// @desc Get a photo by ID
// @route GET /api/photos/:id
// @access Public
export const getPhotoById = async (id) =>{
    try{
        console.log("Reached Controller!!")
        const response = await
        axios.get(`${process.env.BASE_URL}/photos/${id}`, {
            params : {client_id : process.env.UNSPLASH_ACCESS_KEY}
        });
        return response.data;
    } catch(error){
        console.error(error);
        throw new Error('Server error. Please try again later.');
    }
}

export const getUserPhotos = async (username) =>{
        const response = await 
        axios.get(`${process.env.BASE_URL}/users/${username}/photos`,{
            params : {client_id : process.env.UNSPLASH_ACCESS_KEY}
        });
    return response.data;
}

// export { getPhotos, getPhotoById}
