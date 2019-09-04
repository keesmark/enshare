const initState = {
  gears: [
    {
      id: "1",
      title: "モニター２４インチ",
      amazonUrl:
        "https://www.amazon.co.jp/%E3%80%90Amazon-co-jp%E9%99%90%E5%AE%9A%E3%80%91Dell-%E3%83%87%E3%82%A3%E3%82%B9%E3%83%97%E3%83%AC%E3%82%A4-SE2416H-23-8%E3%82%A4%E3%83%B3%E3%83%81-IPS%E9%9D%9E%E5%85%89%E6%B2%A2/dp/B017SMDGAI/ref=sr_1_1_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC&qid=1567455071&s=gateway&smid=AN1VRQENFRJN5&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFFS1MxSU9XRTZIMVMmZW5jcnlwdGVkSWQ9QTA1OTQ5NDczR0pLRkNQNFRRSVpSJmVuY3J5cHRlZEFkSWQ9QTFXNFFKREZHVFkzN0Mmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
      imgUrl: "",
      content: "これはめっちゃええで！"
    },
    {
      id: "2",
      title: "キーボード",
      amazonUrl:
        "https://www.amazon.co.jp/%E3%80%90Amazon-co-jp%E9%99%90%E5%AE%9A%E3%80%91Dell-%E3%83%87%E3%82%A3%E3%82%B9%E3%83%97%E3%83%AC%E3%82%A4-SE2416H-23-8%E3%82%A4%E3%83%B3%E3%83%81-IPS%E9%9D%9E%E5%85%89%E6%B2%A2/dp/B017SMDGAI/ref=sr_1_1_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC&qid=1567455071&s=gateway&smid=AN1VRQENFRJN5&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFFS1MxSU9XRTZIMVMmZW5jcnlwdGVkSWQ9QTA1OTQ5NDczR0pLRkNQNFRRSVpSJmVuY3J5cHRlZEFkSWQ9QTFXNFFKREZHVFkzN0Mmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
      imgUrl: "",
      content: "これはめっちゃええで！"
    },
    {
      id: "3",
      title: "マウス",
      amazonUrl:
        "https://www.amazon.co.jp/%E3%80%90Amazon-co-jp%E9%99%90%E5%AE%9A%E3%80%91Dell-%E3%83%87%E3%82%A3%E3%82%B9%E3%83%97%E3%83%AC%E3%82%A4-SE2416H-23-8%E3%82%A4%E3%83%B3%E3%83%81-IPS%E9%9D%9E%E5%85%89%E6%B2%A2/dp/B017SMDGAI/ref=sr_1_1_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC&qid=1567455071&s=gateway&smid=AN1VRQENFRJN5&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFFS1MxSU9XRTZIMVMmZW5jcnlwdGVkSWQ9QTA1OTQ5NDczR0pLRkNQNFRRSVpSJmVuY3J5cHRlZEFkSWQ9QTFXNFFKREZHVFkzN0Mmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
      imgUrl: "",
      content: "これはめっちゃええで！"
    }
  ]
};

const gearReducer = (state = initState, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case "CREATE_GEAR":
      console.log("create gear", action.gear);
  }
  return state;
};

export default gearReducer;
