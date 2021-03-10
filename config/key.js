if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}

// error: src refspec master does not match any
// error: failed to push some refs to 'https://github.com/bein2u/boiler-plate-init.git'
// github에 push 안되는 에러 처리를 위해 다시 commit 필요함 (임시로 수정)