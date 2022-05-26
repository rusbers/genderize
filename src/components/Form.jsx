import { Input } from './Input';
import { Button } from './Button'

function Form( props ) {
  const { formClass } = props;

  return (
    <form className={ formClass }>
      <Input inputClass='input' inputLabel='Your name' inputType='text' placeholder='name...' />
      <Button buttonType='submit' buttonText='Submit'/>
    </form>
  )
}

export { Form };