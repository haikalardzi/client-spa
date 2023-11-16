import React from "react";
import ReactDOM from "react-dom";
import CatalogItemView from "../CatalogItem";
import { Item } from "../../../../types/product";

const CatalogItemListView = ({itemArray} : {itemArray: Item[]}/* itemArray */) => {
    return (
        <div className="grid grid-cols-2 grid-rows-5 sm:grid-rows-2 sm:grid-cols-5 py-6 px-12 gap-4">
            {itemArray.map((item: Item) => (
            <CatalogItemView
            key={item.id}
            id={item.id}
            name={item.name}
            picture_path={item.picture_path}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
            seller_username={item.seller_username}
            />
        ))}
        </div>
    )
}

export default CatalogItemListView
