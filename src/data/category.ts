export type CategoryItemType = {
  id: string;
  name: string;
  sub?: {
    id: string;
    name: string;
    sub?: { id: string; name: string }[];
  }[];
};

export const category = [
  {
    id: "C01",
    name: "1. ชุดไทย",
    sub: [
      { id: "S01", name: "1.1 ชุดไทยจิตรลดา-ชุดไทยแขนกระบอก" },
      { id: "S23", name: "1.2 ชุดไทยบรมพิมาน-ชุดเสื้อลูกไม้ผ้าไทย" },
      { id: "S02", name: "1.3 ชุดไทยจักรี-ชุดนางนพมาศ" },
      { id: "S03", name: "1.4 ชุดไทยชาย-ชุดราชปะแตนชาย" },
      { id: "S09", name: "1.5 ชุดไทยรัชกาลที่ 1-2-3" },
      { id: "S04", name: "1.6 ชุดไทยรัชกาลที่ 4-ชุดพี่หมื่น-ชุดการะเกด" },
      { id: "S05", name: "1.7 ชุดไทยรัชกาลที่ 5" },
      { id: "S07", name: "1.8 ชุดไทยรัชกาลที่ 6-7" },
      { id: "S08", name: "1.9 ชุดไทยนักรบชาย-หญิง" },
      { id: "S10", name: "1.10 ชุดนาคี-ชุดพญานาค-ชุดเขมร" },
      { id: "S11", name: "1.11 ชุดไทยภาคเหนือ-ชุดแม้ว" },
      { id: "S12", name: "1.12 ชุดไทยภาคอีสาน" },
      { id: "S13", name: "1.13 ชุดกินรี" },
      { id: "S14", name: "1.14 ชุดกุมาร-ชุดเงาะป่า-ชุดฤาษี" },
      { id: "S15", name: "1.15 ชุดราตรีผ้าไทย-ประดับเพชร" },
      { id: "S16", name: "1.16 ชุดไทยเด็ก" },
      { id: "S17", name: "1.17 ชุดไทยประยุกต์ชาย-หญิง" },
      { id: "S18", name: "1.18 ชุดไทยศิวาลัย" },
      { id: "S19", name: "1.19 ชุดทุเรียนประยุกต์" },
      { id: "S20", name: "1.20 ชุดบวชนาค" },
    ],
  },
  {
    id: "C02",
    name: "2. ชุดนานาชาติ",
    sub: [
      { id: "S01", name: "2.1 ชุดอินเดีย-ชุดอาหรับ" },
      { id: "S02", name: "2.2 ชุดจีนโบราณ-ชุดกี่เพ้า" },
      { id: "S03", name: "2.3 ชุดกรีกโรมัน" },
      { id: "S04", name: "2.4 ชุดเกาหลี-ชุดฮันบก" },
      { id: "S05", name: "2.5 ชุดญี่ปุ่น-ชุดกิโมโน" },
      { id: "S06", name: "2.6 ชุดพม่า-ชุดเพลิงพระนาง" },
      { id: "S07", name: "2.7 ชุดอินโดนีเซีย" },
      { id: "S08", name: "2.8 ชุดมาเลเซีย" },
      { id: "S09", name: "2.9 ชุดเวียดนาม-ชุดอ๊าวหญ่าย" },
      { id: "S10", name: "2.10 ชุดฟิลิปปินส์" },
      { id: "S11", name: "2.11 ชุดบรูไน" },
      { id: "S12", name: "2.12 ชุดสิงคโปร์-ชุดกี่เพ้า" },
      { id: "S13", name: "2.13 ชุดสเปน-ชุดบาวาเลี่ยน" },
      { id: "S14", name: "2.14 ชุดอินเดียแดง-ชุดคนป่า" },
      { id: "S15", name: "2.15 ชุดคลีโอพัตรา-ชุดอียิปต์" },
    ],
  },
  {
    id: "C03",
    name: "3. ชุดย้อนยุค-ชุดลายดอก-ชุดทองกวาว หญิงชาย",
    sub: [
      { id: "S01", name: "3.1 ชุดย้อนยุคหญิง" },
      { id: "S02", name: "3.2 ชุดย้อนยุคชาย" },
      { id: "S03", name: "3.3 ชุดเอลวิส" },
      { id: "S04", name: "3.4 ชุดพุ่มพวง" },
      { id: "S05", name: "3.5 ชุดมาลิรีนมอนโล" },
    ],
  },
  {
    id: "C04",
    name: "4. ชุดแดนเซอร์-ชุดนักร้องหญิง-ชาย",
    sub: [
      {
        id: "S01",
        name: "4.1 รวมสี-ชุดแดนซ์เซอร์หญิง-ชุดนักร้องหญิง",
        sub: [
          { id: "E02", name: "4.2 ชุดสีส้ม" },
          { id: "E03", name: "4.3 ชุดสีทอง" },
          { id: "E04", name: "4.4 ชุดสีฟ้า" },
          { id: "E05", name: "4.5 ชุดสีเขียว" },
          { id: "E06", name: "4.6 ชุดสีแดง" },
          { id: "E07", name: "4.7 ชุดสีรุ้งคัลเลอร์ฟูล" },
          { id: "E08", name: "4.8 ชุดสีน้ำเงิน" },
          { id: "E09", name: "4.9 ชุดสีดำ/สีดำทอง" },
          { id: "E10", name: "4.10 ชุดสีเงินกลิตเตอร์/สีขาวเพชร" },
          { id: "E11", name: "4.11 ชุดสีม่วง/สีม่วงเพชร" },
          { id: "E12", name: "4.12 ชุดสีชมพู/สีชมพูเพชร" },
          { id: "E13", name: "4.13 ชุดกระโปรงขนนกรวมสี" },
          { id: "E14", name: "4.14 ชุดกระโปรงรุ้งอิตาลีรวมสี" },
          {
            id: "E15",
            name: "4.15 ชุดเกาะอกประดับเพชรรวมสี/สูทกลิตเตอร์หญิง",
          },
          {
            id: "E16",
            name: "4.16 พ็อบ บอดี้สูท กระโปรง กั๊ก เฟอร์ แยกชิ้น ฯลฯ",
          },
        ],
      },
      { id: "S02", name: "4.17 ชุดนักร้องชาย-ชุดแดนซ์เซอร์ชาย" },
      { id: "S03", name: "4.18 ชุดคัลเลอร์ฟูล-ชาย-หญิง" },
    ],
  },
  { id: "C05", name: "5. ชุดอาชีพ-หญิง-ชาย" },
  { id: "C06", name: "6. ชุดขนนก-ชุดนางฟ้า-ปีกนางฟ้า" },
  { id: "C07", name: "7. ชุดแก๊สบี้" },
  { id: "C08", name: "8. ชุดแฟนซีดอกไม้-ชุดแฟนซีหญิงรวม" },
  { id: "C09", name: "9. ชุดฮาวาย-ชุดทะเล" },
  { id: "C10", name: "10. ชุดอวกาศ-ชุดหนังดำ-ชุดหนังเงิน" },
  { id: "C11", name: "11. ชุดฮาโลวีน-ชุดผี-ชุดแฟนซีแม่มด" },
  { id: "C12", name: "12. ชุดซุปเปอร์ฮีโร่ชาย-หญิง" },
  { id: "C13", name: "13. ชุดแฟนซีสัตว์" },
  { id: "C14", name: "14. ชุดซานต้า-ชุดแซนตี้" },
  { id: "C15", name: "15. ชุดแฟนซีเด็ก" },
  { id: "C16", name: "(หมวดว่าง)" },
  {
    id: "C17",
    name: "16. ชุดราตรี",
    sub: [
      { id: "S01", name: "16.1 ชุดราตรียาว" },
      { id: "S02", name: "16.2 ชุดราตรีสั้น-ชุดนักร้องหญิง" },
    ],
  },
  {
    id: "C18",
    name: "17. ชุดขอเข้าเฝ้าชาย-ชุดสูทดำชาย-ชุดจิตรลดาสีดำ-ชุดพระราชทานเพลิง",
  },
  {
    id: "C19",
    name: "18. ชุดเจ้าหญิงหลุยส์รวม-ชุดดิสนีย์",
    sub: [
      { id: "S01", name: "18.1 ชุดเจ้าหญิงหลุยส์" },
      { id: "S02", name: "18.2 ชุดดิสนีย์รวม" },
      { id: "S03", name: "18.3 ชุดจัสมิน" },
      { id: "S04", name: "18.4 ชุดนางเงือก" },
      { id: "S05", name: "18.5 ชุดเจ้าหญิงเบล" },
      { id: "S06", name: "18.6 ชุดเซเลอร์มูน" },
      { id: "S07", name: "18.7 ชุดสโนว์ไวท์" },
      { id: "S08", name: "18.8 ชุดทิงเกอร์เบลล์-ชุดปีเตอร์แพน" },
      { id: "S09", name: "18.9 ชุดเอลซ่า" },
      { id: "S10", name: "18.10 ชุดคาวบอย-ชุดคาวเกิร์ล-ชุดโจรสลัด" },
      { id: "S11", name: "18.11 ชุดซินเดอเรลล่า" },
    ],
  },
  {
    id: "C20",
    name: "19. ชุดสูท-ชุดเจ้าชายหลุยส์-ชุดคอสเพลย์",
    sub: [
      { id: "S01", name: "19.1 ชุดสูทชาย-ชุดเจ้าชายหลุยส์" },
      { id: "S04", name: "19.2 ชุดคอสเพลย์ชาย-ชุดแฟนซีชาย" },
      { id: "S02", name: "(หมวดว่าง)" },
      { id: "S03", name: "(หมวดว่าง)" },
    ],
  },
  { id: "C21", name: "20. มงกุฎต่างๆ-หมวก-หน้ากาก-พ็อบอื่นๆ" },
  { id: "C22", name: "21. รองเท้า ชาย-หญิง รวมทุกรุ่น" },
];

export type CategoryType = typeof category;
