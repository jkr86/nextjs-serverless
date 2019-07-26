import React from "react";
import Nav from '../components/navbar'

const Home = () => {

    return (
    <div>
    <Nav/>
    <div>
        <form className="form-style-7">
            <ul>
                <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" maxLength="100"/>
                        <span>Enter your full name here</span>
                </li>
                <li>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" maxLength="100"/>
                        <span>Enter a valid email address</span>
                </li>
                <li>
                    <label htmlFor="url">Website</label>
                    <input type="url" name="url" maxLength="100"/>
                        <span>Your website address (eg: http://www.google.com)</span>
                </li>
                <li>
                    <label htmlFor="bio">About You</label>
                    <textarea name="bio" onKeyUp="adjust_textarea(this)"/>
                    <span>Say something about yourself</span>
                </li>
                <li>
                    <input type="submit" value="Send This"/>
                </li>
            </ul>
        </form>
    </div>
    <style>{`
      .form-style-7{
	max-width: 504px;
    margin: 114px auto;
	background:#fff;
	border-radius:2px;
	padding:20px;
	font-family: Georgia, "Times New Roman", Times, serif;
}
.form-style-7 h1{
	display: block;
	text-align: center;
	padding: 0;
	margin: 0px 0px 20px 0px;
	color: #5C5C5C;
	font-size:x-large;
}
.form-style-7 ul{
	list-style:none;
	padding:0;
	margin:0;
}
.form-style-7 li{
	display: block;
    padding: 9px;
    border: 1px solid #b1aeae;
    margin-bottom: 51px;
    border-radius: 3px;
}
.form-style-7 li:last-child{
	border:none;
	margin-bottom: 0px;
	text-align: center;
}
.form-style-7 li > label{
	display: block;
	float: left;
	margin-top: -19px;
	background: #FFFFFF;
	height: 14px;
	padding: 2px 5px 2px 5px;
	color: #868383;
	font-size: 14px;
	overflow: hidden;
	font-family: Arial, Helvetica, sans-serif;
}
.form-style-7 input[type="text"],
.form-style-7 input[type="date"],
.form-style-7 input[type="datetime"],
.form-style-7 input[type="email"],
.form-style-7 input[type="number"],
.form-style-7 input[type="search"],
.form-style-7 input[type="time"],
.form-style-7 input[type="url"],
.form-style-7 input[type="password"],
.form-style-7 textarea,
.form-style-7 select
{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	width: 100%;
	display: block;
	outline: none;
	border: none;
	height: 25px;
	line-height: 25px;
	font-size: 16px;
	padding: 0;
	font-family: Georgia, "Times New Roman", Times, serif;
}
.form-style-7 input[type="text"]:focus,
.form-style-7 input[type="date"]:focus,
.form-style-7 input[type="datetime"]:focus,
.form-style-7 input[type="email"]:focus,
.form-style-7 input[type="number"]:focus,
.form-style-7 input[type="search"]:focus,
.form-style-7 input[type="time"]:focus,
.form-style-7 input[type="url"]:focus,
.form-style-7 input[type="password"]:focus,
.form-style-7 textarea:focus,
.form-style-7 select:focus
{
}
.form-style-7 li > span{
	    background: #ececec;
    display: block;
    padding: 6px;
    margin: 0 -9px -9px -9px;
    text-align: center;
    color: #8a6a6a;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
}
.form-style-7 textarea{
	resize:none;
}
.form-style-7 input[type="submit"],
.form-style-7 input[type="button"]{
	background: #2471FF;
	border: none;
	padding: 10px 20px 10px 20px;
	border-bottom: 3px solid #5994FF;
	border-radius: 3px;
	color: #D2E2FF;
}
.form-style-7 input[type="submit"]:hover,
.form-style-7 input[type="button"]:hover{
	background: #6B9FFF;
	color:#fff;
}
    `}</style>
    </div>
    );

};

export default Home
