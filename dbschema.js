let db = {
    users: [
        {
            userId: 'dh23ggj5h32g543j5gf43',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2019-03-15T10:59:52.798Z',
            imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
            bio: 'Hello, my name is user, nice to meet you',
            website: 'https://user.com',
            location: 'London, UK'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2019-03-13T11:46:01.018Z',
            likeCount: 5,
            commentCount: 3
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'dsgfsgsdg',
            body: 'nice one mate!',
            createdAt: '2019-03-15T10:59:52.798Z'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'dfsdgsdfgdf',
            type: 'like | comment',
            createdAt: '2019-03-15T10:59:52.798Z'
        }
    ]
}

const userDetails = {
    //Redux data
    credentials: 
        {
            userId: 'N43KJ5H4342IJSNUIDB',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2019-03-15T10:59:52.798Z',
            imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
            bio: 'Hello, my name is user, nice to meet you',
            website: 'https://user.com',
            location: 'London, UK'
        }
    ,
    likes:[
        {
            userHandle: 'user',
            screamId: 'hh243109ur2'
        },
        {
            userHandle: 'user',
            screamId: 'fsdbruiwbguier'
        }
    ]
}