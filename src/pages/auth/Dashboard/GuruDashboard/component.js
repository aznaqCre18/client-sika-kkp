import React, { Component } from 'react';

import Header from '../../../../components/Header';
import Loading from '../../../../components/Loading/component';
import OtherButtonDashboard from '../../../../components/OtherButtonDashboard';
import { BigJadwalIcon, BigPenilaianIcon } from '../../../../configs/icons';

import AuthService from '../../../../utils/authService';

const Auth = new AuthService();

const buttonContent = [
  { 
    icon: BigJadwalIcon, 
    title: "Lihat Jadwal & Presensi Siswa", 
    description: "Klik untuk melihat jadwal mengajar & presensi siswa",
    path: "#",
    type: "success"
  },
  { 
    icon: BigPenilaianIcon, 
    title: "Penilaian", 
    description: "Klik untuk memberikan nilai kepada siswa",
    path: "#",
    type: "info"
  },
];

export default class GuruDashboard extends Component {
  state = {
    isLoading: true,
    thnAjaranSelected: "Pilih tahun ajaran",
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 500);
  }

  _handleSelectDropdown = (item) => {
    this.setState({ thnAjaranSelected: item.name });
  }

  render() {
    const { isLoading, thnAjaranSelected } = this.state;
    return (
      isLoading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <div className="container-dashboard-admin">
            <div className="header-section">
              <Header 
                title="Guru Dashboard"
                fullName={JSON.parse(Auth.getProfile()).nama}
                role={Auth.getUserType()}
              />
            </div>
            <div className="main-content-data">
              <div className="banner-welcome other">
                <h3>Selamat Datang, {JSON.parse(Auth.getProfile()).nama} !</h3>
                <div className="data-diri">
                  <table>
                    <tbody>
                      <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <th>Aziz Nur Abdul Qodir </th>
                      </tr>
                      <tr>
                        <td>NISN</td>
                        <td>:</td>
                        <th>1980273918274</th>
                      </tr>
                      <tr>
                        <td>NIS</td>
                        <td>:</td>
                        <th>000087623</th>
                      </tr>
                      <tr>
                        <td>Tempat Lahir</td>
                        <td>:</td>
                        <th>Klaten</th>
                      </tr>
                      <tr>
                        <td>Tanggal Lahir</td>
                        <td>:</td>
                        <th>18 Agustus 2000</th>
                      </tr>
                      <tr>
                        <td>No Telp</td>
                        <td>:</td>
                        <th>08997775669</th>
                      </tr>
                      <tr>
                        <td>Wali Murid</td>
                        <td>:</td>
                        <th>Handoko Sutanto</th>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table-2">
                    <tbody>
                      <tr>
                        <td>Alamat</td>
                        <td>:</td>
                        <th>
                          <p>LIO RT.001/ RW.009  NO.120A KEL. BOJONG PONDOK TERONG KEC. CIPAYUNG, KOTA DEPOK</p>
                        </th>
                      </tr>
                      <tr>
                        <td>Kelas</td>
                        <td>:</td>
                        <th>1980273918274</th>
                      </tr>
                      <tr>
                        <td>Jurusan</td>
                        <td>:</td>
                        <th>000087623</th>
                      </tr>
                      <tr>
                        <td>Wali Kelas</td>
                        <td>:</td>
                        <th>Klaten</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="wrapper-menu-button">
              <OtherButtonDashboard content={buttonContent} />
            </div>
          </div>
        </React.Fragment>
      )
    )
  }
}
