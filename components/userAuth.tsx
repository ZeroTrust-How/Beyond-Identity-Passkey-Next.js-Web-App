"use client"
import { signIn, signOut, useSession } from 'next-auth/react';

export default function UserAuth() {
    const { data: session, status } = useSession();
    if (status === "authenticated") {
        return (
            <div>
                <button type="button" className="btn btn-warning" onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }
    return <button type="button" className="btn btn-primary" onClick={() => signIn('beyondidentity')}>Sign In</button>
}