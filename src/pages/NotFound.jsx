import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
            <h1 className="text-3xl font-bold text-slate-700">404 - Halaman Tidak Ditemmukan</h1>
            <Link to='/' className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">Kembali ke halaman utama</Link> 
        </div>
    );
}