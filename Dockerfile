# source: https://nodejs.org/de/docs/guides/nodejs-docker-webapp/
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production
RUN npm install -g nodemon

#RUN npm install forever -g

# Bundle app source
COPY . .

ENV NODE_ENV=production

EXPOSE 8200

CMD ["npm", "start"]
#CMD [ "npm", "run", "start:dev" ]
#CMD ["forever", "./bin/www.js", "8080"]
