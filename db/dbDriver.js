import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import General from '../utils/General';


class dbDriver  {
    constructor() {
        this.db = new JsonDB(new Config(__dirname+"/testBase.json", true, false, '/'));
        try {
            this.db.load()
        } catch (error) {
            console.log(error)
        }
        console.log(this.db.data)
        if (!Object.keys(this.db.data).length){
            console.log("No Cargó el JSON")
            this.db.push("/", General)
        }
    }
}

module.exports = new dbDriver()