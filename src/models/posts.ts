export class Posts {
    id_post? : number;
    title? : string;
    description? : string;
    image? : string;
    publish_date: Date = new Date();;
    resolved? : boolean;
    id_owner? : number;
    categoria? : string;
}