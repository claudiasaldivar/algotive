import ReactDOM from 'react-dom';

//Interfaces
import { IModal } from './interfaces/IModal';

const Modal:React.FC<IModal> = ({children}) => {
    return ReactDOM.createPortal(
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black bg-opacity-80 text-white">
            {children}
        </div>,
        document.getElementById('modal') as HTMLElement
    )
}

export default Modal
