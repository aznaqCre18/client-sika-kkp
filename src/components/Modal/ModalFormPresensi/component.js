import React from 'react'
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import Button from '../../Button';
import RadioButton from '../../RadioButton';

const ModalFormPresensi = ({isShow, onHide, data, type}) => {
  return (
    <Modal
      fullscreen
      toggle={onHide}
      isOpen={isShow}
      className="modal-custom-contianer"
    >
      <ModalBody className="modal-body-custom-container">
        <div className="title-section" style={{marginBottom: 32}}>
          <p 
            className="mapel-kelas"
            style={{
              fontSize: 24,
              fontFamily: 'Quicksand',
              fontWeight: 'bold'
            }}
          >
            Matematika - XI
          </p>
          <p 
            className="guru"
            style={{
              fontWeight: '300'
            }}
          >
            Luciana Zogbi, S.Pd.
          </p>
        </div>

        <div className="list-siswa">
            <table style={{width: "100%"}}>
              <tbody>
                <tr style={{backgroundColor: '#F5F6F8', height: 52}}>
                  <th style={{padding: "0 32px"}}>NO.</th>
                  <th>NAMA</th>
                  <th>PRESENSI</th>
                </tr>
                {
                  data && data.length > 0 ? data.map((item, idx) => {
                    return (
                      <tr key={idx} style={{height: 52}}>
                        <td style={{padding: "0 32px"}} >{idx + 1}</td>
                        <td width={900}>{item.name}</td>
                        <td>
                          {
                            type === 'edit' ? (
                              <div className="checkbox" style={{display: 'flex'}}>
                                <RadioButton label="Hadir" idx={idx} value="hadir" />
                                <RadioButton label="Izin" idx={idx} value="izin" />
                                <RadioButton label="Sakit" idx={idx} value="sakit" />
                                <RadioButton label="Alpa" idx={idx} value="alpa" />
                              </div>
                            ) : (
                              <div className="label-tag">Hadir</div>
                            )
                          }
                        </td>
                      </tr>
                    )
                  }) : null
                }
              </tbody>
            </table>
        </div>
      </ModalBody>
      <ModalFooter>
      <Button label="Cancel" type="danger" onClick={onHide} /> 
      <Button
        label="Simpan"
        type="success"
      />
      </ModalFooter>
    </Modal>
  )
}

export default ModalFormPresensi