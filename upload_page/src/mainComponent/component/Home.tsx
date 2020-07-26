import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import SidebarNavbar from "./SidebarNavbar";
import Esti from "../../move/component/Esti";
import VideoUploadPage from "../../videoUpload/VideoUploadPage";
import MovingType from "../../move/component/MovingType";
import Main from "./Main";

const Home: React.FC = () => {
    return (
        <>
                <SidebarNavbar/>
                <BrowserRouter>
               <Switch>
                <Route exact path={"/"} component={Main}/>
                    <Route path="/estimate">
                        <Esti/>
                    </Route>
                    <Route path={"/videoUpload"} component={VideoUploadPage}/>
                    <Route path={"/movingType"} component={MovingType}/>
               </Switch>
               </BrowserRouter>
        </>
    );
};

export default Home;