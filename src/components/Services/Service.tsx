function Service({ title, description, icon }) {
    return (
        <div className="shadow-[#1212120e] shadow-[0_0_13px] border-[#ddd] w-[260px] min-h-[320px] h-[fit-content] border-[2px] rounded-[3px] flex flex-col justify-center items-center">
            <div className="text-[100px] text-[#bbb] py-3">
                {icon}
            </div>
            <div className="p-4 text-[#bbb] gap-3 flex-col flex">
                <h1 className="font-bold text-[24px] text-center">{title}</h1>
                <p className="text-[14px] text-justify">{description}</p>
            </div>
        </div>
    )
}

export default Service