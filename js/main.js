let btn = document.querySelector('#subscribe');
let form = document.querySelector('#signup-form'); // フォーム要素を取得

let btnToggleclass = function(el) {
  el.classList.toggle('none');
}

let btnToggleclass2 = function(el) {
  el.classList.toggle('block');
}

form.addEventListener('submit', function(event) { // フォームのsubmitイベントを監視
  event.preventDefault(); // フォームのデフォルトの動作をキャンセル
  btnToggleclass(card1);
  btnToggleclass2(card2);
});