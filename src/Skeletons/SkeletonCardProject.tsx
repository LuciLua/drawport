import './animation.css'

function SkeletonCardProject() {
    return (
        <div className='animate m-2'>
            <div className="
            animate-[loading_1s_linear_infinite]
            h-[350px] overflow-hidden flex w-[300px] min-w-[250px] flex-col rounded-[8px] border-[1px] border-[#e6e6ea] bg-[#fff] p-5 text-black dark:border-[#403f3f] dark:bg-[#1f2026]"
            >
                <h1 className="mb-2 rounded-[30px] w-[85%] h-[35px] bg-[#e6e6e6] dark:bg-[#383a44]" />
                <div className="gap-[5px] flex flex-col relative w-full mt-[20px]">
                    <p className="w-[100%] bg-[#e6e6e6] dark:bg-[#383a44] h-[10px] rounded-[4px]" />
                    <p className="w-[95%] bg-[#e6e6e6] dark:bg-[#383a44] h-[10px] rounded-[4px]" />
                    <p className="w-[98%] bg-[#e6e6e6] dark:bg-[#383a44] h-[10px] rounded-[4px]" />
                    <p className="w-[100%] bg-[#e6e6e6] dark:bg-[#383a44] h-[10px] rounded-[4px]" />
                </div>
                <ul className="mb-5 mt-2 flex flex-row flex-wrap gap-[5px]">
                    <li className="mb-2 dark:bg-[#383a44] rounded-[3px] w-[20%] h-[25px] my-[5px] 
                bg-[#e6e6e6]"/>
                    <li className="mb-2 dark:bg-[#383a44] rounded-[3px] w-[20%] h-[25px] my-[5px] 
                bg-[#e6e6e6]"/>
                    <li className="mb-2 dark:bg-[#383a44] rounded-[3px] w-[20%] h-[25px] my-[5px] 
                bg-[#e6e6e6]"/>
                </ul>
                <div className="bg-[#e6e6e6] dark:bg-[#383a44] w-full h-[200px] rounded-[4px]" />
            </div>
        </div>

    )
}
export default SkeletonCardProject