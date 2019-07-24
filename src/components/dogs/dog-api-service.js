export default class DOGService {

    _APIBase = 'https://dog.ceo/api/';

    async getResource(url = ``) {
        const res = await fetch(`${this._APIBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }


    async getAllList() {
        return await this.getResource(`breeds/list/all`);
    }


    async getBreedImage(breedName) {
        return await this.getResource(`breed/${breedName}/images/random`);
    }
}