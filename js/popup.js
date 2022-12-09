/*
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
*/

// 全てのリンクの大きさをリセット
const clearButton = document.getElementById('clearButton')

const onClickclearButton = () => {
    console.log('clearButtonが押されました');

    const result = confirm('全てのリンクの速さをリセットしますか');
    if (result) {
        console.log('OKが押されました');
        // リセットボタンが押された回数を計測する
        /*
        const img = new Image(0, 0);
        img.src = `https://nanalytics.ga/no-cache/kodama/moveanker/click-event-0.png?r=${uuidv4()}`;
        */

        chrome.storage.local.clear();
        chrome.tabs.reload();
    } else {
        console.log('キャンセル押されました');
    }
};

clearButton.addEventListener('click', onClickclearButton);