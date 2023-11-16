import React from "react";
import ReactDOM from "react-dom";
import { Item } from "../../../../types/product";

const CatalogItemView = (itemData : any) => {
    // get data from a list of items
    const item : Item = {
        id : itemData["id"],
        name : itemData["name"],
        picture_path : itemData["picture_path"],
        description : itemData["description"],
        price : itemData["price"],
        quantity : itemData["quantity"],
        seller_username : itemData["seller_username"],
    }
    return (
        <div className="bg-slate-300 rounded-xl shadow-xl p-2">
            <div className="bg-slate-400 aspect-square object-cover object-center">
                <img src={item.picture_path?item.picture_path:''}
                alt={item.name + " picture"}/>
            </div>
            <div className="mt-2">
                <div>
                    <p className="truncate font-bold">{item.name}</p>
                </div>
                <div>
                    <p className="text-2xl">Rp{item.price}</p>
                </div>
                <div>
                    <p className="text-sm text-right">Stock: {item.quantity}</p>
                </div>
                <div>
                    <p className="text-xs">{item.seller_username}</p>
                </div>
            </div>
        </div>
    )
}

export default CatalogItemView
