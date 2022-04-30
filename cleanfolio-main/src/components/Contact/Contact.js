import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core'
import Button from '@mui/material/Button'
import { contact } from '../../portfolio'
import './Contact.css'

// import { FormControl } from '@mui/base'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <div className='formdetails'>
        <h2 className='section__title'>Detail</h2>
        <FormControl>
          <InputLabel htmlFor='my-input'>Full Name</InputLabel>
          <Input id='my-input' aria-describedby='my-helper-text' />
          <FormHelperText id='my-helper-text'>
            Please fill your full name
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor='my-input'>Mobile No.</InputLabel>
          <Input id='my-input' aria-describedby='my-helper-text' />
          <FormHelperText id='my-helper-text'>
            Please fill mobile number
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor='my-input'>Email Address</InputLabel>
          <Input id='my-input' aria-describedby='my-helper-text' />
          <FormHelperText id='my-helper-text'>
            We will never share your email.
          </FormHelperText>
        </FormControl>
        <Button variant='outlined'>Submit</Button>
      </div>
      <div className='contact'>
        <h2 className='section__title'>Contact Email</h2>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
      </div>
    </section>
  )
}

export default Contact
