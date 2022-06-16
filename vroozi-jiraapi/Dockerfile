FROM node:14
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available ([email protected]+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
COPY config/default.template config/default.json
COPY config/production.template config/production.json
EXPOSE 4000
CMD [ "node", "server.js" ]