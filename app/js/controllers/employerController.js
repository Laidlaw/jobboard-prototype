function EmployerController($scope, $http) {
    $scope.check = "chekc";
    $scope.url = 'content/employerList.json';
    $scope.activeTab = "job1";
    $scope.expanded = true;
    // $scope.url = 'https://jobs.github.com/positions.json?description=python&location=sf&full_time=true';
    $scope.jobs = [];

    $scope.switchActiveTab = function (id) {
      $scope.activeTab = 'job' + id;
      console.log($scope.activeTab);
    };
    $scope.fetchJobs = function() {
        $http.get($scope.url).then(function(result){
          $scope.jobs = result.data;
        });
    };

    $scope.fetchJobs();


    $scope.showDescriptionPopup = function() {
        $scope.composeEmail = {};
        $scope.isDescriptionPopupVisible = true;

    };

    $scope.closeDescriptionPopup = function() {
        $scope.isDescriptionPopupVisible = false;
    };
}