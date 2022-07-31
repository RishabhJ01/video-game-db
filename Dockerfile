#stage 1
FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install
RUN ng build --prod

#stage 2
FROM nginx:alpine
COPY /dist/video-game-db /usr/share/nginx/html
EXPOSE 80
