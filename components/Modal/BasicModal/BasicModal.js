
import {Modal, Icon} from 'semantic-ui-react';

const BasicModal = (props) => {
    const {show, setShow, title, children, ...res}= props;

    const onClose = () => setShow(false);

    

    return ( 
       <Modal className="basic-modal" open={show} onClose={onClose} {...res}>
           <Modal.Header>
               <span>{title}</span> <Icon name="close" onClick={onClose}/>
           </Modal.Header>
           <Modal.Content>
                   {children}
               </Modal.Content>
       </Modal>
     );
}
 
export default BasicModal;