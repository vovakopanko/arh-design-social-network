import React, { Suspense } from "react";
import "./App.css";
import store from "./redux/reduxStore";

import HeaderContainer from "./component/Header/HeaderContainer";
import ContentContainer from "./component/Content/ContentContainer"
import Footer from "./component/Footer/Footer";

import { HashRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import Services from "./component/Services/Services";
import MessageContainer from "./component/Message/MessageContainer";
import ProfessionalsContainer from "./component/Professionals/ProfessionalsContainer";
import ProjectContainer from "./component/Project/ProjectContainer";
import ProjectUnitContainer from "./component/Project/ProjectUnit/ProjectUnitContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import { initialize } from "./redux/appReducer";
import Preloader from "./component/common/Preloader/Preloader";
import { compose } from "redux";
import { Provider, connect } from "react-redux";
import { withSuspense } from "./hoc/whitSuspense";
import errorfour  from "./assets/images/404error.png"



// Loading will be performed as needed to relieve the site from unnecessary requests
const Login = React.lazy(() => import("./component/Login/Login"));
const PartnersContainer = React.lazy(() => import("./component/Partners/PartnersContainer"));
const ContactContainer = React.lazy(() => import("./component/Contact/ContactContainer"));

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="wrapper">
        <div className="wrapper-head">
          <HeaderContainer />
        </div>
        <div className="app-wrapper-content">
          <Switch>
            <Route path="/content" render={() => <ContentContainer/>} />
            <Route exact path="/project" render={() => <ProjectContainer />} />
            <Route path="/services" render={() => <Services />} />
            <Route
              path="/professionals"
              render={() => <ProfessionalsContainer />}
            />
            <Route path="/contact" render={withSuspense(ContactContainer)} />
            <Route path="/partners" render={withSuspense(PartnersContainer)} />
            <Route path="/project/unit/:unitId?" render={() => <ProjectUnitContainer />} />
            {/* <Route path="/serch" render={() => <Search />} /> */}
            <Route path="/message" render={() => <MessageContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route
              path="/login"
              render={() => (
                <Suspense
                  fallback={
                    <div>
                      <Preloader />
                    </div>
                  }
                >
                  <Login />
                </Suspense>
              )}
            />
            <Route exact path="/" render={() => <Redirect to="/content" />} />
            <Route path="*" render={() => <img src={errorfour} height="700" width="1400"></img> } />
          </Switch>
        </div>
        <div className="wrapper-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

let MapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

const AppContainer = compose(
  withRouter,
  connect(MapStateToProps, { initialize })
)(App);

const ArhDesignApp = (props) => {
  return (
    <HashRouter >
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default ArhDesignApp;
