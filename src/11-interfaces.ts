export interface Driver {
  database: string
  password: string
  port: number

  connect(): void
  disconnect(): void
  isConnect(name: string): boolean
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23
// }

class PostgreDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: string,
  ) {}

  connect(): void {}
  disconnect(): void {}
  isConnect(name: string): boolean {
    return true
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: string,
  ) {}

  connect(): void {}
  disconnect(): void {}
  isConnect(name: string): boolean {
    return true
  }
}
