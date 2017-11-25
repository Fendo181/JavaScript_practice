console.log("hello! wold! from swich ");

var signal = "pink";

switch (signal) {
    case "red":
        console.log("stop!");
        break;//処理が終わった合図:必ずつける。
    // greenとpinkの時にこの処理を行いなさい。
    case "green":
    case "pink":
        console.log("slow!");
        break;
    case "blue":
        console.log("Go!");
        break;
    default://それ以外の文
        console.log("Yeaaaa!");
        break;
}
