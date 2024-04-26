import "./styles/home.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import { logout, auth } from "../utils/firebaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import ToolTipContainer from "../components/ToolTipContainer";
import ToolTipElement from "../components/ToolTipElement";

import games from "../data/games.json";
//import { getUserData } from "../utils/userController";
// import ModuleCard from '../components/ModuleCard';
import { useContext } from "react";
import { ToolTipContext } from "../App";

export default function Home() {
  const navigate = useNavigate();
  const { tooltip_title, setTooltip_title } = useContext(ToolTipContext);
  const [viewGame, setViewGame] = useState(false);
  const [viewGameTitle, setViewGameTitle] = useState("");
  const location = useLocation();
  let userData = location.state;

  const [user, loading] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);

  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) return navigate("/login");
  // }, [user, loading]);

  useEffect(() => {
    // Simulate a minimum display time of 1 second
    setTimeout(() => {
      setPageLoading(false);
    }, 1000); // Minimum display time of 1 second
  }, []);

  function BottomInfoContainer1() {
    return (
      <div className="bottom_info_container">
        <h1>Helpline Numbers</h1>
        <ul>
          <li>
            <ToolTipElement title={"Childline India"} />
          </li>
          <li>
            <ToolTipElement title={"(NCPCR)"} />
          </li>
          <li>
            <ToolTipElement title={"Childline India"} />
          </li>
          <li>
            <ToolTipElement title={"Child Helpline (For Online Child Abuse)"} />
          </li>
          <li>
            <ToolTipElement title={"Police Helpline (Dial 100)"} />
          </li>
          <li>
            <ToolTipElement title={"Women and Child Helpline (WCD)"} />
          </li>
        </ul>
      </div>
    );
  }

  function BottomInfoContainer2() {
    return (
      <div className="bottom_info_container">
        <h1>Child Rights Organisations</h1>
        <ul>
          <li>
            <ToolTipElement
              title={
                "National Commission for Protection of Child Rights (NCPCR)"
              }
            />
          </li>
          <li>
            <ToolTipElement title={"Save the Children"} />
          </li>
          <li>
            <ToolTipElement title={"Child Rights and You (CRY)"} />
          </li>
          <li>
            <ToolTipElement title={"Pratham"} />
          </li>
          <li>
            <ToolTipElement title={"Mobile Creches"} />
          </li>
          <li>
            <ToolTipElement title={"Butterflies India"} />
          </li>
          <li>
            <ToolTipElement title={"Bal Vikas Dhara (BVD)"} />
          </li>
        </ul>
      </div>
    );
  }

  function Bottom() {
    return (
      <div className="bottom_bar" id="getHelp">
        <footer className="foot_info">
          <BottomInfoContainer1 />
          <BottomInfoContainer2 />
        </footer>
        <div className="bottom_kids_img_container">
          <img
            className="bottom_kids_img"
            src="./bottom.png"
            alt="children"
          ></img>
        </div>
      </div>
    );
  }

  function showGame(title) {
    setViewGame(true);
    setViewGameTitle(title);
  }

  function navigatePage(page) {
    navigate(`/${page}`, { state: userData });
  }

  function handleLogout() {
    setPageLoading(true);
    setTimeout(() => {
      logout();
      setPageLoading(false);
    }, 1000);
    console.log("logout succesful");
  }

  return (
    <>
      <df-messenger
        chat-title="Maya"
        agent-id="c1f13250-5116-4fe5-b33d-97ab1d178ac6"
        language-code="en"
      ></df-messenger>

      {pageLoading && <Loader />}

      {tooltip_title.length > 0 && (
        <ToolTipContainer
          title={tooltip_title}
          setTooltip_title={setTooltip_title}
        />
      )}

      <Nav handleLogout={handleLogout} user={user} />

      {/* Intro Container */}
      <article className="intro_container">
        <div className="intro_text_container">
          <div className="intro_text">
            Welcome {user ? userData?.username : ""} to &quot;My Learning
            Maya&quot; - Learn and Play through Interactive Games, Quizzes and
            Videos
          </div>
          {/* Don't show login signup if user logged in */}
          {!user && (
            <div className="loginsignup_container">
              <Button
                title="SIGNUP"
                style="button_red"
                handleClick={() => {
                  navigatePage("signup");
                }}
              />
              <Button
                title="LOGIN"
                style="button_green"
                handleClick={() => {
                  navigatePage("login");
                }}
              />
            </div>
          )}
        </div>
        <div className="intro_video_container">
          <img src="./introimage.png"></img>
          <div className="intro_video_icon">
            <img src="./play_intro.png"></img>
          </div>
        </div>
      </article>

      {/* Course Container */}
      <article className="course_container" id="learn">
        <div className="course_intro_image_container">
          <div className="course_stars_container">
            <img src="./progress_star.png"></img>
            <div className="complete_progress_bar"></div>
          </div>
          <img className="course_bg_image" src="./course_intro.avif" />
        </div>
        <div className="course_intro_text">
          <div className="course_intro_title">Learn about your Rights</div>
          <div className="course_intro_desc">
            Venture into land of rights and explore your rights, Indian Laws
            that protect your rights, Organisations that spread awareness, and
            child rights around the globe
          </div>
          <Button
            disabled={!user}
            title={user ? "START LEARNING" : "LOGIN/SIGNUP TO CONTINUE"}
            style="button_green"
            handleClick={() => {
              navigatePage("course");
            }}
          />
        </div>
      </article>

      {/* Course Container */}
      <article className="course_container">
        <div className="course_intro_image_container">
          <div className="course_stars_container">
            <img src="./progress_star.png"></img>
            <div className="complete_progress_bar"></div>
          </div>
          <img className="course_bg_image" src="./course_intro.avif" />
        </div>
        <div className="course_intro_text">
          <div className="course_intro_title">Learn Basic Science</div>
          <div className="course_intro_desc">
            Venture into land of rights and explore your rights, Indian Laws
            that protect your rights, Organisations that spread awareness, and
            child rights around the globe
          </div>
          <Button
            disabled={!user}
            title={user ? "START LEARNING" : "LOGIN/SIGNUP TO CONTINUE"}
            style="button_green"
            handleClick={() => {
              navigatePage("course");
            }}
          />
        </div>
      </article>

      {/* Games Container */}
      <div className="zig_zag zig_zag_break"></div>
      <article className="mini_games_container" id="games">
        <h1 className="mini_games_heading">
          Play these interactive games and boost your learning
        </h1>
        <div className="games_container">
          <div className="games_intro">
            <div
              className="game_card"
              onClick={() => {
                showGame("maya-journey");
              }}
            >
              <img src="./games/gameCard1.jpg"></img>
              <div className="game_card_info">
                <h1>Rights Land</h1>
                <p>
                  Defeat the monsters in Rights land and save the children
                  rights
                </p>
              </div>
            </div>
            <div
              className="game_card"
              onClick={() => {
                showGame("maya-journey");
              }}
            >
              <img src="./b1.jpg"></img>
              <div className="game_card_info">
                <h1>Equality Quest</h1>
                <p>
                  Join a group of young adventurers on a quest to explore the
                  world of equality and fairness.
                </p>
              </div>
            </div>
            <div
              className="game_card"
              onClick={() => {
                showGame("maya-journey");
              }}
            >
              <img src="./b2.jpg"></img>
              <div className="game_card_info">
                <h1>Rights Defenders</h1>
                <p>
                  In this action-packed role-playing game, you become child
                  rights superhero.
                </p>
              </div>
            </div>
            <div
              className="game_card"
              onClick={() => {
                showGame("maya-journey");
              }}
            >
              <img src="./b7.jpg"></img>
              <div className="game_card_info">
                <h1>Righteous Puzzlers</h1>
                <p>
                  This jigsaw puzzle game helps children piece together the
                  puzzle of child rights
                </p>
              </div>
            </div>
          </div>
          {/* <div className='external_game'>
                        <iframe width="552" height="167" src="https://itch.io/embed/2263529"><a href="https://skul1cru5h3r.itch.io/proto">Proto by SKUL1CRU5H3R</a></iframe>
                    </div> */}
        </div>
      </article>
      <Bottom />
      {viewGame && (
        <div className="gameView">
          <iframe src={games[viewGameTitle][0]} width="552" height="167">
            <a href={games[viewGameTitle][1]}>Maya&#039;s Journey</a>
          </iframe>
          <Button
            handleClick={() => setViewGame(false)}
            title="Close Game"
            style="red"
          />
        </div>
      )}
    </>
  );
}
