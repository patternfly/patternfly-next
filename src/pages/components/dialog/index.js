import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Dialog, { Docs } from '@components/Dialog'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Dialog">
        <Dialog>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Dialog>
      </Example>
      <Example heading="Dialog with Header">
        <Dialog heading="Example Heading">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Dialog>
      </Example>
    </Documentation>
  )
}
