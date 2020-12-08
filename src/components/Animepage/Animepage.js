import React from 'react';
import { Container, Media, Row, Col, ButtonToggle } from 'reactstrap';
import styles from './Animepage.module.css';

function deleteFirstElement(arr) {
    arr = Object.values(arr);
    arr.splice(0,1);
    return arr;
}

function Buttons({series}) {
    let serieaArr = deleteFirstElement(series);
    const serieaElement = serieaArr.map((seria, index) => {
        return(
            <ButtonToggle outline color="primary" className={`${styles.button} mr-2 mb-2`}>{index + 1}</ButtonToggle>
        )
    })
    return(           
        <React.Fragment>
            {serieaElement}
        </React.Fragment>
    );
}

function Animepage(props){
    return(
        <Container className={`${styles.container}`}>
            <Row className={`${styles.mediarow} mb-3`}>
                <Media>
                    <Media left className="mr-2">
                        <Media object src={props.anime.image} alt={props.anime.title} className={`${styles.mediaimg}`}/>
                    </Media>
                    <Media body className={`${styles.mediatext}`}>
                        <Media heading className={`${styles.heading}`}>
                        {props.anime.title}
                        </Media>
                        {(props.anime.title_orig !== "" && props.anime.title_orig !== undefined) ? "Оригинальное название: " + props.anime.title_orig : ""}<br></br>
                        {(props.anime.genre_1 !== "" || props.anime.genre_2 !== "" || props.anime.genre_3 !== "") ? "Жанры: " : ""}{props.anime.genre_1 !== "" && props.anime.genre_1 !== undefined ? props.anime.genre_1 + ", " : ""}{props.anime.genre_2 !== "" && props.anime.genre_2 !== undefined? props.anime.genre_2 + ", " : ""}{props.anime.genre_3 !== "" && props.anime.genre_3 !== undefined? props.anime.genre_3 : ""}<br></br>
                        {props.anime.year !== "" && props.anime.year !== undefined ? "Год: " + props.anime.year : ""}<br></br>
                        {props.anime.imdb !== "" && props.anime.imdb !== undefined ? "Рейтинг IMDB: " + props.anime.imdb : ""}<br></br>
                        {props.anime.last_episode !== "" && props.anime.last_episode !== undefined? "Количество загруженных серий: " + props.anime.last_episode : ""}<br></br>
                        {(props.anime.description !== "" && props.anime.description !== undefined) ? "Описание: " + props.anime.description : ""}
                    </Media>
                </Media>
            </Row>
            <Row>
                <Col xl="7" className={`${styles.seriesblock}`}>
                    <Row>
                        <Col xs="12" className="mb-2">
                            <h5 className="text-center">Серии</h5>
                        </Col>
                    </Row>
                    <Row xs="12">
                        <Col xs="12" className="text-center">
                            <Buttons series={props.anime.seasons}/>
                        </Col>
                    </Row>
                </Col>
                <Col xl="5">
                    Здесь будет плеер
                </Col>
            </Row>
        </Container>
    );
}

export default Animepage;