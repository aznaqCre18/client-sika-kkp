import AdminDashboard from './pages/auth/Dashboard/AdminDashboard';
import DataGuru from './pages/auth/DataGuru';
import DataSiswa from './pages/auth/DataSiswa';
import DataMapel from './pages/auth/JadwalMengajar';
import IdentitasSekolah from './pages/auth/IdentitasSekolah';
import Jurusan from './pages/auth/Jurusan';
import Kelas from './pages/auth/Kelas';
import MataPelajaran from './pages/auth/MataPelajaran';
import TahunAjaran from './pages/auth/TahunAjaran';
import JadwalMengajar from './pages/auth/JadwalMengajar';
import WaktuMengajar from './pages/auth/WaktuMengajar';
import Dashboard from './pages/auth/Dashboard';
import JadwalPresensi from './pages/auth/JadwalPresensi';
import PresensiSiswa from './pages/auth/PresensiSiswa';
import JadwalPresensiSiswa from './pages/auth/JadwalPresensiSiswa';

const routes = [
    {
        path: '/dashboard',
        exact: true,
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/guru',
        exact: true,
        name: 'Data Guru',
        component: DataGuru,
    },
    {
        path: '/siswa',
        exact: true,
        name: 'Data Siswa',
        component: DataSiswa,
    },
    {
        path: '/jadwal',
        exact: true,
        name: 'Data Jadwal Pelajaran',
        component: DataMapel,
    },
    {
        path: '/identitas-sekolah',
        exact: true,
        name: 'Identitas Sekolah',
        component: IdentitasSekolah,
    },
    {
        path: '/mata-pelajaran',
        exact: true,
        name: 'Mata Pelajaran',
        component: MataPelajaran,
    },
    {
        path: '/jurusan',
        exact: true,
        name: 'Jurusan',
        component: Jurusan,
    },
    {
        path: '/kelas',
        exact: true,
        name: 'Kelas',
        component: Kelas,
    },
    {
        path: '/tahun-ajaran',
        exact: true,
        name: 'Tahun Ajaran',
        component: TahunAjaran,
    },
    {
        path: '/mata-pelajaran',
        exact: true,
        name: 'Mata Pelajaran',
        component: MataPelajaran,
    },
    {
        path: '/waktu-mengajar',
        exact: true,
        name: 'Waktu Mengajar',
        component: WaktuMengajar,
    },
    {
        path: '/jadwal-mengajar',
        exact: true,
        name: 'Jadwal Pelajaran',
        component: JadwalMengajar,
    },
    {
        path: '/jadwal-presensi',
        exact: true,
        name: 'Jadwal Presensi',
        component: JadwalPresensi,
    },
    {
        path: '/jadwal-presensi/presensi-siswa',
        exact: true,
        name: 'Presensi Siswa',
        component: PresensiSiswa,
    },
    {
        path: '/presensi-siswa',
        exact: true,
        name: 'Presensi Siswa',
        component: JadwalPresensiSiswa,
    },
]

export default routes;