class Transmittal_Document {
  type = undefined;

  constructor(number, name) {
    this.number = number;
    this.name = name;
    this.numberPrepare();
    this.analyzeName();
  }

  numberPrepare() {
    this.number_arr = this.number.split("-");
    this.scope = this.number_arr[1];
    this.unit = this.number_arr[2];
    this.discipline = this.number_arr[3];
    this.language = this.number_arr[5];
    this.revision = this.number_arr[6];   
  }

  analyzeName() {
    this.isMR();
    this.isTBE();
  }

  isProcedure() {}

  isMR() {
    if (this.type != undefined) return;
    if (
      this.name.search(/MR/) != -1 ||
      this.name.search(/Material Requisition/) != -1
    )
      this.type = "MR";
  }

  isTBE() {
    if (this.type != undefined) return;
    if (this.name.search(/TBE/) != -1) this.type = "TBE";
  }
}

let doc = new Transmittal_Document(
  "SGCCUP-GS-1000-PI-0014-EN-01",
  "Piping Material drawing"
);

console.log(doc);
