FROM node:9-slim

WORKDIR /UrlShortner

EXPOSE 8080

COPY package.json /UrlShortner

RUN npm install 

COPY . /UrlShortner

CMD ['node', 'start']