import styles from './CardGame.module.scss'

{ console.log(styles) }
export default function SingleCard({ card, handleCardClick, open, disableClicks }) {
    return (
        <div className={`${styles.card} ${open ? styles.opened : ''}`} >
            <div className={styles.imgs_wrapper}>
                <img src={card.src} alt="card front" className={styles.img_front} />
                <img src="/images/img_back.png" alt="card back" className={styles.img_back} onClick={disableClicks ? null : handleCardClick} />
            </div>
        </div>
    )
}