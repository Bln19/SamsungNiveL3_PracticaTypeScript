export class Telefono {
    private _tipo: string;
    private _numero: number;
    constructor (tipoTelefono: string, numeroTelefono: number){
        this._tipo = tipoTelefono;
        this._numero = numeroTelefono;
    }

    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }

    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }

}