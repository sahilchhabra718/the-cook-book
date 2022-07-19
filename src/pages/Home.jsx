import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import React, { Component } from 'react'
import {motion} from 'framer-motion'

export class Home extends Component {
  render() {
    return (
      <motion.div>
        <Veggie />
        <Popular />
      </motion.div>
    )
  }
}

export default Home