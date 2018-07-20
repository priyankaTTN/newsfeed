import React from 'react';
import {Title} from '../../components/Title';
import {Images}  from '../../components/Images';
import {Description} from '../../components/Description';
import {newsData} from './action';
import {connect} from 'react-redux';
import _ from 'lodash';

class NewsFeed extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.dispatch(newsData())
    }
    render() {
        const aa =_.get(this.props.newsFeed.detail,'data.articles');
        console.log(aa,'aa')
        return(
           <h1>gggg</h1>
            // <div>
            //     <ul>
            //         aa.map((value,key) => {
            //         <li key={key}>
            //             {value}
            //             // <Title />
            //             // <Images />
            //             // <Description />
            //         </li>
            //     })
            //         </ul>
            // </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        newsFeed: state.newsReducer
    }
}
export default connect(mapStateToProps)(NewsFeed);