import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, CardGroup,Card,} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CarBikes360</title>
        <meta name="description"content="Generated by create next app" />
        <link rel="icon" href="/logo2.jpg" />
      </Head>
      <main className={styles.main}>

      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="103.jpg" 
          alt="Range Rover"
        />
        <Carousel.Caption>
          <h3>Range Rover</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
           src="101.jpg" 
          alt="Audi"
        />
        <Carousel.Caption>
          <h3>Audi</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="104.jpg" 
          alt="BMW"
        />
        <Carousel.Caption>
          <h3>BMW</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="102.jpg" 
          alt="BMW"
        />
        <Carousel.Caption>
          <h3>BMW</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.carbike360.com/">CarBikes360</a>
        </h1>

        <p className={styles.description}>
        <b>Details About The Bikes And Cars</b>
        <code className={styles.code}></code>
        </p>
        <div className={styles.grid}>
        <h2>Available Bikes </h2>
          <div className={styles.card}>
            <div className={styles.box}>
              <Image className={styles.image} src="/11.jpg" alt="pic1" width="300px" height="200px"/>
              <h4>Royal Enfield </h4>
              <h6>Manual</h6>
              <h4>₹2.80 Lack Onwards</h4>

              <div className={styles.links}>
            <a href='/cars/about'>View Details</a>
            </div>
            </div>
            <div>
            <Image className={styles.image} src="/9.jpg" width="300px" height="200px"/>
            <h4>KTM</h4>
            <h6>Manual</h6>
            <h4>₹2.50 Lack Onwards</h4>
           
            {/* <h4><Button variant="outline-info">View Details</Button>{''}</h4> */}
            <div className={styles.links}>
            <a href='/cars/about1'>View Details</a>
            </div>
            </div>
            <div>
            <Image className={styles.image} src="/10.jpg" width="300px" height="200px"/>
            <h4>Royal Enfield</h4>
            <h6>Manual</h6>
            <h4>₹2.90 Lack Onwards</h4>

            <h4><Button variant="outline-info">View Details</Button>{''}</h4>
            </div>
            <div>
            <Image className={styles.image} src="/12.jpg" width="300px" height="200px"/>
            <h4>Suzuki</h4>
            <h6>Manual</h6>
            <h4>₹1.80 Lack Onwards</h4>
            
            <h4><Button variant="outline-info">View Details</Button>{''}</h4>
            </div>
            </div>
          <h2>Available Cars</h2>
          <div className={styles.card}>
          <div>
            <Image className={styles.image} src="/fortuner.jpg" width="300px" height="200px"/>
            <h4>Fortuner</h4>
            <h6>Automatic</h6>
            <h4>₹35.88 Lack Onwards</h4>    
            <h4><Button variant="outline-info">View Details</Button>{''}</h4>
            </div>
            <div>
            <Image className={styles.image} src="/thar.jpg" width="300px" height="200px"/>
            <h4>Mahindra Thar</h4>
            <h6>Automatic</h6>
            <h4>₹15.90 Lack Onwards</h4>
            <h4><Button variant="outline-info">View Details</Button>{''}</h4>
            </div>
            <div>
            <Image className={styles.image} src="/creta.jpg" width="300px" height="200px"/>
            <h4>Creta</h4>
            <h6>Automatic</h6>
            <h4>₹13.90 Lack Onwards</h4>
            <h4><Button variant="outline-info">View Details</Button>{''}</h4>
            </div>
            <div>
            <Image className={styles.image} src="/mustang.jpg.jpg" width="300px" height="200px"/>
            <h4>Ford Mustang Gt</h4>
            <h6>Automatic</h6>
            <h4>₹74.62 Lack Onwards</h4>
            <h4><Button variant="outline-info">View Details</Button>{''}</h4>
            </div>
          </div>
        </div>
      </main>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="\8.jpg" />
        <Card.Body>
          <Card.Title>Bugati</Card.Title>
          <Card.Text>
          This car Is Amazing
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Updated </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/9.jpg" />
        <Card.Body>
          <Card.Title>Royal Enfield </Card.Title>
          <Card.Text>
          This Bike Is Amazing
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Updated </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/7.jpg"/>
        <Card.Body>
         <h4> <Card.Title>Ford</Card.Title></h4>
          <Card.Text>
           This car Is Amazing
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Updated</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      <footer className={styles.footer}>
        <a
          href="https://www.carbike360.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {''}
          <span className={styles.logo}>
            <Image src="/CarBike.webp" alt="logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
  