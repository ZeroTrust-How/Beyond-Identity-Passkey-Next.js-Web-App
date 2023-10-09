import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function AdminInfo() {
    const session = await getServerSession(authOptions)
    const user = session?.user;
    console.log(user?.scope.includes("app:admin"))
    if (session) {
        if (user?.scope.includes("app:admin")) {
            return (
                <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                    <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
                    <h1 className="text-body-emphasis">Admin Section : Access Granted</h1>
                    <p className="col-lg-6 mx-auto mb-4"> {'>'} Admin access has been granted to this section of page.</p>
                </div>
            )
        }
        else {
            return (
                <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                    <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>
                    <h1 className="text-body-emphasis">Admin Section : Access Denied</h1>
                    <p className="col-lg-6 mx-auto mb-4"> {'>'} This section of page is accessible by admins only.</p>
                </div>
            )
        }
    }
}
