(function (){
 'user strict';

  //画像関連
  var img;
  var img2;
  var stage;

  //画像ロード
  function loadImage (imageData){
      //画像のロード
      var baseImg = new Image();
      baseImg.src = 'img/pepabon.png';
      img = new createjs.Bitmap(baseImg);

      //画像が選択されている時のみ合成
      if(imageData !== null) {
          var baseImg2 = new Image();
          baseImg2.src = imageData;
          img2 = new createjs.Bitmap(baseImg2);
      }

      stage = new createjs.Stage('result');
  }

  //画像と文字を合成する処理
  function genImage (imageIni, txt){
      //合成画像の設定
      //上下は10ピクセルごと移動
      img2.x = imageIni.xPos * 10;
      img2.y = imageIni.yPos * 10;
      //拡縮は10％ずつ
      img2.scaleX = img2.scaleX * (1 + imageIni.Scale / 10);
      img2.scaleY = img2.scaleY * (1 + imageIni.Scale / 10);

      //ステージ生成
      stage.addChild(img2);
      stage.addChild(img);

      //文字オブジェクトを生成してステージに追加
      $.each(txt,function(key,value){
          //本文は入力された内容をそのまま取る
          var content = $('#' + key).val();

          //文字生成
          var obj = new createjs.Text(content);

          //文字設定
          obj.textAlign = value.align;
          obj.font = value.font;
          obj.color = value.color;
          obj.x = value.x;
          obj.y = value.y;

          stage.addChild(obj);
      });

      //ステージ反映
      stage.update();
  }

  function downloadImage(imageData){
      window.location = imageData;
  }


  $(function(){
      //読込画像のオブジェクト
      var imageIni = {
          xPos : 0,
          yPos : 0,
          Scale : 0,
          imageData : null,
          resetImage : function(){
              this.xPos = 0;
              this.yPos = 0;
              this.Scale = 0;
          },
          makeImage : function(){
              if(this.imageData !== null) {
                  loadImage(this.imageData);
                  genImage(this, txt);
              }
          }
      };

      //合成する文字の位置情報などを定義
      var txt = {
          'txt01' : {
              'x' : 18,
              'y': 555,
              'font': '23px/1.5 Meiryo,sans-serif',
              'align': 'left',
              'color': 'white'
          },
          'txt02' : {
              'x' : 25,
              'y': 595,
              'font': '30px/1.5 Meiryo,sans-serif',
              'align': 'left',
              'color': 'white'
          }
      };

      //イベント関連処理
      //初回のみCanvasを作成しておく
      $(window).on('load',function(){
          loadImage(null);
      });

      //画像読込
      $('#getfile').change(function (){
          //読み込み
          var fileList =$('#getfile').prop('files');
          var reader = new FileReader();
          reader.readAsDataURL(fileList[0]);

          //読み込み後
          $(reader).on('load',function(){
              $('#preview').prop('src',reader.result);
              imageIni.imageData = reader.result;
          });
      });


      //ボタンイベントまとめ
      $('.btn').on('click',function(e){
          if (e.target.id === "update"){
              //画像生成は個別処理なし
          }else if (e.target.id === "up"){
              imageIni.yPos -= 1;
          }else if (e.target.id === "down"){
              imageIni.yPos += 1;
          }else if (e.target.id === "left"){
              imageIni.xPos -= 1;
          }else if (e.target.id === "right") {
              imageIni.xPos += 1;
          }else if (e.target.id === "zoomin") {
              imageIni.Scale += 1;
          }else if (e.target.id === "zoomout") {
              imageIni.Scale -= 1;
          }else if (e.target.id === "reset"){
              imageIni.resetImage();
          }else if (e.target.id === "dl"){
              //TODO
              downloadImage(imageIni.imageData);
              return;
          }

          //画像操作時は再描画を行う
          if(imageIni.imageData !== null){
              imageIni.makeImage();
              $("#alert").text("");
          }else{
              $("#alert").text("画像を選択してから画像生成を行ってください");
          }
      });
  });

})();