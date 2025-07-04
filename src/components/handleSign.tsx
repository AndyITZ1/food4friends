
import { signIn, signOut, auth } from "@/auth";
import { Button } from "./ui/button";

export default async function HandleSign() {
    const session = await auth();
    const user = session?.user;

    const handleSignIn = async () => {
        "use server";
        await signIn("google");
    }

    const handleSignOut = async () => {
        "use server";
        await signOut();
    }

    return user ?     
        <Button onClick={handleSignOut} className="bg-red-500 text-white p-2 rounded shadow-md hover:bg-red-700" type="submit">Sign Out</Button>
        :
        <Button onClick={handleSignIn} className="bg-blue-500 text-white p-2 rounded shadow-md hover:bg-blue-700" type="submit">Sign In</Button>

} 