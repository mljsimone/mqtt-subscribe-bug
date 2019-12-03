ARG node_version=10.15.0-alpine
FROM node:${node_version} as builder
RUN apk add --update --no-cache git bash python build-base
WORKDIR /app
COPY . /app
RUN npm install

FROM node:${node_version}
WORKDIR /app
COPY --from=builder /app /app
ENTRYPOINT [ "node", "index.js"]
