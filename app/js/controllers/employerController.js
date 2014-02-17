function EmployerController($scope, $http) {
    $scope.check = "chekc";
    $scope.url = 'content/employerDetail.json';
    $scope.url2 = 'content/jobs2.json';
    $scope.url3 = 'content/jobs3.json';
    $scope.url4 = 'content/jobs4.json';
    $scope.activeTab = "job-1";
    // $scope.url = 'https://jobs.github.com/positions.json?description=python&location=sf&full_time=true';
    $scope.jobs1 = [];
    $scope.jobs2 = [];
    $scope.jobs3 = [];
    $scope.jobs4 = [];

    $scope.fetchJobs1 = function() {
        $http.get($scope.url).then(function(result){
          $scope.jobs1 = result.data;
        });
    };
    $scope.fetchJobs2 = function() {
        $http.get($scope.url2).then(function(result){
          $scope.jobs2 = result.data;
        });
    };
    $scope.fetchJobs3 = function() {
        $http.get($scope.url3).then(function(result){
          $scope.jobs3 = result.data;
        });
    };
    $scope.fetchJobs4 = function() {
        $http.get($scope.url4).then(function(result){
          $scope.jobs4 = result.data;
        });
    };
    $scope.fetchJobs1();
    $scope.fetchJobs2();
    $scope.fetchJobs3();
    $scope.fetchJobs4();

}