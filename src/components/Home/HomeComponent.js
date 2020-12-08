import React from 'react';
import { Row, Container, Col, Card, CardImg, CardTitle, CardBody, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function test(array){
    array = array.filter(anime => anime.image !== "https://st.kp.yandex.net/images/no-poster.gif" && anime.link !== "");
    const result = [];
    const map = new Map();
    for (const item of array) {
        if(!map.has(item.link)){
            map.set(item.link, true);
            result.push({
                id: item.id,
                link: item.link,
                title: item.title,
                title_orig: item.title_orig,
                year: item.year,
                last_season: item.last_season,
                last_episode: item.last_episode,
                total_episodes: item.total_episodes,
                status: item.status,
                image: item.image,
                genre_1: item.genre_1,
                genre_2: item.genre_2,
                genre_3: item.genre_3,
                imdb: item.imdb,
                description: item.description,
                updated: item.updated,
                seasons: item.seasons
            });
        }
    }
    return result
};

function AnimeCards({animelist}) {
    let animelistArray = test(animelist);
    const animeElement = animelistArray.filter(anime => anime.image !== "https://st.kp.yandex.net/images/no-poster.gif" && anime.link !== "").slice(0,66).map((anime) => {
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
                                    {`Серии ${anime.last_episode} из ${anime.total_episodes}`}
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

function Home(props){

    return(
        <Container className={`${styles.container}`}>
            <Row>
                <AnimeCards animelist={props.animelist}/>
            </Row>
        </Container>
    );
}

export default Home;