import React from 'react';
import axios from 'axios';
import {newsFeed} from '../../../constants/action'

export const newsData = () => {
    return (dispatch) => {
        const getNewsData = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9aa631e55c4d45d3b2ed087e963daefc';
        axios.get(getNewsData)
            .then(data => {
                dispatch({type: newsFeed.newsFeedGrid.Succcess, data: data});
            })
            .catch(error => {
                dispatch({type: newsFeed.newsFeedGrid.Failure, error: error});
            })
    }
}
