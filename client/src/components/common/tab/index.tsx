/* creat a tab component */
import React from 'react'

const Tab = (count) => {
	return <span className={`tab`} style={{ marginRight: `${count.count}rem` }}></span>
}

export default Tab
