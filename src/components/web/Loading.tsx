function Loading() {
  return (
    <div className="flex min-h-[400px] justify-center items-center">
      <div className="pb-40 text-[20px] text-center">
        <div>
          <img
            src="/loading.gif"
            alt=""
            className="w-[30px] inline-block mb-4"
          />
        </div>
        <div className="opacity-60">กำลังโหลด...</div>
      </div>
    </div>
  );
}

export default Loading;
