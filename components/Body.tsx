
import Products from "./Products"

import {getproducts} from "@/actions/getdata";

export default async function Body(){
    const products = await getproducts()||[];

    return(
        <Products products={products} />  
    )
}