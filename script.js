const liffId = '2005677310-7VNqpWnW'; // 你的 LIFF ID

async function main() {
  await liff.init({ liffId });

  // 不判斷登入狀態，直接呼叫 login()
  if (!liff.isLoggedIn()) {
    liff.login();
    return;
  }

  try {
    const profile = await liff.getProfile();
    const userId = profile.userId;

    // 跳轉到 redirect.html，夾帶 line_id
    window.location.href = `https://tevctools.github.io/liff-login/redirect.html?line_id=${userId}`;
  } catch (err) {
    console.error("取得 profile 失敗，可能沒有授權：", err);
    liff.logout();
    liff.login(); // 強制重新登入
  }
}

main();
