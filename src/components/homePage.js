import { useContext, useState } from "react";
import SetTheme from "./SetTheme";
import ThemeContext from "../context/ThemeContext";
import DataFn from './data-fn';
import DataClass from './data-class';

function HomePage() {

    const [status, setStatus] = useState("dataFn");
    const { theme } = useContext(ThemeContext);

    const renderAppStatus = () => {
        if (status === "dataFn") {
            return (
                <>
                    <DataFn themeProp={theme} />
                </>
            )
        } else if (status === "dataClass") {
            return (
                <>
                    <DataClass theme={theme} />
                </>
            )
        }
    }
    return (

        <div className={`App ${theme === "bg-dark" ? theme : "bg-light"}`}>
            <div className='container p-3'>
                <button onClick={() => setStatus("dataFn")} className='col me-1 btn btn-primary'> Function Component </button>
                <SetTheme />
                <button onClick={() => setStatus("dataClass")} className="col me-1 btn btn-success" > Class Component</button>
            </div>
            {
                renderAppStatus()
            }
        </div>
    )
}

export default HomePage;