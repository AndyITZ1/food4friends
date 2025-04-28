import { auth } from "@/auth";
import Link from "next/link";
import { Button } from "../ui/button";

export default async function CreateRecipe() {
    const session = await auth();
    const user = session?.user;

    return (
        <Button><Link href={user ? "/createRecipe" : "/login"}>Create Recipe</Link></Button>
    )
}