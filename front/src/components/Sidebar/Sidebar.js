import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { dismissAlert } from '../../actions/alerts';
import s from './Sidebar.module.scss';
import LinksGroup from './LinksGroup';

import logoForm from '../../images/logoForm.png';

import { changeActiveSidebarItem } from '../../actions/navigation';

class Sidebar extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    activeItem: '',
  };

  componentDidMount() {
    this.element.addEventListener(
      'transitionend',
      () => {
        if (this.props.sidebarOpened) {
          this.element.classList.add(s.sidebarOpen);
        }
      },
      false
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sidebarOpened !== this.props.sidebarOpened) {
      if (nextProps.sidebarOpened) {
        this.element.style.height = `${this.element.scrollHeight}px`;
      } else {
        this.element.classList.remove(s.sidebarOpen);
        setTimeout(() => {
          this.element.style.height = '';
        }, 0);
      }
    }
  }

  dismissAlert(id) {
    this.props.dispatch(dismissAlert(id));
  }

  render() {
    return (
      <nav
        className={cx(s.root)}
        ref={nav => {
          this.element = nav;
        }}
      >
        <header className={s.logo}>
          <a
            href='http://unpo.tomsk.gov.ru/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={logoForm} width='50%' alt='logoForm' />
          </a>
        </header>
        <ul className={s.nav}>
          <LinksGroup
            onActiveSidebarItemChange={activeItem =>
              this.props.dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={this.props.activeItem}
            header='Рабочий стол'
            isHeader
            iconName='flaticon-home'
            link='/app/main'
            index='main'
          />
          <h5 className={[s.navTitle, s.groupTitle].join(' ')}>МЕНЮ</h5>
          <LinksGroup
            onActiveSidebarItemChange={activeItem =>
              this.props.dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={this.props.activeItem}
            header='Документы'
            isHeader
            iconName='flaticon-network'
            link='/app/docs'
            index='core'
          />
          <LinksGroup
            onActiveSidebarItemChange={t =>
              this.props.dispatch(changeActiveSidebarItem(t))
            }
            activeItem={this.props.activeItem}
            header='Студенты'
            isHeader
            iconName='flaticon-layers'
            link='/app/tables'
            index='tables'
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem =>
              this.props.dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={this.props.activeItem}
            header='Приемная комиссия'
            isHeader
            iconName='flaticon-layers'
            link='/app/commission'
            index='ui'
          />
          {/* <LinksGroup
            onActiveSidebarItemChange={activeItem =>
              this.props.dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={this.props.activeItem}
            header='Персональные данные'
            isHeader
            iconName='flaticon-layers'
            link='/app/info'
            index='ui'
          /> */}
          <LinksGroup
            onActiveSidebarItemChange={activeItem =>
              this.props.dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={this.props.activeItem}
            header='Заявления'
            isHeader
            iconName='flaticon-layers'
            link='/app/staff'
            index='ui'
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem =>
              this.props.dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={this.props.activeItem}
            header='Статистика'
            isHeader
            iconName='flaticon-list'
            link='/app/forms'
            index='forms'
            childrenLinks={[
              {
                header: 'Графики',
                link: '/app/charts',
              },
              {
                header: 'Направления',
                link: '/app/online',
              },
              // {
              //   header: 'Офлайн',
              //   link: '/app/offline',
              // },
              // {
              //   header: 'Тестирование',
              //   link: '/app/testing',
              // },
            ]}
          />
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    alertsList: store.alerts.alertsList,
    activeItem: store.navigation.activeItem,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
