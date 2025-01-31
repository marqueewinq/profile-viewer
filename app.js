var app = angular.module("ProfileApp", []);
app.controller("ProfileController", function ($scope, $sce) {
    // Define an enum-like object for profile kinds
    const ProfileKind = {
        UNIT: 'UnitProfile',
        DETACHMENT: 'DetachmentProfile'
    };

    $scope.profiles = data.filter(profile => profile.kind === ProfileKind.UNIT);
    $scope.detachments = data.filter(profile => profile.kind === ProfileKind.DETACHMENT);
    $scope.selectedRule = null;
    $scope.menuOpen = false;
    $scope.searchText = '';
    $scope.activeFilter = ProfileKind.UNIT; // Default filter

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

    $scope.filterByName = function(name) {
        $scope.searchText = name;
        $scope.activeFilter = ProfileKind.UNIT;
        $scope.menuOpen = false;
    };

    $scope.filterByDetachment = function(name) {
        $scope.searchText = name;
        $scope.activeFilter = ProfileKind.DETACHMENT;
        $scope.menuOpen = false;
    };

    $scope.showDescription = function (ruleName) {
        $scope.selectedRule = ruleName;
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

    // Initialize filteredProfiles
    $scope.filteredProfiles = data.filter(profile => profile.kind === $scope.activeFilter);

    console.log('Profiles:', $scope.profiles);
    console.log('Detachments:', $scope.detachments);
    console.log('Filtered Profiles:', $scope.filteredProfiles);

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
});