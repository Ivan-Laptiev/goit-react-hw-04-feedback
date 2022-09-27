import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistic/Statistic";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";
import {Container} from "./App.styled";
import { useState } from "react";


export function App()  {
    const [goodFeedback, setGoodFeedback] = useState(0);
    const [neutralFeeedback, setNeutralFeeedback] = useState(0);
    const [badFeeedback, setBadFeeedback] = useState(0)
  
    const changeFeedback =(buttonName) => {

      switch(buttonName){

        case 'good' :
          setGoodFeedback(goodFeedback+1);
          break;
        
        case 'neutral' :
          setNeutralFeeedback(neutralFeeedback+1);
          break;
        
        case 'bad' :
          setBadFeeedback(badFeeedback+1);
          break;

          default:
            return;
      }
    }

  const countTotalFeedback = () => {
    return (goodFeedback + neutralFeeedback + badFeeedback);
  }

  const countPositiveFeedbackPercentage = () =>{
  return Math.round((goodFeedback * 100) / countTotalFeedback());
  }

    const buttons = [ "good", "neutral", "bad" ] ;
    
    return (
    <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={buttons} onLeaveFeedback={changeFeedback} />
        </Section>  
        <Section title="Statistics">
          {countTotalFeedback() ? <Statistics good={goodFeedback} neutral={neutralFeeedback} bad={badFeeedback} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} /> :<Notification message="There is no feedback" />}
        
        </Section>
    </Container>
    );
  };