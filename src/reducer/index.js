import { combineReducers } from 'redux';

import TodoListRed from '../pages/PagePersistTodo/reducer';
import JurusanRed from '../pages/auth/Jurusan/reducer';
import GuruRed from './../pages/auth/DataGuru/reducer';
import MapelRed from './../pages/auth/MataPelajaran/reducer';
import KelasRed from './../pages/auth/Kelas/reducer';
import TahunAjaranRed from './../pages/auth/TahunAjaran/reducer';
import SiswaRed from './../pages/auth/DataSiswa/reducer';
import WaktuMengajarRed from './../pages/auth/WaktuMengajar/reducer';

const rootReducer = combineReducers({
  TodoListRed,
  JurusanRed,
  GuruRed,
  MapelRed,
  KelasRed,
  TahunAjaranRed,
  SiswaRed,
  WaktuMengajarRed,
});

export default rootReducer;