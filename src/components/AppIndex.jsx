import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Instagram from "@material-ui/icons/Instagram";

const classes = {
  root: {
    // flexGrow: 1,
  },
  rootroot: {
    display: "flex",
    flexWrap: "wrap",
  },
  menuButton: {
    marginRight: "2px",
  },
  title: {
    flexGrow: 1,
  },
};

export class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heightCalc: window.innerHeight,
      widthCalc: window.innerWidth,
    };
    this.updateSize = this.updateSize.bind(this);
  }

  updateSize() {
    this.setState({
      heightCalc: window.innerHeight,
      widthCalc: window.innerWidth,
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize);
  }
  render() {
    var heightCalc = this.state.heightCalc - 64 - 30 + "px";
    var heightheader = "64px";
    var heightfooter = "30px";
    return (
      <div>
        <div style={{ height: heightheader }}>
          {" "}
          <AppBar
            position="static"
            height="64px"
            stye={{ maxHeight: "64px", minHeight: "64px" }}
          >
            <Toolbar
              height="64px"
              stye={{ maxHeight: "64px", minHeight: "64px" }}
            >
              <IconButton edge="start" color="inherit">
                <MenuIcon />
              </IconButton>
              <Typography variant="h4">Oven's Batter Half</Typography>
              <Button color="inherit">
                <Instagram />
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <div style={{ height: heightCalc }}>hello</div>
        <div style={{ height: heightfooter }}>
          <AppBar
            position="static"
            color="primary"
            height="30px"
            stye={{ maxHeight: "30px", minHeight: "30px" }}
          >
            <Typography variant="h6">Happy Birthday Chef</Typography>
          </AppBar>
        </div>
      </div>
    );
  }
}

