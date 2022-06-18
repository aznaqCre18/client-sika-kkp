import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';

import AuthService from '../../../utils/authService';
import Loading from '../../../components/Loading/component';
import Table from '../../../components/Table';
import Header from '../../../components/Header/component';
import HeaderMainDataView from '../../../components/HeaderMainDataView';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { CrossIcon, EditBgIcon, EditIcon, EyeBgIcon, SeePresenseBgIcon } from '../../../configs/icons';
import ModalFormPresensi from '../../../components/Modal/ModalFormPresensi';

const Auth = new AuthService();

const fieldTable = [
  {fieldName: 'no.', fieldApi: ''},
  {fieldName: 'mata pelajaran', fieldApi: 'mapel'},
  {fieldName: 'guru', fieldApi: 'guru'},
  {fieldName: 'action', fieldApi: ''},
];

const dataTableDummy = [
  {
    mapel: 'Ilmu Pengetahuan Alam 1',
    guru: 'Yuni Ningsih, S.Pd',
  },
  {
    mapel: 'Ilmu Pengetahuan Sosial 1',
    guru: 'Ali Alhamid, S.Pd',
  },
  {
    mapel: 'Matematika 1',
    guru: 'Sunarto Munarman, S.Pd',
  },
  {
    mapel: 'Topologi Jaringan',
    guru: 'Tania Sabila, S.Pd',
  },
]

const buttonGroup = [
  { label: 'Export', value: 'export'},
]

const customIconAction = [
  { icon: SeePresenseBgIcon, value: 'see' },
]

const dummyDataAbsen = [
  {name: 'Aziz Nur Abdul Qodir'},
  {name: 'Dyah Puji Astuti'},
  {name: 'Ridwansyah Oktavianto'},
  {name: 'Annisa Lutfiani'},
]

export default class JadwalPresensiSiswa extends Component {
  state = {
    isLoading: true,
    isModalFormPresens: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 2000)
  }

  _handleClickButtonHeader = (value) => {
    if(value === 'form-presense') {
      this.setState({
        isModalFormPresens: !this.state.isModalFormPresens,
      })
    }
  }

  _handleActionButton = (value) => {
    console.log(value);
    if(value === 'see') {
      this._handleClickButtonHeader('form-presense');
    }
  }
  
  render() {
    const { isLoading, isModalFormPresens } = this.state;
    return (
      isLoading ? (
        <Loading />
      ) : (
        <div className="main-view-container">
          <div className="header-dashboard">
            <Header 
              title="Presensi Siswa"
              fullName={JSON.parse(Auth.getProfile()).nama}
              role={Auth.getUserType()}
            />
          </div>

          <div className="main-content-view">
            <div className="header-tools" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 32}}>
              <div className="info-mapel">
                <table>
                  <tbody>
                    <tr style={{marginBottom: 8}}>
                      <td style={{fontWeight: 600}}>Jurusan</td>
                      <td style={{padding: '0 20px'}}>:</td>
                      <td>Teknik Sepeda Motor</td>
                    </tr>
                    <tr>
                      <td style={{fontWeight: 600}}>Wali Kelas</td>
                      <td style={{padding: '0 20px'}}>:</td>
                      <td>Ummul Fitriani, S.pd.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <HeaderMainDataView button={buttonGroup} onClick={this._handleClickButtonHeader} isSearchField={false} />
            </div>
            <div className="table-section">
              <Table datasets={dataTableDummy} tableField={fieldTable} customIconAction={customIconAction} onClickAction={this._handleActionButton} />
            </div>
          </div>

          <Modal centered isOpen={isModalFormPresens} toggle={() => this._handleClickButtonHeader('form-presense')} >
            <ModalBody style={{padding: '2rem'}} className="modal-body-custom">
              <img src={CrossIcon} alt="close" style={{position: 'absolute', top: 20, right: 20, cursor: 'pointer'}} onClick={() => this._handleActionButton('see')} />
              <div className="column-section" style={{marginTop: 30, marginBottom: 10, display: 'flex', justifyContent: 'space-between'}}>
                <p style={{fontFamily: 'Quicksand', fontWeight: 'Bold', fontSize: 14}} >Mata Pelajaran</p>
                <p style={{fontFamily: 'Quicksand', fontSize: 14}} >Ilmu Pengetahuan Alam</p>
              </div>
              <div className="column-section" style={{marginBottom: 10, display: 'flex', justifyContent: 'space-between'}}>
                <p style={{fontFamily: 'Quicksand', fontWeight: 'Bold', fontSize: 14}} >ID Mata Pelajaran</p>
                <p style={{fontFamily: 'Quicksand', fontSize: 14}} >19</p>
              </div>
              <div className="column-section" style={{marginBottom: 20, display: 'flex', justifyContent: 'space-between'}}>
                <p style={{fontFamily: 'Quicksand', fontWeight: 'Bold', fontSize: 14}} >Guru</p>
                <p style={{fontFamily: 'Quicksand', fontSize: 14}} >Ummul Fitriani, S.Pd</p>
              </div>

              <div className="presens-summary" style={{backgroundColor: '#F5F6F8', padding: 16, borderRadius: 8, marginBottom: 20}}>
                <div className="column-section" style={{marginBottom: 10, display: 'flex', justifyContent: 'space-between'}}>
                  <p style={{fontFamily: 'Quicksand', fontWeight: 'Bold', fontSize: 14}} >Hadir</p>
                  <p style={{fontFamily: 'Quicksand', fontSize: 14}} >12</p>
                </div>
                <div className="column-section" style={{marginBottom: 10, display: 'flex', justifyContent: 'space-between'}}>
                  <p style={{fontFamily: 'Quicksand', fontWeight: 'Bold', fontSize: 14}} >Izin</p>
                  <p style={{fontFamily: 'Quicksand', fontSize: 14}} >2</p>
                </div>
                <div className="column-section" style={{marginBottom: 10, display: 'flex', justifyContent: 'space-between'}}>
                  <p style={{fontFamily: 'Quicksand', fontWeight: 'Bold', fontSize: 14}} >Sakit</p>
                  <p style={{fontFamily: 'Quicksand', fontSize: 14}} >0</p>
                </div>
                <div className="column-section" style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p style={{fontFamily: 'Quicksand', fontWeight: 'Bold', fontSize: 14}} >Alpa</p>
                  <p style={{fontFamily: 'Quicksand', fontSize: 14}} >1</p>
                </div>
              </div>

              <div className="daftar-absensi">
                <p style={{fontFamily: 'Quicksand', fontWeight: 'Bold', fontSize: 14, marginBottom: 12}} className="title">Daftar Absensi</p>
                <div className="list-absen" style={{paddingLeft: 10}}>
                  <div className="column-section" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="no-mapel" style={{display: 'flex', gap: 18}}>
                      <p style={{fontFamily: 'Quicksand', fontSize: 14}} >1.</p>
                      <p style={{fontFamily: 'Quicksand', fontSize: 14}} >Selasa, 15 Maret 2022</p>
                    </div>
                    <p style={{fontFamily: 'Quicksand', fontSize: 14, fontWeight: 'Bold'}} >Hadir</p>
                  </div>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
      )
    )
  }
}
