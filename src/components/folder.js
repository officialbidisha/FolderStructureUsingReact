import {useState} from 'react';
import folderIcon from './../assets/folder.png';
import './folder.css';
const Folder = (props) => {
     const {name, children} = props;
     const [isExpanded, setExpanded] = useState(false);
     return(
        <div className='folder--header'>
            <div className='folder--header--container' onClick={(e)=> setExpanded((prevState)=> !prevState)}>
                <img src={folderIcon} alt="folder-icon" className='folder--icon'></img>
                <span className=''>{name}</span>
            </div>
            {isExpanded && <div className='folder--children'>{children}</div>}
        </div>
     )
}
export default Folder;
