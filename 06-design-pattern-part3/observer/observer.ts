export {};

interface Observer {
  update(name: string);
}

class StoreObserver implements Observer {
  update(name: string) {
    console.log(`${name}が入荷されました。`);
  }
}

class PersonalObserver implements Observer {
  update(name: string) {
    console.log(`${name}が入荷されました。購入可能です`);
  }
}

abstract class ItemSubject {
  private observers: Observer[] = [];
  constructor(private name: string) {}

  attach(observer: Observer) {
    this.observers.push(observer);
  }

  detach(observer: Observer) {
    this.observers.filter((obs) => obs != observer);
  }

  notify() {
    this.observers.forEach((obs) => obs.update(this.name));
  }
  abstract restock();
}

class TvGameSubject extends ItemSubject {
    private isStock: boolean;
    constructor(name: string) {
        super(name);
        this.isStock = false;
    }

    restock() {
        console.log('TV game is stocked')
        this.isStock = true
        this.notify()
    }

}
