import { useParams, useNavigate } from "react-router-dom";

function UserDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-700">Detail USER ID: {id}</h1>
            <button onClick={() => navigate(-1)} className="mt-4 rounded-lg bg-slate-200 px-4 py-2 font-medium hover:bg-slate-300 transition">Kembali</button>
        </div>
    )
}

export default UserDetail;