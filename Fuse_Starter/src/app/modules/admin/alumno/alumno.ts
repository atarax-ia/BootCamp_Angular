export class Alumno {
    public id:  number | undefined;
    public name:  string | undefined;
    public email: string | undefined;
    public city: string | undefined;
    public zipcode: string | undefined;
    public phone: string | undefined;


    constructor(id: number | undefined, name: string | undefined, email: string | undefined, city: string | undefined, zipcode: string | undefined, phone: string | undefined) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.city = city;
        this.zipcode = zipcode;
        this.phone = phone;
    }
}
