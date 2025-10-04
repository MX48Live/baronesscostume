function WorkingHours() {
  return (
    <div className="bg-bglight py-12 pb-40">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-bold text-green text-[30px] mb-7">เวลาทำการ</h2>
        <div className="text-[20px] md:text-[24px] text-green">
          <div>วันจันทร์ - อาทิตย์ 11:00 น. — 18:00 น.</div>
          {/* <div className="text-[18px]">
            <br className="md:hidden" />
            (หยุดวันอาทิตย์)
          </div> */}
          <h2 className="font-bold text-green text-[22px] mt-5">
            นัดหมายผ่านไลน์
          </h2>
          <div>
            ติดต่อเรา Line@ :{" "}
            <a href="https://lin.ee/2Pc9pyC" target="_blank">
              @baroness101
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkingHours;
