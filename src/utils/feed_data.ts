import {images} from '../../assets/images/images';
import {FeedContentType} from '../screens/task2/Feeds';

interface FeedDataShape {
  contentType: FeedContentType;
  data?: any;
  id: string;
}
export const mockFeedData: FeedDataShape[] = [
  {
    contentType: 'badged',
    data: {},
    id: '#1',
  },

  {
    contentType: 'badged',
    data: {},
    id: '#2',
  },

  {
    contentType: 'banner',
    data: {},
    id: '#3',
  },
  {
    contentType: 'shorts',
    data: [
      {img: images.creator1, id: '1'},
      {img: images.creator2, id: '2'},
      {img: images.creator1, id: '3'},
    ],
    id: '#3gsf',
  },
  {
    contentType: 'video',
    id: '#1234',
    data: {},
  },
  {
    contentType: 'suggestions',
    id: '#hs2',
    data: [1, 2, 3, 4],
  },
  {
    contentType: 'pool',
    id: '27364',
    data: {
      title: 'Which title would you click on?',
      choices: [
        {
          title: 'How Greenland is in the middle of the Race for the Arctic',
          value: 'a',
        },
        {title: 'Why Power Countries Want Greenland', value: 'b'},
        {title: 'Why the World Wants Greenland', value: 'c'},
        {title: "Greenland's Sudden Significance", value: 'd'},
        {title: 'The Race to Control Greenland', value: 'e'},
      ],
    },
  },

  {
    contentType: 'event',
    id: '#212@d',
  },
  {
    contentType: 'pool',
    id: '#417364',
    data: {
      title: 'Who is the GOAT of football?',
      choices: [
        {
          title: 'Ronaldinho Guacho',
          value: 'a',
        },
        {title: 'Christiano Ronaldo', value: 'b'},
        {title: 'Messi', value: 'c'},
        {title: 'Pele', value: 'd'},
        {title: 'Maradona', value: 'e'},
      ],
    },
  },
];
