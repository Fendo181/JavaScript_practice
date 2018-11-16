let i =1 ;

try {
    i = i *j;
} catch (error) {
    console.log(error.message);
} finally {
    console.log('処理は完了しました');
}


// j is not defined
// 処理は完了しました

// try..catchは処理としてオーバヘッドが大きいので、重くなる
