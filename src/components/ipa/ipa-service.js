


export default class IPAService {


    _apiBase = 'https://api.punkapi.com/v2/beers';



    async getResource(url = ``) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }


    async getBeerId(id) {
        const res = await this.getResource(`/${id}`);
        return res;
    }

    async getRandomBeer() {
        const res = await this.getResource(`/random`);
        return res;
    }

    async getPageBeers(page) {
        const res = await this.getResource(`?page=${page}&per_page=10`);
        return res;
    }


}