import React from 'react';
import { TAB_TYPE } from '../../shared/TabType';
import Main from './main/Main';
import QueriesHistory from './queriesHistory/QueriesHistory';

function InitTab(props){
    if(props.tabType === TAB_TYPE.MAIN){
        return <Main />
    } else if(props.tabType === TAB_TYPE.QueryHistory){
        return <QueriesHistory />
    }
    
    return <span>default InitTab</span>
}


const LoadPage = (props) => {
    const pageView = InitTab(props);
    
    return (
        <div className="pageView"> 
            {pageView}
        </div>
    );
}

export default LoadPage;