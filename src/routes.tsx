import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/mainPage';


export function RoutesForUser() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
}
