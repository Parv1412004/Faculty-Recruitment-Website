FROM node:latest
COPY . .
RUN npm install -g nodemon
RUN npm install
RUN npm rebuild bcrypt --build-from-source
EXPOSE 3000 
CMD ["node", "app.js"] 
