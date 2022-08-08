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
    <Card.Text>
 <ol>
<li>
<strong>Bismillah</strong> (before you start)
</li>
<li>
<strong>Allahou akbar</strong> (Put both hands up next to ears and then back together. Right arm over left and look at the ground)
</li>
<li>
<strong>A3udoe billahi miena sheytan irradjiem</strong> (I seek refuge with Allah from the cursed satan)
</li>
<li>
(Surah Al Fatiha, you ALWAYS start with this Surah)
<ul></ul>
Bismillahi rahmani raheem. In the name of Allah, the Most Merciful, the Most Merciful.

Alhamdoulilahi rabbi-al 3alamin          Praise be to Allah, the Lord of the Worlds.

Arrahmani rahim                                      The Most Merciful, the Most Merciful.

Maliki yawmi-din                        The Ruler on the Day of Judgment.

Iyaka na3 budu wa iyaka nasta 3in. You alone do we worship and You alone do we ask for help.

Ihdina sirata al mustaqim                         Lead us on the straight Path.

Sirata ladina an-3amta 3aleyhim     Ghayril ma'dobi 3aleyhim wa ladalin  The Path of those on whom You have bestowed favors, not of those upon whom the wrath rests and not that of the erring.

Amin
</li>
</ol>   
</Card.Text>
</Card.Body></Card>
</div>
  )
}

