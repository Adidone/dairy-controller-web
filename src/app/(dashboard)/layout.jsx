import Dashboard from "./dashboard/page";

const Layout = ({ children }) => {
    return <>
        <div className="w-full h-screen flex flex-row bg-(--mui-palette-background-paper)] gap-3">
            <div className="h-screen flex-[2] bg-white flex flex-col items-center gap-2 p-5">
                <img src="" alt="" />
                <button className="bg-var(--mui-palette-primary-main) w-full h-10 rounded-md">Dashboard</button>
                <button className="bg-var(--mui-palette-primary-main) w-full h-10 rounded-md">Sales</button>
                <button className="bg-var(--mui-palette-primary-main) w-full h-10 rounded-md">Feed</button>
                <button className="bg-var(--mui-palette-primary-main) w-full h-10 rounded-md">Feed</button>
                <button className="bg-var(--mui-palette-primary-main) w-full h-10 rounded-md">Feed</button>
            </div>

            <div className="h-screen flex-10 flex flex-col">
                <div className="h-14 bg-white m-3 rounded-xl">
                    horizontal
                </div>
                <div className="flex-1 bg-white m-3  rounded-xl">
                    content
                </div>
            </div>
        </div>
    </>
}

export default Layout;