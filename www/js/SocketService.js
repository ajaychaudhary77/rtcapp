(function(){

  angular.module('starter')
    .service('SocketService', ['socketFactory', SocketService]);

    function SocketService(socketFactory){
      return socketFactory({
        ioSocket: io.connect('http://95.236.217.196:4000')
      });
    }
})();