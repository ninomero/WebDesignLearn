var beforePos = 0;//スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
    var elemTop = $('#area-1').offset().top;//area-1の位置まで来たら
    var scroll = $(window).scrollTop();//スクロールしている位置を取得
    //ヘッダーの出し入れをする
    if(scroll==beforePos){
        //IE11対策で処理を入れない
    }else if(elemTop > scroll || 0 > scroll - beforePos){
        //ヘッダー上から出現する
        $('#header').removeClass('UpMove');//#headerにUpMoveというクラス名を除き
        $('#header').addClass('DownMove');//#headerにDownMoveのクラス名を追加
    } else {
        //ヘッダーが上に消える
        $('#header').removeClass('DownMove');//#headerにDownMoveというクラス名を除き
        $('#header').addClass('UpMove');//#headerにUpMoveのクラス名を追加
    }

    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}

//画面をスクロールしたら動かしたい場合の記述
$(window).scroll(function(){
    ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
})