const liffId = '2005677310-7VNqpWnW'; // 你的 LIFF ID

async function main() {
  await liff.init({ liffId });

  if (!liff.isLoggedIn()) {
    liff.login();  // 還沒登入就叫他登入
  } else {
    const profile = await liff.getProfile();
    const userId = profile.userId;

    // 登入後導回你的官網 + 帶入 line_id 參數
   window.location.href = `https://www.tevc.com.tw/item/register?line_id=${userId}`;
  }
}

main();
