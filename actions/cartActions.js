import  Axios  from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (id , qty) => async(dispatch , getState) =>{
    const {data} = await Axios.get(`/api/products/${id}`);
    dispatch({
        type:CART_ADD_ITEM,
        payload : {
            name : data.name,
            image: data.image,
            price:data.price,
            countInStock : data.countInStock,
            product : data._id,
            qty
        },
        
    })
}