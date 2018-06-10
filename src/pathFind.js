function pathFind(path, obj) {

          path
            .filter(pathLayer => pathLayer.obj === obj)
            .map(pathLayer =>
                obj[pathLayer.id] = pathFind(path, pathLayer.id))
          return obj["foo"]

}


module.exports = { pathFind }
