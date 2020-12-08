import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import styles from './Disclaimer.module.css';

function Disclaimer(props) {
    return(
        <Container className={`${styles.container}`}>
            <Row>
                <Col xs="12" className={`${styles.title}`}>
                    <h3>Отказ от ответственности</h3>
                </Col>
            </Row>
            <Row>
                <Col xs="12" className={`${styles.p}`}>
                    <p>
                    Мы не утверждаем, что являемся создателями аниме-сериалов. Мы абсолютно не участвовали ни в каком создании аниме-сериалов, а просто преданные фанаты различных аниме-сериалов, которые нашли время для создания этого сайта. 
                    Ни один из видеоконтента данного веб-сайта не размещен на наших серверах или на серверах наших сотрудников, членов семьи или иным образом связан каким-либо образом. Если не указано иное, весь видеоконтент загружается и 
                    размещается на серверах третьих сторон, так называемых веб-сайтов для обмена видео. В случае нарушения авторских прав или любого другого вопроса, пожалуйста, свяжитесь напрямую с ответственными лицами. 
                    Animesaver.ru просто функционирует как платформа для распространения аниме культуры в России. Тем не менее, animesaver.ru твердо верит в защиту интеллектуальной собственности и будет готов помочь, 
                    когда это возможно и применимо. Пользователи, которые загружают на эти сайты, соглашаются не загружать нелегальный контент при создании своих учетных записей. animesaver.ru не несет ответственности за контент, 
                    размещенный на сторонних веб-сайтах, а также мы сами не загружаем видео и не призываем других делать это. Аниме-видео транслируются непосредственно из сторонних сервисов обмена видео. Мы здесь для того, чтобы 
                    поощрять продолжающуюся популярность японского аниме и для того, чтобы многие зрители смотрели его. Все остальные торговые марки, логотипы и изображения являются собственностью их соответствующих и законных владельцев.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Disclaimer;