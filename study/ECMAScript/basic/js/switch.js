const signal = 'red';

switch (signal) {
  case 'red' :
    console.log('Stop!');
    break;
  // 複数の条件を加える
  case 'blue' :
  case 'green':
    console.log('Go!!');
    break;
  default:
    console.log('Wrong Signal');
    break;
}
