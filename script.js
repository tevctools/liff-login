const liffId = '2005677310-ldwxZ767';

async function main() {
  document.body.innerHTML += `<p>🚀 啟動 LIFF 初始化中...</p>`;
  console.log("初始化 LIFF with ID:", liffId);

  try {
    await liff.init({ liffId });
    document.body.innerHTML += `<p>✅ LIFF 初始化成功</p>`;

    if (!liff.isLoggedIn()) {
      document.body.innerHTML += `<p>🔑 尚未登入，執行 login()</p>`;
      console.log("尚未登入，開始 login");
      liff.login();
      return;
    }

    document.body.innerHTML += `<p>🟢 已登入，取得使用者資料中...</p>`;
    const profile = await liff.getProfile();
    document.body.innerHTML += `<p>👤 使用者 ID：${profile.userId}</p>`;

    const redirectUrl = `https://tevctools.github.io/liff-login/redirect.html?line_id=${profile.userId}`;
    document.body.innerHTML += `<p>➡️ 導向：<a href="${redirectUrl}">${redirectUrl}</a></p>`;
    window.location.href = redirectUrl;

  } catch (err) {
    document.body.innerHTML += `<p>❌ 發生錯誤：${err.message}</p>`;
    console.error("LIFF 初始化錯誤：", err);
  }
}

main();
