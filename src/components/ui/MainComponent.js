import {Switch, Route, Redirect} from 'react-router-dom';
import React, {Component} from 'react';
import LoadPage from './pages/PageLoader';
import { TAB_TYPE } from '../shared/TabType';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
       weather: {}
    };
  }

  render(){
    return (
      <div>
        <Topbar />
        <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/main" component={() => <LoadPage tabType={TAB_TYPE.MAIN}></LoadPage>}></Route>
          <Route exact path="/queryHistory" component={() => <LoadPage tabType={TAB_TYPE.QueryHistory}></LoadPage>}></Route>
          
          <Redirect to="/main"></Redirect>
        </Switch>
        </div>
      </div>
    );
  }
}

export default Main;