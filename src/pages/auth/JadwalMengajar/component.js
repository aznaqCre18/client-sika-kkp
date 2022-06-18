import React, { Component } from 'react';

import AuthService from '../../../utils/authService';
import Loading from '../../../components/Loading/component';
import Table from '../../../components/Table';
import Header from '../../../components/Header/component';
import HeaderMainDataView from '../../../components/HeaderMainDataView';

import { dataTableDummy } from './config/dummyData';
import Dropdown from '../../../components/Dropdown';
import Button from '../../../components/Button/component';
import { JadwalPelajaranImage } from '../../../configs/images';

const Auth = new AuthService();

const fieldTable = [
  {fieldName: 'no.', fieldApi: ''},
  {fieldName: 'jam', fieldApi: 'jam'},
  {fieldName: 'waktu', fieldApi: 'waktu'},
  {fieldName: 'mata pelajaran', fieldApi: 'mataPelajaran'},
  {fieldName: 'guru', fieldApi: 'guru'},
]

const dataDropdown = [
  {name: 'XII - TKJ', value: 'xii', jurusan: 'tkj'},
  {name: 'XI - TKJ', value: 'xi', jurusan: 'tkj'},
  {name: 'X - TKJ', value: 'x', jurusan: 'tkj'},
  {name: 'XII - RPL', value: 'xii', jurusan: 'rpl'},
];

export default class WaktuMengajar extends Component {
  state = {
    isLoading: true,
    valueDropdown: 'Pilih Kelas',
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 2000)
  }

  _handleClickButtonHeader = (value) => {
    console.log(value);
  }

  _handleChangeDropdown = (value) => {
    this.setState({
      valueDropdown: value.name
    })
  }
  
  render() {
    const { isLoading } = this.state;
    console.log(dataTableDummy.length, "<<< ");
    return (
      isLoading ? (
        <Loading />
      ) : (
        <div className="main-view-container jadwal-mengajar">
          <div className="header-dashboard">
            <Header 
              title="Waktu Mengajar"
              fullName={JSON.parse(Auth.getProfile()).nama}
              role={Auth.getUserType()}
            />
          </div>

          <div 
            className="tools-jadwal"
            style={{
              height: 90,
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 32px',
              backgroundColor: '#fff',
              borderRadius: 8,
              marginBottom: 20,
            }} 
          >
            <div className="dropdown">
              <Dropdown value={this.state.valueDropdown} onChange={this._handleChangeDropdown} data={dataDropdown} width={210}  />
            </div>
            <div 
              className="btn-group-jadwal"
              style={{
                display: 'flex',
                gap: 12
              }}
            >
              <Button label="Buat Jadwal Pelajaran" />
              <Button label="Export" />
            </div>
          </div>

          {
            dataTableDummy.length > 1 ? dataTableDummy.map((data, idx) => {
              return (
                <div className="main-content-view jadwal-mengajar" key={idx}>
                  <div className="header-tools">
                    <p style={{padding: '26px 32px', fontFamily: 'Quicksand', fontWeight: 'bold', fontSize: 18, textTransform: 'capitalize'}}>{data.hari}</p>
                  </div>
                  <div className="table-section">
                    <Table type="jadwal-mengajar" datasets={data.mapel} tableField={fieldTable} />
                  </div>
                </div>
              )
            }) : (
              <div 
                className="empty-page"
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '90px 0'
                }}
              >
                <img 
                  src={JadwalPelajaranImage} 
                  alt="jadwal-img" 
                  style={{marginBottom: 32}}
                />
                <div className="wording" style={{textAlign: 'center'}}>
                  <p 
                    className="title"
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      fontFamily: 'Quicksand',
                      marginBottom: 4
                    }}
                  >
                    Pilih kelas terlebih dahulu
                  </p>
                  <p 
                    className="subtitle"
                    style={{
                      fontSize: 16,
                      fontWeight: '300',
                      fontFamily: 'Quicksand',
                    }}
                  >
                    Pilih kelas terlebih dahulu untuk melihat
                  </p>
                  <p 
                    className="subtitle"
                    style={{
                      fontSize: 16,
                      fontWeight: '300',
                      fontFamily: 'Quicksand',
                    }}
                  >
                    jadwal masing-masing kelas
                  </p>
                </div>
              </div>
            )
          }
        </div>
      )
    )
  }
}
