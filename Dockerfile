FROM node:16

WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY src .
COPY package.json .
COPY package-lock.json .
COPY dist dist

RUN npm install --omit=dev

EXPOSE 8080
CMD ["node", "dist/index.js"]
