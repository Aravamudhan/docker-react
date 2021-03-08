FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
 
 # A new from command means a new step. This simply copies the /app/build folder from the step number 0 and puts it in the 
 # /usr/share/nginx/html folder as that is the folder that requires any static content to be present
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html