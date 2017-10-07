// @flow
import styled from 'styled-components'

const unit = 10

const alignment = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end'
}

const Distribute = styled.div`
  display: flex;
  align-items: ${props => alignment[props.align]};
  & > * {
    flex: 0 0 auto;
    &:not(:last-child) {
      margin-right: ${props => props.space * unit + 'px'};
    }
  }
`
Distribute.displayName = 'Distribute'
Distribute.defaultProps = {
  align: 'start'
}
export default Distribute
