import React from 'react';
import styles from './TestStorybook.less';
// import styles from './TestStorybook.css';

function TestStorybook({}) {
  console.log(styles.container);
  return <div className={styles.container} > It works </div>
}

export default TestStorybook;