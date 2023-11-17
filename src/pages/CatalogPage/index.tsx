import React from "react";
import ReactDOM from "react-dom/client";
import CatalogItemListView from "./view/CatalogItemList";
import { Item } from "../../types/product";

const CatalogPage = () => {
    // FIXME : Change dummyArr to array of items
    const dummyArr: Item[] = [];
    for (let index = 0; index < 11; index++) {
        const elem: Item = {
            id : index,
            name : "product_name " + (index + 1),
            picture_path : "no_picture",
            description : "no_description",
            price : 0,
            quantity : 0,
            seller_username : "seller_" + (index + 1)
        }
        dummyArr.push(elem);
    }
    return (
        <div className="py-16">
            {/* <div id="filter-field">
                
            </div> */}
            <div id="catalog" 
            >
                <CatalogItemListView
                itemArray = {dummyArr}/>
            </div>
        </div>
    )
}

export default CatalogPage
