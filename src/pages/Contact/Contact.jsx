import React, { useState } from 'react'
import {
  FormContainer,
  H1,
  Hr,
  Label,
  Input,
  TextArea,
  Button,
} from './Contact.styles.js'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // do something with form data
    console.log(formData)
  }

  return (
    <FormContainer>
      <H1>Contact Us!</H1>
      <Hr />
      <form onSubmit={handleSubmit}>
        <Label>
          Full Name:
          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            minLength={3}
            required
          />
        </Label>
        <Label>
          Subject:
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            minLength={3}
            required
          />
        </Label>
        <Label>
          Email:
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          Body:
          <TextArea
            name="body"
            value={formData.body}
            onChange={handleInputChange}
            minLength={3}
            required
          ></TextArea>
        </Label>
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  )
}

export default Contact
