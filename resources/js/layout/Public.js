//import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components 
import ScrollTop from '../common/scroll-top/index'
import Footer from '../common/footer/index'


const displayName = 'Public Layout'
const propTypes = {
  children: PropTypes.node.isRequired,
}

function PublicLayout({ children }) {
  return (
    <div class="mainwrapper">
      <main class="mainheight">
        {children}
        <ScrollTop />
      </main>
      <Footer />
    </div>
  );
}

PublicLayout.dispatch = displayName
PublicLayout.propTypes = propTypes

export default PublicLayout
