# 🚀 Astro + React Frontend

This is a modern frontend blog application built with **Astro** and **React** using **TypeScript**. It renders structured blog content from a headless CMS (or static source) and is optimized for performance, developer experience, and SEO.

---

## 📚 Features

- 🌌 Built with [Astro](https://astro.build/) and [React](https://react.dev/)
- 🧠 TypeScript support
- 🖼️ Markdown & dynamic content rendering
- 📱 Responsive and mobile-friendly design
- 🧪 Easy local development
- 🚀 Deploy-ready structure

---

## ⚙️ Requirements

Before starting, make sure you have the following installed:

### 🟢 Node.js & npm

- 📦 **Node.js**: JavaScript runtime environment
- 🧰 **npm**: Node package manager (comes with Node.js)

### 👉 Install from here:

- [Node.js (LTS version recommended)](https://nodejs.org/en)
- After installation, verify using:

```bash
node -v
npm -v
```
### Project architecture

````
Leadin/
├── public/             # Static assets (images, etc.)
├── scripts/            # Script to upload the project to server
├── src/                # Source code
│   ├── components/     # React and Astro components
│   ├── pages/          # Routes
│   └── layout/         # Shared layouts
├── astro.config.mjs    # Astro config
├── tsconfig.json       # TypeScript config
├── package.json        # Dependencies & scripts
├── docker-compose.yml  # Docker config for deployment
├── Dockerfile          # Docker file for image build
└── README.md

````

## 🛠️ Local Development

### Clone Repository
```bash

git clone https://github.com/arsen2019/Leadin.git
cd Leadin
```

### Install Dependencies
```bash

npm install
```
### Run the Development Server
```bash

npm run dev
```

Then open http://localhost:4321 in your browser to view the app.

## 🚢 Deployment

We are going to deploy on our Droplet in Digital ocean.

### 1. Setup the .env file

Create .env file and create two environment variables

``` bash
    touch .env
```
and then create two environment variables and pass them your URLs
- PUBLIC_API_URL_STRAPI
- PUBLIC_API_URL_BACKEND

### 2. Upload the project to server

Upload the project to server by running this script from root folder

```bash
    ./scripts/uploadserver.sh
```

### 3. Run docker on server

Enter the server with ssh username@IP_Address and pass your ssh key and on the server run this command

```bash
    docker compose up --build -d
```

# 🎉 Congratulations!

## Your app is now up and running! 🚀


