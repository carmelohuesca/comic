import { Account } from './Account';

describe('Account', () => {

  let instance: Account;

  beforeEach(() => {
    instance = new Account();
  });

  it('existe la instancia', () => {
    expect(instance).toBeDefined();
  });

  it('tiene las propiedades esperadas', () => {
    expect(instance.birthDate).toBeDefined();
    expect(instance.newsletter).toBeDefined();
    expect(instance.wishList).toBeDefined();
    expect(instance.wardrobe).toBeDefined();
  });

  it('tiene un método que obtiene la edad', () => {
    expect(instance.getAge).toBeDefined();
    // const thisYear = new Date().getFullYear() + 1;
    // console.log(thisYear);
    // expect(instance.getAge()).toBe(thisYear - Account.DEFAULT_YEAR);
    expect(instance.getAge()).toBeDefined();
  });

});
