class Publisher {

    /**
     *
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
    }

    setName(name) {
        this.name = name;
    }

    /**
     *
     * @return {string} name
     */
    getName() {
        return this.name;
    }

    /**
     *
     * @param id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @return {int} id
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param {string} address
     */
    setAddress(address) {
        this.address = address;
    }

    /**
     *
     * @param {string} phone
     */
    setPhone(phone) {
        this.phone = phone;
    }
}

module.exports = Publisher;
