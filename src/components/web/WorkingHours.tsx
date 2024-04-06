function WorkingHours() {
  return (
    <div className="bg-bglight py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-bold text-green text-[30px] mb-7">เวลาทำการ</h2>
        <div className="text-[20px] md:text-[24px] text-green">
          <div>วันจันทร์ - วันอาทิตย์ 11:00 น. — 18:00 น.</div>
          {/* <div>
            วันเสาร์ 11:00 น. — 17:00 น. <br className="md:hidden" />
            (หยุดวันอาทิตย์)
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default WorkingHours;
