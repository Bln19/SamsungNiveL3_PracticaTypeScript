import {Direccion} from "./direccion";
import {Telefono} from "./telefono";
import {Mail} from "./mail";


export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: number;
    private _cumpleaños: string;
    private _colorfavorito: string;
    private _sexo: string;
    private _direcciones: Direccion[];
    private _telefonos: Telefono[];
    private _mails: Mail[];
    private _notas: string[];

    constructor (nombrePersona:string, 
                apellidosPersona:string, 
                edadPersona:number, 
                dniPersona:number, 
                cumpleañosPersona:string, 
                colorfavoritoPersona:string, 
                sexoPersona:string, 
                direccionesPersona:Direccion[], 
                telefonoPersona:Telefono[], 
                mailPersona:Mail[], 
                notasPersona:string[]){
        this._nombre = nombrePersona;
        this._apellidos = apellidosPersona;
        this._edad = edadPersona;
        this._dni = dniPersona;
        this._cumpleaños = cumpleañosPersona;
        this._colorfavorito = colorfavoritoPersona;
        this._sexo = sexoPersona;
        this._direcciones = direccionesPersona;
        this._telefonos = telefonoPersona;
        this._mails = mailPersona;
        this._notas = notasPersona;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }

    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }

    public get dni(): number {
        return this._dni;
    }
    public set dni(value: number) {
        this._dni = value;
    }

    public get cumpleaños(): string {
        return this._cumpleaños;
    }
    public set cumpleaños(value: string) {
        this._cumpleaños = value;
    }

    public get colorfavorito(): string {
        return this._colorfavorito;
    }
    public set colorfavorito(value: string) {
        this._colorfavorito = value;
    }

    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }

    public get direcciones(): Direccion[] {
        return this._direcciones;
    }
    public set direcciones(value: Direccion[]) {
        this._direcciones = value;
    }

    public get telefonos(): Telefono[] {
        return this._telefonos;
    }
    public set telefonos(value: Telefono[]) {
        this._telefonos = value;
    }

    public get mails(): Mail[] {
        return this._mails;
    }
    public set mails(value: Mail[]) {
        this._mails = value;
    }

    public get notas(): string[] {
        return this._notas;
    }
    public set notas(value: string[]) {
        this._notas = value;
    }
    
}