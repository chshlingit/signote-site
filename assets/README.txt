示範圖（手繪「轉印到照片」定位的前景示意）：
- demo-source.jpg     手繪塗鴉原稿（去背前；拍下的紙上塗鴉）
- demo-fg.png         自動去背後的乾淨前景（墨色、透明）
- demo-fg-coral.png   上色後的珊瑚色前景（透明）
- demo-fg-teal.png    上色後的湖綠色前景（透明）

實機成品圖（已合成的「轉印到照片」結果，用於 App Store 截圖設計 docs/appstore/screens.html 第 4 張）：
- usage-landscape.jpg 橫式成品：稻田＋手繪貓前景（4:3，由 screenshots/demo-screenshot/IMG_4916.JPG -Z 1600 縮圖）
- usage-portrait.jpg  直式成品：公園草地＋忍者前景（3:4，由 screenshots/demo-screenshot/screenshot_1.JPG -Z 1600 縮圖）

demo-fg*.png 由 ../../scripts（Pillow）從 demo-source.jpg 重新萃取：
門檻去背 + 清除原稿標註，眼睛沿用原稿（兩顆墨點，位置正確）。換素材時可重跑生成腳本。
（選配）放真機 App 截圖後，可在 index.html 流程／展示區補上實際 UI。
