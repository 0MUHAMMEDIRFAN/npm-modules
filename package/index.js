import Navbar from "./Navbar/Navbar"
import Button from "./Button/Button"
import Input from "./Input/Input"
import './index.css';

function print(data) {
    if (data) {
        return (data)
    } else {
        return ("No data found")
    }
}

export { print, Navbar, Button, Input }