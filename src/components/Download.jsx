import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'

const Download = () => {
    return (
        <div className={`${styles.section} ${styles.bgWhite}`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                    <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Source Code</h1>
                    <p className={`${styles.pText} ${styles.blackText}`}>Get the full source code on Github.</p>
                    <button className={`${styles.btnPrimary}`}><a href="https://github.com/sarthakshukla1316/NFT-Boom" target="_blank">Source Code</a></button>
 
                    <div className={`${styles.flexCenter}`}>
                        <img src={assets.scene} alt="Download_png" className={`${styles.fullImg} w-[90%]`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download