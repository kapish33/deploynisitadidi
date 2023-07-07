import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import TaxSavingProHeroimage from '../../assets/images/HeroTaxImage.png';
import { whileInViewAnimation } from '../../../utils/variants';

const Hero = () => {
  return (
    <section className='body-font text-gray-600'>
      <div className='flex flex-col items-center  md:flex-row'>
        <motion.div
          variants={whileInViewAnimation({ type: 'up' })}
          initial='initial'
          whileInView='whileInView'
          className='mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg'>
          <Image
            className='to-dark-green-800  mx-auto h-96 w-auto  rounded-full border-2 border-hero-400 object-cover object-center'
            alt='Tax Saving Pro'
            src={TaxSavingProHeroimage}
            width={'720'}
            height={'600'}
            priority
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          />
        </motion.div>
        <div className='flex flex-col items-center text-center capitalize md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24'>
          <motion.h1
            variants={whileInViewAnimation({ type: 'fadeIn' })}
            initial='initial'
            whileInView='whileInView'
            className='title-font mb-4 text-4xl font-medium leading-tight text-neutral-800 sm:text-5xl'>
            executive coach to{' '}
            <span className='bg-gradient-to-r from-hero-400 to-green-600 bg-clip-text font-semibold italic text-transparent'>
              CEO's and business
            </span>
            <br className='hidden lg:inline-block' /> &amp;{' '}
            <span className='bg-gradient-to-r from-green-600  to-hero-400 bg-clip-text font-semibold italic text-transparent'>
              leaders globally
            </span>
          </motion.h1>

          <motion.p className='mb-8 leading-relaxed'>
            Experience the transformative power of meditation with Nisheeta
            Bajaj. Through expert-guided practices such as Sudarshan Kriya and
            Sahaj Samadhi, discover inner peace, mindfulness, and deep
            relaxation. Join our community today and embark on a journey of joy,
            harmony, and personal growth through regular meditation practice.
          </motion.p>

          <div className='flex justify-center'>
            <div className='hidden sm:block'>
              <motion.button
                variants={whileInViewAnimation({ type: 'down' })}
                initial='initial'
                whileInView='whileInView'
                className='bottom-nav-buttons m-2 mr-2 px-4'
                aria-label='Sudarshan Kriya'>
                Join Sudarshan Kriya
              </motion.button>
              <motion.button
                variants={whileInViewAnimation({ type: 'down' })}
                initial='initial'
                whileInView='whileInView'
                className='bottom-nav-buttons m-2 px-4'
                aria-label='Sahaj Samadhi'>
                Join Sahaj Samadhi
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
