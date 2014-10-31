crumby
======

Breaks uris into breadcrumbs

Basic Use    
    
    var Crumby = require('crumby');
    
    var crumby = new Crumby();
    var uri = '/levelone/leveltwo/levelthree'
    var breadcrumbs = crumby.parse(uri);
    
    //return value
    [ { name: 'home', path: '/' },
    { name: 'levelone', path: '/levelone' },
    { name: 'leveltwo', path: '/levelone/leveltwo' },
    { name: 'levelthree', path: '/levelone/leveltwo/levelthree'} ]
    
Aliases    

    var Crumby = require('crumby');
    var crumby = new Crumby({
        levelone : 'ONE',
        leveltwo : 'TWO',
        levelthree : 'ETC'
    
    });
    var uri = '/levelone/leveltwo/levelthree'
    var breadcrumbs = crumby.parse(uri);
    
    //return value
    [ { name: 'home', path: '/' },
    { name: 'ONE', path: '/levelone' },
    { name: 'TWO', path: '/levelone/leveltwo' },
    { name: 'ETC', path: '/levelone/leveltwo/levelthree'} ]

