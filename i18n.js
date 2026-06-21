/* SigNote 官網多語系（繁中為 HTML 預設，日文／英文存於字典）。
   切換不重載頁面；記憶於 localStorage；首訪依瀏覽器語言。 */
(function () {
  var DICT = {
    ja: {
      nav_how: "使い方", nav_features: "機能", nav_pricing: "価格", nav_support: "サポート",
      nav_download: "ダウンロード", nav_terms: "利用規約", nav_privacy: "プライバシー",
      foot_privacy: "プライバシーポリシー", foot_terms: "利用規約", foot_support: "サポート",
      foot_contact: "お問い合わせ", foot_home: "ホーム",
      hero_eyebrow: "切り抜き · 線画ぬりえ · 透明ステッカー",
      hero_h1: "写真を<br>あなたの<span class=\"hl\">ステッカー</span>に",
      hero_tag: "何気なく撮った落書きを自動で切り抜いてきれいな線画にし、自分で色を塗って透明なダイカットステッカーに。写真に貼ったり書き出して共有。",
      hero_cta1: "App Store でダウンロード", hero_cta2: "使い方を見る",
      hero_en: "落書き → 切り抜き → 色塗り → ダイカットステッカー。",
      hero_cap1: "① 落書きを撮る", hero_cap2: "② 切り抜き線画", hero_cap3: "③ 色を塗ってステッカー",
      how_h2: "3ステップで写真からステッカーへ", how_sub: "同じ小さな忍者で、SigNote の流れをひと通り。",
      step1_h: "切り抜き", step1_p: "写真や手描きを撮るだけで、SigNote が Apple ネイティブの画像処理できれいな線画を抽出し、背景を取り除きます。10年支持された中核機能。",
      step2_h: "色塗り", step2_p: "線画の下に色塗り：塗りつぶしツールに、色鉛筆／クレヨン／マーカー／木炭／エアブラシの質感ブラシで自分らしく。",
      step3_h: "ステッカーに", step3_p: "ワンタップで透明なダイカットステッカーに。写真の前景に貼る、写真に書き出す、どんなアプリにも共有。",
      feat_h2: "気に入る5つのこと", feat_sub: "一枚の写真から、自分で色を塗ったステッカーまで。",
      f1_h: "自動切り抜き", f1_p: "写真や手描きからきれいな線画を自動抽出。Apple ネイティブ処理に刷新し、より速く省電力に。",
      f2_h: "ぬりえステッカー", f2_p: "塗りつぶし＋5種類の質感ブラシ。透明なダイカットステッカーとして保存。",
      f3_h: "前景とフィルター", f3_p: "複数の前景を自由に拡大・回転・配置、フィルター適用。高解像度で合成し、写真やどんなアプリにも書き出し。",
      f4_h: "プライバシー重視", f4_p: "編集はすべて端末内で完結し、写真は外部に送信されません。アカウント不要・広告なし・トラッキングなし。",
      f5_h: "既存ユーザーは追加課金なし", f5_p: "以前の有料版をご購入の方は、アップデート後 Pro が自動で解除され、追加課金はありません。",
      show_h2: "あなたのステッカー、あなたのスタイル", show_sub: "同じ線画でも、色を変えれば新しいステッカー。",
      price_h2: "買い切り、サブスクなし", price_sub: "無料ダウンロード、必要な分だけ解除。月額なし・広告なし。",
      plan1_list: "<li>透かし除去</li><li>高解像度・一括書き出し</li><li>全フィルター</li><li>追加素材をすべて解除</li>",
      plan2_h: "ぬりえパック",
      plan2_list: "<li>線画ぬりえエディタ</li><li>色鉛筆＋4種の質感ブラシ</li><li>塗りつぶし・消しゴム・取り消し</li><li>ステッカー保存、写真に貼る</li>",
      plan_ribbon: "一番お得", plan3_h: "全部入りパック",
      plan3_list: "<li>Pro を一括解除</li><li>＋ ぬりえパック</li><li>別々に買うよりお得</li><li>永久解除</li>",
      price_note: "価格は地域の App Store に準じます。以前の有料版をご購入の方は、アップデート後 Pro が自動解除され追加課金はありません。",
      priv_h1: "プライバシーポリシー",
      priv_updated: "最終更新：2026-06-21 · 発行者 SigNote · お問い合わせ <a href=\"mailto:signote.app@gmail.com\">signote.app@gmail.com</a>",
      priv_s1_h: "1. すべて端末内で完結",
      priv_s1_p: "SigNote（以下「本アプリ」）のすべての機能——写真選択、カメラ撮影、切り抜き線画、色塗り、前景・フィルター、保存——は端末内で完結します。カメラ映像やアルバムの写真が当社サーバーに<strong>アップロードされることはありません</strong>。",
      priv_s2_h: "2. 個人情報を収集しません",
      priv_s2_p: "本アプリは<strong>登録・ログイン不要、アカウントも作成しません</strong>。氏名・メール・位置などの個人情報を収集せず、写真や作品を当社に送信することもありません。",
      priv_s3_h: "3. 共有と書き出し",
      priv_s3_p: "「共有」や「書き出し」をタップすると、画像は iOS の共有シート経由で選んだ宛先（写真、メッセージ、他のアプリ）に渡されます。その後の取り扱いは、選んだアプリ／サービスのポリシーに従い、本アプリとは無関係です。",
      priv_s4_h: "4. カメラ・写真の許可",
      priv_s4_p: "カメラと写真ライブラリの許可は、編集する写真を選択・撮影するためだけに使われます。結果は端末内に残り、保存・共有はあなたが決めます。",
      priv_s5_h: "5. 行わないこと",
      priv_s5_p: "本アプリは広告を含まず、アプリ／サイトをまたぐトラッキングや分析 SDK を使わず、広告目的でデータを販売・共有しません。",
      priv_s6_h: "6. 子どもについて", priv_s6_p: "本アプリは一般向けで、子ども向けに特化したものではありません。",
      priv_s7_h: "7. 変更", priv_s7_p: "本ポリシーを更新した場合は、このページで日付とともに告知します。",
      priv_s8_h: "8. お問い合わせ",
      priv_s8_p: "プライバシーに関するご質問は <a href=\"mailto:signote.app@gmail.com\">signote.app@gmail.com</a> までご連絡ください。",
      terms_h1: "利用規約", terms_updated: "最終更新：2026-06-21 · SigNote",
      terms_s1_h: "1. ライセンス",
      terms_s1_p: "本アプリは Apple App Store を通じて提供され、Apple の<a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">標準エンドユーザーライセンス契約（EULA）</a>に従います。個人的・非独占的・譲渡不可の使用権を付与します。",
      terms_s2_h: "2. 購入と解除",
      terms_s2_p: "本アプリは無料でダウンロードでき、一部の高度な機能（Pro、ぬりえパック等）はアプリ内課金の非消耗型アイテムです。購入後は永久に解除され、追加課金はありません。以前の有料版をご購入の方は、アップデート後 Pro が自動解除されます。返金は Apple のポリシーに従います。",
      terms_s3_h: "3. 免責",
      terms_s3_p: "本アプリは「現状有姿」で提供され、完全な無欠陥や無中断を保証しません。法律で認められる範囲で、本アプリの使用から生じる間接的損害について責任を負いません。",
      terms_s4_h: "4. 変更とお問い合わせ",
      terms_s4_p: "規約を更新した場合はこのページで告知します。ご質問は <a href=\"mailto:signote.app@gmail.com\">signote.app@gmail.com</a> まで。",
      sup_h1: "サポート",
      sup_updated: "お困りですか？ <a href=\"mailto:signote.app@gmail.com\">signote.app@gmail.com</a> までご連絡ください。できるだけ早く返信します。",
      sup_faq_h: "よくある質問",
      sup_q1: "以前、有料版を買いました。アップデート後に再課金されますか？",
      sup_a1: "いいえ。有料版を購入した Apple ID なら、アップデート後 Pro が自動で解除され、再課金はありません。自動解除されない場合は、アプリの課金画面で「購入を復元」をタップし、購入時の Apple ID でログインしているか確認してください。",
      sup_q2: "写真をステッカーにするには？",
      sup_a2: "背景写真を選ぶ →「前景」で自動的に線画へ切り抜き → キャンバスを長押しして色塗りエディタを開いて色を塗る →「完了」でステッカーとして保存。写真に貼る・アルバムに書き出す・他のアプリに共有ができます。",
      sup_q3: "「購入を復元」はどこにありますか？",
      sup_a3: "アプリの課金画面（Pro／ぬりえパックのアップグレード時に表示）の下部にあります。機種変更や再インストール後、同じ Apple ID でタップすれば購入済みの項目が戻ります。",
      sup_q4: "どの iOS バージョンが必要ですか？",
      sup_a4: "iOS 16 以上が必要です。古い端末では、以前に購入済みのバージョンを引き続きご利用いただけます。"
    },
    en: {
      nav_how: "How it works", nav_features: "Features", nav_pricing: "Pricing", nav_support: "Support",
      nav_download: "Download", nav_terms: "Terms", nav_privacy: "Privacy",
      foot_privacy: "Privacy Policy", foot_terms: "Terms of Use", foot_support: "Support",
      foot_contact: "Contact", foot_home: "Home",
      hero_eyebrow: "Cut out · Color · Die-cut sticker",
      hero_h1: "Turn photos into<br>your own <span class=\"hl\">stickers</span>",
      hero_tag: "Snap a doodle, auto-cut it into clean line art, color it by hand, and make a transparent die-cut sticker to place on a photo or export.",
      hero_cta1: "Download on the App Store", hero_cta2: "See how it works",
      hero_en: "Snap a doodle → cut out the line art → color it into a die-cut sticker.",
      hero_cap1: "① Snap a doodle", hero_cap2: "② Cut-out line art", hero_cap3: "③ Colored sticker",
      how_h2: "Three steps, photo to sticker", how_sub: "The same little ninja, through the whole SigNote flow.",
      step1_h: "Cut out", step1_p: "Snap any photo or sketch and SigNote extracts clean line art on Apple's native imaging pipeline, removing background clutter. The 10-year core feature.",
      step2_h: "Color", step2_p: "Color beneath the line art: paint-bucket fill plus colored-pencil / crayon / marker / charcoal / airbrush texture brushes.",
      step3_h: "Make a sticker", step3_p: "Save as a transparent die-cut sticker with one tap — place on a photo, export to your library, or share to any app.",
      feat_h2: "Five things you'll love", feat_sub: "From a photo to a sticker you colored yourself.",
      f1_h: "Auto cutout", f1_p: "Auto-extract clean line art from photos or sketches, rewritten on Apple's native pipeline — faster and more efficient.",
      f2_h: "Coloring stickers", f2_p: "Paint-bucket fill plus five texture brushes; save as a transparent die-cut sticker.",
      f3_h: "Foregrounds & filters", f3_p: "Scale, rotate, and arrange multiple foregrounds, apply filters, and export high-resolution composites to Photos or any app.",
      f4_h: "Privacy first", f4_p: "All editing happens on your device; your photos are never uploaded. No account, no ads, no tracking.",
      f5_h: "No second charge", f5_p: "If you bought the paid app, Pro unlocks automatically after updating — you're never charged again.",
      show_h2: "Your sticker, your style", show_sub: "Same line art, new color, new sticker.",
      price_h2: "Pay once, no subscription", price_sub: "Free to download, unlock what you need. No monthly fee, no ads.",
      plan1_list: "<li>Remove watermark</li><li>Hi-res &amp; batch export</li><li>All filters</li><li>Unlock all premium artwork</li>",
      plan2_h: "Coloring Pack",
      plan2_list: "<li>Line-art coloring editor</li><li>Colored pencil + 4 texture brushes</li><li>Paint bucket, eraser, undo</li><li>Save as sticker, place on photo</li>",
      plan_ribbon: "Best value", plan3_h: "All-in Bundle",
      plan3_list: "<li>Unlock Pro</li><li>+ Coloring Pack</li><li>Cheaper than separately</li><li>Permanent unlock</li>",
      price_note: "Actual prices follow your regional App Store. Previous paid users get Pro automatically after updating, at no charge.",
      priv_h1: "Privacy Policy",
      priv_updated: "Last updated: 2026-06-21 · Developer: SigNote · Contact <a href=\"mailto:signote.app@gmail.com\">signote.app@gmail.com</a>",
      priv_s1_h: "1. Everything happens on your device",
      priv_s1_p: "All of the App's features — choosing photos, camera capture, line-art cutout, coloring, foregrounds and filters, saving — run locally on your device. Your camera feed and library photos are <strong>not uploaded</strong> to our servers.",
      priv_s2_h: "2. We don't collect personal data",
      priv_s2_p: "The App requires <strong>no registration or sign-in and creates no account</strong>. We do not collect your name, email, or location, and we never send your photos or creations to us.",
      priv_s3_h: "3. Sharing &amp; exporting",
      priv_s3_p: "When you tap Share or Export, the image is handed to your chosen destination (Photos, Messages, another app) via the iOS share sheet. What happens next is governed by that app/service's own policy, not ours.",
      priv_s4_h: "4. Camera &amp; photo permissions",
      priv_s4_p: "Camera and photo-library access is used only so you can pick or capture a photo to edit; the result stays on your device, and you decide whether to save or share it.",
      priv_s5_h: "5. What we don't do",
      priv_s5_p: "The App contains no ads, no cross-app/website tracking, no analytics SDKs, and we do not sell or share your data for advertising.",
      priv_s6_h: "6. Children", priv_s6_p: "The App is general-audience and not specifically directed at children.",
      priv_s7_h: "7. Changes", priv_s7_p: "Updates will be posted here with a revised date.",
      priv_s8_h: "8. Contact",
      priv_s8_p: "For any privacy questions, email <a href=\"mailto:signote.app@gmail.com\">signote.app@gmail.com</a>.",
      terms_h1: "Terms of Use", terms_updated: "Last updated: 2026-06-21 · SigNote",
      terms_s1_h: "1. License",
      terms_s1_p: "The App is distributed via the Apple App Store and is governed by Apple's <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">Standard EULA</a>. We grant you a personal, non-exclusive, non-transferable right to use it.",
      terms_s2_h: "2. Purchases &amp; unlocks",
      terms_s2_p: "The App is free to download; some advanced features (Pro, Coloring Pack, etc.) are non-consumable in-app purchases that unlock permanently with no second charge. Previous paid-app users get Pro automatically after updating. Refunds follow Apple's policy.",
      terms_s3_h: "3. Disclaimer",
      terms_s3_p: "The App is provided \"as is,\" without warranty of being error-free or uninterrupted. To the extent permitted by law, we are not liable for indirect damages arising from its use.",
      terms_s4_h: "4. Changes &amp; contact",
      terms_s4_p: "Any updates will be posted on this page. Questions? Email <a href=\"mailto:signote.app@gmail.com\">signote.app@gmail.com</a>.",
      sup_h1: "Support",
      sup_updated: "Need help? Email <a href=\"mailto:signote.app@gmail.com\">signote.app@gmail.com</a> and we'll reply as soon as we can.",
      sup_faq_h: "FAQ",
      sup_q1: "I bought the paid app before — will I be charged again after updating?",
      sup_a1: "No. With the Apple ID that bought the paid app, Pro unlocks automatically after updating, with no second charge. If it doesn't, tap \"Restore Purchases\" on the upgrade screen and make sure you're signed in with the original Apple ID.",
      sup_q2: "How do I turn a photo into a sticker?",
      sup_a2: "Pick a background photo → \"Foreground\" cuts it into line art → long-press the canvas to open the coloring editor → \"Done\" saves it as a sticker you can place on the photo, export to Photos, or share to other apps.",
      sup_q3: "Where is \"Restore Purchases\"?",
      sup_a3: "It's at the bottom of the upgrade screen (shown when upgrading to Pro / the Coloring Pack). After a new device or reinstall, tap it with the same Apple ID to restore your purchases.",
      sup_q4: "Which iOS version do I need?",
      sup_a4: "iOS 16 or later. Older devices can keep using the version they already purchased."
    }
  };
  var LANGS = { zh: "zh-Hant", ja: "ja", en: "en" };
  var els = [].slice.call(document.querySelectorAll("[data-i18n]"));
  var zhCache = {};
  els.forEach(function (el) { zhCache[el.getAttribute("data-i18n")] = el.innerHTML; });

  function apply(lang) {
    if (!LANGS[lang]) lang = "zh";
    var table = DICT[lang];
    els.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      var v = (lang === "zh") ? zhCache[k] : (table && table[k] != null ? table[k] : zhCache[k]);
      if (v != null) el.innerHTML = v;
    });
    document.documentElement.setAttribute("lang", LANGS[lang]);
    var btns = document.querySelectorAll(".lang-switch button");
    [].forEach.call(btns, function (b) {
      b.setAttribute("aria-current", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem("signote.lang", lang); } catch (e) {}
  }

  function initialLang() {
    var saved = null;
    try { saved = localStorage.getItem("signote.lang"); } catch (e) {}
    if (saved && LANGS[saved]) return saved;
    var n = (navigator.language || "").toLowerCase();
    if (n.indexOf("ja") === 0) return "ja";
    if (n.indexOf("zh") === 0) return "zh";
    return "en";
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest(".lang-switch button") : null;
    if (b) apply(b.getAttribute("data-lang"));
  });

  apply(initialLang());
})();
