import React from 'react';
import ReactDOM from 'react-dom/client'
import logo from '../../components/images/logo.svg'
// import styles from './AboutPage.module.css'

function AboutPageView() {
    return (
        <div className = 
        "flex flex-column flex-nowrap justify-center items-center ">
            <title>
                About Saranghaengbok
            </title>
            <div>
                <img 
                src={logo}

                ></img>
            </div>
            <div 
            className="flex flex-column flex-nowrap justify-start text-left
            ">
                <h1 className="p-15">
                    About Saranghaengbok
                </h1>
                <p className ="p-15">
                Dari tahun 2023, Saranghaengbok adalah aplikasi sarana bagi penggemar K-POP yang ingin membeli merch K-POP band favoritnya dengan memberikan hasil pencarian merch K-POP yang sedang dibuka untuk group ordering maupun individual ordering, menghubungkan pembeli dengan penjual, dan menyediakan wadah untuk transaksi dari penjual dan pembeli. Pada awalnya, Saranghaengbok dikembangkan untuk menyelesaikan suatu masalah yang dihadapi oleh penggemar K-POP yang kesulitan dalam mencari merch K-POP karena informasi penjualannya yang terpisah-pisah dengan mulut ke mulut atau informasi yang tidak diregulasi, transaksi yang tidak aman atau tidak terpercaya, dan media komunikasi yang sulit karena tembok bahasa atau media yang sulit. Karena hal ini, Christo, Haikal, dan Varraz mengembangkan mengembangkan cara untuk menengahi hal ini sehingga masalah yang dihadapi bisa dipermudah.
                </p>
            </div>
            {/* TODO: Home Page details */}
        </div>
    )
}

export default AboutPageView;