import File from './index.txt';

const readFileHandle = async () => {
  const fechFile = await fetch(File);
  const textFile = await fechFile.text();
  let lines = textFile.split('\n').filter((line) => line.includes('：'));
  let obj = lines.reduce((obj: any, line) => {
    let parts = line.split('：');
    obj[parts[0].trim()] = parts[1].trim();
    return obj;
  }, {});
  return Object.entries(obj).map(([key, value]) => ({ key, value }));
};
const simulatedClick = (value: any) => {
  const keysToPress = value.split('');
  keysToPress.forEach(function (key: string) {
    var pressKey = new KeyboardEvent('keydown', {
      keyCode: key.charCodeAt(0),
      which: key.charCodeAt(0),
      key: key, // 键名
    });
    document.dispatchEvent(pressKey);
    console.log(pressKey.key);
  });
};

export { readFileHandle, simulatedClick };
