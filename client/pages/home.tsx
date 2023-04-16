import Image from 'next/image'
import senderPic from '../public/assets/sender.jpg'
import receiverPic from '../public/assets/receiver.jpg'
import styles from '@/styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faFilter, faArrowsUpDown, faBold, faItalic, faBars, faFaceSmile, faPaperclip, faCheck, faSearch, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useRouter } from 'next/router'

export default function Home() {
  let router = useRouter()

  const onLogout = async () => {
    try {
      await axios.delete('http://localhost:4000/logout')
      router.push('/')
    } catch (error) {
      console.log('EROOR === ', error)
    }
  }
  return (
    <>
      <main className={styles.main}>

        <div className={styles.sideNav}>
          <div className={styles.card}>
            <div className={styles.logoContainer}><FontAwesomeIcon icon={faMessage} className={styles.chatLogo} /></div>
            <div className={styles.chatTitle}>Team conversations</div>
            <div><FontAwesomeIcon icon={faFilter} className={styles.filterLogo} /></div>
            <div><FontAwesomeIcon icon={faArrowsUpDown} className={styles.sortLogo} /></div>
          </div>
          <div className={styles.ulContainer}>
            <ul className={styles.ul}>
              <li className={styles.list}>
                <div className={styles.listContainer}>
                  <Image src={senderPic} className={styles.avatar} alt='avatar' />
                  <div>
                    <h4 className={styles.userName}>User Name</h4>
                    <p className={styles.userMessage}>User Message</p>
                  </div>
                  <div>
                    <p className={styles.listTime}>Time</p>
                  </div>
                </div>
              </li>
              <li className={styles.list}>
                <div className={styles.listContainer}>
                  <Image src={receiverPic} className={styles.avatar} alt='avatar' />
                  <div>
                    <h4 className={styles.userName}>User Name</h4>
                    <p className={styles.userMessage}>User Message</p>
                  </div>
                  <div>
                    <p className={styles.listTime}>Time</p>
                  </div>
                </div>
              </li>
              <li className={styles.list}>
                <div className={styles.listContainer}>
                  <Image src={senderPic} className={styles.avatar} alt='avatar' />
                  <div>
                    <h4 className={styles.userName}>User Name</h4>
                    <p className={styles.userMessage}>User Message</p>
                  </div>
                  <div>
                    <p className={styles.listTime}>Time</p>
                  </div>
                </div>
              </li>
              <li className={styles.list}>
                <div className={styles.listContainer}>
                  <Image src={receiverPic} className={styles.avatar} alt='avatar' />
                  <div>
                    <h4 className={styles.userName}>User Name</h4>
                    <p className={styles.userMessage}>User Message</p>
                  </div>
                  <div>
                    <p className={styles.listTime}>Time</p>
                  </div>
                </div>
              </li>
              <li className={styles.list}>
                <div className={styles.listContainer}>
                  <Image src={senderPic} className={styles.avatar} alt='avatar' />
                  <div>
                    <h4 className={styles.userName}>User Name</h4>
                    <p className={styles.userMessage}>User Message</p>
                  </div>
                  <div>
                    <p className={styles.listTime}>Time</p>
                  </div>
                </div>
              </li>
              <li className={styles.list}>
                <div className={styles.listContainer}>
                  <Image src={receiverPic} className={styles.avatar} alt='avatar' />
                  <div>
                    <h4 className={styles.userName}>User Name</h4>
                    <p className={styles.userMessage}>User Message</p>
                  </div>
                  <div>
                    <p className={styles.listTime}>Time</p>
                  </div>
                </div>
              </li>
              <li className={styles.list}>
                <div className={styles.listContainer}>
                  <Image src={receiverPic} className={styles.avatar} alt='avatar' />
                  <div>
                    <h4 className={styles.userName}>User Name</h4>
                    <p className={styles.userMessage}>User Message</p>
                  </div>
                  <div>
                    <p className={styles.listTime}>Time</p>
                  </div>
                </div>
              </li>
              <li className={styles.list}>
                <div className={styles.listContainer}>
                  <Image src={senderPic} className={styles.avatar} alt='avatar' />
                  <div>
                    <h4 className={styles.userName}>User Name</h4>
                    <p className={styles.userMessage}>User Message</p>
                  </div>
                  <div>
                    <p className={styles.listTime}>Time</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.header}>
          <div className={styles.searchContainer}>
            <form>
              <span><FontAwesomeIcon icon={faSearch} className={styles.searchLogo} /></span> <input className={styles.search} type="search" placeholder='Search' />
            </form>
          </div>
          <div className={styles.logoutContainer}><FontAwesomeIcon icon={faRightFromBracket} className={styles.logoutLogo} onClick={onLogout} />
          </div>
        </div>

        <div className={styles.chatArea}>
          <div className={styles.receivedChats}>
            <div className={styles.messageLayout}>
              <div>
                <Image src={senderPic} className={styles.messageAvatar} alt='avatar' />
              </div>
              <div className={styles.receivedMsg}>
                <div className={styles.receivedMsgInbox}>
                  <span className={styles.time}>18:06 PM | July 24 </span>
                  <p>Hi !! This is message from Riya . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quas nemo eum, earum sunt, nobis similique quisquam eveniet pariatur commodi modi voluptatibus iusto omnis harum illum
                    iste distinctio expedita illo!</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sendChats}>
            <div className={styles.messageLayout}>
              <div>
                <Image src={receiverPic} className={styles.messageAvatar} alt='avatar' />
              </div>
              <div className={styles.sendMsg}>
                <div className={styles.sendMsgInbox}>
                  <span className={styles.time}>18:06 PM | July 24 </span>
                  <p>Hi !! This is message from Riya . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quas nemo eum, earum sunt, nobis similique quisquam eveniet pariatur commodi modi voluptatibus iusto omnis harum illum
                    iste distinctio expedita illo!</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.receivedChats}>
            <div className={styles.messageLayout}>
              <div>
                <Image src={senderPic} className={styles.messageAvatar} alt='avatar' />
              </div>
              <div className={styles.receivedMsg}>
                <div className={styles.receivedMsgInbox}>
                  <span className={styles.time}>18:06 PM | July 24 </span>
                  <p>Hi !! This is message from Riya . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quas nemo eum, earum sunt, nobis similique quisquam eveniet pariatur commodi modi voluptatibus iusto omnis harum illum
                    iste distinctio expedita illo!</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sendChats}>
            <div className={styles.messageLayout}>
              <div>
                <Image src={receiverPic} className={styles.messageAvatar} alt='avatar' />
              </div>
              <div className={styles.sendMsg}>
                <div className={styles.sendMsgInbox}>
                  <span className={styles.time}>18:06 PM | July 24 </span>
                  <p>Hi !! This is message from Riya . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quas nemo eum, earum sunt, nobis similique quisquam eveniet pariatur commodi modi voluptatibus iusto omnis harum illum
                    iste distinctio expedita illo!</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.receivedChats}>
            <div className={styles.messageLayout}>
              <div>
                <Image src={senderPic} className={styles.messageAvatar} alt='avatar' />
              </div>
              <div className={styles.receivedMsg}>
                <div className={styles.receivedMsgInbox}>
                  <span className={styles.time}>18:06 PM | July 24 </span>
                  <p>Hi !! This is message from Riya . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quas nemo eum, earum sunt, nobis similique quisquam eveniet pariatur commodi modi voluptatibus iusto omnis harum illum
                    iste distinctio expedita illo!</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sendChats}>
            <div className={styles.messageLayout}>
              <div>
                <Image src={receiverPic} className={styles.messageAvatar} alt='avatar' />
              </div>
              <div className={styles.sendMsg}>
                <div className={styles.sendMsgInbox}>
                  <span className={styles.time}>18:06 PM | July 24 </span>
                  <p>Hi !! This is message from Riya . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quas nemo eum, earum sunt, nobis similique quisquam eveniet pariatur commodi modi voluptatibus iusto omnis harum illum
                    iste distinctio expedita illo!</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.receivedChats}>
            <div className={styles.messageLayout}>
              <div>
                <Image src={senderPic} className={styles.messageAvatar} alt='avatar' />
              </div>
              <div className={styles.receivedMsg}>
                <div className={styles.receivedMsgInbox}>
                  <span className={styles.time}>18:06 PM | July 24 </span>
                  <p>Hi !! This is message from Riya . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quas nemo eum, earum sunt, nobis similique quisquam eveniet pariatur commodi modi voluptatibus iusto omnis harum illum
                    iste distinctio expedita illo!</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sendChats}>
            <div className={styles.messageLayout}>
              <div>
                <Image src={receiverPic} className={styles.messageAvatar} alt='avatar' />
              </div>
              <div className={styles.sendMsg}>
                <div className={styles.sendMsgInbox}>
                  <span className={styles.time}>18:06 PM | July 24 </span>
                  <p>Hi !! This is message from Riya . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quas nemo eum, earum sunt, nobis similique quisquam eveniet pariatur commodi modi voluptatibus iusto omnis harum illum
                    iste distinctio expedita illo!</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.footer}>
          <div className={styles.messageContainer}>
            <form>
              <textarea className={styles.messageArea} name="message" placeholder="Write a reply..." rows={5} cols={95}></textarea>
              <span><FontAwesomeIcon icon={faMessage} className={styles.footerChatLogo} /></span>
              <span className={styles.footerLogo} > | </span>
              <span><FontAwesomeIcon icon={faBold} className={styles.footerLogo} /></span>
              <span><FontAwesomeIcon icon={faItalic} className={styles.footerLogo} /></span>
              <span><FontAwesomeIcon icon={faBars} className={styles.footerLogo} /></span>
              <span><FontAwesomeIcon icon={faFaceSmile} className={styles.footerLogo} /></span>
              <span><FontAwesomeIcon icon={faPaperclip} className={styles.footerLogo} /></span>
            </form>
          </div>
          <div className={styles.btnContainer}><FontAwesomeIcon icon={faCheck} className={styles.submitBtn} />
          </div>
        </div>

      </main >
    </>
  )
}
