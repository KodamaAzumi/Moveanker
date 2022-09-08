//let onbtn = document.getElementById('onbtn');
//let offbtn = document.getElementById('offbtn');

/*
onbtn.addEventListener('click', () => {
    console.log('onボタン');
    // content-scriptにメッセージを送る
    chrome.tabs.query( {active:true, currentWindow:true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, 'onボタンを押しました', (item) =>{
          // 返ってきたメッセージ
          console.log(`受け取ったデータ : ${item}`);
        });
      });
});
*/

/*
offbtn.addEventListener('click', () => {
    console.log('offボタン');
    // content-scriptにメッセージを送る
    chrome.tabs.query( {active:true, currentWindow:true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, 'offボタンを押しました', (item) =>{
          // 返ってきたメッセージ
          console.log(`受け取ったデータ : ${item}`);
        });
      });
});
*/