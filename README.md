# genie-music
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![npm](https://img.shields.io/npm/v/genie-music.svg)](https://www.npmjs.com/package/genie-music)
[![Build Status](https://travis-ci.org/mskims/genie-music.svg?branch=master)](https://travis-ci.org/mskims/genie-music)
[![Greenkeeper badge](https://badges.greenkeeper.io/mskims/genie-music.svg)](https://greenkeeper.io/)


브라우저 레벨의 지니 플레이어 컨트롤을 위한 자바스크립트 라이브러리.

# Development
```bash
$ npm i
$ npm run build 
```

# Usage
```javascript
import GenieMusic from 'genie-music'

const genie = new GenieMusic()
genie.on('track-changed', (track) => {
    console.log(`Current track has changed to: ${track}`)
})
```

# API
TBA

# License
MIT