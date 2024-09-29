import styles from './styles.module.css'
import Post from '../Post/Post.tsx'
import IndividualPostModal from '../../modals/IndividualPostModal/IndividualPostModal.tsx'
import Tidbit from '../Tidbit/Tidbit.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import {HeartBroken, Mail, School, Stars} from '@mui/icons-material'
import BulletedList from '../BulletedList/BulletedList.tsx'
import Button from '../Button/Button.tsx'
import {useContext, useEffect, useState} from 'react'
import {SessionContext} from "../../contexts.ts";
import {URL} from "../../util.ts";
import TeamPostModal from "../../modals/IndividualPostModal/TeamPostModal.tsx";

interface IndividualPostProps {
  post: Post,
}

export default function FormattedPost({ post }: IndividualPostProps) {
  const { user, isLoading, isAuthenticated } = useAuth0()
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')
  const [skillLevel, setSkillLevel] = useState('')
  const [school, setSchool] = useState('')
  const [members, setMembers] = useState(0)

  const session = useContext(SessionContext)

  const handleInvite = () => {
    fetch(`${URL}/sec/invite/`, {
      method: 'POST',
      body: JSON.stringify({
        fromTeamId: session.teamId,
        toUserId: post.authorId,
      }),
    })
  }

  useEffect(() => {
    setSubject(post.subject)
    setDescription(post.body)

    fetch(`${URL}/sec/user/${post.authorId}`)
      .then((raw) => raw.json().then((res) => {
        setName(res.name)
        setSkillLevel(res.experienceLevel)
        setSchool(res.school)
      }))
  }, [post])

  return (
    <Post
      name={name}
      subject={subject}
      modal={
        members === 1
          ? <IndividualPostModal name={name} subject={subject} description={description} school={school} skillLevel={skillLevel} members={1} maxMembers={session.eventMaxMembers} />
          : <TeamPostModal name={name} subject={subject} description={description} school={school} skillLevel={skillLevel} members={1} maxMembers={session.eventMaxMembers} />
      }
      members={1}
      maxMembers={session.eventMaxMembers}
      tidbits={[
        <Tidbit icon={<School />}>{school}</Tidbit>,
        <Tidbit icon={<Stars />}>{skillLevel}</Tidbit>,
      ]}
      hoverButtons={
        isAuthenticated && <Button variant="accent" startDecorator={<Mail />} onClick={handleInvite}>Invite!</Button>
      }
    >
      <div className={styles.postContent}>

      </div>
    </Post>
  )
}
