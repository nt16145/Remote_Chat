# Firebase Web Codelab - Final code

This folder contains the final code of the [Firebase Web Codelab](https://codelabs.developers.google.com/codelabs/firebase-web/).

You can use this app directly if you'd like to see the finished app but before you do follow the [Create a Firebase Project and Setup](https://codelabs.developers.google.com/codelabs/firebase-web/#3) step of the Codelab instructions

If you'd like to follow the step by step codelab start with the [web-start](../web-start) directory.

## 半年かけてコンセプト（他者との比較点や新規点）を洗い出す

- 研究という名目なのでそこがメインかなという感じで

## リモートワーク支援ソフトの競合アプリケーション
- 自分のアイデア
    - 北海道という辺境の地に住んでいて、リモートワークで作業や面接をすることが多く、その際リモートだと進捗が出ずらいということに着目しそれを支援するソフトを作成しようと思った
    - 機能に関して
        - WebRTCを利用して全員のビデオチャット(ただし、人が増えた時に通信がどうなるかは未検証)(実装済)
        - 全体のチャット機能(実装済)
        - ソーシャルログイン機能(実装済)
        - 現在取り掛かっている作業を一目でわかるようにする機能(隣の人を覗き込むような感覚)
        - 残タスクを把握できるような機能
        - 作業の進捗度合、作業時間が把握できるような機能
        - 個人チャット、個人ビデオ通話機能(WebRTCの音声をON,OFFできるような機能がいいのか)

    - 問題点
        - そもそも機能をこんなに盛り込んで1画面に収まるのかという点
        - WebRTCに9,10人繋ぐのは無理だろ()
        - この機能をすべて実装したとして、リモートの作業効率が上昇するかどうかは不明
        - 1画面これで占領してしまう
        - 作業領域の現象
        - 通信量どうなの？(オフィスだと意外と大丈夫か...?)
        - 実装機能に優先順をつけて実装する機能を絞ったほうが良さげか...?

## Remotty(https://www.remotty.net)
- コンセプトはどちらかというとリモートのオフィスのような感じ(多分)
- youtube動画を見た感想
    - 機能面
        - 雑談用の全体向けチャット
        - 個人向けのチャット
        - 各個人の2分間ごとの写真が送信されている
        - 掲示板
        - ビデオ通話でappearのURLを自動発行する
    - 感想
        - まぁまぁ作り込み甘めだったので上回るものを作れる可能性は結構あり
    - Remottyの優っている点
        - 動作を確認するため、全体のビデオ映像は2分に一度画像を送信するという軽い処理にしていて、個人間でビデオチャットしたいときはappearに投げている点
    - 自分のソフトの優っている点
        - 作業の進捗が一目では不明
        - 残作業量の把握
        - 
