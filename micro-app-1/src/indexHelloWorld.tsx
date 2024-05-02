import ReactDOM from 'react-dom/client';
import HelloWorld from "./components/HelloWorld";

const mount = (el : Element) : void => {

    ReactDOM.createRoot(el).render(<HelloWorld/>)

}

export default mount;