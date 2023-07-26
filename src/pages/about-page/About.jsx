import React from 'react';
import { Banner, ButtonCustom, TitleDivider } from '../../components/component-exports';
import child1 from '../../assets/Images/child-1.jpg'
import child2 from '../../assets/Images/children-1.jpg'
import child3 from '../../assets/Images/children-2.jpg'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Image } from '@chakra-ui/react';
import './about.scss'

const About = () => {
    return (
        <>
            <Banner title='About Maesan' />
            <section className='about-container'>
                <section className='about-container_story-section'>
                    <div className='about-container_story-section_heading'><TitleDivider title='Our story' color='#010a14'/></div>
                    <div className='about-container_story-section_text'>
                        <h2>
                        Maesan Foundation was founded in 2022, out of a deep belief in the power of compassion
                         and collective action to effect positive change in the world. <br />
                         We have remained committed to addressing significant concerns and creating
                          a long-term difference in the lives of those in need.
                        </h2>
                    </div>
                </section>

                <TitleDivider title='Problems we solve' color='#010a14'/>

                <section className='about-container_content'>
                    <div className='about-container_content_details'>
                        <Accordion defaultIndex={[0]} allowMultiple>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' fontSize={{ base: '18px', sm: '22px' }} fontWeight='bold'>
                                            Curb Hunger
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='about-container_content_details_accordion'>
                                    <div className='about-container_content_details_image'>
                                        <Image src={child1} width='100%' objectFit='cover' rounded='lg' />
                                    </div>
                                    <div className='about-container_content_details_text'>
                                        <p>
                            11.4 Percent Of Children Born In Nigeria Have Reportedly Died Before Reaching Five Years Due
                            To Acute Hunger, According To The 2022 Global Hunger Index.
                                        </p>
                                        <p>
                                        Nigeria Was Ranked 103 Out Of 121 Countries In The 2022 Global Hunger Index, A Position That
                                        Signifies The Nation &quot;Has A Level Of Hunger That Is Serious&quot;. The Survey, Which Ranks
                                        Countries By &quot;Severity&quot;, Gave Nigeria A Score Of 27.3, Indicating A &quot;Serious&quot;
                                        Degree Of Hunger.
                                        </p>

                                        <p>
                                        Nigeria&apos;s Ranking On The Scale Has Remained Unchanged For The Second Year In A Row.
                                        Nigeria, Africa&apos;s Most Populus Country, Was Placed 103rd Out Of 116th In 2021,
                                        And 98th Out Of 107th in 2020.  <br />
                                        According To The 2022 Study, 12.7% Of Nigeria&apos;s Population Is Malnourished.
                                        It Also Shows That 6.5 Percent Of Under-Five Children In The Country Are Wasted,
                                        And 31.5 Percent Are Stunted. In A Bid To Contain The Amount Of Hungry Persons On
                                        The Street, We Aim At Initiating Occasional Reach Outs, To Hungry People, On The Street.
                                        </p>

                                        <p>
                                        Providing Foods And Basic Neccessities To Those Who Might Be In Dire Need
                                        </p>
                                    </div>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' fontSize={{ base: '18px', sm: '22px' }} fontWeight='bold'>
                                        Create Empowerment Skills
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='about-container_content_details_accordion'>
                                    <div className='about-container_content_details_image'>
                                        <Image src={child2} width='100%' objectFit='cover' rounded='lg' />
                                    </div>
                                    <div className='about-container_content_details_text'>
                                        <p>
                                        The Future Of Nigeria Depends On What Is Does Today With Its Dynamic
                                         Youth Population. This Demographic Advantage Must Be Tuned In A
                                          First-Rate And Well-Trained Workforce, For Nigeria, For The Region And
                                           For The World.
                                        </p>
                                        <p>
                                        We Should Priotise Investments In The Youth; In Up Skilling Them For The
                                         Jobs Of The Future, Not The Jobs Of The Past; By Moving Away From So-Called
                                          Youth Empowerment To Youth Investment. To Opening Up The Social And Political
                                           Space To The Youth To Air Their Views And Become A Positive Force For National
                                            Development And For Ensuring That We Create Youth-Based Wealth.
                                        </p>

                                        <p>
                                        From The East To The West, From The North To The South, There Must Be A Change
                                         In Economic, Financial And Business Oppourtunities For Young Nigerians.
                                        </p>

                                        <p>
                                        Additionally, Finance The Innovative Business Ideas Of Young Minds So They
                                         Get To Thrive In The Society, While Providing Human And Economic Importance.
                                          At Large
                                        </p>
                                    </div>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' fontSize={{ base: '18px', sm: '22px' }} fontWeight='bold'>
                                        Improve Mental Health
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='about-container_content_details_accordion'>
                                    <div className='about-container_content_details_image'>
                                        <Image src={child3} width='100%' objectFit='cover' rounded='lg' />
                                    </div>
                                    <div className='about-container_content_details_text'>
                                        <p>
                                        According To The Latest Labour Force Report Of The National Bureau Of Statistics,
                                         Unemployment Among Young Nigerians (15-34 Years) Is The Highest In The Country,
                                         With 21.72 Million Or 42.5 Percent Of The 29.94 Young Nigerians In The Labour
                                          Force Unemployed. While The National Unemployment Rate Stood At 33.3 Percent As
                                           At December 2020.
                                        </p>
                                        <p>
                                        By Providing A Go-To Blog Option For Articles As Pertaining
                                         &apos;Mental Health&apos;, Organizing Orientational Programs And Providing
                                         Professional Therapists, We Hope To Solve This Problem.
                                        </p>
                                    </div>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </section>
            </section>
            <section className='about-container_donate-cta'>
                <h3>Help us so we can help others</h3>
                <ButtonCustom title='Donate now' outline btnStyle='custom-button-style'/>
            </section>
        </>
    );
};

export default About;
