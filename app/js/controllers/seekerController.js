function SeekerController($scope, $http) {
    $scope.isPopupVisible = false;
    $scope.isComposePopupVisible = false;
    $scope.composeEmail = {};
    $scope.name = 'Alan Applicant';
    $scope.activeTab = "suggestions";
    $scope.selected = 1;
    $scope.sentEmails = [];
    $scope.jobShow = true;

    // $scope.on = function(){show = true;}
    // $scope.off = function(){show = false;}
    // $scope.showButton = function(){return show;}
    $scope.reveal = function(show) {
        return show = ! show;
    }
    $scope.hover = function(fruit) {
        // Shows/hides the delete button on hover
        return dashboardTasks.showDelete = ! dashboardTasks.showDelete;
    };
    // $scope.url = 'content/gitJobs.json';
    $scope.url = 'content/jobDetails.json';
    // $scope.url = 'https://jobs.github.com/positions.json?description=python&location=sf&full_time=true';
    $scope.jobs = [];

    $scope.fetchJobs = function() {
        $http.get($scope.url).then(function(result){
          $scope.jobs = result.data;
        });
    }
    $scope.fetchJobs();

    $scope.forward = function() {
        $scope.isPopupVisible = false;
        $scope.composeEmail = {};
        angular.copy($scope.selectedEmail, $scope.composeEmail);

        $scope.composeEmail.body =
            "\n-------------------------------\n"
            + "from: " + $scope.composeEmail.from + "\n"
            + "sent: " + $scope.composeEmail.date + "\n"
            + "to: " + $scope.composeEmail.to + "\n"
            + "subject: " + $scope.composeEmail.subject + "\n"
            + $scope.composeEmail.body;

        $scope.composeEmail.subject = "FW: " + $scope.composeEmail.subject;
        $scope.composeEmail.to = "";
        $scope.composeEmail.from = "me";
        $scope.isComposePopupVisible = true;
    };

    $scope.reply = function() {
        // hide the view details popup
        $scope.isPopupVisible = false;

        // create an empty composeEmail object the compose
        // email popup is bound to
        $scope.composeEmail = {};

        // copy the data from selectedEmail into composeEmail
        angular.copy($scope.selectedEmail, $scope.composeEmail);

        // edit the body to prefix it with a line and the
        // original email information
        $scope.composeEmail.body =
            "\n-------------------------------\n"
            + "from: " + $scope.composeEmail.from + "\n"
            + "sent: " + $scope.composeEmail.date + "\n"
            + "to: " + $scope.composeEmail.to + "\n"
            + "subject: " + $scope.composeEmail.subject + "\n"
            + $scope.composeEmail.body;

        // prefix the subject with “RE:”
        $scope.composeEmail.subject = "RE: " + $scope.composeEmail.subject;

        // the email is going to the person who sent it
        // to us so populate the `to` with `from`
        $scope.composeEmail.to = $scope.composeEmail.from;

        // it’s coming from us
        $scope.composeEmail.from = "me";

        // show the compose email popup
        $scope.isComposePopupVisible = true;
    };

    $scope.sendEmail = function() {
        $scope.isComposePopupVisible = false;
        $scope.composeEmail.from = "me";
        $scope.composeEmail.date = new Date();
        $scope.sentEmails.splice(0,0,$scope.composeEmail);
    };

    $scope.showComposePopup = function() {
        $scope.composeEmail = {};
        $scope.isComposePopupVisible = true;
    };

    $scope.closeComposePopup = function() {
        $scope.isComposePopupVisible = false;
    };

    $scope.showPreferences = function() {
            $scope.composeEmail = {};
            $scope.isPreferencesPopupVisible = true;
        };

    $scope.closePreferences = function() {
        $scope.isPreferencesPopupVisible = false;
    };

    $scope.showPopup = function(email) {
        $scope.isPopupVisible = true;
        $scope.selectedEmail = email;
    };

    $scope.closePopup = function() {
        $scope.isPopupVisible = false;
    };


    $scope.showJobDetail = function(item) {
        $scope.jobDetailVisible = true;
        $scope.selectedJob = item;
    };
    $scope.hideJobDetail = function(item) {
        $scope.jobDetailVisible = false;
    };
    $scope.deleteJob = function(job, item) {
        // $scope.jobDetailVisible = false;
        alert("Deleting the " + item.title);
        $scope.jobShow = false;
    };


    $scope.emails = [
        {
            from: 'John Linquist',
            job: 'Web Developer',
            company: 'Google',
            jobCompany: 'Google',
            to: 'me',
            messages: [{
                from: 'John',
                subject: 'Your Scores Were Truly Embarrassing',
                body: 'just kidding',
                align: 'left',
                date: 'Dec 8'
            },
            {
                from: 'Me',
                subject: 'You are a jerk',
                body: 'you are a jerk',
                align: 'right',
                date: 'Dec 8'
            }

            ],
            subject: 'Your Scores Were Truly Embarrassing',
            date: 'Jan 1',
            body: 'hello world!'
        },
        {
            from: 'Jack Knight',
            job: 'Truck Driver',
            company: 'Laidlaw',
            jobCompany: 'Laidlaw',
            to: 'me',
            messages: [{
                from: 'Jack',
                subject: 'I would like you to come work for me',
                body: 'just kidding',
                align: 'left',
                date: 'Dec 8'
            },
            {
                from: 'Me',
                subject: 'You are a jerk',
                body: 'you are a jerk',
                align: 'right',
                date: 'Dec 8'
            }

            ],
            subject: 'I would like you to come work for me',
            date: 'Feb 15',
            body: 'just kidding'
        },
        {
            from: 'Sally Forth',
            job: 'International Spy',
            company: 'Russia',
            jobCompany: 'America',
            to: 'me',
            messages: [{
                from: 'Sally',
                subject: 'What a fun and rewarding application',
                body: 'just kidding',
                align: 'left',
                date: 'Dec 8'
            },
            {
                from: 'Me',
                subject: 'You are a jerk',
                body: 'you are a jerk',
                align: 'right',
                date: 'Dec 8'
            }

            ],
            subject: 'What a fun and rewarding application',
            date: 'Dec 8',
            body: 'wassup dude'
        },
        {
            from: 'Trudy Trombone',
            job: 'Web Developer',
            company: 'Google',
            jobCompany: 'Google',
            to: 'me',
            messages: [{
                from: 'Trudy',
                subject: 'What is the status of VCf?',
                body: 'just kidding',
                align: 'left',
                date: 'Dec 8'
            },
            {
                from: 'Me',
                subject: 'You are a jerk',
                body: 'you are a jerk',
                align: 'right',
                date: 'Dec 8'
            }

            ],
            subject: 'What a fun and rewarding application',
            date: 'Dec 8',
            body: 'wassup dude'
        }
    ];

}