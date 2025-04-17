import { auth } from "@/auth";

export default async function SecretPage() {
    const session = await auth();
    const user = session?.user;

    if (!session) return <div>Not authenticated</div>

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Secret Page</h1>
            {user ? (
                <p className="text-lg">Welcome, {user.name}!</p>
            ) : (
                <p className="text-lg">You must be signed in to view this page.</p>
            )}
        </div>
    );
}