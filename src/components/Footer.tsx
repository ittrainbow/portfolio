import { Container, Row, Col } from 'react-bootstrap'
import { MailchimpForm } from './MailchimpForm'
import { BsYoutube, BsTwitter, BsFillTelephoneFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className=" flex flexrow gap-3 ml-2 text-5xl">
              <a href="https://twitter.com/ittrainbow">
                <BsTwitter />
              </a>
              <a href="https://www.youtube.com/channel/UChRO1srqMVe1_oMMs8nTnyw">
                <BsYoutube />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = 'mailto:nom4d@yandex.ru'
                }}
              >
                <HiMail />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
