import express from "express";
const photoRouter = express.Router();
import {getPhotos, getPhotoById, getUserPhotos} from '../controllers/photoController.js';

photoRouter.get('/', async(req, res) => {
    try{
        console.log('Reached photo router');
        const photos = await getPhotos();
        console.log('No error in getPhotos');
        const photoUrls = photos.map((photo) => photo.urls.raw);
        const responseJson = {
            message:"Succesfully fetched photos",
            data: photoUrls
        }
        console.log(photos)
        res.json(responseJson);
        // res.send('Success');
    }
    catch (error){
        console.error(error);
        res.status(500).json({message : 'Server error. Please try agin later.'});
    }
});

photoRouter.get('/:id', async (req,res)=>{
    try{
        console.log("Reached Router!!")
        const photo = await getPhotoById(req.params.id);
        console.log("No error in get Photos by Id!!")
        res.json(photo.urls.raw);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message : 'Server error. Please try agin later.'});
    }
})


photoRouter.get('/user/:username', async(req,res) => {
    try{
        const userPhotos = await
        getUserPhotos(req.params.username);
        const data = userPhotos.map((photo) => {
            return{
                id : photo.id,
                username: photo.user.username,
                description: photo?.description || 'No description provided',
                url: photo.urls.raw
            };
        });
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error.response);
    res.status(error.response.status).json({ message: error.response.data.errors[0] });
    }
})





export default photoRouter;