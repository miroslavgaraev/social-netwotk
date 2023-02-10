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
import FilmsContainer from "./films/films-container";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FilmPage from "./films/FilmPage";

function App() {
  return (
    <div className="App">
        <HeaderContainer className={'head'}/>
        <div className={'a'}>
            <Navigation className={'nav'}/>
            <Routes>
                <Route path={'/'} element={<MainContainer className={'main'} />}></Route>
                <Route path={'/profile/:id'} element={<MainContainer className={'main'} />}></Route>
                <Route path={'/films/:id'} element={<FilmPage />}></Route>
                <Route path={'/messages'} element={<Messages />}></Route>
                <Route path={'/login'} element={<LoginPage/>}></Route>
                <Route path={'/films'} element={<FilmsContainer/>}></Route>
            </Routes>
        </div>
    </div>
  );
}

export default App;
