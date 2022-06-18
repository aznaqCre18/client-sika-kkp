const BASE_URL = 'http://localhost:5001';

export const SERVICES = {
  LOGIN: `${BASE_URL}/api/general/login`,

  //JURUSAN
  GET_JURUSAN: `${BASE_URL}/api/jurusan/get-jurusan`,
  ADD_JURUSAN: `${BASE_URL}/api/jurusan/add-jurusan`,
  EDIT_JURUSAN: `${BASE_URL}/api/jurusan/edit-jurusan`,
  DELETE_JURUSAN: `${BASE_URL}/api/jurusan/delete-jurusan`,

  //GURU
  GET_GURU: `${BASE_URL}/api/guru/get-all-guru`,
  ADD_GURU: `${BASE_URL}/api/guru/add-guru`,
  EDIT_GURU: `${BASE_URL}/api/guru/edit-guru`,
  DELETE_GURU: `${BASE_URL}/api/guru/delete-guru`,

  //MAPEL
  GET_MAPEL: `${BASE_URL}/api/mapel/get-mapel`,
  GET_MAPEL_ID: `${BASE_URL}/api/mapel/get-mapel`,
  ADD_MAPEL: `${BASE_URL}/api/mapel/add-mapel`,
  EDIT_MAPEL: `${BASE_URL}/api/mapel/edit-mapel`,
  DELETE_MAPEL: `${BASE_URL}/api/mapel/delete-mapel`,

  //KELAS
  GET_KELAS: `${BASE_URL}/api/kelas/get-kelas`,
  GET_KELAS_ID: `${BASE_URL}/api/kelas/get-kelas`,
  ADD_KELAS: `${BASE_URL}/api/kelas/add-kelas`,
  EDIT_KELAS: `${BASE_URL}/api/kelas/edit-kelas`,
  DELETE_KELAS: `${BASE_URL}/api/kelas/delete-kelas`,

  //TAHUN AJARAN
  GET_TAHUN_AJARAN: `${BASE_URL}/api/tahun-ajaran/get-all`,
  ADD_TAHUN_AJARAN: `${BASE_URL}/api/tahun-ajaran/add-tahun`,
  DELETE_TAHUN_AJARAN: `${BASE_URL}/api/tahun-ajaran/delete-tahun`,

  //SISWA
  GET_SISWA: `${BASE_URL}/api/siswa/get-siswa`,
  ADD_SISWA: `${BASE_URL}/api/siswa/add-siswa`,
  EDIT_SISWA: `${BASE_URL}/api/siswa/edit-siswa`,
  DELETE_SISWA: `${BASE_URL}/api/siswa/delete-siswa`,

  //WAKTU MENGAJAR
  GET_WAKTU_MENGAJAR: `${BASE_URL}/api/waktu-mengajar/get-waktu-mengajar`,
  ADD_WAKTU_MENGAJAR: `${BASE_URL}/api/waktu-mengajar/add-waktu-mengajar`,
  EDIT_WAKTU_MENGAJAR: `${BASE_URL}/api/waktu-mengajar/edit-waktu-mengajar`,
  DELETE_WAKTU_MENGAJAR: `${BASE_URL}/api/waktu-mengajar/delete-waktu-mengajar`,
};