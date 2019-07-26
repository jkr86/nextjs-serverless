import React, {useEffect, useState} from "react";
import {TimelineLite, TweenMax} from "gsap";
import Link from 'next/link'
function Nav() {
    const [animation, setAnimation] = useState(null);
    const [t1] = useState(new TimelineLite());
    useEffect(() => {
        setAnimation(
            t1.to("#a", .6, {opacity: 1, y: 30})
                .to("#p", .8, {opacity: 1, y: 30})
                .to("#w", 1, {opacity: 1, y: 30})
                .to("#z", 1.1, {opacity: 1, y: 30})
        );
    }, []);
    return (
        <div>
        <main>
            <div>
                <ul>

                    <li id="a" style={{opacity:0}}><Link href='/'>
                        <a>Home</a>
                    </Link></li>
                    <li id="p" style={{opacity:0}}><Link href='/news'>
                        <a>News</a>
                    </Link></li>
                    <li id="w" style={{opacity:0}}><Link href='/contact'>
                        <a>Contact Us</a>
                    </Link></li>
                    {/*<li id="z" style={{opacity:0}}><a>About</a></li>*/}
                </ul>
            </div>
        </main>
            <style jsx>{`
                   body{
                   margin:0;
                   }
                   ul {
                   padding: 12px 20px 62px 20px;
  list-style-type: none;
  margin:-8px !important;
    margin: 0;
    overflow: hidden;
    background-color: #333333e3;
    min-height: 86px;
    display: flex;
    justify-content: center;
    align-items: center;
}

li {
  float: left;
}

li a {
cursor:pointer;
      display: block;
    color: white;
    text-align: center;
    padding: 10px 16px;
    border-radius: 5px;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-size: 19px;
}

li a:hover:not(.active) {
  background-color: #111;
}


      `}</style>
        </div>
    );
}

export default Nav;
