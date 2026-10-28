# 待辦清單 (Todo List)

A reusable todo list for anyone who need to list his own todo items

## 功能

- 新增待辦事項（按鈕或 Enter 鍵）
- 刪除待辦事項
- 點擊文字切換完成狀態（已完成顯示灰字與刪除線）
- 使用 localStorage 保存資料，重新整理後仍然存在
- 重複輸入防呆（不分大小寫）、空白輸入防呆
- 相容注音等輸入法組字（選字時按 Enter 不會誤新增）

## 使用技術

- HTML
- CSS
- JavaScript（原生，無框架）
- localStorage

## 如何在本機執行

1. 下載或 clone 此專案
2. 用瀏覽器開啟 `rebuild_todo.html`

## 設計說明

資料只有一份（`todos` 陣列），畫面由資料重新繪製（render），
每次修改後依序「改資料 → 存檔 → 重畫」。

## 之後想改進

- 篩選功能（全部／未完成／已完成）
- 重複輸入時的畫面提示
- 處理 localStorage 內容損壞時的錯誤（try...catch）
