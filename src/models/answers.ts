/**
*Modelo de datos de respuesta a una publicación.
*/ 
export class Answers {
  	/**
  	*ID de la respuesta.
  	*/	
    id_answer? : number;
  	/**
  	*Texto de la respuesta.
  	*/	    
    text? : string;
  	/**
  	*Precio de la respuesta.
  	*/	    
    price? : number;
  	/**
  	*Bloqueo de la respuesta.
  	*/	    
    unlocked? : boolean;
  	/**
  	*Valoración de la respuesta.
  	*/	    
    valorated? : boolean;
  	/**
  	*ID del usuario que publicó la respuesta.
  	*/	    
    id_owner? : number;
  	/**
  	*ID del post contestado.
  	*/	    
    id_inpost?: number;
}