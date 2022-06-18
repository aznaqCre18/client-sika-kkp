import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

import AuthService from '../../../utils/authService';
import Loading from '../../../components/Loading/component';
import Table from '../../../components/Table';
import Header from '../../../components/Header/component';
import HeaderMainDataView from '../../../components/HeaderMainDataView';
import Dropdown from '../../../components/Dropdown';
import Button from '../../../components/Button/component';

const Auth = new AuthService();

const hari = [
  {name: 'Senin', value: '1'},
  {name: 'Selasa', value: '2'},
  {name: 'Rabu', value: '3'},
  {name: 'Kamis', value: '4'},
  {name: "Jum'at", value: '5'},
]

const dummyData = [
  {
    mataPelajaran: 'Matematika',
    hari: 'Senin',
    jamKe: '2',
    waktu: '9.10 - 10.40',
    kelas: 'X',
    jurusan: 'TKJ',
  },
  {
    mataPelajaran: 'Matematika',
    hari: 'Senin',
    jamKe: '2',
    waktu: '9.10 - 10.40',
    kelas: 'X',
    jurusan: 'TKJ',
  },
  {
    mataPelajaran: 'Matematika',
    hari: 'Senin',
    jamKe: '2',
    waktu: '9.10 - 10.40',
    kelas: 'X',
    jurusan: 'TKJ',
  },
  {
    mataPelajaran: 'Matematika',
    hari: 'Senin',
    jamKe: '2',
    waktu: '9.10 - 10.40',
    kelas: 'X',
    jurusan: 'TKJ',
  },
  {
    mataPelajaran: 'Matematika',
    hari: 'Senin',
    jamKe: '2',
    waktu: '9.10 - 10.40',
    kelas: 'X',
    jurusan: 'TKJ',
  },
  {
    mataPelajaran: 'Matematika',
    hari: 'Senin',
    jamKe: '2',
    waktu: '9.10 - 10.40',
    kelas: 'X',
    jurusan: 'TKJ',
  },
]

export default class JadwalPresensi extends Component {
  state = {
    isLoading: true,
    dropdownValue: "Filter berdasarkan hari..."
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 2000)
  }
  
  render() {
    const { isLoading, dropdownValue } = this.state;
    return (
      isLoading ? (
        <Loading />
      ) : (
        <div className="main-view-container">
          <div className="header-dashboard">
            <Header 
              title="Jadwal & Presensi"
              fullName={JSON.parse(Auth.getProfile()).nama}
              role={Auth.getUserType()}
            />
          </div>

          <div className="jadwal-presensi">
            <div className="filter-container">
              <Dropdown value={dropdownValue} data={hari} />
            </div>
            {
              dummyData.map((data, idx) => {
                return (
                  <div className="list-jadwal-container">
                    <div className="jadwal">
                      <div className="left-section">
                        <p>{data.mataPelajaran}</p>
                        <Link to={`${window.location.pathname}/presensi-siswa`} >
                          <Button label="Isi Absensi" type="success" width={154} />
                        </Link>
                      </div>
                      <div className="separator"></div>
                      <div className="right-section">
                        <div className="inside-section">
                          <div className="inside-wrapper">
                            <p className="title">Hari</p>
                            <p className="value">{data.hari}</p>
                          </div>
                          <div className="inside-wrapper">
                            <p className="title">Jam ke</p>
                            <p className="value">{data.jamKe}</p>
                          </div>
                        </div>
                        <div className="inside-section">
                          <div className="inside-wrapper">
                            <p className="title">Waktu</p>
                            <p className="value">{data.waktu}</p>
                          </div>
                          <div className="inside-wrapper">
                            <p className="title">Kelas</p>
                            <p className="value">{`${data.kelas} ${data.jurusan}`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    )
  }
}
