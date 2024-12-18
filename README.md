﻿# test-api-expressjs
Express.js Project
Proyek ini adalah aplikasi backend berbasis Express.js yang mendukung migrasi dan seeding database. Gunakan langkah-langkah di bawah ini untuk menginstalasi, menjalankan migrasi, dan mengisi data awal (seeding).
<br>
Persyaratan<br>
Sebelum memulai, pastikan Anda telah menginstal:<br>
<br>
Node.js (versi LTS direkomendasikan)<br>
npm atau yarn<br>
Database yang didukung (contoh: MySQL, PostgreSQL)<br>
<br>
Instalasi<br>
Clone Repository<br>
https://github.com/nightforraid/test-api-expressjs<br>
cd repo-name<br>
<br>
Instalasi Dependensi Menggunakan npm:<br>
npm install<br>
<br>
atau menggunakan yarn:<br>
yarn install<br>
Buat File Konfigurasi Salin file .env.example menjadi .env dan isi detail konfigurasi, termasuk informasi database:<br>
<br>
<br>
DB_HOST=localhost<br>
DB_PORT=3306<br>
DB_USER=root<br>
DB_PASSWORD=yourpassword<br>
DB_NAME=yourdatabase<br>
<br>
Migrasi<br>
Jalankan Migrasi Gunakan perintah berikut untuk menjalankan migrasi dan membuat tabel database:<br>
npx sequelize-cli db:migrate<br>
<br>
Rollback Migrasi (Opsional) Jika Anda ingin membatalkan migrasi, gunakan perintah:<br>
npx sequelize-cli db:migrate:undo<br>
<br>
Seed Data<br>
Jalankan Seeder Untuk mengisi database dengan data awal, jalankan:<br>
npx sequelize-cli db:seed:all<br>
<br>
Rollback Seeder (Opsional) Jika Anda ingin membatalkan seeding, gunakan:<br>
npx sequelize-cli db:seed:undo:all<br>
<br>
Menjalankan Aplikasi<br>
Start Server Jalankan server aplikasi:<br>
npm start<br>
<br>
atau untuk pengembangan:<br>
npm run dev<br>
Akses Aplikasi Aplikasi akan berjalan di http://localhost:3000 secara default.<br>
