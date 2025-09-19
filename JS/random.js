const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

const randomName = getRandomName();
console.log("Random name selected:", randomName);

export default getRandomName;
