# 半年かけてコンセプト（他者との比較点や新規点）を洗い出す

- 研究という名目なのでそこがメインかなという感じで

# リモートワーク支援ソフトの概要

- 自分のアイデア
  - 北海道という辺境の地に住んでいて、リモートワークで作業や面接をすることが多く、その際リモートだと進捗が出ずらいということに着目しそれを支援するソフトを作成しようと思った
- コンセプト
  - 会議ツールではなく、リモートとしてのオフィス空間を醸成するサービス
  - リモートだと作業効率が上がらない人、作られてから間もないグループのコミュニケーションをなるべく潤滑にしたい人、逆にリモートだと作業をし過ぎてしまう人等がメインターゲット
- 機能に関して
  - WebRTCを利用して全員のビデオチャット(ただし、人が増えた時に通信がどうなるかは未検証)(実装済)
  - 全体のチャット機能(実装済)
  - ソーシャルログイン機能(実装済)
  - 現在取り掛かっている作業を一目でわかるようにする機能(隣の人を覗き込むような感覚を生むため)
  - 残タスクを把握できるような機能
  - 作業の進捗度合、作業時間が把握できるような機能
  - 個人チャット、個人ビデオ通話機能(WebRTCの音声をON,OFFできるような機能がいいのか)
  - 雑談用のビデオチャットを別で開く機能
  - リモートだと怠けてしまう人にも進められるようなサービスに
  - ___上に関してはどのような機能を実装すれば解消されるのか検討中___

  - 問題点
    - 既存の技術の組み合わせによるものなので、研究(?)という感じ
    - そもそも機能をこんなに盛り込んで1画面に収まるのかという点
    - WebRTCに9,10人繋ぐ？
    - この機能をすべて実装したとして、リモートの作業効率が上昇するかどうかは不明
    - 1画面これで占領してしまう
    - 作業領域の減少
    - 通信量どうなの？(オフィスだと意外と大丈夫か...?)
    - 実装機能に優先順をつけて実装する機能を絞ったほうが良さげか...?
    - 追記：実装機能の多さに関しては選択制にすればいいんじゃないかという意見があった(某イベントで)

# 競合サービス

- [Remotty](https://www.remotty.net)
- コンセプトはどちらかというとリモートのオフィスのような感じ(多分)
- youtube動画を見た感想
  - 機能面
  - 雑談用の全体向けチャット
  - 個人向けのチャット
  - 各個人の2分間ごとの写真が送信されている
  - 掲示板
  - ビデオ通話でappearin(whereby)のURLを自動発行する
  - Remottyの特徴
  - 全体のビデオ映像は2分に一度画像を送信するという軽い処理にしていて、個人間でビデオチャットしたいときはappearに投げている点

# 既存サービスとの相違点(このサービスの中核部分でもある)
- Teamsやzoomなどの会議を行うことが中心のサービスとは異なり、リモートワーク環境を提供することが目的のサービスである
- 競合サービスはビデオチャットやテキストチャットのみの提供であるが、開発するサービスは作業状態を可視化するために現在作業中のタスクや、残りのタスクなどを___同一画面で___すぐに確認することができる
- コミュニケーションの円滑化や相談のハードルを下げるため、雑談専用のビデオチャットを開くことができる
- 作業時間が超大にならないための、タイマーやカウンターを同一画面で利用できる

# 参考文献

- [チャット](https://qiita.com/codomo_pro/items/9e651e8cffaa90681426)
- [skyway](https://qiita.com/yusuke84/items/54dce88f9e896903e64f)
