const fetchApi = async (url) => {
  const response = await fetch(url, {
    accept: "application/json",
  });
  const result = await response.json();
  return result;
};

const monsterUrl = "https://www.dnd5eapi.co/api/monsters/";

const randomMonsterPicker = (array) => {
  const randomArrayIndex = Math.floor(Math.random() * array.length);
  return array[randomArrayIndex];
};

const randomMonster = async () => {
  const monsterList = await fetchApi(monsterUrl);
  const randomMonster = randomMonsterPicker(monsterList.results);
  const monsterInfoUrl = `${monsterUrl}${randomMonster.index}`;
  const monsterInfo = await fetchApi(monsterInfoUrl);
  console.log(monsterInfo);
};

randomMonster();
