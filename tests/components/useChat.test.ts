import { useChat } from '@/composables/useChat'

describe('useChat Composable', () => {
  it('add message correctly when handleMessageSend is called', async () => {
    const testText = 'Test message'
    const { messages, handleMessageSend } = useChat()

    await handleMessageSend(testText)

    expect(messages.value).toBeTruthy()
    expect(messages.value.length).toBe(1)
    expect(messages.value).toContainEqual({
      id: expect.any(String),
      text: testText,
      isSentByUser: true,
    })
  })

  it('no add if text is empty', async () => {
    const testText = ''
    const { messages, handleMessageSend } = useChat()

    await handleMessageSend(testText)

    expect(messages.value).toBeTruthy()
    expect(messages.value.length).toBe(0)
  })

  // it('Get messsage of API if text containt ?', async () => {
  //   const testText = 'Do you want some coffee?'
  //   const { messages, handleMessageSend } = useChat()
  //
  //   await handleMessageSend(testText)
  //
  //   const [myMessage, responseMessage] = messages.value
  //
  //   expect(myMessage).toEqual({
  //     id: expect.any(String),
  //     text: testText,
  //     isSentByUser: true,
  //   })
  //
  //   expect(responseMessage).toEqual({
  //     id: expect.any(String),
  //     text: expect.any(String),
  //     isSentByUser: false,
  //     image: expect.any(String),
  //   })
  //
  //   // validate URL
  //   const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
  //   expect(urlPattern.test(responseMessage?.image ?? '')).toBe(true)
  // })

  it('mock response - fetch API', async () => {
    const mockResponse = {
      answer: 'yes',
      image: 'https://example.com/image.jpg',
    }
    window.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
    })

    const testText = 'Do you want some coffee?'
    const { messages, handleMessageSend } = useChat()

    await handleMessageSend(testText)

    const [myMessage, responseMessage] = messages.value

    expect(responseMessage).toEqual({
      id: expect.any(String),
      text: mockResponse.answer,
      isSentByUser: false,
      image: mockResponse.image,
    })

    expect(myMessage).toEqual({
      id: expect.any(String),
      text: testText,
      isSentByUser: true,
    })

    // validate URL
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
    expect(urlPattern.test(responseMessage?.image ?? '')).toBe(true)
  })
})
