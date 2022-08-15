import fs from 'fs'

module.exports = {
  delDir(path: fs.PathLike) {
    let files = []
    if (fs.existsSync(path)) {
      files = fs.readdirSync(path)
      files.forEach((file) => {
        const curPath = path + '/' + file
        if (fs.statSync(curPath).isDirectory()) {
          this.delDir(curPath) //递归删除文件夹
        } else {
          fs.unlinkSync(curPath) //删除文件
        }
      })
      fs.rmdirSync(path)
    }
  },
  copyDir
}
/*
 * 复制目录、子目录，及其中的文件
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 */
function copyDir(src: string, dist: string, callback: (arg0: any) => void) {
  fs.access(dist, function (err: any) {
    if (err) {
      // 目录不存在时创建目录
      fs.mkdirSync(dist)
    }
    _copy(null, src, dist, callback)
  })
}

function _copy(err: null, src: string, dist: string, callback: (data: any) => void) {
  if (err) {
    callback(err)
  } else {
    fs.readdir(src, function (err: any, paths: any[]) {
      if (err) {
        callback(err)
      } else {
        paths.forEach(function (path) {
          const _src = src + '/' + path
          const _dist = dist + '/' + path
          fs.stat(
            _src,
            function (
              err: any,
              stat: {
                isFile: () => any
                isDirectory: () => any
              }
            ) {
              if (err) {
                callback(err)
              } else {
                // 判断是文件还是目录
                if (stat.isFile()) {
                  fs.writeFileSync(_dist, fs.readFileSync(_src))
                } else if (stat.isDirectory()) {
                  // 当是目录是，递归复制
                  copyDir(_src, _dist, callback)
                }
              }
            }
          )
        })
      }
    })
  }
}
