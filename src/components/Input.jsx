function Input( props ) {
  const { inputLabel, inputClass, inputType, placeholder } = props;

  function change() {
    console.log( 'cut' )
  }

  return (
    <label>
      { inputLabel }
      <input className={ inputClass } type={ inputType } placeholder={ placeholder } onCut={ change }/>
    </label>
  )
}

export { Input };