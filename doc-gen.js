function getPlayer() {
  return {
    title: document.getElementById('title').innerText,
    cover: document.getElementById('cover').src,
    musics: function () {
      var musics = []
      document.querySelectorAll('#list-box > li').forEach(function (li) {
        musics.push({
          index: +li.querySelector('.index').innerText,
          name: li.querySelector('.name').innerText,
          by: li.querySelector('.by').innerText
        })
      })
      return musics
    }()
  }
}

function genDoc() {
  var player = getPlayer()
  var doc = ''
  doc += '![' + player.title + '](' + player.cover + ')'
  doc += '\n## ' + player.title + '\n'
  player.musics.forEach(function(m) {
    doc += '\n' + m.index + '. ' + m.name + ' `' + m.by + '`'
  })
  return doc += '\n\n'
}

console.log(genDoc())