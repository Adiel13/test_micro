import * as express from 'express';
import { Request, Response } from 'express';

export class code{
	
	public router : express.Router = express.Router();
	
	constructor(){
		this.initRutas();
	}	
	
	private initRutas(){
		this.router.get('/saludo', this.saludo);
		this.router.get('/despedida', this.despedida);
		this.router.get('/mensaje', this.mensaje);

	}
	
	private async saludo(req : Request, res : Response){
		res.status(200).send("Hola mundo");
	}
	
	private async despedida(req : Request, res : Response){
		res.status(200).send("Adiós mundo");
	}
	
	private async mensaje(req : Request, res : Response){
		let name = req.query.name;
		let email = req.query.email;
		if(email === undefined){
			res.status(400).send('Email erroneo');
		}else if(name == undefined){
			res.status(400).send('Nombre erroneo');
		}else{
			res.status(200).send('{"ID":"2","NAME":"'+name+'","EMAIL":"'+email+'"}');
		}
	}
}

export default code;