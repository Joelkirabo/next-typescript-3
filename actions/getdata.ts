"use server"

import { ProductProps } from "@/types/types";

export async function getproducts(){
    try {
        const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
        const products = await res.json();

        return products as ProductProps[];
        
    } catch (error:any) {
        console.log(error.message);
        return []        
    }
    
}