# vite-plugin-html-oreder

[vite-plugin-html-oreder](https://github.com/hilosiva/vite-plugin-html-oreder) は、俺流の Vite 用 HTML ローダーです。

[![Publish package to GitHub Packages](https://github.com/hilosiva/vite-plugin-html-oreder/actions/workflows/auto-publish.yml/badge.svg?branch=main)](https://github.com/hilosiva/vite-plugin-html-oreder/actions/workflows/auto-publish.yml)

## 特徴

- ルートディレクトリ内のすべての HTML ファイルをビルドできる。

## インストール

■ npm の場合

```console
  npm i @hilosiva/vite-plugin-html-oreder -D
```

■ yarn の場合

```console
  yarn add @hilosiva/vite-plugin-html-oreder -D
```

■ pnpm の場合

```console
  pnpm i @hilosiva/vite-plugin-html-oreder -D
```

> **警告**
>
> vite-plugin-html-oreder は内部で「glob」を利用しています。自動でインストールはされませんので、予めご自身で開発依存関係として追加して下さい。
>
> ```console
> npm i glob -D
> ```

## 使用方法

「vite.config.js」でインポートし、プラグインに追加してください。

```javascript
import { defineConfig } from "vite";
import { viteHtmlOreder } from "@hilosiva/vite-plugin-html-oreder"; // 追加

export default defineConfig({
  plugins: [
    // 追加
    viteHtmlOreder(),
  ],
});
```
