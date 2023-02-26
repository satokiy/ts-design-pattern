export {};

abstract class CreditCard {
  constructor(public owner: string) {}

  getOwner(): string {
    return this.owner;
  }

  abstract getCardType(): string;
  abstract getAnnualCharge(): number;
}

class Platinum extends CreditCard {
  getAnnualCharge(): number {
    return 30000;
  }
  getCardType(): string {
    return "platinum";
  }
}
class Gold extends CreditCard {
  getAnnualCharge(): number {
    return 10000;
  }
  getCardType(): string {
    return "gold";
  }
}

abstract class CreditCardFactory {
  abstract createCreditCard(owner: string): CreditCard;
  abstract registerCreditCard(creditCard: CreditCard): void;

  create(owner: string): CreditCard {
    const creditCard = this.createCreditCard(owner);
    this.registerCreditCard(creditCard);
    return creditCard;
  }
}

const database = [];

class PlatinumCreditCardFactory extends CreditCardFactory {
  createCreditCard(owner: string): CreditCard {
    return new Platinum(owner);
  }
  registerCreditCard(creditCard: CreditCard): void {
    database.push(creditCard);
  }
}
class GoldCreditCardFactory extends CreditCardFactory {
  createCreditCard(owner: string): CreditCard {
    return new Gold(owner);
  }
  registerCreditCard(creditCard: CreditCard): void {
    database.push(creditCard);
  }
}

function run() {
  const platinumFactory = new PlatinumCreditCardFactory();
  const platinumCard = platinumFactory.create('yamada');
  console.log(platinumCard)

  const goldFactory = new GoldCreditCardFactory();
  const goldCard = goldFactory.create('yamada');
  console.log(goldCard)

  console.log(database)

}
run()