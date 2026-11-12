// cloudinary-config.js - Belmont Concordia Royal Academy
const CLOUDINARY_CLOUD_NAME = "dp6k1rwj";
const CLOUDINARY_UPLOAD_PRESET = "Belmont";

/**
 * ฟังก์ชันสำหรับอัปโหลดรูปภาพไปยัง Cloudinary
 * @param {File} file - ไฟล์รูปภาพที่ผู้เล่นเลือกจากเครื่อง
 * @returns {Promise<string|null>} - คืนค่า URL ของรูปภาพที่อัปโหลดสำเร็จ หรือ null ถ้าหากล้มเหลว
 */
async function uploadImageToCloudinary(file) {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();
        
        if (data.secure_url) {
            return data.secure_url; // ได้ลิงก์รูปภาพสำหรับนำไปใช้งานต่อ
        } else {
            console.error("Cloudinary Error:", data);
            return null;
        }
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        return null;
    }
}
