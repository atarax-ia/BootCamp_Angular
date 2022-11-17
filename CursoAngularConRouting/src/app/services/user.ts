export class User {
  public id: number | undefined;
  public name: string | undefined;
  public username: string | undefined;
  public email: string | undefined;
  public address: Address | undefined;
  public completed: boolean | undefined;
  public phone: string | undefined;
  public website: string | undefined;
  public company: Company | undefined;
}

export class Address {
  public street: string | undefined;
  public suite: string | undefined;
  public city: string | undefined;
  public zipcode: string | undefined;
  public geo: Geo | undefined;
}

export class Geo {
  public lat: number | undefined;
  public lng: number | undefined;
}

export class Company {
  public name: string | undefined;
  public catchPhrase: string | undefined;
  public bs: string | undefined;
}

