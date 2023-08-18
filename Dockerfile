# Build Stage
FROM node:16 AS build
WORKDIR /app
COPY ./ /app
RUN yarn
RUN yarn run build

# Run Stage
FROM node:16
WORKDIR /app
COPY --from=build /app /app
RUN ls /app
ENTRYPOINT yarn run start