const img = ["https://github.com/kuroro4/basic/blob/main/1275782831_Starry_sky_landscape_painting_Ghibli_style.png?raw=true", "https://github.com/kuroro4/basic/blob/main/1888670209_Starry_sky_landscape_painting_Ghibli_style.png?raw=true", "https://github.com/kuroro4/basic/blob/main/2126285020_Starry_sky_landscape_painting_Ghibli_style.png?raw=true", "https://github.com/kuroro4/basic/blob/main/3628760897_Starry_sky_landscape_painting_Ghibli_style.png?raw=true"];
let count = -1;
picChange();
function picChange() {
  count++;
  if (count == img.length) count = 0;
  //画像選択
  changePic.src = img[count];
  //秒数の指定
  setTimeout("picChange()", 5000);
}
