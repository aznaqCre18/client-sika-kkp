import React, { Component } from 'react';
import Loading from '../../../components/Loading/component';

export default class IdentitasSekolah extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 2000)
  }

  render() {
    const { isLoading } = this.state;
    return (
      isLoading ? (
        <Loading />
      ) : (
        <div>Identitas Sekolah</div> 
      )
    )
  }
}
