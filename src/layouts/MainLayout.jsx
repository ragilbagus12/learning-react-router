import { Link, Outlet } from "react-router-dom"

function MainLayout() {
    return (
        <div>
            <nav className="sticky top-0 z-10 flex flex-wrap items-center gap-2 bg-white/80 px-6 py-3 shadow-sm backdrop-blur sm:px-6">
            <span className="mr-auto font-bold text-blue-600">MyApp</span>
                <Link to="/" className="rounded-lg text-sm px-3 py-2 font-medium text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition">Home</Link>
                <Link to="/about" className="rounded-lg text-sm px-3 py-2 font-medium text-slate-500 hover:bg-blue-100 hover:text-blue-600 transition">About</Link>
                <Link to="/users" className="rounded-lg text-sm px-3 py-2 font-medium text-slate-500 hover:bg-blue-100 hover:text-blue-600 transition">Users</Link>
                <Link to="/login" className="rounded-lg text-sm px-3 py-2 font-medium text-slate-500 hover:bg-blue-100 hover:text-blue-700 transition">Login</Link>
            </nav>

            <main className="mx-auto max-w-3xl p-4 sm:p-6">
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;