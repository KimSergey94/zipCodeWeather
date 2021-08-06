import './sidebar.css'
import { Link } from 'react-router-dom'
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import AssignmentTwoToneIcon from '@material-ui/icons/AssignmentTwoTone';

export default function Sidebar() {
    return (
        <div className="sidebar"> 
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Weather</h3>
                    <ul className="sidebarList">
                        <Link to="/main" className="link">
                            <li className="sidebarListItem">
                                <WbSunnyTwoToneIcon className="sidebarIcon"/>
                                Weather by zip code
                            </li>
                        </Link>
                    </ul>

                    <h3 className="sidebarTitle">History</h3>
                    <ul className="sidebarList">
                        <Link to="/queryHistory" className="link">
                            <li className="sidebarListItem">
                                <AssignmentTwoToneIcon className="sidebarIcon"/>
                                Query History
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
