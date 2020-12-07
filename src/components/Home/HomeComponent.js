import React, { Component } from 'react';
import { Row, Container, Col, Card, CardImg, CardTitle, CardBody, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function AnimeCards({leaders}) {
    const animeElement = leaders.map((anime) => {
        return(
            <Col key={anime.id} xl="4" md="6" xs="12">
                <Link to="#" className={`${styles.no_decoration}`}>
                    <Card className={`bg-light border-dark mb-3 ${styles.card}`}>
                        <Row className="no-gutters">
                            <Col xs="4">
                                <CardImg src="https://fast-anime.ru/shop/upload/100268197.jpg" className={`${styles.card_pic}`} alt="Доктор Стоун" />
                            </Col>
                            <Col xs="8">
                                <div className={`${styles.card_header} dark pt-1 pb-1 pr-1 bg-primary text-white text-right`}>
                                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                                    21.10.2020
                                </div>
                                <CardBody className={`${styles.card_body} text-dark h-auto pl-2 pt-1 pb-1 pr-2`}>
                                    <CardTitle className={`${styles.card_title}`}>Доктор Стоун</CardTitle>
                                </CardBody>
                                <CardFooter className={`${styles.card_footer} bg-transparent pb-1 pt-2 pl-1 pr-1 text-primary`}><i className="fa fa-list-ul mr-1" aria-hidden="true"></i>
                                    Серии 24 из 24
                                </CardFooter>
                            </Col>
                        </Row>
                    </Card>
                </Link>
            </Col>
        )
    })
    return(
        <React.Fragment>
            {animeElement}
        </React.Fragment>
    )
}

class Home extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Container className={`${styles.container}`}>
                <Row>
                    <AnimeCards leaders={this.props.leaders}/>
                </Row>
            </Container>
        );
    }
}

export default Home;