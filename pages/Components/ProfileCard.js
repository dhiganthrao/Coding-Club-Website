import React from "react";
import styles from '../../styles/Card.module.css';
import Image from 'next/image';

const ProfileCard = ({
    name="", 
    position="", 
    alt="", 
    profilePic="", 
    socials={
      github: "",
      linkedin: "",
      instagram: ""
    }, 
    marginFlag=true
  }) => {
  return (
    <>
      <article className={styles.card} style={{marginLeft: marginFlag ? "-2rem" : "-50px"}}>
        <div className={styles.profile}>
          <div className={styles.profile_pic}>
            <Image width="130" height="130" src={profilePic} alt={alt}></Image>
          </div>
          <header className={styles.card_header}>
            <h2 className={styles.profile_name}>
              {
                name.split(' ').map((word, i) => {
                  return (<>
                    {word}<br key={i}/>
                  </>);
                })
              }
            </h2>
            <div className={styles.profile_subtitle}>{position}</div>
          </header>
          <div className={styles.social_media}>
            { 
              socials.linkedin 
              ? 
                <a 
                  href={socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`fa fa-linkedin ${styles.social_icon}`}
                ></a>
              : null
            }
            { 
              socials.github 
              ? 
                <a 
                  href={socials.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`fa fa-github ${styles.social_icon}`}
                ></a>
              : null
            }
            { 
              socials.instagram 
              ? 
                <a 
                  href={socials.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`fa fa-instagram ${styles.social_icon}`}
                ></a>
              : null
            }
          </div>
        </div>
      </article>
    </>
  );
}

export default ProfileCard
