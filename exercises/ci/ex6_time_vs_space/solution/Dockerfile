FROM node:18.12-alpine3.16 AS pruner

WORKDIR /deps
COPY package.json .
COPY package-lock.json .

COPY node_modules node_modules
RUN npm prune --omit=dev

FROM node:18.12-alpine3.16
WORKDIR /usr/src/app
ENV NODE_ENV=production
EXPOSE 8080

COPY database.sqlite .
COPY --from=pruner /deps/node_modules node_modules
COPY src .

CMD ["node", "index.js"]
