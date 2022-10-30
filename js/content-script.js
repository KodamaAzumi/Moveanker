//chrome.storage.local.clear();
let data = {};

chrome.storage.local.get(null, (result) => {
    data = result;
    console.log(result);
    for (const key in data) {
        //console.log(key);
        if (data.hasOwnProperty(key)) {
            if (data[key].count > 4) {
                data[key].count = 0;
            }
            const keyElms = document.querySelectorAll(`a[href="${key}"]`);
            keyElms.forEach((keyElm) => {
                if(keyElm && data[key].count > 0){
                    keyElm.classList.remove(`moveCss${data[key].count}`);
                    keyElm.classList.add(`moveCss${data[key].count + 1}`);
                } else if(keyElm && data[key].count === 0){
                    keyElm.classList.remove('moveCss5');
                    keyElm.classList.add('moveCss1');
                } 
            });
        } 
    }
});

const ankerElements = document.querySelectorAll('a:not([href=""])');
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
        if (!data.hasOwnProperty(url)) {
            data[url] = {};
            data[url].count = 0;
            window.location.href = currentTarget;
        } else if (data.hasOwnProperty(url) && data[url].count > 0) {
            data[url].count += 1;
            window.location.href = currentTarget;
        } else if (data.hasOwnProperty(url) && data[url].count === 0) {
            data[url].count += 1;
            window.location.href = currentTarget;
        } 
        chrome.storage.local.set(data, () => {
            console.log('Value is set to ' , data);
        });
   };
    ankerElement.addEventListener('click', ankerFunc);
});

window.onpageshow = (event) => {
	if (event.persisted) {
		 window.location.reload();
	}
};

// 使用時間を計測するためのコード
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const tick = (() => {
    const interval = 10000;
    let start;
  
    return (timestamp) => {
      if (start === undefined) {
        start = timestamp;
      }
  
      const elapsed = timestamp - start;
  
      if (elapsed > interval) {
        // img 要素を作成
        const img = new Image(0, 0);
  
        // 経過時間が 10 秒を超えたらカウンターをリセットする
        start = undefined;
        // img 要素に計測画像の URL を設定する
        img.src = `https://nanalytics.ga/no-cache/kodama/moveanker/timer-event-0.png?r=${uuidv4()}`;
      }
  
      requestAnimationFrame(tick);
    };
  })();
  
  requestAnimationFrame(tick);

// 拡張機能を読み込んだ回数、ページ閲覧数を計測するためのコード
const body = `<img class="sw-hidden" src="https://nanalytics.ga/no-cache/kodama/moveanker/page-view-0.png?r=${uuidv4()}">`;
const elem = document.getElementsByTagName('body')[0];
elem.insertAdjacentHTML('afterbegin', body);
console.log(elem.innerHTML);






