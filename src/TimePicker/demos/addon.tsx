/**
 * title: 附加内容
 * desc: 在TimePicker选择框底部显示自定义的内容。
 */

import { Button, TimePicker } from 'antd'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <TimePicker
      open={open}
      onOpenChange={setOpen}
      renderExtraFooter={() => (
        <Button
          size="small"
          type="primary"
          onClick={() => setOpen(false)}
        >
          OK
        </Button>
      )}
    />
  )
}

export default App
