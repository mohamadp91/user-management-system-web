FROM node:14-alpine as builder
RUN apk add --no-cache git
WORKDIR /usr/src/app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
RUN yarn install && yarn build && rm -rf src

FROM cypress/included:6.2.0 as test-runner
WORKDIR /app
COPY --from=builder /usr/src/app /app

FROM nginx:alpine as nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
CMD ["nginx" , "-g" , "daemon off;"]