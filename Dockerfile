FROM node:12

RUN mkdir -p /home/Service
WORKDIR /home/Service    
COPY . /home/Service
RUN npm install
EXPOSE 3002
CMD ["npm","start"]  