# HelloWorld React App (Vite)

This is a simple "Hello World" React application built with [Vite](https://vitejs.dev/).

## Features

- ⚡️ Fast development with Vite
- ⚛️ React 19
- 🔥 Hot Module Replacement (HMR)
- 📝 Minimal setup

## Getting Started

### Install dependencies

```sh
npm install
```

### Run the development server

```sh
npm run dev
```

### Build for production

```sh
npm run build
```

### Preview the production build

```sh
npm run preview
```


### Cloud Deployment

This app was deployed to an AWS EC2 instance.  
The production build is served using a static file server and secured with HTTPS using Caddy as a reverse proxy and automatic SSL certificate management.


```sh
npx serve -s dist
```

# Launch App:

 http://54.146.154.147/
