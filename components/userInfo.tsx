import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function UserInfo() {
    const session = await getServerSession(authOptions)
    console.log(session)
    if (session) {
        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-person-badge-fill" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
                </svg>
                <h1 className="text-body-emphasis">Hello {session.user?.name}!</h1>
                <p className="col-lg-6 mx-auto mb-4">You are successfully signed in using Beyond Identity Passkeys.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Id</td>
                                <td>{session.user?.id}</td>
                            </tr>
                            <tr>
                                <td>Display Name</td>
                                <td>{session.user?.name}</td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                                <td>{session.user?.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-shield-slash-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.093 3.093c-.465 4.275.885 7.46 2.513 9.589a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.32 11.32 0 0 0 1.733-1.525L1.093 3.093zm12.215 8.215L3.128 1.128A61.369 61.369 0 0 1 5.073.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.483 3.626-.332 6.491-1.551 8.616zm.338 3.046-13-13 .708-.708 13 13-.707.707z" />
                </svg>
                <h1 className="text-body-emphasis">Beyond Identity Passkeys</h1>
                <p className="col-lg-6 mx-auto mb-4"> {'>'} ALTER TABLE User DROP COLUMN Passwords</p>
            </div>
        )
    }
}
