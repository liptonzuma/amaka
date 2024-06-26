import {View} from 'react-native';
import React, {useState} from 'react';
import FeedHeader from '../../components/FeedHeader';
import FeedActionButtons from '../../components/FeedActionButtons';
import {s} from 'react-native-size-matters';
import Typography from '../../components/Typography';
import PoolAnswer from '../../components/PoolAnswer';
import {customColors} from '../../shared/colors';

type AnswerValue = 'a' | 'b' | 'c' | 'd' | 'e';
// const choices = [
//   {
//     title: 'How Greenland is in the middle of the Race for the Arctic',
//     value: 'a',
//   },
//   {title: 'Why Power Countries Want Greenland', value: 'b'},
//   {title: 'Why the World Wants Greenland', value: 'c'},
//   {title: "Greenland's Sudden Significance", value: 'd'},
//   {title: 'The Race to Control Greenland', value: 'e'},
// ];

interface PoolDataProps {
  title: string;
  choices: {
    title: string;
    value: AnswerValue;
  }[];
}
export default function PoolContentFeed({title, choices}: PoolDataProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookMarked, setIsBookMarked] = useState(false);

  const [votes, setVotes] = useState({
    a: 30,
    b: 120,
    c: 200,
    d: 40,
    e: 30,
  });

  const [totalVotes, setTotalVotes] = useState(
    Object.values(votes).reduce((a, b) => a + b),
  );

  const [selectedAnswer, setSelectedAnswer] = useState('');

  const [answerPicked, setAnswerPicked] = useState(false);

  function handleSelectAnswer(choice: AnswerValue) {
    if (!answerPicked) {
      setSelectedAnswer(choice);
      setAnswerPicked(true);
      const newScore = {...votes};
      newScore[choice] = newScore[choice] + 1;
      setVotes(newScore);
      setTotalVotes(prev => prev + 1);
      return;
    }
    return;
  }

  return (
    <View style={{paddingHorizontal: s(16)}}>
      <FeedHeader createdAt="3d" />
      <View style={{marginVertical: s(8)}}>
        <Typography
          fontFamily="canela"
          fontSize={16.5}
          style={{lineHeight: s(22)}}>
          {title}
        </Typography>
      </View>
      <View style={{gap: s(8)}}>
        {choices.map(choice => (
          <PoolAnswer
            key={choice.value}
            title={choice.title}
            onSelect={() => handleSelectAnswer(choice.value as AnswerValue)}
            animate={answerPicked}
            isSelectedAnswer={choice.value === selectedAnswer}
            numberOfSelections={votes[choice.value as AnswerValue]}
            totalVotes={totalVotes}
          />
        ))}

        <Typography color={customColors.amaka_gray} style={{marginTop: s(8)}}>
          {totalVotes} votes
        </Typography>
      </View>
      <FeedActionButtons
        isLiked={isLiked}
        isBookMarked={isBookMarked}
        onLike={() => setIsLiked(!isLiked)}
        onBookMark={() => setIsBookMarked(!isBookMarked)}
      />
    </View>
  );
}
