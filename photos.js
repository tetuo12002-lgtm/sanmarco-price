/* 「はじめての方へ」ページの参考写真の一覧
   写真ファイルは photos フォルダに入れて、ここに名前を書きます。
   書いた金額のボタンに「📷 写真あり」が出て、押すと写真が表示されます。

   書き方：  "形-金額": ["写真ファイル名", ...],
     形 … hanataba（花束） arrange（アレンジ） butsuka（仏花） hachi（鉢花）
   用途ごとに分けたいときは、先頭に用途をつけます（こちらが優先されます）。
     用途 … oiwai（お祝い） gift（プレゼント） sonae（お供え） mimai（お見舞い） jitaku（自宅）

   例：
     "hanataba-3000": ["hanataba-3000-1.jpg", "hanataba-3000-2.jpg"],
     "sonae-arrange-5000": ["sonae-arrange-5000-1.jpg"],
*/
window.PHOTOS = {
  "oiwai-arrange-5000": ["oiwai-arrange-5000-1.jpg", "oiwai-arrange-5000-2.jpg"],
  "sonae-arrange-5000": ["sonae-arrange-5000-1.jpg", "sonae-arrange-5000-2.jpg"],
};
