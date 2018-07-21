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
    componentWillReceiveProps(nextProps){
        const aa =_.get(nextProps.newsFeed.detail,'data.articles');
        console.log(aa,'********')
    }
    render() {
        const abc =_.get(this.props.newsFeed.detail,'data.articles');
        if(_.isEmpty(abc)) return null;
        return(
            <div>
                {abc.map((value, index) =>{
                    return(
                        <li key={index}>
                            <Title title={value.title} />
                            <Images url={value.urlToImage} />
                            <Description data={value.description} />
                        </li>
                    )

                })}




                </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        newsFeed: state.newsReducer
    }
}
export default connect(mapStateToProps)(NewsFeed);