export class Mail {
    private _tipo: string;
    private _direccion: string;

    constructor (tipoEmail:string, direccionEmail:string){
        this._tipo = tipoEmail;
        this._direccion = direccionEmail;
    }

    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }

    public get direccion(): string {
        return this._direccion;
    }
    public set direccion(value: string) {
        this._direccion = value;
    }

}