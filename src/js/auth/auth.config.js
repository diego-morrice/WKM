function AuthConfig($stateProvider, $httpProvider) {
  'ngInject';

  $stateProvider

  .state('app.login', {
    url: '/',
    controller: 'AuthCtrl', 
    controllerAs: '$ctrl',
    templateUrl: 'auth/auth.html',
    title: 'Entrar'
    // resolve: {
    //   auth: function(User) {
    //     return User.ensureAuthIs(false);
    //   }
    //}
  })

  // .state('app.register', {
  //   url: '/register',
  //   controller: 'AuthCtrl as $ctrl',
  //   templateUrl: 'auth/auth.html',
  //   title: 'Cadastro',
  //   resolve: {
  //     auth: function(User) {
  //       return User.ensureAuthIs(false);
  //     }
  //   }
  // });

};

export default AuthConfig;