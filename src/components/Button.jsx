function Button( props ) {
  const { buttonType, buttonText } = props;

  return (
    <button type={ buttonType }>{ buttonText }</button>
  )
}

export { Button };