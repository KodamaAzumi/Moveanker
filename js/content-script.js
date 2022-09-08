const ankerElements = document.querySelectorAll('a');
//console.log(ankerElements);

ankerElements.forEach((ankerElement)=>{
   //console.log(ankerElement);
   //console.log(ankerElement.href);
   // このurlはページ上のurlすべて
   const urls = ankerElement.href;
   
   //ここでのeはclickされたもの1つのこと。
   let ankerFunc = (e) => {
    const { currentTarget } = e;
    //console.log(e);
    console.log(currentTarget);

    // preventDefaultはEventにくっつける
    e.preventDefault();

    console.log('イベントが起きた');
    currentTarget.classList.add('overCss2');
    currentTarget.style.zIndex = '30';

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




