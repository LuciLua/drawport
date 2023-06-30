function Service({ title, routeTo, description, icon }) {
  return (

    <a className="flex h-[fit-content] min-h-[320px] w-[260px] flex-col items-center justify-center rounded-[3px] border-[2px] border-[#ddd] shadow-[0_0_13px] shadow-[#1212120e]" href={routeTo}>
      <div className="py-3 text-[100px] text-[#bbb]">{icon}</div>
      <div className="flex flex-col gap-3 p-4 text-[#bbb]">
        <h1 className="text-center text-[24px] font-bold">{title}</h1>
        <p className="text-justify text-[14px]">{description}</p>
      </div>
    </a>

  );
}

export default Service;
