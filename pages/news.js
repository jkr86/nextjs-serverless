import React from "react";
import Nav from '../components/navbar'

const Home = () => {

    return (
        <div>
            <Nav/>
            <div>
                <ul className="blog-post columns-2">
                    <li>
                        <img
                            src="https://ununsplash.imgix.net/photo-1414788020357-3690cfdab669?q=75&fm=jpg&s=da7d3842604f06bf5c6ded7f4fe7aeed"/>
                        <h3>Blog Post One</h3>
                        <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                            nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                            ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <div className="button">Read More</div>
                    </li>
                    <li>
                        <img
                            src="https://unsplash.imgix.net/photo-1415889678233-eb900aeee9e1?q=75&fm=jpg&s=a41f4d6b1848cd673323fa4ee17da470"/>
                        <h3>Blog Post Two</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                        <div className="button">Read More</div>
                    </li>
                    <li>
                        <img
                            src="https://unsplash.imgix.net/photo-1414542563971-94513793d046?q=75&fm=jpg&s=8fbfdbbec683a6b4634e558f7db67ee7"/>
                        <h3>Blog Post Three</h3>
                        <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                            nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                            ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <div className="button">Read More</div>
                    </li>
                    <li>
                        <img
                            src="https://ununsplash.imgix.net/photo-1416339134316-0e91dc9ded92?q=75&fm=jpg&s=883a422e10fc4149893984019f63c818"/>
                        <h3>Blog Post Four</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                        <div className="button">Read More</div>
                    </li>
                </ul>
            </div>
            <style>{`
      ul.blog-post {
      margin-top: 65px;
	list-style: none;
	font-size: 0px;
	margin-left: -2.5%;
}

ul.blog-post li {
	display: inline-block;
  border-radius: 3px;
	padding: 1.5em;
  width: 400px;
	margin: 0 0 2.5% 2.5%;
	background: #fff;
	border: 1px solid #eee;
	font-size: 16px;
	font-size: 1rem;
	vertical-align: top;
	box-shadow: 0 0 6px #eee;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
}

ul.blog-post li img {
	max-width: 100%;
	height: auto;
	margin: 0 0 10px;
}

ul.blog-post li h3 {
	margin: 0.6em 0 0.6em;
  text-align: left!important;
  font-family: Source Sans Pro, sans-serif;
  color: #333;
  font-size: 1.1em;
}

ul.blog-post li p {
  margin: 0.6em 0 1.3em;
	font-size: .9em;
	line-height: 1.5em;
	color: #8c8c8c;
  text-align: left!important;
  font-family: Open Sans, sans-serif;
  font-weight: 300;
}

.button {
  text-align: center;
  width: 20%;
  border: none;
  background: #36B3A8;
  font-family: Open Sans, sans-serif;
  font-weight: 300;
  font-size: 0.7em;
  color: white;
  border-radius: 5px;
  padding: 8px 15px 8px 15px;
}

.button:hover {
  opacity: 0.9;
  cursor: pointer;
}

ul.blog-post.columns-2 li {
	width: 37%;
}

    `}</style>
        </div>
    );

};

export default Home
