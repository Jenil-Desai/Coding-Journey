import * as borsh from 'borsh';

export class DoubleAccount {
  num: number;

  constructor(num: number) {
    this.num = num;
  }
}

export const schema: borsh.Schema = {
  struct: {
    num: 'u32',
  }
}

export const data_length = borsh.serialize(schema, new DoubleAccount(0)).length;
