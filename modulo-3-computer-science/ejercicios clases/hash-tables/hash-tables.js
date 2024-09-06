class Hashtable {
  constructor(size = 7) {
    //dataMap -> tabla
    this.dataMap = new Array(size);
    //console.log(this.dataMap);
  }
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;

      //console.log(hash + key.charCodeAt(i)*23)
      //console.log(hash + key.charCodeAt(i)*23 % this.dataMap.legth)
    }
    return hash;
  }
  printTable() {
    for (let i = 0; i < this.dataMap.length; i++) {
      console.log(i, " : ", this.dataMap[i]);
    }
  }
  set(key, value) {
    let renglon = this.hash(key);
    if (!this.dataMap[renglon]) this.dataMap[renglon] = [];

    const newDataSet = [key, value];
    this.dataMap[renglon].push(newDataSet);
  }
  get(key) {
    let renglon = this.hash(key);
    for (let i = 0; i < this.dataMap[renglon].length; i++) {
      if (this.dataMap[renglon][i][0] === key) {
        return this.dataMap[renglon][i][l];
      }
    }
  }
}

l: [
  ["harina", 100],
  ["queso", 6],
];

this.dataMap[renglon] = [
  ["harina", 100],
  ["queso", 6],
];
arr = [
  ["harina", 100],
  ["queso", 6],
];

console.log(this.dataMap[renglon][1][0]); //queso

const ht1 = new Hashtable(7);
//const ht2 = new Hashtable(17);

ht1.set("harina", 100);
ht1.set("harina", 75);
ht1.set("queso", 6);

ht1.printTable();
//console.log(ht2.hash("cafe"));

//ht2.hash("cafe");
ht1.hash("Hola!");
