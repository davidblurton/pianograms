FROM octohost/nodejs

ADD . /srv/www
RUN cd /srv/www; npm install

EXPOSE 8000

CMD cd /srv/www; npm start