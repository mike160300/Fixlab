/**
*Modelo de datos de un usuario.
*/  
export class Customers {
  	/**
  	*ID de usuario.
  	*/		
    id_user? : number;
  	/**
  	*Email de usuario.
  	*/	    
    email? : string;
  	/**
  	*Nombre o Nickname de usuario.
  	*/	    
    username? : string;
  	/**
  	*Contraseña del usuario.
  	*/	    
    password? : string;
  	/**
  	*Fecha de registro.
  	*/	    
    creation_date? : string;
  	/**
  	*Descripción del usuario.
  	*/	    
    description? : number;
  	/**
  	*Imagen de perfil.
  	*/	    
    image?: string;
  	/**
  	*Valoración general de un usuario.
  	*/	    
    rating?: number;
  	/**
  	*Nro. de respuestas valoradas del usuario.
  	*/	    
    respuestas_valoradas?: number;
}