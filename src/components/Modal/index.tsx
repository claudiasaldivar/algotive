import ReactDOM from 'react-dom';

//CSS
import './modal.css'

//Interfaces
import { IModal } from './interfaces/IModal';

const Modal:React.FC<IModal> = ({children}) => {
    return ReactDOM.createPortal(
        <div className='modal'>
            {children}
        </div>,
        document.getElementById('modal') as HTMLElement
    )
}

export default Modal
