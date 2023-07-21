import React from 'react';
import { InfoCard, TitleDivider } from '../../component-exports';
import { strategyContent } from '../../../mocked-data/mocked-data';
import { Box } from '@chakra-ui/react'
import './strategy.scss'

const Strategy = () => {
    return (
        <section className='strategy-container'>
            <article className='strategy-container_intro'>
                <TitleDivider title='strategy and goals' color='#010a14'/>
            </article>
            <article className='strategy-container_cards-container'>
                <Box p={2} className='strategy-container_cards-container_wrapper'>
                    {strategyContent.map((strategy, i) => (
                        <Box key={`strategy-key-${i + 1}`}>
                            <InfoCard imgSrc={strategy.image} title={strategy.title} text={strategy.text} plateColor='#ecf2f5' linkTitle='Read more' linkUrl='#'/>
                        </Box>
                    ))}
                </Box>
            </article>
        </section>
    )
};

export default Strategy;
