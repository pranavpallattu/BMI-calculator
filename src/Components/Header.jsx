import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {

    return (
      <>
        <Navbar className="bg-body-secondary">
        <Container className='d-flex justify-content-center flex-row'>
          <Navbar.Brand>
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9dELYxyEbtj0BvH2IAcyRfJrxBbN55qlXg&s"
              width="90"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           <h1>BMI CALCULATOR</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
        
      </>
    )
  }
  
  export default Header