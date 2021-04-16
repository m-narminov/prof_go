import React from 'react';
import { Button } from 'reactstrap';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'uuid/v4';
import Widget from '../../components/Widget/Widget';
import s from './Notifications.module.scss';

class Elbrus extends React.Component {
  state = {
    options: {
      position: 'top-right',
      autoClose: 5000,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    },
  };

  componentDidMount() {
    toast.success('!!!', {
      position: 'bottom-right',
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  }

  addSuccessNotification = () =>
    toast.success(
      'Showing success message was successful!',
      this.state.options
    );

  toggleLocation = location => {
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        position: location,
      },
    }));
  };

  addInfoNotification = () => {
    let id = uuid();
    toast.info(
      <div>
        ...
        <Button
          onClick={() => this.launchNotification(id)}
          outline
          size='xs'
          className='width-100 mb-xs mr-xs mt-1'
        >
          Cancel launch
        </Button>
      </div>,
      { ...this.state.options, toastId: id }
    );
  };

  launchNotification = id =>
    toast.update(id, {
      ...this.state.options,
      render: 'Thermonuclear war averted',
      type: toast.TYPE.SUCCESS,
    });

  addErrorNotification = () => {
    let id = uuid();
    toast.error(
      <div>
        Ошибка при уничтожении чужой планеты <br />
        <Button
          onClick={() => this.retryNotification(id)}
          outline
          size='xs'
          className='width-100 mb-xs mr-xs mt-1'
        >
          Retry
        </Button>
      </div>,
      { ...this.state.options, toastId: id }
    );
  };

  retryNotification = id =>
    toast.update(id, {
      ...this.state.options,
      render: 'Alien planet destroyed!',
      type: toast.TYPE.SUCCESS,
    });

  render() {
    return (
      <div className={s.root}>
        <h1 className='page-title'>Эльбрус</h1>

        <Widget title={<h6> Эльбрус </h6>} close collapse settings>
          фывф
        </Widget>
      </div>
    );
  }
}

export default Elbrus;
