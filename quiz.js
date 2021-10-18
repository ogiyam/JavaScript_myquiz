
function buildQuiz(){
 　const output = [];

 myQuestions.forEach(
   (currentQuestion, questionNumber) => {
     const answers = [];
     for(letter in currentQuestion.answers){
       answers.push(
         `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
       );
     }

     output.push(
       `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join('')} </div>`
     );
   }
 );
 quizContainer.innerHTML = output.join('');
}


function showResults(){
 const answerContainers = quizContainer.querySelectorAll('.answers');
 let numCorrect = 0;

 myQuestions.forEach( (currentQuestion, questionNumber) => {
   const answerContainer = answerContainers[questionNumber];
   const selector = `input[name=question${questionNumber}]:checked`;
   const userAnswer = (answerContainer.querySelector(selector) || {}).value;

   if(userAnswer === currentQuestion.correctAnswer){
     numCorrect++;
     answerContainers[questionNumber].style.color = 'green';
   }
   else{
     answerContainers[questionNumber].style.color = 'red';
   }
 });
 resultsContainer.innerHTML = `${numCorrect} 問正解 ${myQuestions.length}問不正解`;
}


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
 {
   question: "ウォーターフォールモデルの説明は?(14)",
   answers: {
     a: "各工程を完了させてから次の工程に進む<br>",
     b: "利用者が早い段階でシステム内容を確認することができる<br>",
     c: "システムを複数のサブシステムに分割する<br>"
   },
   correctAnswer: "a"
 },
 {
   question: "プロトタイピングモデルの説明は?(14)",
   answers: {
     a: "システム開発の中で「設計」→「プログラミング」→「テスト」を繰り返す<br>",
     b: "開発初期段階で利用者の要求をしっかりと確認してから実際の開発に移る<br>",
     c: "管理がしやすいため、大規模なシステム開発案件に向いている<br>"
   },
   correctAnswer: "b"
 },
 {
   question: "スパイラルモデルの説明は?(14)",
   answers: {
     a: "利用者がシステム内容を確認できるのは最終段階に入ってから<br>",
     b: "開発初期段階で利用者の要求をしっかりと確認してから実際の開発に移る<br>",
     c: "システム開発の中で「設計」→「プログラミング」→「テスト」を繰り返す<br>",
   },
   correctAnswer: "c"
 },
 {
    question: "RAD(Rapid Application Development)の説明は?(14)",
    answers: {
      a: "ソフトウェア開発で上流から下流まで順番に実施する<br>",
      b: "短期間で開発を行うことを再重要視した開発手法<br>",
      c: "試作品のソフトウェアを作成して、利用者の評価をフィードバックして開発する<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "アジャイルとXP(eXtreme Programming)の説明として間違っているのは?(14)",
    answers: {
      a: "少人数の開発に適応しやすいとされており、既存の開発手法を比較して変更を許容する柔軟性を持っている<br>",
      b: "スパイラルモデルの派生派で、より短い反復単位で迅速に開発を行う手法<br>",
      c: "既存の開発手法に基づいた、仕様を固めて開発を行う方法<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "アジャイル手法のソフトウェア開発において、最も重視されているリファクタリングは?(14)",
    answers: {
      a: "動作するソフトウェアを迅速に開発するために、先にテストケースを設定してからコーディングする<br>",
      b: "ソフトウェアの保守性を高めるために外部仕様を変更せずに、プログラムに内部構造を変更する<br>",
      c: "利用者のフィードバックを得るために試作品を早期に作成する<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "リバースエンジニアリングの説明として正しくないものは?(14)",
    answers: {
      a: "試作品のソフトウェアを作成して、利用者の評価をフィードバックして開発する<br>",
      b: "これによって得られた仕様で新しい開発をする手法をフォワードエンジニアリングという<br>",
      c: "既存のソフトウェアの動作を解析することでプログラムの仕様やソースコードを導き出す<br>"
    },
    correctAnswer: "a"
 },
 {
    question: "マッシュアップの説明として正しいものは?(14)",
    answers: {
      a: "試作品のソフトウェアを作成して、利用者の評価をフィードバックして開発する<br>",
      b: "ソフトウェアの保守性を高めるために外部仕様を変更せずに、プログラムに内部構造を変更する<br>",
      c: "公開されている複数のサービスを組み合わせることで新しいサービスを作り出す手法<br>"
    },
    correctAnswer: "c"
 },
 {
    question: "DFDの説明として正しいものは?(14)",
    answers: {
      a: "データの流れを図として表したもの<br>",
      b: "スパイラルモデルの派生派で、より短い反復単位で迅速に開発を行う手法<br>",
      c: "実体と実体間の関連という概念を使ってデータの構造を図に表したもの<br>"
    },
    correctAnswer: "a"
 },
 {
    question: "E-R図の説明として正しいものは?(14)",
    answers: {
      a: "データの流れを視覚的にわかりやすく表現する図<br>",
      b: "オブジェクト指向モデルを表現する図<br>",
      c: "実体と実体間の関連という概念を使ってデータの構造を表した図<br>"
    },
    correctAnswer: "a"
 },
 {
    question: "キーボード操作に慣れている利用者に対するインターフェースは?(14)",
    answers: {
      a: "項目をできるだけマウスで選択してもらい入力する<br>",
      b: "入力原票の形にとらわれず必須項目などは１ヵ所にまとめて配置し入力漏れがないようにする<br>",
      c: "使用頻度の高い操作はダブルクリックで選択できるようにする<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "コード設計を行う際のポイントについて正しいものは?(14)",
    answers: {
      a: "運用を開始した後はルール変更が難しいため、扱うデータ量を予測する必要がある<br>",
      b: "コードの桁数を運用途中で増やすことは難しいため、予測よりも多めに桁数を見積るのが得策である<br>",
      c: "コードの割り当て規則のみ、運用後も変更が可能である<br>"
    },
    correctAnswer: "a"
 },
 {
    question: "チェックディジットについて正しいものは?(14)",
    answers: {
      a: "チェックディジットに使用される数字は読み取り時に複雑なルールにより生成される<br>",
      b: "バーコード読み取り時だけでなく、人の手で行う入力作業でも役立つ<br>",
      c: "コード設計時に決められた数字をコード末尾から２番目に付加する<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "入力ミスチェックの方法について正しく説明されているのは?(14)",
    answers: {
      a: "ニューメリックチェック：一定の順序で並んでいるか<br>シーケンスチェック：数字データに文字データ等が混入していないか<br>",
      b: "ニューターメリックチェック：桁数が正常か<br>シーラカンスチェック：バージョンが古くないか<br>",
      c: "ニューメリックチェック：数字データに文字データ等が混入していないか<br>シーケンスチェック：一定の順序で並んでいるか<br>"
    },
    correctAnswer: "c"
 },
 {
   question: "モジュールの分割について間違っている説明は?(14)",
   answers: {
     a: "モジュール分割技法には「データの流れに着目」と「データの構造に着目」に分かれる<br>",
     b: "「データの構造に着目」にはトランザクション分割法が含まれる<br>",
     c: "各プログラムをモジュールという単位に分割・階層化することをプログラムの構造化設計という<br>"
   },
   correctAnswer: "b"
 },
 {
   question: "モジュール強度の順序について正しいものは?（左から強→弱）(14)",
   answers: {
     a: "機能的強度→手順的強度→連絡的強度→情報的強度→時間的強度→論理的強度→暗号的強度<br>",
     b: "機能的強度→情報的強度→連絡的強度→手順的強度→時間的強度→連絡的強度→暗号的強度<br>",
     c: "機能的強度→情報的強度→論理的強度→手順的強度→時間的強度→論理的強度→暗号的強度<br>"
   },
   correctAnswer: "b"
 },
 {
   question: "モジュール結合度の強弱から、モジュールの独立度が高く好ましいされる順序について正しいものは?（左から高→底）(14)",
   answers: {
     a: "データ結合→スタンプ結合→制御結合→共通結合→外部結合→内容結合<br>",
     b: "データ結合→内容結合→制御結合→外部結合→共通結合→スタンプ結合<br>",
     c: "データ結合→スタンプ結合→制御結合→外部結合→共通結合→内容結合<br>",
   },
   correctAnswer: "c"
 },
 {
    question: "ブラックボックステストについて間違っている記述は?(14)",
    answers: {
      a: "同値分割では、データ範囲を種類ごとのグループに分けてそれぞれの代表的な値を使ってテストをする<br>",
      b: "限界値(境界値)分析では、それぞれのグループ値の境界前後の値をテストデータとして使用する<br>",
      c: "ブラックボックステストはモジュールの内部構造が正しく作られているかを検証する<br>"
    },
    correctAnswer: "c"
 },
 {
    question: "ホワイトボックステストの網羅基準について正しい説明は?(14)",
    answers: {
      a: "命令網羅：Yes,Noの分岐それぞれのパターンが必要<br>",
      b: "判定条件網羅(分岐網羅)：Yesの分岐１テストパターンを通す<br>",
      c: "条件網羅：個々の条件がYes,Noの値を最低１回は満たすようにする<br>",
      d: "複数条件網羅：定義した条件の組み合わせを網羅するテスト"
    },
    correctAnswer: "c"
 },
 {
    question: "結合テストの手法であるボトムアップテストの特徴として正しいものは?(14)",
    answers: {
      a: "テスト済み上位モジュールが必要<br>",
      b: "開発初期の段階では並行作業が困難<br>",
      c: "スタブが必要<br>",
      d: "ドライバが必要<br>"
    },
    correctAnswer: "d"
 },
 {
    question: "インタプリタとコンパイラについて間違っている記述は?(16)",
    answers: {
      a: "これら２種のように翻訳作業を行うプログラムを総称して言語プロセッサと呼ぶ<br>",
      b: "インタプリタ方式は原始プログラムを解釈しながら実行していくため、動作を確認しながら作ることができない<br>",
      c: "コンパイラ方式にはC言語やJavaなどが当てはまる<br>"
    },
    correctAnswer: "b"
　},
 {
    question: "コンパイラの中で行われる処理について間違っているものは?(16)",
    answers: {
      a: "ソースコードに書かれているコードをトークン単位に分解する<br>",
      b: "オブジェクトコードを生成する代わりにインタプリタ用の中間コードを生成する<br>",
      c: "目的プログラム（オブジェクトプログラム）を生成する<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "リンカとローダについて間違っているものは?(16)",
    answers: {
      a: "リンカとは必要なモジュールなどを繋ぎ合わせて実行可能ファイル（ロードモジュール）をにするプログラムのことである<br>",
      b: "ローダとはロードモジュールを主記憶装置に読み込ませるプログラムのことである<br>",
      c: "リンカの作業時に使用される静的リンキングは、プログラムの実行時に共有ライブラリやシステムライブラリをロードしてリンクする手法である<br>"
    },
    correctAnswer: "c"
 },
 {
    question: "構造化プログラミングで用いる制御構造とされる３つは?(16)",
    answers: {
      a: "再帰、繰返し、順次<br>",
      b: "繰返し、分岐、選択<br>",
      c: "選択、順次、繰返し<br>"
    },
    correctAnswer: "c"
 },
 {
    question: "データ構造「配列」について間違っているものは?(16)",
    answers: {
      a: "配列はデータの挿入や削除は不得意であるためデータの個数が頻繁に変わる用途には適さない<br>",
      b: "配列内の個々のデータに直接アクセスすることはできない<br>",
      c: "配列は添字を増やしていく（配列の配列を作る）多次元配列とすることができる<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "データ構造「リスト」について間違っているものは?(16)",
    answers: {
      a: "リストで扱うデータにはポインタという番号がつき、個々のデータに直接アクセスができる<br>",
      b: "ポインタを書きかえればデータの挿入・削除を簡単に行うことができるbr>",
      c: "データの持ち方によって、単方向リスト・双方向リスト・循環リストの３種類がある<br>"
    },
    correctAnswer: "a"
 },
 {
    question: "データ構造「キュー・スタック」について間違っているものは?(16)",
    answers: {
      a: "キューが利用されている例として、GUIプログラムやプリンタの印刷用キューが挙げられる<br>",
      b: "スタックは最後に格納したデータから順に処理を行う後入れ先だし方式のデータ構造である<br>",
      c: "スタックを用いた場合、A→B→C→Dの順で到着するデータの出力順は D→C→B→Aである<br>"
    },
    correctAnswer: "c"
 },
 {
    question: "木構造について間違っているのは?(16)",
    answers: {
      a: "ファイルシステムやドメイン名などに用いられている<br>",
      b: "葉以外の節が全て２つの子を持ち、根から葉までの断層の深さが全て異なることを完全２分木という<br>",
      c: "親に対する左部分木と右部分木の関係が「左の子<親<右の子」となる２分探索木はデータの探索が容易にできる<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "データを探索するアルゴリズムに関して間違っている記述は?(16)",
    answers: {
      a: "線形探索法は先頭から順に探索する方法であり、番兵を付加すると効率的に処理が行うことができる<br>",
      b: "対象データ群が規則性を持たない場合、2分探索法を用いることで効率よく探索できる<br>",
      c: "ハッシュ法は一定の計算式（ハッシュ関数）を用いてデータの格納位置を算出する方法である<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "各アルゴリズムの平均探索回数について組み合わせが正しいものは?(16)",
    answers: {
      a: "線形探索法：(1+n)÷2<br>",
      b: "2分探索法：1回(シノニム発生確率を無視できる値の場合)<br>",
      c: "ハッシュ法:log₂n<br>"
    },
    correctAnswer: "a"
 },
 {
    question: "データを整列させるアルゴリズムについて説明が正しいものは?(16)",
    answers: {
      a: "基本交換法（バブルソート）:隣接するデータの大小を比較・入れ替えにより全体を配列する<br>",
      b: "基本挿入法（挿入ソート）:①対象データから最小値か最大値のデータを取り出す　②先頭のデータと交換　③繰り返してで全体を整列する<br>",
      c: "基本選択法（選択ソート）:①対象のデータ列を整列済と未整列に分ける ②未整列側から整列済の適切な位置にデータを挿入して全体を整列する<br>"
    },
    correctAnswer: "a"
 },
 {
    question: "より高速な整列アルゴリズムについて正しい説明は?(16)",
    answers: {
      a: "シェルソート：中間的な基準値を決めて値のグループ間で大小を判別し、それをもとに整列する<br>",
      b: "クイックソート：一定間隔おきに取り出した要素で部分列を作り、その中で整列し元に戻す<br>",
      c: "ヒープソート：未整列部分を順序木構造に構成、最大値もしくは最小値を取り出して整列済に戻す<br>",
    },
    correctAnswer: "c"
 },
 {
    question: "オブジェクト指向の説明として間違っているものは?(16)",
    answers: {
      a: "データ（属性）とメソッド（手続き）を一つにまとめた概念である<br>",
      b: "特徴として情報隠蔽が利点として挙げられる「カプセル化」がある<br>",
      c: "「カプセル化」はデータがオブジェクトの管理下となるため他オブジェクトが容易にデータにアクセスすることができる<br>"
    },
    correctAnswer: "c"
 },
 {
    question: "クラスとインスタンスについて間違っているのは?(16)",
    answers: {
      a: "クラスの考え方の基本は「オブジェクトを具体化して定義する」ことである<br>",
      b: "クラス定義に対して具体的な属性値を与えメモリ上の領域を確保して実体化したものがインスタンスである<br>",
      c: "ひとつのクラスから属性値によって様々なインスタンスが生成される<br>"
    },
    correctAnswer: "a"
 },
 {
    question: "「クラスの階層化」について間違っているのは?(16)",
    answers: {
      a: "上位クラスをスーパークラス（基底クラス）、下位クラスをサブクラス（派生クラス）という<br>",
      b: "複数のオブジェクトに共通するインスタンスを抽出して階層化したものをクラスの階層化という<br>",
      c: "サブクラスがスーパークラスの特性を受け継ぐことを継承（インヘリタンス）という<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "クラスの関係性について間違っている説明は?(16)",
    answers: {
      a: "汎化と特化（is a関係）：上位クラスがスーパークラスと下位クラスがサブクラスの関係になるとき成り立つ<br>",
      b: "集約と分解（part of関係）：継承関係のある上位クラスと下位クラスの関係<br>",
      c: "多態性/多相性（ポリモーフィズム）：同メッセージを複数のオブジェクトに送った際それぞれが固有の処理を行う<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "オブジェクト指向分析を用いてモデリングした時、クラスとオブジェクトの関係になるのは?(16)",
    answers: {
      a: "ドラえもん、のび太<br>",
      b: "ドラえもん、ネジ<br>",
      c: "ドラえもん、人型ロボット<br>"
    },
    correctAnswer: "c"
 },
 {
    question: "属性・メソッド・インスタンス、クラスについて間違っているものは?(16)",
    answers: {
      a: "属性：クラスの中に定義されるオブジェクトの状況を保持するための入れ物<br>",
      b: "メソッド：クラスの中に定義されるオブジェクトの持つ振る舞いを記述したもの<br>",
      c: "インスタンス：ソースプログラムがコンパイルされて実行可能なプログラムになり、それが主記憶装置にロードされ、動作可能な状態になったもの<br>",
      d: "クラス：一つのインスタンスの仕様を定義したもの"
    },
    correctAnswer: "d"
 },
 {
    question: "UML（Unified Modeling Language）についての説明として正しいのは?(16)",
    answers: {
      a: "主にオブジェクト指向プログラミングにおいて設計で用いられる統一モデリング言語である<br>",
      b: "規定されている図が１１種類あり必要に応じて使い分ける<br>",
      c: "規定ダイアグラムは大きく分けて「構造図」「振る舞い図」に二分され、振る舞い図の中のシーケンス図・コミュニケーション図をまとめて相互作用図という場合がある<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "UMLをビジネスモデリングに用いる場合、ビジネスプロセスの実行順序や条件による分岐などのワークフローを表すことができる図は?(16)",
    answers: {
      a: "オブジェクト図<br>",
      b: "アクティビティ図<br>",
      c: "コンポーネント図<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "UML2.0のシーケンス図とコミュニケーション図のどちらにも表現されるものは?(16)",
    answers: {
      a: "オブジェクトがメッセージを処理している期間<br>",
      b: "オブジェクトがある状態にとどまる最短時間あよび最長時間<br>",
      c: "オブジェクト間で送受信されるメッセージ<br>"
    },
    correctAnswer: "c"
 },
 
  {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "c"
  },
  {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "c"
 },
 {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "b"
  },
  {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "c"
  },
  {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "c"
 },
 {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "b"
  },
  {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "c"
  },
  {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "c"
 },
 {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "b"
  },
  {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "c"
  },
  {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "c"
 },
 {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "b"
  },
  {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "c"
  },
  {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "b"
 },
 {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "c"
 },
 {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "b"
  },
  {
    question: "?(11)",
    answers: {
      a: "<br>",
      b: "<br>",
      c: "<br>"
    },
    correctAnswer: "c"
  }
];


buildQuiz();

submitButton.addEventListener('click', showResults);
