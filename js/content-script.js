//chrome.storage.local.clear();
let data = {};
const ankerElements = document.querySelectorAll('a');
//console.log(ankerElements);

chrome.storage.local.get(null, (result) => {
    data = result;
    console.log(result);
}); 

ankerElements.forEach((ankerElement)=>{
   //console.log(ankerElement);
   //console.log(ankerElement.href);
   
   //ここでのeはclickされたもの1つのこと。
   let ankerFunc = (e) => {
    // オブジェクトの分割代入 const currentTarget = e.currentTargetの略
    const { currentTarget } = e;
    //console.log(e);
    console.log(currentTarget);

    // preventDefaultはEventにくっつける
    e.preventDefault();

    console.log('イベントが起きた');
    currentTarget.classList.add('overCss2');
    currentTarget.style.zIndex = '30';

    const url =currentTarget.href;
    if(data.hasOwnProperty(url)){
     data[url].count += 1;
    } else {
        data[url] = {};
        data[url].count = 1;
    }
    chrome.storage.local.set(data, function () {
        console.log('Value is set to ' , data);
    });

   };
   ankerElement.addEventListener('click', ankerFunc);

});

/*
// popup.jsからメッセージを受け取る
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(`送られてきたデータ : ${message}`);
    // 以下のconsole.logはpopup.jsのconsoleに表示される。
    sendResponse('メッセージを受け取りました');
    console.log(sender);
    return true
});
*/




