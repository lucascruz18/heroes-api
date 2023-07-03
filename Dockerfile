FROM node:18
WORKDIR /app/heroes-api
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5050
CMD npm run start:prod
