const BookController = require('..//controller/book-controller');
const check = require('..//middlerware');
const express = require('express');
const router = express.Router();
const connection = require('../../database/connection');

class SurfersApi {

    add(request, response) {
        connection.distinct('name', 'id').select().from('publishers')
            .then(publishers => {
                response.render('add.njk', {
                    publishers: publishers
                });
            })
    }


}

module.exports = SurfersApi;
