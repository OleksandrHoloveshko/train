import {
    BrowserRouter,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import './App.css';
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

const App = () => {
    return <>
        <BrowserRouter>
            <MainNavigation/>
            <main>
                <Routes>
                    <Route path="/" exact element={<Users/>}/>
                    <Route path="/places/new" exact element={<NewPlace/>}/>
                    <Route path="/:userId/places" exact element={<UserPlaces/>}/>
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </main>
        </BrowserRouter>
    </>
}

export default App;
