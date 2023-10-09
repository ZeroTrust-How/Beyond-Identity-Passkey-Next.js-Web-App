import UserAuth from '@/components/userAuth';
import UserInfo from '@/components/userInfo';
import AdminInfo from '@/components/adminInfo';

export default function Home() {
  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              Demo by Prudhvi Keertipati
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 text-secondary"></a></li>
            </ul>

            <div className="text-end">
              <UserAuth></UserAuth>
            </div>
          </div>
        </div>
      </header>

      <div className="container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <UserInfo></UserInfo>
          <AdminInfo></AdminInfo>
        </div>
      </div>
    </div>
  )
}
