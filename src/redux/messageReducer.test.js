import messageReducer, {
  getAllMessage,
  getCurrentIdUser,
  getMessagesUser,
  postMessageForUser,
  setNameUserDialogueOpposite,
} from "./messageReducer";

//1 test

it("Get all dialogs whith your friends", () => {
  let action = getAllMessage([
    {
      id: 11884,
      userName: "romanz",
      hasNewMessages: false,
      lastDialogActivityDate: "2020-10-06T17:04:38.01",
      lastUserActivityDate: "2020-10-09T16:41:46.353",
      newMessagesCount: 0,
      photos: {
        small: null,
        large: null,
      },
    },
    {
      id: 11883,
      userName: "roman1",
      hasNewMessages: false,
      lastDialogActivityDate: "2020-10-06T17:04:38.01",
      lastUserActivityDate: "2020-10-09T16:41:46.353",
      newMessagesCount: 0,
      photos: {
        small: null,
        large: null,
      },
    },
  ]);
  let state = {
    message: [
      {
        id: 11725,
        userName: "testdevplayer",
        hasNewMessages: false,
        lastDialogActivityDate: "2020-10-08T22:09:15.173",
        lastUserActivityDate: "2020-10-08T21:55:26.04",
        newMessagesCount: 0,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/11725/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/11725/user.jpg?v=1",
        },
      },
      {
        id: 11883,
        userName: "roman1",
        hasNewMessages: false,
        lastDialogActivityDate: "2020-10-06T17:04:38.01",
        lastUserActivityDate: "2020-10-09T16:41:46.353",
        newMessagesCount: 0,
        photos: {
          small: null,
          large: null,
        },
      },
      {
        id: 9132,
        userName: "Artem_k_85",
        hasNewMessages: false,
        lastDialogActivityDate: "2020-10-06T14:06:17.543",
        lastUserActivityDate: "2020-07-06T14:33:28.647",
        newMessagesCount: 0,
        photos: {
          small: null,
          large: null,
        },
      },
      {
        id: 6560,
        userName: "gaev_art",
        hasNewMessages: false,
        lastDialogActivityDate: "2020-10-03T19:16:59.757",
        lastUserActivityDate: "2020-10-09T19:05:20.983",
        newMessagesCount: 0,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/6560/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/6560/user.jpg?v=1",
        },
      },
      {
        id: 11430,
        userName: "userEgor",
        hasNewMessages: false,
        lastDialogActivityDate: "2020-10-03T18:52:32.947",
        lastUserActivityDate: "2020-10-05T18:31:04.217",
        newMessagesCount: 0,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/11430/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/11430/user.jpg?v=1",
        },
      },
    ],
  };

  let NewState = messageReducer(state, action);

  expect(NewState.message.length).toBe(2);
  expect(NewState.message[1].userName).toBe("roman1");
});

//2 test

it("Get all message with your friends", () => {
  let action = getMessagesUser([
    {
      id: "66bf1f28-c82b-46dd-8c54-d77710d7da9d",
      body: "Привет",
      translatedBody: null,
      addedAt: "2020-10-08T19:35:38.467",
      senderId: 11725,
      senderName: "testdevplayer",
      recipientId: 9629,
      viewed: true,
    },
  ]);
  let state = {
    messageData: [
      {
        id: "66bf1f28-c82b-46dd-8c54-d77710d7da9d",
        body: "Привет",
        translatedBody: null,
        addedAt: "2020-10-08T19:35:38.467",
        senderId: 11725,
        senderName: "testdevplayer",
        recipientId: 9629,
        viewed: true,
      },
      {
        id: "9b774ea0-a445-4d37-afc7-9a8c1f3a4dfd",
        body: "как дела?",
        translatedBody: null,
        addedAt: "2020-10-08T19:35:45.613",
        senderId: 11725,
        senderName: "testdevplayer",
        recipientId: 9629,
        viewed: true,
      },
      {
        id: "1ca61625-15c2-436e-ba46-f2d7bc1fb66d",
        body: "Привет, хорошо, а твои?",
        translatedBody: null,
        addedAt: "2020-10-08T19:40:27.53",
        senderId: 9629,
        senderName: "VladzimirKopanko",
        recipientId: 11725,
        viewed: true,
      },
      {
        id: "1e5505e7-b474-494f-8867-86d5b0c9185b",
        body: "hi, how are you?",
        translatedBody: null,
        addedAt: "2020-10-08T19:47:48.737",
        senderId: 9629,
        senderName: "VladzimirKopanko",
        recipientId: 11725,
        viewed: true,
      },
    ],
  };

  let NewState = messageReducer(state, action);

  expect(NewState.messageData.length).toBe(1);
  expect(NewState.messageData[0].body).toBe("Привет");
});

//3 test

it("Get current ID user", () => {
  let action = getCurrentIdUser("11725");
  let state = {
    currentUserId: null,
  };

  let NewState = messageReducer(state, action);

  expect(NewState.currentUserId).toBe("11725");
});

//4 test

it("Get current ID user", () => {
  let action = setNameUserDialogueOpposite("vovakopanko");
  let state = {
    userName: null,
  };

  let NewState = messageReducer(state, action);

  expect(NewState.userName).toBe("vovakopanko");
});
