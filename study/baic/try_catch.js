try {
    throw new Error("例外処理が発生しました！")
    console.log("hello wold!")
} catch (e) {
    console.log("Not Hello wold!")
    console.log(e)
}