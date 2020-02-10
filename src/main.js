import React, { Component } from 'react'
import SEO from './seo'
import profile from './assests/profile.jpg'
import { Ionicons } from 'react-web-vector-icons'

const aboutMe = [
  {
    title: 'Introduction',
    description:
      'Asher Toufeeq an Undergraduate student pursuing B.tech(Electrical) from Jamia Millia Islamia,New Delhi(110025).'
  },
  {
    title: 'My Skillset',
    description:
      'I possess a sharp eye for detail, which I use to find even the smallest errors in text. I work well under pressure and can produce high-quality work in short periods of time. I have strong interpersonal skills and work with a wide variety of people.'
  },
  {
    title: 'My Goals',
    description:
      'I  am looking for an opportunity to work with a team that runs on clear communication.I want to align myself with a company I believe in and where I can create positive change. I am always looking to learn more and am open to taking on challenging projects.'
  }
];
const social = [
  {
    name: 'logo-facebook',
    link: 'https://www.facebook.com/ashertoufeeq'
  },
  {
    name: 'logo-instagram',
    link: 'https://www.instagram.com/ashertoufeeq'
  },
  {
    name: 'logo-twitter',
    link: 'https://www.twitter.com/ashertoufeeq'
  },
  {
    name: 'logo-github',
    link: 'https://www.github.com/ashertoufeeq'
  },
  {
    name: 'logo-linkedin',
    link: 'https://www.linkedin.com/in/ashertoufeeq'
  }
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerWidth: false
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  openNav() {
    this.setState({ drawerWidth: true })
  }

  closeNav() {
    this.setState({ drawerWidth: false })
  }

  toggleDrawer() {
    this.setState({ drawerWidth: !this.state.drawerWidth })
  }

  render() {
    return (
      <div
        className={'column'}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          margin: 0,
          padding: 0
        }}
      >
        <div className='header row-lg align-center justify-between'>
          <span onClick={this.toggleDrawer}>
            <Ionicons
              name='md-menu'
              color='black'
              size={30}
              // style={{}}
            />
          </span>
          <h1
            className={' profile-text'}
            style={{ margin: 0, fontWeight: 'bold' }}
          >
            Asher Toufeeq Personal Profile
          </h1>
          <div
            className={' column align-lg-start align-center'}
            style={{ padding: '10px' }}
          >
            <h6
              style={{ fontSize: '12px', color: '#595959', padding: '2.5px' }}
            >
              +91-9557807977
            </h6>
            <h6
              style={{ fontSize: '12px', color: '#595959', padding: '2.5px' }}
            >
              ashertoufeeq@gmail.com
            </h6>
            <h6
              style={{ fontSize: '12px', color: '#595959', padding: '2.5px' }}
            >
              ashertoufeeq23@outlook.com
            </h6>
          </div>
        </div>
        <div className={'bg-img column align-center justify-center'}>
          <div className='arrow' style={{ marginBottom: '100px' }} />
          <div
            id='mySidenav'
            className='sidenav'
            style={{ width: this.state.drawerWidth ? '250px' : 0 }}
          >
            <a className='closebtn' onClick={this.closeNav}>
              &times;
            </a>
            <a href='#'>Home</a>
            <a href='#'>Contact Us</a>
          </div>
          <div className={'column align-lg-start title-wrapper m-4'}>
            <h2>Get to know me!</h2>
            <div style={{ marginTop: '10px' }}>
              <h1 className={'floating-text '}>FrontEnd</h1>
              <h1 className={'floating-text '}> Developer</h1>
            </div>
          </div>
          <img
            className={'m-4 col-6 col-s-10 col-md-6'}
            alt={'profile'}
            src={profile}
          />
        </div>
        <div className={'column justify-center align-center'}>
          <h1 className={'cfg p-4 m-4'} style={{ fontWeight: 'bold' }}>
            {' '}
            About Me
          </h1>
          {aboutMe.map((item, i) => (
            <div
              key={i}
              className={'col-6 col-md-11 col-s-10 column align-center p-4'}
            >
              <h2
                className={''}
                style={{
                  marginTop: '50px',
                  marginBottom: '25px',
                  fontWeight: 'normal',
                  fontSize: '22px',
                  color: '#1b1b1b'
                }}
              >
                {item.title}
              </h2>
              <h3
                style={{
                  fontSize: '16px',
                  color: '#1b1b1b',
                  fontWeight: 'normal'
                }}
              >
                {' '}
                {item.description}
              </h3>
            </div>
          ))}
        </div>
        <div className={'column justify-center align-center'}>
          <h1 className={'cfg p-4 m-4'} style={{ fontWeight: 'bold' }}>
            {' '}
            Resume
          </h1>
          <div
            className={
              'col-6 col-md-11 col-s-10 row align-center justify-between p-4 bg'
            }
          >
            <h2
              className={''}
              style={{
                fontWeight: 'bold',
                fontSize: '16px',
                color: '#1b1b1b'
              }}
            >
              Know More(pdf)
            </h2>
            <a
              href='https://github.com/ashertoufeeq/Resume/raw/master/Resume.pdf'
              download
              style={{ color: '#6c7073', textDecoration: 'none' }}
            >
              <Ionicons
                style={{ margin: '5px' }}
                name={'md-download'}
                size={16}
                color={'#6c7073'}
              />
              Download
            </a>
          </div>
        </div>
        <div className={'column align-center'} style={{ marginTop: '100px' }}>
          <div className='arrow-bottom' />
        </div>
        <div className={'row-lg column justify-around align-center bg p-5'}>
          <h6
            style={{
              fontSize: '12px',
              color: '#595959',
              marginTop: '5px',
              marginBottom: '5px'
            }}
          >
            COPYRIGHT © 2019 ASHER TOUFEEQ PERSONAL PROFILE - ALL RIGHTS
            RESERVED.
          </h6>
          <div
            className={'row'}
            style={{ marginTop: '5px', marginBottom: '5px' }}
          >
            {social.map((item, i) => (
              <a
                href={item.link}
                target={'_blank'}
                style={{ textDecoration: 'none' }}
              >
                <Ionicons
                  key={i}
                  style={{ margin: '16px', padding: 0 }}
                  name={item.name}
                  color={'rgba(116, 117, 121, 1)'}
                  size={30}
                />
              </a>
            ))}
          </div>
          <h6
            style={{
              fontSize: '12px',
              color: '#595959',
              marginTop: '5px',
              marginBottom: '5px'
            }}
          >
            Powered By Ggg
          </h6>
        </div>
      </div>
    )
  }
}

export default Main
