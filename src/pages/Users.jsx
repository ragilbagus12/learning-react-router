import { Link } from "react-router-dom";

function Users() {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h1 className="mb-4 text-2xl font-bold text-slate-700">Daftar User</h1>
            <ul className="space-y-3">
                <li>
                    <Link to="/users/1" 
                    className="block rounded-xl border border-slate-200 p-4 hover:border-blue-400 hover:bg-blue-100 transition">Ini User 1</Link>
                </li>
                <li>
                    <Link to="/users/2" 
                    className="block rounded-xl border border-slate-200 p-4 hover:border-blue-400 hover:bg-blue-100 transition">User 2</Link>
                </li>
            </ul>
        </div>
    )
}

export default Users;