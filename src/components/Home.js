import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import styles from './Home.css'

 class Home extends Component {
   state = {
     activeItem: '',
   }
  render() {
    return(
      <div className={styles.container}>
        <Menu>
          <Menu.Item
            name="home"
            active={this.state.activeItem === 'home'}
            content="Home"
          />
        </Menu>
      </div>
    )
  }
}

export default Home
