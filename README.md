# ChatGPT + Tesseract.js アプリ


このウェブアプリケーションは、ChatGPTとTesseract.jsの力を組み合わせたものです。ユーザーは画像をアップロードし、Tesseract OCRを使用してテキストを抽出し、抽出されたテキストを編集してからChatGPTに送信できます。


## 特徴

- **ChatGPT 統合:** OpenAI GPT-3.5 Turboモデルを使用して自然言語処理を行います。
- **Tesseract OCR:** Tesseract.jsを使用してアップロードされた画像からテキストを抽出します。
- **対話型インターフェース:** ユーザーがOCRで抽出されたテキストを編集し、ChatGPTに送信する前に最適化できます。


## 開始方法

### インストール

リポジトリをクローン:

```bash
git clone https://github.com/your-username/ocr-chatgpt-app.git
cd ocr-chatgpt-app
npm install
```


### 使用方法

1. 開発サーバーを起動:

```bash
npm run dev
```

2. ブラウザを開いて http://localhost:5173 にアクセスします。


### 設定

- ChatGPT APIキー: OpenAIプラットフォームからAPIキーを取得し、アプリケーションに設定してください。


## ライセンス

このプロジェクトは [Apache ライセンス 2.0](https://licenses.opensource.jp/Apache-2.0/Apache-2.0.html) のもとで提供されています。

