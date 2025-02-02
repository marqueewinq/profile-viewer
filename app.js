var app = angular.module("ProfileApp", []);
app.controller("ProfileController", function ($scope, $sce, $window) {
    // Define an enum-like object for profile kinds
    const ProfileKind = {
        UNIT: 'UnitProfile',
        DETACHMENT: 'DetachmentProfile',
        ARMY_RULE: 'ArmyRuleProfile'
    };

    $scope.profiles = data.filter(profile => profile.kind === ProfileKind.UNIT);
    $scope.detachments = data.filter(profile => profile.kind === ProfileKind.DETACHMENT);
    $scope.selectedRule = null;
    $scope.menuOpen = false;
    $scope.searchText = '';
    $scope.activeFilter = ProfileKind.UNIT; // Default filter

    // Define available factions
    $scope.factions = ['Asuryani', 'Harlequins'];

    $scope.$watchGroup(['searchText', 'activeFilter'], function() {
        $scope.filteredProfiles = data.filter(profile => {
            const nameMatch = profile.name.toLowerCase().includes($scope.searchText.toLowerCase());
            const kindMatch = profile.kind === $scope.activeFilter;
            return nameMatch && kindMatch;
        });
    });

    $scope.toggleFilter = function(kind) {
        $scope.activeFilter = kind;
    };

    $scope.filterByKind = function(kind, name) {
        $scope.searchText = name;
        $scope.activeFilter = kind;
        $scope.menuOpen = false;
    };

    $scope.hideDescription = function () {
        $scope.selectedRule = null;
    };

    $scope.getRuleDescription = function (ruleName) {
        for (var key in rulesData) {
            if (rulesData[key].name === ruleName) {
                return rulesData[key].description;
            }
        }
        return "";
    };

    $scope.safeHTML = function (value) {
        return $sce.trustAsHtml(value);
    };

    $scope.toggleMenu = function (event) {
        event.stopPropagation();
        $scope.menuOpen = !$scope.menuOpen;
    };

    $scope.closeMenu = function() {
        $scope.menuOpen = false;
    };

    $scope.resetFilters = function () {
        $scope.searchText = '';
        $scope.activeFilter = ProfileKind.UNIT; // Reset to default filter
    };

    // Function to filter profiles by selected faction
    $scope.filterByFaction = function(faction) {
        $scope.selectedFaction = faction;
        if ($scope.selectedFaction) {
            $scope.filteredProfiles = $scope.profiles.filter(profile => profile.faction === $scope.selectedFaction);
        } else {
            $scope.filteredProfiles = $scope.profiles; // Show all profiles if no faction is selected
        }
    };

    // Initialize filteredProfiles
    $scope.filteredProfiles = $scope.profiles;

    // Initialize theme icon based on cookie
    $scope.themeIcon = getCookie('UserPreferences') === 'dark' ? '☀️' : '🌙';

    // Check for existing theme preference
    if (getCookie('UserPreferences') === 'dark') {
        document.documentElement.classList.add('dark-theme');
    }

    $scope.toggleTheme = function() {
        document.documentElement.classList.toggle('dark-theme');
        if (document.documentElement.classList.contains('dark-theme')) {
            setCookie('UserPreferences', 'dark', 365);
            $scope.themeIcon = '☀️'; // Sun emoji for dark theme
            console.log('Dark theme enabled');
        } else {
            setCookie('UserPreferences', 'light', 365);
            $scope.themeIcon = '🌙'; // Moon emoji for light theme
            console.log('Light theme enabled');
        }
    };

    $scope.formatCompositionDescription = function(description, range) {
        return description.includes('[[range]]') ? description.replace('[[range]]', range) : `${range} ${description}`;
    };

    // Function to scroll to the top of the page
    $scope.scrollToTop = function() {
        $window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Show/hide the back-to-top button based on scroll position
    angular.element($window).on('scroll', function() {
        const backToTopButton = document.getElementById('backToTop');
        if ($window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
});
