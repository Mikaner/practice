# twitter-routing

/home
- ホーム画面最初のところ。タイムラインの画面

/{Twitterid}
- 個人ページ。{Twitterid}のツイート、リツイートのみ
{id}=自分ログイン中のアカウントの時プロフィール編集
それ以外の時にフォロー/フォロー中表示(hoverでフォロー解除)を表示

/{Twitterid}/status/{tweetid}
- ツイート

/{Twitterid}/likes
- いいね一覧

/{Twitterid}/following
/{Twitterid}/followers
- 自分がフォロー中の人/自分をフォローしている人

DB:
ユーザーid:
関係
従属関係冗長にする
アクションごとにDBを両側更新
・フォロー
相手フォロワーリストに自分を追加、自フォローリストに相手を追加



/explore
- 検索画面。とりあえず後回し

/explore/tabs/for-you
- おすすめタ。/exploreと表示が同じ
/trending,/news,/sports,/entertainment,/covid-19
- 他

/notifications
- 通知。後回し

/messeges
- DM機能。一覧
/messeges/{id}
- 個人DM

/i/bookmarks
- ブックマーク機能

/{@抜きtwitterId}/lists
- リスト一覧

/i/lists/{listid}
- リスト中身
/i/lists/members
/i/lists/subscribers
- リストの加入者一覧/フォロワー一覧


