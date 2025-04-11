import Navbar from "./Navbar/Navbar"
import './index.css';

function print(data) {
    if (data) {
        return (data)
    } else {
        return ("No data found")
    }
}

export { print, Navbar }