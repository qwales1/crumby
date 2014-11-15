var Crumby = function(opts){
      this._value = [];
      this._parts = [];
      this._alias = opts || {};
      this._split = function(url){
        this._parts = url.split('/');
      }
      this._clean = function(array){
        this._parts = this._parts.slice(1);
      }
      this._home = function(){
        this._value.unshift({name : 'home', path: '/'});
      }
      this._crumbs = function(){
        for(var i=0; i < (this._parts.length); i++){
          this._value.push(this._crumb(this._parts[i]));
        }
      }
      this._crumb = function(part){
        var index = this._parts.indexOf(part) ? this._parts.indexOf(part)+1 : 1;
        var path = this._parts.slice(0,index);
        var alias = this._getAlias(part);
        path[0] = '/'+path[0];
        return {'name' : decodeURIComponent(alias), path: path.join('/')}
      }
      this._getAlias = function(part){
        return this._alias[part] || part;
      }
      this.parse = function(url){
        this._split(url)
        this._home()
        this._clean()
        this._crumbs();
        return this._value;
      }

}
module.exports = Crumby
