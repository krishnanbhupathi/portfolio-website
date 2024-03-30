import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Krishna</h1>
        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>

          <li>
            <a href='#experience' className='footer__link'>
              Experience
            </a>
          </li>

          <li>
            <a href='#skills' className='footer__link'>
              Skills
            </a>
          </li>
        </ul>

        <div className='footer__social'>
          <a
            href='https://www.linkedin.com/in/murali-krishna-b-913236190/'
            className='footer__social-link'
            target='_blank'
          >
            <i class='bx bxl-linkedin'></i>
          </a>
          <a
            href='https://github.com/krishnanbhupathi'
            className='footer__social-link'
            target='_blank'
          >
            <i class='bx bxl-github'></i>
          </a>
          <a
            href='https://www.instagram.com/krishnanbhupathii/'
            className='footer__social-link'
            target='_blank'
          >
            <i class='bx bxl-instagram'></i>
          </a>
        </div>
        <div className='footer__copy'>&#169; Krishna. All rights Reserved</div>
      </div>
    </footer>
  )
}

export default Footer
