import { DashboardIcon, DownIcon, GuruIcon, JadwalIcon, JadwalPresensiIcon, LaporanIcon, MasterDataIcon, SchoolIcon, SiswaIcon } from "./configs/icons";
import AuthService from "./utils/authService";

const Auth = new AuthService();

const menuAdmin = [
    { name: 'Dashboard', value: 'dashboard', icon: DashboardIcon, path: '/dashboard', permission: Auth.getUserType() },
    { 
        name: 'Master Data', 
        value: 'master-data', 
        icon: MasterDataIcon, 
        path: '/master-data', 
        add: DownIcon,
        subMenu: [
            { name: 'Mata Pelajaran', value: 'mapel', path: '/mata-pelajaran' },        
            { name: 'Jurusan', value: 'jurusan', path: '/jurusan' },        
            { name: 'Kelas', value: 'kelas', path: '/kelas' },        
            { name: 'Tahun Ajaran', value: 'tahun-ajaran', path: '/tahun-ajaran' },        
        ],
        permission: "admin",
    },
    { name: 'Data Guru', value: 'guru', icon: GuruIcon, path: '/guru', permission: "admin", },
    { name: 'Data Siswa', value: 'siswa', icon: SiswaIcon, path: '/siswa', permission: "admin", },
    { 
        name: 'Jadwal Pelajaran', 
        value: 'jadwal-pelajaran', 
        icon: JadwalIcon, 
        path: '/laporan', 
        add: DownIcon,
        subMenu: [
            { name: 'Waktu Mengajar', value: 'waktu-mengajar', path: '/waktu-mengajar' },        
            { name: 'Jadwal Mengajar', value: 'jadwal-mengajar', path: '/jadwal-mengajar' },    
        ],
        permission: "admin",
    },
    { name: 'Identitas Sekolah', value: 'identitas-sekolah', icon: SchoolIcon, path: '/identitas-sekolah', permission: "admin", },
    { 
        name: 'Laporan', 
        value: 'laporan', 
        icon: LaporanIcon, 
        path: '/laporan', 
        add: DownIcon,
        subMenu: [
            { name: 'Lap. Data Guru', value: 'lap-data-guru', path: '#' },        
            { name: 'Lap. Data Siswa', value: 'lap-data-siswa', path: '#' },
            { name: 'Leadger Nilai', value: 'leadger-nilai', path: '#' },      
        ],
        permission: "admin",
    },
    { name: 'Jadwal & Presensi', value: 'jadwal-presensi', icon: JadwalPresensiIcon, path: '/jadwal-presensi', permission: "guru" },
    { name: 'Presensi Siswa', value: 'presensi-siswa', icon: JadwalPresensiIcon, path: '/presensi-siswa', permission: "siswa", },
]

export default menuAdmin;