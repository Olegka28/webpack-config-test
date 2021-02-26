async function start() {
  await Promise.resolve("async is work");
}

start().then((res) => {
  console.log(res);
});

class Util {
  static id = Date.now();
}

console.log(Util.id);

const name = "Oleg";

import("lodash").then((_) => console.log(_));
