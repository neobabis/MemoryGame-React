import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import SingleCard from './SingleCard';
import styles from './CardGame.module.scss'

const IMAGES = [
    { "src": "/images/1.png" },
    { "src": "/images/2.png" },
    { "src": "/images/3.png" },
    { "src": "/images/4.png" },
    { "src": "/images/5.png" },
    { "src": "/images/6.png" }
]

export default function CardGame() {
    const [cards, setCards] = useState([]);
    const [selectionOne, setSelectionOne] = useState(null);
    const [selectionTwo, setSelectionTwo] = useState(null);
    const [disableClicks, setDisableClicks] = useState(false);

    const startGame = () => {
        const suffleCards = [...IMAGES, ...IMAGES]
            .map((card) => ({ ...card, matched: false, id: uuid() }))
            .sort(() => 0.5 - Math.random());

        setCards(suffleCards)
    }

    const handleCardClick = (card) => {
        selectionOne ? setSelectionTwo(card) : setSelectionOne(card)
    }

    useEffect(() => {
        startGame()
    }, []);



    useEffect(() => {

        if (!selectionOne || !selectionTwo) return
        setDisableClicks(true)

        const resetSelectionCards = () => {
            setSelectionOne(null)
            setSelectionTwo(null)
            setDisableClicks(false)
        }

        if (selectionOne.src === selectionTwo.src) {
            setCards(prevCards => {
                return prevCards.map(card => {
                    if (card.src === selectionOne.src) {
                        return { ...card, matched: true }
                    } else {
                        return card
                    }
                })
            })

            resetSelectionCards()
        } else {
            setTimeout(() => { resetSelectionCards() }, 700)
        }

    }, [selectionOne, selectionTwo]);


    return (
        <>
            {cards.filter(card => !card.matched).length === 0 && <button className={styles.new_game} onClick={startGame}>Νέο παιχνίδι</button>}
            <div className={styles.cards_grid}>
                {cards.map((card) => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleCardClick={() => { handleCardClick(card) }}
                        disableClicks={disableClicks}
                        open={card === selectionOne || card === selectionTwo || card.matched}
                    />
                ))}
            </div>
        </>
    )
}