import { IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";

// Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

function Topbar({ setSidebarOpen }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <div className="topbar">
      {/* LEFT SIDE */}
      <div className="topbar-left">
        {/* Menu button */}
        <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
          ☰
        </button>

        {/* Search container */}
        <div
          className="topbar-search"
          style={{ backgroundColor: colors.primary[400] }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, minWidth: 0 }}
            placeholder="Search"
          />

          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="topbar-right">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Topbar;