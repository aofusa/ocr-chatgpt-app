# ChatGPT + Tesseract.js アプリ


このウェブアプリケーションは、ChatGPTとTesseract.jsの力を組み合わせたものです。ユーザーは画像をアップロードし、Tesseract OCRを使用してテキストを抽出し、抽出されたテキストを編集してからChatGPTに送信できます。  
公開されているアプリはこちら。  
https://aofusa.github.io/ocr-chatgpt-app/


## 特徴

- **ChatGPT 統合:** OpenAI GPT-3.5 Turboモデルを使用して自然言語処理を行います。
- **Tesseract OCR:** Tesseract.jsを使用してアップロードされた画像からテキストを抽出します。
- **対話型インターフェース:** ユーザーがOCRで抽出されたテキストを編集し、ChatGPTに送信する前に最適化できます。


## 開始方法

### インストール

1. リポジトリをクローン:

```bash
git clone https://github.com/your-username/ocr-chatgpt-app.git
cd ocr-chatgpt-app
npm install
```

2. 開発サーバーを起動:

```bash
npm run dev
```

3. ブラウザを開いて http://localhost:5173 にアクセスします。


### 使用方法

1. OpenAIプラットフォームからAPIキーを取得し、画面上よりアプリケーションに設定設定します
2. 画像ファイルをアップロードして、Tesseract OCR でテキストを抽出します。
3. テキストを編集し、「ChatGPTに送信」ボタンをクリックして ChatGPT に送信します。
4. ChatGPT からのレスポンスが表示されます。


## ライセンス

このプロジェクトは [Apache ライセンス 2.0](https://licenses.opensource.jp/Apache-2.0/Apache-2.0.html) のもとで提供されています。

