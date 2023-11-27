const fetchApi = async () => {
  const response = await fetch("https://www.dnd5eapi.co/api/monsters/", {
    accept: "application/json",
  });
  const result = await response.json();
  return result;
};

const randomMonsterPicker = (array) => {
  const randomArrayIndex = Math.floor(Math.random() * array.length);
  return array[randomArrayIndex];
};

const randomMonster = async () => {
  const monsterList = await fetchApi();
  const randomMonster = randomMonsterPicker(monsterList.results);
  console.log(randomMonster);
};

randomMonster();
