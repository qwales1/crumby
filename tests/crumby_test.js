var should = require('should')

describe('Crumby', function(){

  it('#_split() should set break up url into array of parts', function(done){
    var Crumby = require('../');
    var crumby = new Crumby();
    var currentUrl = '/onelevel/twolevel/threelevel';
    crumby._split(currentUrl);
    crumby._parts.length.should.be.exactly(4);
    done();
  })
  it('#_clean() should remove first index', function(done){
    var Crumby = require('../');
    var crumby = new Crumby();
    var currentUrl = '/'
    crumby._split(currentUrl);
    crumby._clean();
    crumby._parts.length.should.be.exactly(1);
    crumby._parts = [];
    currentUrl = '/cool/test/kid';
    crumby._split(currentUrl)
    crumby._clean();
    crumby._parts.length.should.be.exactly(3);
    done();
  })
  it('#_home() should add an obj with name="home" and path="/" to the first index', function(done){
    var Crumby = require('../');
    var crumby = new Crumby();
    crumby._home();
    crumby._value[0].should.have.property('name','home');
    crumby._value[0].should.have.property('path').with.lengthOf(1);
    crumby._value[0].path[0].should.be.exactly('/');
    done();
  })
  it('#_parse() should return an array of breadcrumb objects', function(done){
    var Crumby = require('../');
    var crumby = new Crumby();
    var url = '/levelone/leveltwo/levelthree';
    var crumbs = crumby.parse(url)
    crumby._value.length.should.be.exactly(4);
    crumby._value[0].should.have.property('name', 'home');
    crumby._value[0].should.have.property('path','/');
    crumby._value[1].should.have.property('name', 'levelone');
    crumby._value[1].should.have.property('path', '/levelone')
    crumby._value[2].should.have.property('name', 'leveltwo');
    crumby._value[2].should.have.property('path', '/levelone/leveltwo');
    crumby._value[3].should.have.property('name', 'levelthree');
    crumby._value[3].should.have.property('path', '/levelone/leveltwo/levelthree');
    done();
  });
  it('#_getAlias should return the alias for given part', function(done){
    var Crumby = require('../');
    var crumby = new Crumby({'test_alias' : 'Test Success'});
    var alias = crumby._getAlias('test_alias');
    alias.should.be.exactly('Test Success');
    var not_found_alias = crumby._getAlias('does_not_exist_at_all_chief');
    not_found_alias.should.be.exactly('does_not_exist_at_all_chief');
    done();
  });

});
