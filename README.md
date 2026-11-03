# Dokumentasi React Router

Project latihan implementasi routing menggunakan **React 19 + Vite + React Router 7 + Tailwind CSS 4**.

## Cara Setup

1. Install dependency:

   ```bash
   npm install
   ```

2. Jalankan development server:

   ```bash
   npm run dev
   ```

3. Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

Dependency utama yang dibutuhkan:

```bash
npm install react-router-dom
```

## Struktur Project

```
src/
├─ main.jsx                  # Entry point: BrowserRouter + AuthProvider
├─ App.jsx                   # Daftar seluruh route
├─ contexts/
│  └─ AuthContext.jsx        # State login global (Context API)
├─ components/
│  └─ ProtectedRoute.jsx     # Penjaga halaman yang butuh login
├─ layouts/
│  └─ MainLayout.jsx         # Layout (navbar) + <Outlet />
└─ pages/
   ├─ Home.jsx
   ├─ About.jsx
   ├─ Users.jsx
   ├─ UserDetail.jsx
   ├─ Login.jsx
   ├─ Dashboard.jsx
   └─ NotFound.jsx
```

## Daftar Route

| Path           | Halaman      | Keterangan                          |
| -------------- | ------------ | ----------------------------------- |
| `/`            | Home         | Route dasar                         |
| `/about`       | About        | Route dasar                         |
| `/users`       | Users        | Daftar user                         |
| `/users/:id`   | UserDetail   | Dynamic route (parameter URL)       |
| `/login`       | Login        | Form login                          |
| `/dashboard`   | Dashboard    | Protected route (wajib login)       |
| `/old-home`    | -            | Redirect ke `/`                     |
| `*`            | NotFound     | Halaman 404 untuk URL tidak dikenal |

## Konsep Routing yang Diimplementasikan

### 1. BrowserRouter

Mengaktifkan routing di seluruh aplikasi. Dipasang sekali di `main.jsx`:

```jsx
<BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
</BrowserRouter>
```

### 2. Routes dan Route

`Routes` memilih satu `Route` yang cocok dengan URL saat ini:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

### 3. Nested Route (Layout)

Route induk tanpa `path` dipakai sebagai layout. Halaman anak dirender di posisi `<Outlet />`:

```jsx
<Route element={<MainLayout />}>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Route>
```

```jsx
// MainLayout.jsx
<nav>...</nav>
<main>
  <Outlet />
</main>
```

Dengan cara ini navbar cukup dibuat satu kali dan dipakai semua halaman.

### 4. Dynamic Route

Parameter URL ditandai dengan `:nama`, lalu dibaca memakai `useParams`:

```jsx
<Route path="/users/:id" element={<UserDetail />} />
```

```jsx
// UserDetail.jsx
const { id } = useParams();
```

### 5. Redirect

Mengalihkan satu alamat ke alamat lain. `replace` mengganti history agar tombol Back tidak kembali ke halaman lama:

```jsx
<Route path="/old-home" element={<Navigate to="/" replace />} />
```

### 6. Navigasi Programatik

Pindah halaman lewat kode menggunakan `useNavigate`:

```jsx
const navigate = useNavigate();
navigate(-1);           // kembali satu langkah
navigate("/", { replace: true });
```

### 7. Link

Navigasi tanpa reload halaman:

```jsx
<Link to="/users">Users</Link>
```

### 8. Protected Route

Halaman hanya bisa diakses setelah login. Jika belum login, pengguna diarahkan ke `/login` dan alamat asal disimpan di `state`:

```jsx
// ProtectedRoute.jsx
if (!user) {
  return <Navigate to="/login" replace state={{ from: location }} />;
}
return children;
```

Setelah login berhasil, pengguna dikembalikan ke halaman tujuan semula:

```jsx
// Login.jsx
const from = location.state?.from?.pathname || "/dashboard";
navigate(from, { replace: true });
```

### 9. Halaman 404

`path="*"` menangkap semua URL yang tidak terdaftar:

```jsx
<Route path="*" element={<NotFound />} />
```

## Alur Authentication

1. `AuthProvider` menyimpan `user` di state dan `localStorage`.
2. Halaman yang dibungkus `ProtectedRoute` mengecek `user`.
3. Jika belum login, diarahkan ke `/login` sambil menyimpan alamat asal.
4. Setelah login, `user` tersimpan dan pengguna dikembalikan ke halaman tujuan.
5. Data login tetap ada saat halaman di-refresh karena disimpan di `localStorage`.

## Referensi

- React Router: https://reactrouter.com/
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/
