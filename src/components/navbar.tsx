import HandleSign from "./handleSign";
import { Input } from "./ui/input";
export default function NavBar() {
    return (
        <>
            <div className="h-[50px] p-2 rounded bg-slate-400 flex justify-between items-center">
                <p>Food4Friends</p>
                <Input className="w-96" placeholder="Search.."></Input>
                <HandleSign />
            </div>
        </>
    )
}