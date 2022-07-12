FROM node:16 as build

WORKDIR /frontend
ADD . .
RUN npm ci
RUN npm run ng-build --prod

FROM nginx:1.21.6
COPY --from=build /frontend/dist/frontend /usr/share/nginx/html
