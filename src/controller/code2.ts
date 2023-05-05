import * as express from 'express';
import { Request, Response } from 'express';

export class code2{
	
	public router : express.Router = express.Router();
	
	constructor(){
		this.initRutas();
	}	
	
	private initRutas(){
		this.router.get('/consulta', this.consulta);
	}
	
	private async consulta(req : Request, res : Response){
		res.status(200).send("Hola soy una consulta desde la ruta /micro2");
	}
}
export default code2;