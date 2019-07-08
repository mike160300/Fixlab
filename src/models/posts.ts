/**
*Modelo de datos de una publicación.
*/  
export class Posts {
  	/**
  	*ID de la publicación.
  	*/		
    id_post? : number;
  	/**
  	*Título de la publicación.
  	*/	    
    title? : string;
  	/**
  	*Descripción de la publicación.
  	*/	    
    description? : string;
  	/**
  	*Imagen para la publicación.
  	*/	    
    image? : string;
  	/**
  	*Fecha de creación de la publicación.
  	*/	    
    publish_date: Date = new Date();
  	/**
  	*Resolución de la publicación.
  	*/	    
    resolved? : boolean;
  	/**
  	*Dueño de la publicación.
  	*/	    
    id_owner? : number;
  	/**
  	*Categoría de la publicación.
  	*/	    
    categoria? : string;
}