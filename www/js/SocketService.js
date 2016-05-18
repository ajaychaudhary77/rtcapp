(function(){

  angular.module('starter')
    .service('SocketService', ['socketFactory', SocketService]);

    function SocketService(socketFactory){
      return socketFactory({
        ioSocket: io.connect('http://5.249.154.190:4000')
      });
    }
})();