import "./styles.css"
import Card from "react-bootstrap/Card"
import Quran from "../holyquran.png"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BsGrid1X2 } from "react-icons/bs";

export default function PrayerPage () {
  const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(fetchBtcInfo(BTC));
  // }, [dispatch, BTC]);
  return ( 
    <div className="HomePage" style={{ backgroundImage: `url(${Quran})` }}>
            <Card text="white" bg="dark" style={{ width: "70rem", height: "16.5rem", color: "black" }} className="prayertimescard">
    <Card.Body>
     Bismillah  (when you start)

Allahou akbar (both hands up next to ears and then back together. Right arm over left and looking at the ground to be humble)

A3udoe billahi miena sheytan irradjiem
(I seek refuge with Allah from the cursed satan)

(Surah Al Fatiha, ALWAYS start your prayer with this)

Bismillahi rahmani raheem. In the name of Allah, the Most Merciful, the Most Merciful.

Alhamdoulilahi rabbi-al 3alamin          Praise be to Allah, the Lord of the Worlds.

Arrahmani rahim                                      The Most Merciful, the Most Merciful.

Maliki yawmi-din                        The Ruler on the Day of Judgment.

Iyaka na3 budu wa iyaka nasta 3in. You alone do we worship and You alone do we ask for help.

Ihdina sirata al mustaqim                         Lead us on the straight Path.

Sirata ladina an-3amta 3aleyhim     Ghayril ma'dobi 3aleyhim wa ladalin  The Path of those on whom You have bestowed favors, not of those upon whom the wrath rests and not that of the erring.

Amin
</Card.Body></Card>
</div>
  )
}

