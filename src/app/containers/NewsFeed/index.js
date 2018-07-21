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
            <div className="container">
                <ul className="list-inline">
                    <div className="row row-eq-height">
                {abc.map((value, index) =>{
                    return(
                    <div>
                        {!(_.isEmpty(value.title)) && !(_.isEmpty(value.urlToImage)) && !(_.isEmpty(value.description)) ?
                    <li className="col-md-4" key={index} onClick={()=>window.location.assign(value.url)}>
                        <div className="thumbnail">
                            <Images url={value.urlToImage}/>
                            <Title title={value.title}/>
                            <Description data={value.description}/>
                        </div>
                    </li>:null}
                    </div>
                    )


                })}
                  </div>
              </ul>


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