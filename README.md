# This is my PERN App.

## first install root packages
bun/npm install

## now install frontend packages
cd frontend
bun/npm install

## now install backend packages
cd ..
cd backend
bun/npm install

## in the root package.json i have used concurrently , use can configure yours or run app from two terminals
bun/npm run dev

## for database i have used postgreSQL

## dont forget to configure yours .env file!