import Main from "./layouts/Main"
import Index from "./pages/Index";

import "./App.css";
import apiUrl from "../api";

function App() {
    console.log(import.meta.env.VITE_API);
    return (
        <div>
            <Main>
                <Index />
            </Main>
        </div>
    );
}

export default App;
