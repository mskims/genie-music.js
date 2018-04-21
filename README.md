# genie-music
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![Build Status](https://travis-ci.org/mskims/genie-music.svg?branch=master)](https://travis-ci.org/mskims/genie-music)


브라우저 레벨의 지니 플레이어 컨트롤을 위한 자바스크립트 라이브러리.

# 개발
```bash
$ npm i
$ npm run build 
```

# 예
```javascript
import GenieMusic from 'genie-music'

const genie = new GenieMusic()
genie.onAny((event, value) => {
    console.log(`'${event}' Triggered: ${value}`)
})
```

# 라이센스
MIT