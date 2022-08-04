import "./styles.css"
import Card from "react-bootstrap/Card"
import Quran from "./holyquran.png"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BsGrid1X2 } from "react-icons/bs";

export default function HomePage () {
  const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(fetchBtcInfo(BTC));
  // }, [dispatch, BTC]);
  return ( 
    <div className="HomePage" style={{ backgroundImage: `url(${Quran})` }}>
      <Card  text="white"
bg="dark"
style={{ width: "70rem", height: "15rem", color: "black" }} className="prayertimescard">
      <Card.Header className="CardHeader"><h1>Prayer Times</h1></Card.Header>
      <Card.Body className="CardContent">
      <div className="PrayerTime">
      <h3>Fajr</h3>
      <p>04:40</p>
      </div>
      <div className="PrayerTime">
      <h3>Sunrise</h3>
      <p>06:28</p>
      </div>
      <div className="PrayerTime">
      <h3>Dhuhr</h3>
      <p>13:36</p>
      </div>
      <div className="PrayerTime">
      <h3>Asr</h3>
      <p>17:55</p>
      </div>
      <div className="PrayerTime">
      <h3>Maghrib</h3>
      <p>21:25</p>
      </div>
      <div className="PrayerTime">
      <h3>Isha</h3>
      <p>23:50</p>
      </div>
      </Card.Body>
      </Card>
</div>
  )
}

