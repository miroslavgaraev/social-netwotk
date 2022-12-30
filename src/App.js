import './App.css';
import Header from "./Header/headerComponent";
import Navigation from "./navigation/navigationComponent";
import Main from "./Main/mainComponent";
import {Route, Routes} from "react-router-dom";
import Messages from "./Messages/messagesComponent";
import state from './redux/state'
import MainContainer from "./Main/mainContainer";
import HeaderContainer from "./Header/headerContainer";
import LoginPage from "./login/login";

function App() {
  return (
    <div className="App">
        <HeaderContainer className={'head'}/>
        <div className={'a'}>
            <Navigation className={'nav'}/>
            <Routes>
                <Route path={'/profile'} element={<MainContainer className={'main'} />}></Route>
                <Route path={'/profile/:id'} element={<MainContainer className={'main'} />}></Route>
                <Route path={'/messages'} element={<Messages />}></Route>
                <Route path={'/login'} element={<LoginPage/>}></Route>
            </Routes>
        </div>
    </div>
  );
}

export default App;
