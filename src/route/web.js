import express from "express";
import { getHomePage, getAboutPage } from "../controller/homeController";

const router = express.Router();

const initWebRoute = (app)=>{
    router.get('/',getHomePage);
    router.get('/about',getAboutPage);
    
    app.use('/',router);
}
 
export default initWebRoute;