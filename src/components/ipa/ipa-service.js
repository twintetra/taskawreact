export default class IPAService {

    _apiBase = 'https://api.punkapi.com/v2/beers';

    async getResource(url = ``) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }

    async getBeer(id) {
        return await this.getResource(`/${id}`);
    }

    async getRandomBeer() {
        const res = await this.getResource(`/random`);
        return this._transformBeer(res[0]);
    }

    async getPageBeers(page) {
        return await this.getResource(`?page=${page}&per_page=10`);
    }

    _transformBeer(beer) {
        return {
            id: beer.id,
            image: beer.image_url,
            name: beer.name,
            abv: beer.abv,
            ibu: beer.ibu,
            description: beer.description
        }
    }
}
