//chrome.storage.local.clear();
let data = {};

chrome.storage.local.get(null, (result) => {
    data = result;
    console.log(result);
    for(const key in data){
        console.log(key);
        if(data[key].count > 8) {
            data[key].count = 0;
        }
    }
});

const ankerElements = document.querySelectorAll('a');
//console.log(ankerElements);

ankerElements.forEach((ankerElement)=>{
   //console.log(ankerElement);
   //console.log(ankerElement.href);
   
   // ここでのeはclickされたもの1つのこと。
   let ankerFunc = (e) => {
        // オブジェクトの分割代入 const currentTarget = e.currentTargetの略
        const { currentTarget } = e;
        //console.log(e);
        //console.log(currentTarget);

        // preventDefaultはEventにくっつける
        e.preventDefault();

        console.log('イベントが起きた');

        const url =currentTarget.href;
        if(data.hasOwnProperty(url) && data[url].count > 0){
            currentTarget.classList.remove(`moveCss${data[url].count}`);
            data[url].count += 1;
            currentTarget.classList.add(`moveCss${data[url].count}`);
        } else if(data.hasOwnProperty(url) && data[url].count === 0){
            currentTarget.classList.remove('moveCss9');
            currentTarget.classList.add('moveCss1');
            data[url].count += 1;
        } else {
            currentTarget.classList.add('moveCss1');
            data[url] = {};
            data[url].count = 1;
        }
        chrome.storage.local.set(data, () => {
            console.log('Value is set to ' , data);
        });
        
        currentTarget.addEventListener('click', () => {
            window.location.href = currentTarget;
        });
  
   };
    ankerElement.addEventListener('click', ankerFunc);
});

window.onpageshow = (event) => {
	if (event.persisted) {
		 window.location.reload();
	}
};

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




