FROM node:10

WORKDIR /usr/src/app/frontend 

# `/app/node_modules/.bin`을 $PATH 에 추가
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm i

# RUN npm run build
# RUN npm run dev

EXPOSE 3000

CMD ["npm", "start"]