const liffId = '2005677310-7VNqpWnW';

async function main() {
  console.log("初始化 LIFF...");
  await liff.init({ liffId });
  console.log("LIFF 初始化完成");

  if (!liff.isLoggedIn()) {
    console.log("尚未登入，開始 login");
    liff.login();
    return;
  }

  console.log("已登入，開始取得 profile");

  try {
    const profile = await liff.getProfile();
    console.log("取得 profile 成功", profile);

    const userId = profile.userId;
    const redirectUrl = `https://tevctools.github.io/liff-login/redirect.html?line_id=${userId}`;
    console.log("導向網址：", redirectUrl);
    window.location.href = redirectUrl;

  } catch (err) {
    console.error("取得 profile 失敗：", err);
    console.log("強制登出，重新登入");
    liff.logout();
    liff.login();
  }
}

main();
