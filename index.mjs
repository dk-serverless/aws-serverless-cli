export const handler = async (event, context) => {
  console.log('[EVENT] : ', JSON.stringify(event))
  console.log('[FUNC_NAME] : ', context.functionName)
  console.log('[REMAINING TIME] : ', context.getRemainingTimeInMillis())

  console.log('[ENV] ENV : ', process.env.env, 'AUTHOR : ', process.env.author)
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  }
  return response
}
