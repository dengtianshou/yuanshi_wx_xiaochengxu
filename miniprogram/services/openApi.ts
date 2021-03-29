
export async function AnonymousLogin ({uid}: {uid: string}) {
  return new Promise((res, rej) => {
    wx.request({
      url: 'https://api.gizwits.com/app/users',
      data: {
        phone_id: uid,
      },
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'X-Gizwits-Application-Id': '9952da62ec5044ed8fbf47b9d0f2dfbe'
      },
      success: (data) => {
        res(data);
      },
      fail: (err) => {
        rej(err);
      },
    })
  })
}