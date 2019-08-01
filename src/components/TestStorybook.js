import styles from './TestStorybook.less';
import React from 'react';

function TestStorybook({}) {
  console.log(styles.container);
  return <div className={styles.container} > It works </div>
}

export default TestStorybook;