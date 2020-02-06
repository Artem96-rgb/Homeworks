// 1. Создать страницу, которая выводит нумерованный список песен:

let playlist = [{
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
},
{
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
},
{
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
},

{
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
},
{
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
},
{
    author: "AC/DC",
    song: "BACK IN BLACK"
},
{
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
},
{
    author: "METALLICA",
    song: "ENTER SANDMAN"
}
];

let orderedList = document.createElement("ol"); // adding ordered list and appending it
document.body.appendChild(orderedList);

for (let i = 0; i < playlist.length; i++) {
    let listItem = document.createElement("li"); // adding list and appending it
    orderedList.appendChild(listItem);
    listItem.innerText = (`${playlist[i].song} by ${playlist[i].author}`); // writing inside li
    listItem.style.fontSize = "x-large";
}
