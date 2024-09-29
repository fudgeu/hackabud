import styles from './styles.module.css'
import Field from '../../components/Field/Field.tsx'
import { FormEvent, useState } from 'react'
import Button from '../../components/Button/Button.tsx'
import ListField from '../../components/ListField/ListField.tsx'
import { useNavigate } from 'react-router-dom'
import { URL } from '../../util.ts'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [school, setSchool] = useState('')
  const [skill, setSkill] = useState('')
  const [skills, setSkills] = useState<string[]>([])
  const [websites, setWebsites] = useState<string[]>([])

  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    fetch(`${URL}/sec/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        username: email,
        profilePictureUrl: '',
        experienceLevel: skill,
        school: school,
      }),
    })
      .then(() => {
        navigate('/home')
      })
  }

  return (
    <div className={styles.reg}>
      <h2 className={styles.title}>Create an Account</h2>
      <div className={styles.regContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Field
            label="Name"
            placeholder="Jane Doe"
            variant="white"
            value={name}
            onChange={setName}
            required
          />

          <Field
            type="email"
            label="Email Address"
            placeholder="you@email.com"
            variant="white"
            value={email}
            onChange={setEmail}
            required
          />

          <Field
            label="School"
            placeholder="College University"
            variant="white"
            value={school}
            onChange={setSchool}
          />

          <Field
            label="Skill"
            placeholder="Beginner"
            variant="white"
            value={skill}
            onChange={setSkill}
            required
          />

          <ListField
            variant="white"
            label="Skills"
            values={skills}
            setValues={setSkills}
            placeholder="Skill"
          />

          <ListField
            variant="white"
            label="Websites"
            values={websites}
            setValues={setWebsites}
            placeholder="Website"
          />

          <Button type="submit" fill variant="accent">Register!</Button>
        </form>
      </div>
    </div>
  )
}
