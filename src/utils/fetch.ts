/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-10 01:40:03
 * @Description:
 */
export const fetchCardRatings = async () => {
  const response = await fetch('/api/cards/ratings');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchUserCardRatings = async (userId: string) => {
  const response = await fetch('/api/cards/myRatings?userId=' + userId);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
