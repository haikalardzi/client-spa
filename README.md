# SUBMODUL CLIENT SPA

Repositori ini adalah submodul Client SPA dari Tugas Besar IF3110 Pengembangan Aplikasi Berbasis Web

## How to run
0. Clone repository submodul config dengan
```sh
git clone https://github.com/AlphaThrone/client-spa
git clone https://github.com/AlphaThrone/rest-service
git clone https://github.com/AlphaThrone/php-app
git clone https://github.com/AlphaThrone/config
git clone https://github.com/AlphaThrone/soap-service
```
1. Buka reposity **config** dan jalankan pada terminal
```sh
docker compose up --build -d
```
2. Lakukan seeding dari backend database dengan cara sebagai berikut: <br>
    1. Buka phpmyadmin <br>
    klik [disini](localhost:8080) atau akses link berikut pada browser
    ```
    localhost:8080
    ```
    2. Pilih database saranghaengbok_rest
    3. Pilih import
    4. Pilih file pada submodul backend [disini](https://github.com/AlphaThrone/rest-service) atau pada repositori berikut
    ```
    https://github.com/AlphaThrone/rest-service
    ```
    di direktori core/db.sql
3. Web app bisa dijalankan dengan mengakses pada browser
```
localhost:3000
```