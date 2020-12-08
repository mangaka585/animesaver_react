import React from 'react';
import { Row, Container, Col, Card, CardImg, CardTitle, CardBody, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from '../LoadingComponent';
import styles from './Home.module.css';

function AnimeCards({animelist}) {
    const animeElement = animelist.slice(0,66).map((anime) => {
        return(
            <Col key={anime.id} xl="4" md="6" xs="12">
                <Link to={`/anime/${anime.link}`} className={`${styles.no_decoration}`}>
                    <Card className={`bg-light border-dark mb-3 ${styles.card}`}>
                        <Row className="no-gutters">
                            <Col xs="4">
                                <CardImg src={`${anime.image}`} className={`${styles.card_pic}`} alt={`${anime.title_orig}`} />
                            </Col>
                            <Col xs="8">
                                <div className={`${styles.card_header} dark pt-1 pb-1 pr-1 text-secondary text-right`}>
                                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                                    {anime.updated.substring(8,10) + "." + anime.updated.substring(5,7) + "." + anime.updated.substring(0,4)}
                                </div>
                                <CardBody className={`${styles.card_body} text-dark h-auto pl-2 pt-1 pb-1 pr-2`}>
                                    <CardTitle className={`${styles.card_title}`}>{anime.title}</CardTitle>
                                </CardBody>
                                <CardFooter className={`${styles.card_footer} bg-transparent pb-1 pt-2 pl-1 pr-1 text-primary`}><i className="fa fa-list-ul mr-1" aria-hidden="true"></i>
                                    {`Серии ${anime.last_episode}`}
                                </CardFooter>
                            </Col>
                        </Row>
                    </Card>
                </Link>
            </Col>
        )
    })
    if (animelist.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (animelist.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{animelist.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else 
        return(
            <React.Fragment>
                {animeElement}
            </React.Fragment>
    )
}

function Home(props){
    console.log(props.animelist);
    return(
        <Container className={`${styles.container}`}>
            <Row>
                <AnimeCards animelist={props.animelist} />
            </Row>
        </Container>
    );
}

export default Home;