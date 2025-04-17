import HandleSign from "./handleSign";
export default function NavBar() {
    return (
        <>
            <div className="h-[50px] p-2 rounded bg-slate-400 flex justify-between items-center">
                <p>Food4Friends</p>
                <HandleSign />
            </div>
        </>
    )
}