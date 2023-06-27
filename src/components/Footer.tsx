import { Container } from 'react-bootstrap'

export const Footer = () => {
  const text = `ittrainbow ${String.fromCodePoint(0x00a9)} 2023`
  
  return (
    <section className="pt-12" id="footer">
      <Container>
        <div className="pb-12 text-center text-gray-400">
          <div>{text}</div>
        </div>
      </Container>
    </section>
  )
}
