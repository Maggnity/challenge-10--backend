import { Router } from "express"
import { SellerOfferCotroller } from "../controller/sellerOffer/SellerOfferController"
import { SellerOfferRepository } from "../repository/sellerOfferRepository"
import GetSellerOffers from "../useCases/sellerOffers/GetSellerOffers"
import { PostSellerOffer } from "../useCases/sellerOffers/PostSellerOffer"




export default function sellerOfferRoutes() {

    const routes = Router()


    const repo = new SellerOfferRepository()
    
    const getSellerOffers = new GetSellerOffers(repo)
    const postSellerOffer = new PostSellerOffer(repo)

    const controller = new SellerOfferCotroller(getSellerOffers, postSellerOffer)

    routes.get("/seller-offers", (req, res) => controller.getAllSellerOffers(req, res))

    return routes
}