import axios from "axios";

export default class CocktailApi {
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
            params: { key: '1' },
        });
    }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async #searchByKeyword(keyword) {
        return this.httpClient
            .get('search.php?s=' + keyword)
            .then((res) => res.data.drinks);
    }
    async #mostPopular() {
        return this.httpClient
            .get('random.php')
            .then((res) => res.data.drinks);
    }

}
