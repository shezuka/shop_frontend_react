FROM node:20.12.1

WORKDIR /frontend_react
COPY . .
RUN npm i

CMD ["npm", "run", "dev"]
