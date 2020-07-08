export class Employee {

  // public id!: number
  // // tslint:disable-next-line: variable-name
  // public first_name!: string
  // // tslint:disable-next-line: variable-name
  // public last_name!: string
  // public email!: string
  // public gender!: string
  // public phone!: string
  [key: string]: string
  constructor(data?: Partial<Employee>) {
    Object.assign(this, data);
  }
}
