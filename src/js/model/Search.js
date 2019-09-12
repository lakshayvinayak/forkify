import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }
    async getResults(){
        const key = 'b11306df7578f6c51f3317c57b546b7e';
        try{
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
           this.result = res.data.recipes;
           // console.log(result);
        }catch(error){
            alert(error);
        } 
    
    }
}


