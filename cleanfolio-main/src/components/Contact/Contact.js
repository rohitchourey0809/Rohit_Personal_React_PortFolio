import React from 'react'

import { useForm, ValidationError } from '@formspree/react'

import './Contact.css'
import { Button, TextField } from '@material-ui/core'
import { contact } from '../../portfolio'

function Contact() {
  if (!contact.email) return null
  const [state, handleSubmit] = useForm('myyobnrq')
  if (state.succeeded) {
    return (
      <div className='Succesful'>
        <p>Thanks for Mailing and Joining!!!</p>
      </div>
    )
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='formdetails'>
        <h2 className='contachead'>CONTACT DETAILS</h2>

        <TextField
          type='name'
          name='name'
          label='Name'
          color='secondary'
          focused
        />
        <ValidationError prefix='Name' field='name' errors={state.errors} />

        <TextField
          type='email'
          name='email'
          label='Email'
          color='secondary'
          focused
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />

        <TextField
          type='number'
          name='number'
          label='Mobile No.'
          color='secondary'
          focused
        />
        <ValidationError prefix='Number' field='number' errors={state.errors} />

        <TextField
          type='message'
          name='message'
          label='Description'
          color='secondary'
          focused
        />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />

        <Button
          id='submitbut'
          // className='btn--outline'
          variant='outlined'
          type='submit'
          disabled={state.submitting}
        >
          <h4>Submit</h4>
        </Button>
      </form>

      <section className='section contact center' id='contact'>
        <h2 className='section__title'>Contact</h2>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
         <br/>
        <span>
          {' '}
          <p>MobileNo: +91-9074052483</p>
        </span>
      </section>
    </div>
  )
}

export default Contact
