export {}

interface Target {
  getCsvData(): string;
}

class NewLibrary {
  getJsonData() {
    return [
      {
        head1: "data1",
        head2: "data2",
      },
      {
        head1: "data3",
        head2: "data4",
      },
    ];
  }
}

class JsonToCsvAdapter implements Target {
    constructor(private adaptee: NewLibrary) {}

  getCsvData(): string {
    const jsonData = this.adaptee.getJsonData();
    const header = Object.keys(jsonData[0]).join(",") + "\n";
    const body = jsonData
      .map((d) =>
        Object.keys(d)
          .map((key) => d[key])
          .join(",")
      )
      .join("\n");

    return header + body;
  }
}

function run() {
  const adaptee = new NewLibrary();
  console.log("====== adaptee data ======");
  console.log(adaptee.getJsonData());

  const adapter = new JsonToCsvAdapter(adaptee);

  console.log("====== adapter data ======");
  console.log(adapter.getCsvData());
}
run();
un();