import Button from "./Button.jsx";
import "./styles/Nav.css";

function handle_nav_button_click(url) {
  document.getElementById(url).scrollIntoView();
}

export default function Nav({ handleLogout, user }) {
  return (
    <div className="nav_bar zig_zag">
      <div className="site_logo_container">
        <img className="site_logo" src="./site_logo3.png" />
      </div>
      <div className="nav_container">
        <Button
          title="GAMES"
          type="home_nav_button"
          handleClick={() => {
            handle_nav_button_click("games");
          }}
          style="button_blue"
        />
        {user && (
          <Button
            title="LOGOUT"
            type="home_nav_button"
            handleClick={handleLogout}
            style="button_red"
          />
        )}
        <Button
          title="LEARN"
          type="home_nav_button"
          handleClick={() => {
            handle_nav_button_click("learn");
          }}
          style="button_green"
        />
        <Button
          title="GET HELP"
          type="home_nav_button"
          handleClick={() => {
            handle_nav_button_click("getHelp");
          }}
          style="button_yellow"
        />
      </div>
    </div>
  );
}
