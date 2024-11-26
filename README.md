# test-api-expressjs
Express.js Project
Proyek ini adalah aplikasi backend berbasis Express.js yang mendukung migrasi dan seeding database. Gunakan langkah-langkah di bawah ini untuk menginstalasi, menjalankan migrasi, dan mengisi data awal (seeding).

Persyaratan
Sebelum memulai, pastikan Anda telah menginstal:

Node.js (versi LTS direkomendasikan)
npm atau yarn
Database yang didukung (contoh: MySQL, PostgreSQL)
Instalasi
Clone Repository

bash
Copy code
git clone https://github.com/username/repo-name.git
cd repo-name
Instalasi Dependensi Menggunakan npm:

bash
Copy code
npm install
atau menggunakan yarn:

bash
Copy code
yarn install
Buat File Konfigurasi Salin file .env.example menjadi .env dan isi detail konfigurasi, termasuk informasi database:

plaintext
Copy code
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
Migrasi
Jalankan Migrasi Gunakan perintah berikut untuk menjalankan migrasi dan membuat tabel database:

bash
Copy code
npx sequelize-cli db:migrate
Rollback Migrasi (Opsional) Jika Anda ingin membatalkan migrasi, gunakan perintah:

bash
Copy code
npx sequelize-cli db:migrate:undo
Seed Data
Jalankan Seeder Untuk mengisi database dengan data awal, jalankan:

bash
Copy code
npx sequelize-cli db:seed:all
Rollback Seeder (Opsional) Jika Anda ingin membatalkan seeding, gunakan:

bash
Copy code
npx sequelize-cli db:seed:undo:all
Menjalankan Aplikasi
Start Server Jalankan server aplikasi:

bash
Copy code
npm start
atau untuk pengembangan:

bash
Copy code
npm run dev
Akses Aplikasi Aplikasi akan berjalan di http://localhost:3000 secara default.