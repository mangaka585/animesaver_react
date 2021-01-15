import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import styles from './Footer.module.css';

function Footer(props) {
    return(
    <div className={`${styles.footer} mt-2`}>
        <Container>
            <Row className="border-bottom pb-3 pt-3">
                <Col xl="3" xs="12" className="mb-sm-auto mb-2">
                    <Container>
                        <Row>
                            <Col xs="12" className={`text-white ${styles.comfortaa} text-sm-left text-center`}>
                                <h5>Социальные сети</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="1">
                                <i className="fa fa-vk text-info" aria-hidden="true"></i>
                            </Col>
                            <Col xs="10">
                                <a href="https://vk.com/weeklysaver" target="_blank" rel="noreferrer" className={`${styles.no_decoration} text-secondary`}>
                                    VKontakte
                                </a>
                            </Col>
                        </Row>
                        <Row className="text-secondary">
                            <Col xs="1">
                                <i className="fa fa-instagram fa-lg text-info" aria-hidden="true"></i>
                            </Col>
                            <Col xs="10">
                                <a href="https://www.instagram.com/animesaver.ru/?hl=en" target="_blank" rel="noreferrer" className={`${styles.no_decoration} text-secondary`}>
                                    Instagram
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xl="3" xs="12" className="mb-sm-auto mb-3">
                    <Container>
                        <Row>
                            <Col xs="12" className={`text-white ${styles.comfortaa} text-sm-left text-center`}>
                                <h5>Полезные ссылки</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="1">
                                <i className="fa fa-envelope-o text-info" aria-hidden="true"></i>
                            </Col>
                            <Col xs="10">
                                <a href="mailto:mangaka585@gmail.com" target="_blank" rel="noopener noreferrer" className={`${styles.no_decoration} text-secondary`}>
                                    Напишите нам
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="1">
                                <i className="fa fa-file-powerpoint-o fa-lg text-info" aria-hidden="true"></i>
                            </Col>
                            <Col xs="10">
                                <Link to="/privacypolicy" className={`${styles.no_decoration} text-secondary `}>
                                    Privacy Policy
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="1">
                                <i className="fa fa-gavel text-info" aria-hidden="true"></i>
                            </Col>
                            <Col xs="10">
                                <Link to="/disclaimer" className={`${styles.no_decoration} text-secondary `}>
                                    Disclaimer
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xl="6">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <p className={`${styles.min_size} text-secondary text-sm-left text-justify`}>Мы молодой, развивающийся сайт аниме с необычными планами на будущее. Ведь у нас есть еще и второе направление: мы создали первый еженедельный журнал российской манги. Прямо сейчас читайте наш журнал, смотрите аниме сериалы и фильмы без рекламы. Японские аниме доступны для просмотра без регистрации, смс и каких-либо ограничений. В наших планах стать самым масштабным в России порталом аниме!</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" className="text-sm-right text-center">
                                <h2><Link className={`${styles.no_decoration} align-bottom text-white ${styles.comfortaa}`} to="/home"><img src="img/S-icon.png" height="46" width="46" alt="icon"/> AnimeSaver</Link></h2>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row className="pb-3 pt-3">
                <Col xs="12" className={`text-center text-muted ${styles.min_size} `}>
                    Авторские права и торговые марки на аниме и другие рекламные материалы принадлежат их соответствующим владельцам, и их использование разрешено
                    в соответствии с положениями о добросовестном использовании Закона об авторском праве.
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Footer;