const connection = require('../../database/connection');
const Publisher = require('../../src/publisher/publisher');

module.exports = function (publisherId) {
    return connection.select()
        .from('publishers')
        .where({id : publisherId})
        .then(results => {
            let publisher = new Publisher(results[0].name);
            publisher.setId(results[0].id);
            publisher.setAddress(results[0].address);
            publisher.setPhone(results[0].phone);
            return publisher;
        });
};
