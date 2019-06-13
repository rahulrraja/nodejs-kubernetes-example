FROM node:8.14.1-alpine

RUN addgroup -S rahul && adduser -S -g rahul rahul

ENV HOME=/home/nupp

COPY package.json package-lock.json $HOME/app/

COPY src $HOME/app/src

ADD https://github.com/Yelp/dumb-init/releases/download/v1.1.1/dumb-init_1.1.1_amd64 /usr/local/bin/dumb-init

WORKDIR $HOME/app

RUN chown -R rahul:rahul $HOME/* /usr/local/ && \
    chmod +x /usr/local/bin/dumb-init && \
    npm install --silent --progress=false --production && \
    chown -R rahul:rahul $HOME/*

USER rahul

EXPOSE 3000

CMD ["dumb-init", "npm", "start"]