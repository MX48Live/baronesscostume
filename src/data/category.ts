export type CategoryItemType = {
  id: string;
  name: string;
  sub?: { id: string; name: string }[];
};

export const category = [
  {
    id: "C01",
    name: "ชุดไทย",
    sub: [
      { id: "S01", name: "ชุดจิตรลดา-ชุดไทยแขนกระบอก-ชุดเสื้อลูกไม้ผ้าไทย" },
      { id: "S02", name: "ชุดไทยจักรี-ชุดนางนพมาศ" },
      { id: "S03", name: "ชุดไทยชาย-ชุดราชประแตนชาย" },
      { id: "S04", name: "ชุดไทยรัชกาลที่4-ชุดพี่หมื่น-ชุดการะเกด" },
      { id: "S05", name: "ชุดไทยรัชกาลที่5" },
      { id: "S06", name: "ชุดไทยรัชกาลที่6" },
      { id: "S07", name: "ชุดไทยรัชกาลที่6-7" },
      { id: "S08", name: "ชุดไทยนักรบชาย-หญิง" },
      { id: "S09", name: "ชุดไทยรัตนโกสินทร์" },
      { id: "S10", name: "ชุดนาคี-ชุดพญานาค-ชุดเขมร" },
      { id: "S11", name: "ชุดไทยภาคเหนือ-ชุดแม้ว" },
      { id: "S12", name: "ชุดไทยภาคอีสาน" },
      { id: "S13", name: "ชุดกินรี" },
      { id: "S14", name: "ชุดกุมาร-ชุดเงาะป่า" },
      { id: "S15", name: "ชุดราตรีผ้าไทย-ประดับเพชร" },
      { id: "S16", name: "ชุดไทยเด็ก" },
      { id: "S17", name: "ชุดไทยประยุกต์" },
      { id: "S18", name: "ชุดไทยศิวาลัย" },
      { id: "S19", name: "ชุดทุเรียน" },
    ],
  },
  {
    id: "C02",
    name: "ชุดนานาชาติ",
    sub: [
      { id: "S01", name: "ชุดอินเดีย-ชุดอาหรับ" },
      { id: "S02", name: "ชุดจีนโบราณ-ชุดกี่เพ้า" },
      { id: "S03", name: "ชุดกรีกโรมัน" },
      { id: "S04", name: "ชุดเกาหลี-ฮันบก" },
      { id: "S05", name: "ชุดญี่ปุ่น-กิโมโน" },
      { id: "S06", name: "ชุดพม่า-เพลิงพระนาง" },
      { id: "S07", name: "ชุดอินโดนีเซีย" },
      { id: "S08", name: "ชุดมาเลเซีย" },
      { id: "S09", name: "ชุดเวียดนาม" },
      { id: "S10", name: "ชุดฟิลิปปินส์" },
      { id: "S11", name: "ชุดบรูไน" },
      { id: "S12", name: "ชุดสิงคโปร์-กี่เพ้า" },
      { id: "S13", name: "ชุดสเปน-บาวาเลี่ยน" },
      { id: "S14", name: "ชุดอินเดียแดง-คนป่า" },
      { id: "S15", name: "ชุดคลีโอพัตรา-อียิปต์" },
    ],
  },
  {
    id: "C03",
    name: "ชุดย้อนยุค-ชุดลายดอก-ชุดทองกวาว หญิงชาย",
    sub: [
      { id: "S01", name: "ชุดย้อนยุคหญิง" },
      { id: "S02", name: "ชุดย้อนยุคชาย" },
      { id: "S03", name: "ชุดเอลวิส" },
      { id: "S04", name: "ชุดพุ่มพวง" },
      { id: "S05", name: "ชุดมาลิรีนมอนโล" },
    ],
  },
  {
    id: "C04",
    name: "ชุดแดนเซอร์-ชุดนักร้องหญิง-ชาย",
    sub: [
      { id: "S01", name: "ชุดแดนซ์เซอร์หญิง-ชุดนักร้องหญิง" },
      { id: "S02", name: "ชุดแดนซ์เซอร์ชาย-ชุดนักร้องชาย" },
      { id: "S03", name: "ชุดคัลเลอร์ฟูล-ชาย-หญิง" },
    ],
  },
  { id: "C05", name: "ชุดอาชีพ-หญิง-ชาย" },
  { id: "C06", name: "ชุดขนนก-ชุดนางฟ้า-ปีกนางฟ้า" },
  { id: "C07", name: "ชุดแก๊สบี้" },
  { id: "C08", name: "ชุดแฟนซีดอกไม้-ชุดแฟนซีหญิงรวม" },
  { id: "C09", name: "ชุดฮาวาย-ชุดทะเล" },
  { id: "C10", name: "ชุดอวกาศ-ชุดหนังดำ-ชุดหนังเงิน" },
  { id: "C11", name: "ชุดฮาโลวีน-ชุดผี-ชุดแฟนซีแม่มด" },
  { id: "C12", name: "ชุดซุปเปอร์ฮีโร่" },
  { id: "C13", name: "ชุดแฟนซีสัตว์" },
  { id: "C14", name: "ชุดซานต้า-ชุดแซนตี้" },
  { id: "C15", name: "ชุดแฟนซีเด็ก" },
  { id: "C16", name: "ชุดหนัง" },
  {
    id: "C17",
    name: "ชุดราตรี",
    sub: [
      { id: "S01", name: "ชุดราตรียาว" },
      { id: "S02", name: "ชุดราตรีสั้น" },
    ],
  },
  {
    id: "C18",
    name: "ชุดขอเข้าเฝ้าชาย-ชุดสูทดำชาย-ชุดจิตรลดาสีดำ-ชุดพระราชทานเพลิง",
  },
  {
    id: "C19",
    name: "ชุดเจ้าหญิงหลุยส์รวม-ชุดดิสนีย์",
    sub: [
      { id: "S01", name: "ชุดเจ้าหญิงหลุยส์" },
      { id: "S02", name: "ชุดดิสนีย์" },
      { id: "S03", name: "ชุดจัสมิน" },
      { id: "S04", name: "ชุดนางเงือก" },
      { id: "S05", name: "ชุดเจ้าหญิงเบล" },
      { id: "S06", name: "ชุดเซเลอร์มูน" },
      { id: "S07", name: "ชุดสโนว์ไวท์" },
      { id: "S08", name: "ชุดทิงเกอร์เบลล์" },
      { id: "S09", name: "ชุดเอลซ่า" },
      { id: "S10", name: "ชุดคาวเกิร์ล" },
      { id: "S11", name: "ชุดซินเดอเรลล่า" },
    ],
  },
  {
    id: "C20",
    name: "ชุดสูท-ชุดเจ้าชายหลุยส์-ชุดคอสเพลย์",
    sub: [
      { id: "S01", name: "ชุดสูท-ชุดเจ้าชายหลุยส์" },
      { id: "S02", name: "ชุดปีเตอร์แพน-ชุดเจ้าชายหลุยส์" },
      { id: "S03", name: "ชุดคาวบอย-ชุดโจรสลัด" },
      { id: "S04", name: "ชุดคอสเพลย์ชาย-ชุดแฟนซีชาย" },
    ],
  },
  { id: "C21", name: "มงกุฎต่างๆ-หมวก-หน้ากาก-พ็อบอื่นๆ" },
  { id: "C22", name: "รองเท้า" },
];

export type CategoryType = typeof category;
