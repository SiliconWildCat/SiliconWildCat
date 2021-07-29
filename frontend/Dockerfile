FROM node:12 as base
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

ENV CONTINUOUS_INTEGRATION=1
# ENV NODE_ENV=dev
ENV NODE_ENV=production
COPY . .
RUN yarn build

EXPOSE 3000 
CMD [ "yarn", "start" ]