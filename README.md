<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

📝 TodoApp
Basit, güvenli ve ölçeklenebilir bir yapılacaklar listesi (Todo) uygulaması.
Modern Node.js + NestJS + PostgreSQL altyapısıyla, gerçek kullanıcı yönetimi ve JWT tabanlı kimlik doğrulama içerir.

🚀 Özellikler
👤 Kullanıcı kayıt & giriş (JWT ile kimlik doğrulama)

🗒️ Her kullanıcıya özel yapılacaklar listesi

➕ Görev ekleme, silme, güncelleme ve listeleme

💾 PostgreSQL ile kalıcı veri saklama (TypeORM)

🐳 Docker ile kolay kurulum

📐 Temiz ve ölçeklenebilir backend mimarisi

🖼️ Ekran Görüntüsü
<!-- Kendi ekran görüntünü 'screenshots/' klasörüne koyup aşağıdaki yolu düzenle -->


🛠️ Kullanılan Teknolojiler
Node.js

NestJS

TypeORM

PostgreSQL

Docker

JWT (JSON Web Token)

⚡️ Kurulum ve Başlatma
Ön Koşullar:

Node.js 18+

Docker (opsiyonel, kolay başlatmak için)

Git

1. Repoyu Klonla
bash
Kopyala
Düzenle
git clone https://github.com/sldrdm/TodoApp.git
cd TodoApp
2. Bağımlılıkları Kur
bash
Kopyala
Düzenle
npm install
3. PostgreSQL'i Docker ile Çalıştır (Tavsiye Edilen)
bash
Kopyala
Düzenle
docker-compose up -d
4. Ortam Değişkenlerini Ayarla
.env dosyasındaki veritabanı bilgilerini kendine göre düzenle.
Örnek .env dosyası projede mevcut.

5. Veritabanı Migrationlarını Uygula
bash
Kopyala
Düzenle
npm run typeorm migration:run
6. Sunucuyu Başlat
bash
Kopyala
Düzenle
npm run start:dev
7. Uygulamayı Test Et
API endpoint’lerini Postman, Insomnia gibi araçlarla test edebilirsin.
Swagger veya benzeri dökümantasyon varsa http://localhost:3000/api adresine bakabilirsin.

📂 Proje Yapısı
bash
Kopyala
Düzenle
TodoApp/
├── src/
│   ├── auth/
│   ├── users/
│   ├── todo/
│   ├── app.module.ts
│   └── main.ts
├── .env
├── docker-compose.yml
├── package.json
└── README.md
✨ API Dökümantasyonu
Swagger/OpenAPI ile otomatik dokümantasyon varsa:

http://localhost:3000/api adresine gidin.

Her endpoint ve örnek istek-gönderim detaylarını görebilirsiniz.

💡 Katkı Sağlamak İster misin?
Fork’la ve yeni bir branch aç (feature/ozellik-adı)

Değişikliklerini ekle (commit)

Pull request gönder, birlikte geliştirelim!

📧 İletişim
Her türlü soru, öneri ve hata bildirimini GitHub Issues üzerinden veya LinkedIn üzerinden bana ulaştırabilirsin.

🪪 Lisans
MIT © 2025 sldrdm


