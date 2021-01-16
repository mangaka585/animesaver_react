import { render } from '@testing-library/react';
import React from 'react';
import { Container, Media, Row, Col, ButtonToggle } from 'reactstrap';
import styles from './Animepage.module.css';

function Buttons({series}) {
    delete series.number;  //Удаляем первое свойство, которое обозначает просто номер сезона
    let seriesArray = [];
    for (let key in series) {
        seriesArray.push([key, series[key]]);
    }
    const serieaElement = seriesArray.map((key) => {
        return(
            <ButtonToggle key={key[0].substring(8,20)} outline color="primary" className={`${styles.button} mr-2 mb-2`} data-sourse={key[1]} data-episodenumber={key[0].substring(8,20)}>{key[0].substring(8,20)}</ButtonToggle>
        )
    })
    return(           
        <React.Fragment>
            {serieaElement}
        </React.Fragment>
    );
}

class Animepage extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {

        //Переключение серий и картинка в картинке
        var pleer = document.getElementById('kodik-player');
        let episodeNumber = document.getElementById('episodeNumber');
        let buttons = document.getElementsByClassName(styles.button);
        for (let button of buttons) {
            button.addEventListener('click', () => {
                pleer.src = button.dataset.sourse;
                episodeNumber.innerHTML = "Серия " + button.dataset.episodenumber;
            })
        }
    }

    render() {
        //Блок удобного управления содержимым информации аниме
        let titleOrigName = (this.props.anime.title_orig !== "" && this.props.anime.title_orig !== undefined) ? document.createElement("b").innerHTML = "Оригинальное название: " : "";
        let titleOrig = (this.props.anime.title_orig !== "" && this.props.anime.title_orig !== undefined) ? this.props.anime.title_orig : "";

        let genreName = (this.props.anime.genre_1 !== "" || this.props.anime.genre_2 !== "" || this.props.anime.genre_3 !== "") ? document.createElement("b").innerHTML = "Жанры: " : "";
        let genre1 = this.props.anime.genre_1 !== "" && this.props.anime.genre_1 !== undefined ? this.props.anime.genre_1 + ", " : "";
        let genre2 = this.props.anime.genre_2 !== "" && this.props.anime.genre_2 !== undefined ? this.props.anime.genre_2 + ", " : "";
        let genre3 = this.props.anime.genre_3 !== "" && this.props.anime.genre_3 !== undefined ? this.props.anime.genre_3 : "";

        let yearName = this.props.anime.year !== "" && this.props.anime.year !== undefined ? "Год: " : "";
        let year = this.props.anime.year !== "" && this.props.anime.year !== undefined ? this.props.anime.year : "";

        let imdbName = this.props.anime.imdb !== "" && this.props.anime.imdb !== undefined ? "Рейтинг IMDB: " : "";
        let imdb = this.props.anime.imdb !== "" && this.props.anime.imdb !== undefined ? this.props.anime.imdb : "";

        let lastepisodeName = this.props.anime.total_episodes !== "" && this.props.anime.total_episodes !== undefined ? "Количество загруженных серий: " : "";
        let lastepisode = this.props.anime.total_episodes !== "" && this.props.anime.total_episodes !== undefined ? this.props.anime.total_episodes : "";

        let descriptionName = this.props.anime.description !== "" && this.props.anime.description !== undefined ? "Описание: " : "";
        let description = this.props.anime.description !== "" && this.props.anime.description !== undefined ? this.props.anime.description : "";
    

        return(
            <Container className={`${styles.container}`}>
                <Row className={`${styles.mediarow} mb-3`}>
                    <Media>
                        <Media left className="mr-2">
                            <Media object src={this.props.anime.image} alt={this.props.anime.title} className={`${styles.mediaimg}`}/>
                        </Media>
                        <Media body className={`${styles.mediatext}`}>
                            <Media heading className={`${styles.heading}`}>
                            {this.props.anime.title}
                            </Media>
                            <b>{titleOrigName}</b>{titleOrig}<br></br>
                            <b>{genreName}</b>{genre1 + genre2 + genre3}<br></br>
                            <b>{yearName}</b>{year}<br></br>
                            <b>{imdbName}</b>{imdb}<br></br>
                            <b>{lastepisodeName}</b>{lastepisode}<br></br>
                            <b>{descriptionName}</b>{description}<br></br>
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
                                <Buttons series={this.props.anime.seasons}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl="5">
                        <Row>
                            <Col xs="12" className="text-center">
                                <h5 id="episodeNumber">Выберите серию, чтобы начать просмотр</h5>
                            </Col>
                            <Col xs="12" className={`${styles.pleerblock} align-middle`}>
                                <iframe src="" id="kodik-player" allowfullscreen="" allow="autoplay *; fullscreen *" width="100%" height="100%" frameborder="0"></iframe>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Animepage;