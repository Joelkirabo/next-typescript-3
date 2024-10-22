"use client"


import { ProductProps } from "@/types/types";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Products({products}:{products:ProductProps[]}){
    const [filteredproducts,setfilteredproducts] = useState(products)
 
    const params = useSearchParams();

    const paramid = params.get("id")??"";

    const activeproduct = products.find((product)=> product.id === parseInt(paramid) );
  
    function handlesearch(value:string){
        const filtered = products.filter((product)=>{

        return  (product.title.toLowerCase().includes(value.toLowerCase()));        
        })
        setfilteredproducts(filtered)
    }
    return(
        <div>   

             <div className="w-full bg-orange-100 flex justify-between items-center px-2 py-3">
                    <div className="italic font-bold text-gray-500">
                        <Link href="/products">Searchify</Link>
                    </div>
                    <div>
                        <input onChange={(e)=>handlesearch(e.target.value)} className="px-2 py-1 rounded-md" type="text"  placeholder="Type something..."/>
                    </div>
                    <div className="flex gap-2 font-bold text-gray-500 text-sm">
                        <button className="cursor-pointer px-2 py-1 rounded hover:bg-orange-200 transition ease-out duration-500">ADD RECIPE</button>
                        <button className="cursor-pointer px-2 py-1 rounded hover:bg-orange-200 transition ease-out duration-500">BOOKMARKS</button>
                    </div>
        </div>

             <div className="grid grid-cols-12">
            <div className="col-span-5 h-screen overflow-auto pb-10">
                <div className="p-3 bg-orange-50">                    
                {
                    filteredproducts.map((product)=>{
                        const isactive = product.id === parseInt(paramid);
                        return (
                            <Link  href={`/products?id=${product.id}`} key={product.id} className={`${isactive&&"bg-green-200"}  flex gap-3 items-center mb-3 hover:bg-orange-100 transition ease-out duration-500 p-2  `} >
                                <img src={product.images[0]} alt={`image for ${product.title}`} className="h-10 w-10 rounded-full"/>
                            <div>
                                <div className="font-bold text-gray-500">{product.title}</div>
                                <div className="text-sm text-gray-500">{product.category.name}</div>
                            </div>

                            </Link>

                        )
                    })
                }          
                </div>
            </div>

            <div className="col-span-7 h-full">
                <div>
                    {   
                    activeproduct && activeproduct.id?(
                        <>
                        <div className="text-4xl font-bold text-gray-700 text-center"> {activeproduct.title}</div>
                        <div className=" p-20">
                        <img src={activeproduct.images[0]} alt="image goes here"  className="h-full"/>
                        </div>
                        </>
                    ):(
                        <div>No product selected</div>
                    )                   
                    
}
                </div>
            </div>
        </div>         
               
        </div>
    )






}