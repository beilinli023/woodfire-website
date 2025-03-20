
import { Element } from './fiveElementsData';

// Function to determine element based on birth date and hour
export const calculateElement = (date: Date | undefined, hour: string): Element => {
  if (!date) return 'Metal'; // Default

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // Simple algorithm to determine element (in a real app, this would be more complex based on actual Chinese astrology)
  const yearSum = year % 10;
  const monthDay = (month + day) % 5;
  
  // 如果没有提供出生时辰(hour为空字符串)，则不考虑时辰的影响，使用默认值0
  const hourEffect = hour ? parseInt(hour.split('-')[0]) % 5 : 0;
  
  const elementIndex = (yearSum + monthDay + hourEffect) % 5;
  
  const elements: Element[] = ['Metal', 'Wood', 'Water', 'Fire', 'Earth'];
  return elements[elementIndex];
};
