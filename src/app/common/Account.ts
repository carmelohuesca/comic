interface AccountInterface {
  id: string;
  name: string;
  email: string;
  birthDate: string;
  age: string;
  newsletter: boolean;
  wardrobe: string[];
  wishList: string[];
}

export class Account implements AccountInterface {
  static DEFAULT_YEAR = 1984;
  id: string;
  name: string;
  email: string;
  birthDate: string;
  age: string;
  newsletter: boolean;
  shoesSize: string;
  pantsSize: string;
  shirtSize: string;
  coatSize: string;
  wardrobe: string[];
  wishList: string[];

  constructor(name?: string, email?: string) {
    this.name = name;
    this.email = email;
    this.newsletter = true;
    this.birthDate = new Date(Account.DEFAULT_YEAR, 1, 24).toISOString();
    this.wishList = [];
    this.wardrobe = [];
    this.getAge();
  }

  getAge() {
    let result = 0;
    if (this.birthDate) {
      const birthdate = new Date(this.birthDate);
      const today = Date.now();
      const timeDiff = Math.abs(today - birthdate.getTime());
      result = Math.ceil(timeDiff / (1000 * 3600 * 24 * 365));
    }
    return result;
  }

}
