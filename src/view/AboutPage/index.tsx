import React from 'react';
import ReactDOM from 'react-dom/client'
import logo from '../../components/images/logo.svg'
import "../../components/fragments/L2RWipeReveal/L2RWipeReveal.css"

function AboutPageView() {
    return (
        <div className = 
        "flex flex-col flex-nowrap justify-center items-center text-tertiary text-center py-5">
            <title>
                About Saranghaengbok
            </title>
            <div 
            className="p-12 bg-primary self-stretch flex justify-center L2RWipeRevealElement mb-24">
                <img 
                src={logo}
                className="w-100 h-100"
                ></img>
            </div>
            <div 
            className="flex flex-col flex-nowrap justify-start text-left mx-auto px-6 max-w-screen-lg
            ">
                <h1 className="py-5">
                    About Saranghaengbok
                </h1>
                <p className ="py-5">
                Dari tahun 2023, Saranghaengbok adalah aplikasi sarana bagi penggemar K-POP yang ingin membeli merch K-POP band favoritnya dengan memberikan hasil pencarian merch K-POP yang sedang dibuka untuk group ordering maupun individual ordering, menghubungkan pembeli dengan penjual, dan menyediakan wadah untuk transaksi dari penjual dan pembeli. Pada awalnya, Saranghaengbok dikembangkan untuk menyelesaikan suatu masalah yang dihadapi oleh penggemar K-POP yang kesulitan dalam mencari merch K-POP karena informasi penjualannya yang terpisah-pisah dengan mulut ke mulut atau informasi yang tidak diregulasi, transaksi yang tidak aman atau tidak terpercaya, dan media komunikasi yang sulit karena tembok bahasa atau media yang sulit. Karena hal ini, Christo, Haikal, dan Varraz mengembangkan cara untuk menengahi hal ini sehingga bisa mempermudah masalah yang dihadapi.
                </p>
            </div>
        </div>
    )
}

export default AboutPageView;