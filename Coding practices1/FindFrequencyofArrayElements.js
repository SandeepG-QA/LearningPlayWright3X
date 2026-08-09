const arr = [1, 2, 2, 3, 3, 3];

const frequencyMap = new Map();

arr.forEach(item => {
  frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
});

frequencyMap.forEach((count, item) => {
  console.log(`${item} appears ${count} times`);
});