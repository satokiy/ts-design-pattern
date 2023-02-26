export {};

class Patient {
  constructor(public id: number, public name: string) {}
}

interface IIterator {
  hasNext(): boolean;
  next();
}

interface Aggregate {
  getIterator(): IIterator;
}

class WaitingRoom implements Aggregate {
  getPatient(): Patient[] {
    return this.patients;
  }
  private patients: Patient[] = [];

  getCount(): number {
    return this.patients.length;
  }

  checkIn(patient: Patient) {
    this.patients.push(patient);
  }

  getIterator(): IIterator {
    return new WaitingRoomIterator(this);
  }
}

class WaitingRoomIterator implements IIterator {
  hasNext(): boolean {
    return this.position < this.aggregate.getCount();
  }
  next() {
    if (!this.hasNext()) {
      console.log("no patients");
      return;
    }

    const patient = this.aggregate.getPatient()[this.position];
    this.position++;
    return patient;
  }

  private position: number = 0;
  constructor(private aggregate: WaitingRoom) {}
}

function run() {
  const waitingRoom = new WaitingRoom();
  waitingRoom.checkIn(new Patient(1, "yamada"));
  waitingRoom.checkIn(new Patient(2, "tanaka"));
  waitingRoom.checkIn(new Patient(3, "sizuki"));

  const iterator = waitingRoom.getIterator();

  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
}

run();
