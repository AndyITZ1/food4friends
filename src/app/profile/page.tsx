
import { signIn, signOut, auth } from "@/auth"
import { constants } from "node:fs/promises"

export default async function SignIn() {
    const session = await auth();
    console.log(session);
    const user = session?.user;

    return user ? (
        <>
            <h1 className="text-2xl font-bold">Welcome {user.name}</h1>
            <form
                action={async () => {
                    "use server"
                    await signOut()
                }}>
                <button className="bg-red-500 text-white p-2 rounded" type="submit">Sign Out</button>
            </form>
        </>
    ) :
        (
            <>
                <h1 className="text-2xl font-bold">Please sign in to access your profile</h1>
                <form
                    action={async () => {
                        "use server"
                        await signIn("google");
                    }}>
                    <button className="bg-blue-500 text-white p-2 rounded" type="submit">Sign In</button>
                </form>
            </>
        )



} 