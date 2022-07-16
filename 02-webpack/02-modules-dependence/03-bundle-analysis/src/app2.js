// webpackChunkName: 'lodash'  给lodash取模块名
import(/* webpackChunkName: 'lodash' */'lodash').then(({default:_})=>{
    console.log(_.join(['hello','webpack'],' '))
})