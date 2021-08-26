import React, { useState } from 'react'
import marked from 'marked'
import styles from './index.module.scss'
import { Input, Select } from 'antd'
const { Option } = Select
const { TextArea } = Input

function AddArticle() {
  return (
    <div>
      <div className={styles.options}>
        <Input style={{ width: 400 }} />
        <Select style={{ width: 120 }} placeholder="4123" options={[{ value: 1321, label: 455644536 }]} />
      </div>
      <div className={styles.editcontent}></div>
    </div>
  )
}
export default AddArticle