import React from 'react'
import {BottomNavigation} from 'react-native-paper'
import Home from '../../screens/Home'
import Search from '../../screens/Search'
import Notification from '../../screens/Notification'
import Profile from '../../screens/Profile'
import Downloads from '../../screens/Downloads'

export default class TabNavigation extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            index: 0,
            routes: [
                {key: 'home', title: 'Home', icon: 'home'},
                {key: 'search', title: 'Search', icon: 'magnify'},
                {key: 'coming', title: 'Coming Soon', icon: 'video-outline'},
                {key: 'downloads', title: 'Downloads', icon: 'cloud-download-outline'},
                {key: 'more', title: 'More', icon: 'dots-horizontal'}
            ]
        }
    }

    _indexChange = index => this.setState({index})

    _renderScene = BottomNavigation.SceneMap({
        home: Home,
        search: Search,
        coming: Notification,
        downloads: Downloads,
        more: Profile
    })

    render () {
        return (
            <BottomNavigation renderScene={this._renderScene} onIndexChange={this._indexChange}
            navigationState={this.state}
            barStyle={{
                backgroundColor: 'black'
            }}
            activeColor={'red'} inactiveColor={'gray'}
            />
        )
    }
}