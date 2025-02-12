#Build of the application
FROM node:18 AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
#EXPOSE 3000

#Start the development server in local
CMD [ "yarn", "start"]

# RUN yarn build           #For a build

#Deployment with NGINX   #For a build
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD [ "nginx", "-g", "daemon off;"]