import express from "express";
const photoRouter = express.Router();
import {getPhotos, getPhotoById} from '../controllers/photoController.js';

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

export default photoRouter;