import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    login(email);

    navigate(from, { replace: true });
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-sm rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-bold text-slate-700 mb-5">Login</h1>
      <input
        type="email"
        name="email"
        placeholder="Masukkan Email.."
        required
        className="mb-4 w-md rounded-lg border border-slate-200 px-4 py-2 outline-none focus:border-blue-500 shadow-sm focus:ring-2 focus:ring-blue-200"
      />
      <button type="submit" className="mt-4 rounded-lg bg-slate-200 px-4 py-2 font-medium cursor-pointer hover:bg-slate-300 transition">
        Login
      </button>
    </form>
  );
}
