FROM node:12

# Create app directory
WORKDIR /usr/src/app
RUN npm install -g gatsby-cli

# Install app dependencies, which are package.json and package-lock.json
COPY package*.json ./

RUN npm install

# Bundel app souce
COPY . .

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]