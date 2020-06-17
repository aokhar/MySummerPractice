import React, {Component} from 'react';
import {CardDeck, Container,Card} from "react-bootstrap";
import Photo1 from "../Usage/AboutMePhotos/AboutMePhoto.jpg"
import White from "../Usage/Needed/White.jpg"
import "../Styles/ImageStyle.css"
import Photo2 from "../Usage/AboutMePhotos/AboutMePhoto2.jpg"
import Photo3 from "../Usage/AboutMePhotos/AboutMePhoto3.jpg"
import Photo4 from "../Usage/AboutMePhotos/AboutMePhoto4.jpg"
class AboutMe extends Component {
    render() {
        return (
            <Container>
                <img
                    src={White}
                    align="center"
                    height="130px"
                    weight="25px"
                    alt="white"
                />
                <CardDeck >
                    <Card border="dark" >
                        <Card.Img
                        variant="top"
                        src={Photo1}
                        />
                        <Card.Title><center>Початок життя</center></Card.Title>
                        <Card.Text><center>Мене звати Калюга Олексій Романович.
                        Я народився у тихому індустріальному містечку Кам'янське ,що у 40 кілометрах від міста Дніпро,у жовтні 2000 року. Усе життя до вступу в університет прожив на лівому березі свого міста.</center>
                        </Card.Text>
                    </Card>
                    <Card border="dark">
                        <Card.Img
                            variant="top"
                            src={Photo2}
                        />
                        <Card.Title> <center> Навчання</center></Card.Title>
                        <Card.Text><center>За свое життя я навчався у двух школа: Кам'янськая середня загальна школа №29 з 7 до 13 років( перші 6 класів), та у Академічному ліцеї №15 з 13 до 17 років(7-11 клас).</center>
                        </Card.Text>
                    </Card>
                </CardDeck>
                <img
                    src={White}
                    align="center"
                    height="50px"
                    weight="25px"
                    alt="white"
                />
                <CardDeck >
                    <Card border="dark" >
                        <Card.Img
                            variant="top"
                            src={Photo3}
                        />
                        <Card.Title><center>Шкільне життя</center></Card.Title>
                        <Card.Text>
                            <center>Усе свое життя був відмінником.Виступав у шкільних та міжшкільних змаганнях(заходах).Виступав на областних олімпіадах з біології та екології.Приймав участь у житті класу.</center>
                        </Card.Text>
                    </Card>
                    <Card border="dark" >
                        <Card.Img
                            variant="top"
                            src={Photo4}
                        />
                        <Card.Title><center>Позакласне життя</center></Card.Title>
                        <Card.Text><center>За свое життя спробув себе у багатьох видах спорту: таких як баскетбол,тенніс,плавання,академічне веслування.Здобув декілька призових місць: тенніс(3 місце по області,академічне веслування 2 та 3 місце по області).Був учасником декількох війскових змагань "Джура".Виступав на наукових семінарах з екології і здобував перемоги завдяки своїм роботам</center>
                        </Card.Text>
                    </Card>
                </CardDeck >
                <h1></h1>
                <center><font size="2">Дані матеріали не можна використовувати в цілях профорієнтаційної діяльності і я  не згоднен на обробку і поширення особистих даних. Я не даю згоду на їх поширення та публікацію.</font></center>
                <img
                    src={White}
                    align="center"
                    height="140px"
                    weight="25px"
                    alt="white"
                />
            </Container>
        );
    }
}

export default AboutMe;
