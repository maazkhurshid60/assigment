FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV ENV_KEEPCODEIN=true
EXPOSE 3000
CMD [ "npm","start" ]