liff.init({ liffId: "2005677310-ldwxZ767" }).then(() => {
  if (!liff.isLoggedIn()) {
    liff.login();
  } else {
    liff.getProfile().then(profile => {
      const userId = profile.userId;

      // ✅ 傳訊息提醒保固登錄
      liff.sendMessages([{
        type: "text",
        text: "✅ 登入完成！請點我登錄產品保固：\n👉 https://www.tevc.com.tw/item/register"
      }])
      .then(() => {
        console.log("訊息已發送 ✅");

        // ✅ 傳完訊息後再跳轉官網綁定
        const bindUrl = `https://www.tevc.com.tw/user/line/bind?line_id=${userId}`;
        window.location.href = bindUrl;
      })
      .catch(err => {
        console.error("❌ 發送訊息失敗", err);
      });

    }).catch(err => {
      console.error("❌ 取得使用者資料失敗", err);
    });
  }
}).catch(err => {
  console.error("❌ LIFF 初始化失敗", err);
});

