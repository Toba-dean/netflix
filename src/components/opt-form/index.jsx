import { Container, Input, Break, Text, Button } from './styles/opt-form.styles'

export default function OptForm({ children, ...restProp }) {
  return (
    <Container {...restProp}>
      {children}
    </Container>
  )
}


OptForm.Input = function OptFormInput({ children, ...restProp }) {
  return (
    <Input {...restProp} />
  )
}

OptForm.Break = function OptFormBreak({ children, ...restProp }) {
  return (
    <Break {...restProp} />
  )
}

OptForm.Button = function OptFormButton({ children, ...restProp }) {
  return (
    <Button {...restProp}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  )
}

OptForm.Text = function OptFormText({ children, ...restProp }) {
  return (
    <Text {...restProp}>
      {children}
    </Text>
  )
}

