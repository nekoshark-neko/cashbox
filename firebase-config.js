// Firebase 控制台「项目设置 → 你的应用 → SDK 设置和配置」里的内容。
// 这些值本身不是密码，可以公开；数据安全由 firestore.rules 保证。
export const firebaseConfig = {
  apiKey: "AIzaSyAoWSqsdYgtRujDn-YDt4omzJmMGoRA8NA",
  authDomain: "takeone-cashbox.firebaseapp.com",
  projectId: "takeone-cashbox",
  storageBucket: "takeone-cashbox.firebasestorage.app",
  messagingSenderId: "391240636792",
  appId: "1:391240636792:web:e7a6d688f280cb8020108d"
};

// 只有这个域名的 Google 账号可以登录记账（还需在 firestore.rules 里保持一致）
export const ALLOWED_DOMAIN = "takeone51.com";
