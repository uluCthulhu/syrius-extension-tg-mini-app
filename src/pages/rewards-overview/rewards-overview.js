import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import animationVariants from '../../layouts/tabsLayout/animationVariants';

const RewardsOverview = () => {
  const navigate = useNavigate();
  const [currentTask, setCurrentTask] = useState(); 

  useEffect(() => {
  
    return ()=>{
    }
  }, []);


  const goToTask = () => {
    navigate('send', {
      state: {
        currentSelectedTask: currentTask,
      }
    });
  }

  return (
    <motion.div 
      className='black-bg transition-animated'
      initial={"pageTransitionInitial"}
      animate={"pageTransitionAnimate"}
      exit={"pageTransitionExit"}
      variants={animationVariants}>

      <div className='mt-2 ml-2 mr-2 d-flex justify-content-center'>
    test
    <img src="./../../assets/rewards/cover.png" alt="cover"/>
      </div>
      
  </motion.div>
  );
};

export default RewardsOverview