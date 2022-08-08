import "./styles.css"
import Card from "react-bootstrap/Card"
import Quran from "../holyquran.png"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BsGrid1X2 } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md"
import { useState } from "react";

export default function HomePage () {
  const [changeLocationMode, setChangeLocationMode] = useState(false);
  const dispatch = useDispatch();
  


  // useEffect(() => {
  //   dispatch(fetchBtcInfo(BTC));
  // }, [dispatch, BTC]);
  return ( 
    <div className="HomePage" style={{ backgroundImage: `url(${Quran})` }}>
       <Card text="white" bg="dark" style={{ width: "70rem", height: "16.5rem", color: "black" }} className="prayertimescard">
      <Card.Body className="hadith">
      <div>
      <p className="hadithTitle">Abu Hurayra (RA) reported: The Messenger of Allah ﷺ said,</p>
      <h1> 
        “Take on only as much as you can do of good deeds, for the best of deeds is that which is done consistently, even if it is little.”</h1> 
        <p>(Sahih according to Al-Albani)</p>
        </div>
      </Card.Body>
      </Card>
      <Card text="white" bg="dark" style={{ width: "70rem", height: "15rem", color: "black" }} className="prayertimescard">
      <Card.Header className="CardHeader"><h1>Prayer Times</h1>{!changeLocationMode ? <button onClick={() => setChangeLocationMode(true)} className="location"><MdLocationOn/>Tilburg, Netherlands</button> : <><button onClick={() => setChangeLocationMode(false)} className="location"><MdLocationOn/></button><input></input></>}</Card.Header>
      <Card.Body className="CardContent">
      <div className="PrayerTime">  
      <h3>Fajr</h3>
      <p>04:34</p>
      </div>
      <div className="PrayerTime">
      <h3>Sunrise</h3>
      <p>06:08</p>
      </div>
      <div className="PrayerTime">
      <h3>Dhuhr</h3>
      <p>13:36</p>
      </div>
      <div className="PrayerTime">
      <h3>Asr</h3>
      <p>17:54</p>
      </div>
      <div className="PrayerTime">
      <h3>Maghrib</h3>
      <p>21:23</p>
      </div>
      <div className="PrayerTime">
      <h3>Isha</h3>
      <p>22:56</p>
      </div>
      </Card.Body>
      </Card>
</div>
  )
}

