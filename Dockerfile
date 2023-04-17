FROM node:16.11.1 
COPY . /var/www 
WORKDIR /var/www
RUN npm install --production --sillent
RUN npm install -g webpack-cli
RUN npm install -g @types/styled-components
RUN npm install -g serve
ENTRYPOINT npm start
EXPOSE 80
