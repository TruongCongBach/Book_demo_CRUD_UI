const connection = require('../../database/connection');

class PublisherProvider {

    /**
     *
     * @param connection
     * @param factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory = factory;
    }

    /**
     *
     * @return {*|PromiseLike<Publisher>|Promise<Publisher>}
     */
    providerAll() {
        return connection.select().from('publishers')
            .then(publisher =>
                publisher.map(element => this.factory.make(element))
            );
    }

}

module.exports = PublisherProvider;
