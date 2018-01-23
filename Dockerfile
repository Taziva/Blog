FROM node:9

USER root

RUN mkdir /src
WORKDIR /src

ENV PATH /src/node_modules/.bin:$PATH

ADD package.json /src/package.json
RUN yarn install

COPY . /src
RUN yarn build
EXPOSE 5000

CMD ["yarn", "start"]
