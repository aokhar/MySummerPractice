import React, {Component} from 'react';
import "../Styles/VideoStyles.css"
import White from "../Usage/Needed/White.jpg"
import "../Styles/ImageStyle.css"
import "../Styles/VideoStyles.css"
class Video extends Component {
    render() {
        return (
            <center>
                <img
                    src={White}
                    align="center"
                    height="100px"
                    weight="25px"
                    alt="white"
                />
                <div className="thumb-wrap">
                    <iframe  src="https://www.youtube.com/embed/l4Kgq0Fv2vE" frameBorder="0"
                            allowFullScreen ></iframe>
                </div>
                <center><font size="2">Дані матеріали не можна використовувати в цілях профорієнтаційної діяльності і я  не згоднен на обробку і поширення особистих даних.Я не даю згоду на їх поширення та публікацію.    </font></center>
                <img
                    src={White}
                    align="center"
                    height="140px"
                    weight="25px"
                    alt="white"
                />
    </center>
        );
    }
}

export default Video;
