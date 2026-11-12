// supabase-config.js - Belmont Concordia Royal Academy
// นำเข้าหรือกำหนดค่า Supabase Client สำหรับเชื่อมต่อฐานข้อมูล

const SUPABASE_URL = "https://efzmhzhirzxiysnjkbty.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_z4_JEmggyRABRF86Ao6_8A_3BwwnXA7";

// สร้าง Supabase Client สำหรับใช้งานทั่วทั้งเว็บแอป
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("Supabase connected successfully to Belmont Concordia Royal Academy!");
