import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';

import AuthService from '../../../utils/authService';
import Loading from '../../../components/Loading/component';
import Table from '../../../components/Table';
import Header from '../../../components/Header/component';
import HeaderMainDataView from '../../../components/HeaderMainDataView';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { EditBgIcon, EditIcon, EyeBgIcon } from '../../../configs/icons';
import ModalFormPresensi from '../../../components/Modal/ModalFormPresensi';

const Auth = new AuthService();

const fieldTable = [
  {fieldName: 'no.', fieldApi: ''},
  {fieldName: 'pertemuan', fieldApi: 'pertemuan'},
  {fieldName: 'tanggal', fieldApi: 'tanggal'},
  {fieldName: 'action', fieldApi: ''},
];

const dataTableDummy = [
  {
    pertemuan: 'Pertemuan 1',
    tanggal: '18 April 2021',
  },
  {
    pertemuan: 'Pertemuan 2',
    tanggal: '25 April 2021',
  },
  {
    pertemuan: 'Pertemuan 3',
    tanggal: '01 Mei 2021',
  },
  {
    pertemuan: 'Pertemuan 4',
    tanggal: '08 Mei 2021',
  },
]

const buttonGroup = [
  { label: 'Tambah data presensi', value: 'add-data'},
]

const customIconAction = [
  { icon: EyeBgIcon, value: 'see' }, 
  { icon: EditBgIcon, value: 'edit' },
]

const dummyDataAbsen = [
  {name: 'Aziz Nur Abdul Qodir'},
  {name: 'Dyah Puji Astuti'},
  {name: 'Ridwansyah Oktavianto'},
  {name: 'Annisa Lutfiani'},
]

export default class PresensiSiswa extends Component {
  state = {
    isLoading: true,
    isModalCreatePresens: false,
    isModalFormPresens: false,
    typeModalPresens: '',
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 2000)
  }

  _handleClickButtonHeader = (value) => {
    if(value === 'add-data') {
      this.setState({
        isModalFormPresens: false,
        isModalCreatePresens: !this.state.isModalCreatePresens
      })
    } else if(value === 'form-presense') {
      this.setState({
        isModalFormPresens: !this.state.isModalFormPresens,
        isModalCreatePresens: false
      })
    }
  }

  _handleActionButton = (value) => {
    console.log(value);
    if(value === 'edit' ) {
      this._handleClickButtonHeader('form-presense');
      this.setState({ typeModalPresens: value });
    } else if(value === 'see') {
      this._handleClickButtonHeader('form-presense')
      this.setState({ typeModalPresens: value });
    }
  }
  
  render() {
    const { isLoading, isModalCreatePresens, isModalFormPresens, typeModalPresens } = this.state;
    return (
      isLoading ? (
        <Loading />
      ) : (
        <div className="main-view-container">
          <div className="header-dashboard">
            <Header 
              title="Tahun Ajaran"
              fullName={JSON.parse(Auth.getProfile()).nama}
              role={Auth.getUserType()}
            />
          </div>

          <div className="main-content-view">
            <div className="header-tools" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 32}}>
              <div className="info-mapel">
                <p className="mapel" style={{fontWeight: '600', fontFamily: 'Quicksand', fontSize: 22}}>Matematika - X</p>
                <p className="guru" style={{fontSize: 14, fontWeight: '300'}}>Luciana Zogbi, S.Pd.</p>
              </div>
              <HeaderMainDataView button={buttonGroup} onClick={this._handleClickButtonHeader} isSearchField={false} />
            </div>
            <div className="table-section">
              <Table datasets={dataTableDummy} tableField={fieldTable} customIconAction={customIconAction} onClickAction={this._handleActionButton} />
            </div>
          </div>

          <Modal centered isOpen={isModalCreatePresens} toggle={() => this._handleClickButtonHeader('add-data')} >
            <ModalBody style={{padding: '2rem'}} className="modal-body-custom">
              <h4 style={{fontFamily: 'Quicksand', fontWeight: 'Bold', marginBottom: 28}} >Buat Presensi</h4>
              <Input label="Pertemuan ke" placeholder="Cth. Pertemuan 8" />
              <div style={{marginTop: 20, display: 'flex', gap: 8}} className="btn-group-cust">
                <Button label="Batal" type="danger" width="100%" onClick={() => this._handleClickButtonHeader('add-data')} />
                <Button label="Buat" type="success" width="100%" />
              </div>
            </ModalBody>
          </Modal>

          <ModalFormPresensi isShow={isModalFormPresens} onHide={() => this._handleClickButtonHeader('form-presense')} data={dummyDataAbsen} type={typeModalPresens} />
        </div>
      )
    )
  }
}
