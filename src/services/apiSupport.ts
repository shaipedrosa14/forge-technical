import { Question } from './../interfaces/question'
export async function requestQuestions(): Promise<Question[]> {
  const quizEndpoint = 'https://quizapi.io/api/v1/questions'
  const apiKey = 'WTPHM03uugwpaWX9gL4sNEJjoNIxph7ymrSoF3sj'
  const response = await fetch(quizEndpoint, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': apiKey
      },
  })
  if (!response.ok) {
    console.error(response)
    throw new Error(JSON.stringify(await response.json()));
  }
  return await response.json()
}