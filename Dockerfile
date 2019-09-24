FROM node:lts

#Creates Working App
WORKDIR /usr/app/
RUN npm i -g npm yarn webpack
#copy's package.json file and installs deps
COPY package.json ./
RUN npm install --quiet

#bundles source
COPY . .
EXPOSE 3030