export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url} 
            received ${res.status}`);
        }
        return await res.json();
    }
    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }
    async getPerson(id) {
        const person = this.getResource(`/people/${id}/`);
        return this._transformPerson(person);

    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPerson);
    }

    async getPlanet(id){
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }
    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    async getStarship(id){
        const starship = this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    format (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
    }

    _extractId(item)
    {
        const regex2 = /[0-9]{2}/;
        const reg2 = regex2.exec(item.url);
        return reg2[0];

    }
    _transformPlanet(planet)
    {

        return {
            id: this._extractId(planet),
            name: planet.name,
            population: this.format(planet.population),
            rotationPeriod: planet.rotation_period,
            diameter: this.format(planet.diameter)
        }
    }
    _transformStarship(starship)
    {

        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.manufacturer,
            costIncredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPerson(person)
    {
        const regex2 = /[0-9]{2}/;
        const reg2 = person.url.replace(regex2, '');

        console.log(reg2);
        return {
            id: reg2[0],
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

}