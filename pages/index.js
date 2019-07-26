import Nav from "../components/navbar";

function Index() {
  return (
    <main>
        <Nav/>
        <div>
            <div id="welcome-section">
                <div id="layer">
                    <h1 id="welcomeHeadline">Hi! I'm Junaid,</h1>
                    <p id="welcomeParagraf">Front-End Developer</p>
                </div>
            </div>
        </div>
      <style jsx>{`
#welcome-section {
	background-image: url("https://www.masterword.com/wp-content/uploads/2018/06/freelancing-language-industry-coffee-computer-pen-note-pad-phone-wood-table.jpg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	height: 100vh;
	margin-top: -21px;


}

#layer {
	background-color: rgba(255, 163, 138, 0.6);
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

#welcomeHeadline {
	background-color: transparent;
	color: white;
	text-align: center;
	padding-top: 35vh;
}

#welcomeParagraf {
	background-color: transparent;
	color: white;
	text-align: center;
  font-size: 1.8vw;
}
      `}</style>
    </main>
  );
}

export default Index;
