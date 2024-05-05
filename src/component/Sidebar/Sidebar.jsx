import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
import { IoMenu, IoSettingsOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu" onClick={() => setExtended((prev) => !prev)}>
          <IoMenu />
        </div>
        {/* <img
          className="menu"
          src={assets.menu_icon}
          alt=""
        /> */}
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          {/* <img src={assets.question_icon} alt="" /> */}
          <FaRegQuestionCircle />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          {/* <img src={assets.history_icon} alt="" /> */}
          <FaClockRotateLeft />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <IoSettingsOutline />
          {/* <img src={assets.setting_icon} alt="" /> */}
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
