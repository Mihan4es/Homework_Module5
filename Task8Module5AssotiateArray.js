let myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

for (let [key, value] of myMap) {
    console.log(`Ключ - X ${key}, значение - Y ${value}`);
}