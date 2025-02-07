var app = angular.module("ProfileApp", []);
app.controller("ProfileController", function ($scope, $sce, $window, $timeout) {
    // Define an enum-like object for profile kinds
    const ProfileKind = {
        UNIT: 'UnitProfile',
        DETACHMENT: 'DetachmentProfile',
        ARMY_RULE: 'ArmyRuleProfile'
    };
    // Define available factions
    const Factions = {
        HARLEQUINS: 'Harlequins',
        ASURYANI: 'Asuryani',
        CORSAIRS: 'Corsairs',
        YNNARI: 'Ynnari'
    };

    $scope.loading = true; // Initialize loading state
    $scope.selectedRule = null;
    $scope.menuOpen = false;
    $scope.searchText = '';
    $scope.activeFilter = ProfileKind.UNIT;
    $scope.factions = Object.values(Factions);
    $scope.filteredProfiles = $scope.profiles;    
    $scope.profiles = data.filter(profile => profile.kind === ProfileKind.UNIT);
    $scope.detachments = data.filter(profile => profile.kind === ProfileKind.DETACHMENT);
    $scope.loading = false; // Set loading to false once data is loaded

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

    $scope.closeMenus = function() {
        $scope.menuOpen = false;
        $scope.armyBuilderOpen = false;
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
        if (description.length == 0) {
            return '';
        }
        return description.includes('[[range]]') ? description.replace('[[range]]', range) : `${range} ${description}`;
    };

    $scope.formatSideMenuName = function(profile) {
        const minCost = profile.composition.cost_map[0].cost;
        const maxCost = profile.composition.cost_map[profile.composition.cost_map.length - 1].cost;
        if (minCost == maxCost) {
            return `${profile.name} ${minCost} ⊗`;
        } else {
            return `${profile.name} ${minCost}-${maxCost} ⊗`;
        }    
    }

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

    // Manage the open/close state of each section
    $scope.sections = {
        armyRules: true,
        detachments: true,
        profiles: true
    };

    // Manage the open/close state of each faction
    $scope.factionSideMenuOpenCloseStates = {};
    $scope.factions.forEach(faction => {
        $scope.factionSideMenuOpenCloseStates[faction] = true; // Initialize all factions as open
    });

    // Function to toggle the visibility of a section
    $scope.toggleSection = function(section) {
        $scope.sections[section] = !$scope.sections[section];
    };

    // Function to toggle the visibility of a faction
    $scope.toggleFaction = function(faction) {
        $scope.factionSideMenuOpenCloseStates[faction] = !$scope.factionSideMenuOpenCloseStates[faction];
    };

    // Function to collapse all sections and factions
    $scope.collapseAll = function() {
        for (let section in $scope.sections) {
            $scope.sections[section] = false;
        }
        for (let faction in $scope.factionSideMenuOpenCloseStates) {
            $scope.factionSideMenuOpenCloseStates[faction] = false;
        }
    };

    // Function to expand all sections and factions
    $scope.expandAll = function() {
        for (let section in $scope.sections) {
            $scope.sections[section] = true;
        }
        for (let faction in $scope.factionSideMenuOpenCloseStates) {
            $scope.factionSideMenuOpenCloseStates[faction] = true;
        }
    };

    $scope.isArmyBuilderEnabled = false; 
    $scope.armyBuilderOpen = false; // Initialize Army Builder menu state

    // Function to toggle the Army Builder panel
    $scope.toggleArmyBuilder = function(event) {
        if (!$scope.isArmyBuilderEnabled) return; // Check the feature flag
        event.stopPropagation();
        $scope.armyBuilderOpen = !$scope.armyBuilderOpen;
        feather.replace();
    };

    $scope.armyCategories = [
        { name: 'Epic Hero' },
        { name: 'Character' },
        { name: 'Infantry' },
        { name: 'Mounted' },
        { name: 'Monster' },
        { name: 'Transport' },
        { name: 'Vehicle' }
    ];

    $scope.army = []; // Initialize army as an array to store individual entries

    // Function to generate a unique ID
    $scope.generateUniqueId = function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    // Override addToArmy to save to cookies
    $scope.addToArmy = function(profile) {
        const uniqueId = $scope.generateUniqueId();
        const firstOption = profile.composition.cost_map[0].range;
        const entry = {
            id: uniqueId,
            name: profile.name,
            category: $scope.determineCategory(profile.keywords),
            selectedOption: firstOption // Set the default selected option
        };
        $scope.army.push(entry);
        $scope.updateArmyEntriesByCategory();
        $scope.saveArmyToCookies(); // Save to cookies after adding
    };

    // Override removeFromArmy to save to cookies
    $scope.removeFromArmy = function(profile) {
        const index = $scope.army.findIndex(entry => entry.name === profile.name);
        if (index !== -1) {
            $scope.army.splice(index, 1);
            $scope.updateArmyEntriesByCategory();
            $scope.saveArmyToCookies(); // Save to cookies after removing
        }
    };

    $scope.determineCategory = function(keywords) {
        for (let category of $scope.armyCategories) {
            if (keywords.includes(category.name)) {
                return category.name;
            }
        }
        return 'Uncategorized'; // Default category if no match
    };

    $scope.updateArmyEntriesByCategory = function() {
        $scope.armyEntriesByCategory = {};
        for (const entry of $scope.army) {
            if (!entry.category) continue;
            if (!$scope.armyEntriesByCategory[entry.category]) {
                $scope.armyEntriesByCategory[entry.category] = [];
            }
            $scope.armyEntriesByCategory[entry.category].push(entry);
        }
    };

    $scope.getArmyCount = function() {
        return $scope.army.length;
    };

    $scope.getArmyEntryCountByName = function(name) {
        return $scope.army.filter(entry => entry.name === name).length;
    };

    $scope.detachment = null; // Initialize detachment as null

    $scope.addDetachment = function(detachmentProfile) {
        if (!$scope.detachment) {
            $scope.detachment = {
                name: detachmentProfile.name,
                keywords: ['Detachment']
            };
            $scope.saveArmyToCookies(); // Save to cookies after adding
        }
    };

    $scope.removeDetachment = function() {
        $scope.detachment = null;
        $scope.saveArmyToCookies(); // Save to cookies after removing
    };

    $scope.enhancements = {}; // Initialize enhancements as an empty object

    $scope.addEnhancement = function(enhancement) {
        if (!$scope.enhancements[enhancement.name]) {
            $scope.enhancements[enhancement.name] = enhancement;
            $scope.saveArmyToCookies(); // Save to cookies after adding
        }
    };

    $scope.removeEnhancement = function(enhancement) {
        if ($scope.enhancements[enhancement.name]) {
            delete $scope.enhancements[enhancement.name];
            $scope.saveArmyToCookies(); // Save to cookies after removing
        }
    };

    // Override saveArmyToCookies to include detachment and enhancements
    $scope.saveArmyToCookies = function () {
        const armyData = {
            army: $scope.army,
            detachment: $scope.detachment,
            enhancements: $scope.enhancements
        };
        setCookie('userArmy', JSON.stringify(armyData), 365); // Store for 365 days
    };

    // Override loadArmyFromCookies to include detachment and enhancements
    $scope.loadArmyFromCookies = function () {
        const armyData = getCookie('userArmy');
        if (armyData) {
            const parsedData = JSON.parse(armyData);
            $scope.army = parsedData.army || [];
            $scope.detachment = parsedData.detachment || null;
            $scope.enhancements = parsedData.enhancements || {};
            $scope.updateArmyEntriesByCategory();
        }
    };

    // Load army from cookies on initialization
    $scope.loadArmyFromCookies();
    // Initialize the precomputed data
    $scope.updateArmyEntriesByCategory();

    $scope.getProfileByName = function(name) {
        return $scope.profiles.find(profile => profile.name === name);
    };
    $scope.calculateTotalPoints = function() {
        let army_cost = $scope.army.reduce((total, entry) => {
            const profile = $scope.getProfileByName(entry.name);
            const selectedOption = profile.composition.cost_map.find(option => option.range === entry.selectedOption);
            return total + (selectedOption ? selectedOption.cost : 0);
        }, 0)
        let enhancement_cost = Object.values($scope.enhancements).reduce((sum, enhancement) => sum + enhancement.cost, 0);
        return army_cost + enhancement_cost;
    };

    $scope.copyEntry = function(entry) {
        const newEntry = angular.copy(entry);
        newEntry.id = $scope.generateUniqueId(); // Generate a new unique ID for the copied entry
        $scope.army.push(newEntry);
        $scope.updateArmyEntriesByCategory();
        $scope.saveArmyToCookies(); // Save to cookies after copying

        // Ensure icons are replaced after DOM update
        $timeout(() => {
            feather.replace();
        });
    };

    $scope.removeEntry = function(entry) {
        const index = $scope.army.findIndex(e => e.id === entry.id);
        if (index !== -1) {
            $scope.army.splice(index, 1);
            $scope.updateArmyEntriesByCategory();
            $scope.saveArmyToCookies(); // Save to cookies after removing

            // Ensure icons are replaced after DOM update
            $timeout(() => {
                feather.replace();
            });
        }
    };

    $scope.clearArmy = function() {
        $scope.army = []; // Clear the army array
        $scope.detachment = null; // Clear the detachment
        $scope.enhancements = {}; // Clear the enhancements
        $scope.updateArmyEntriesByCategory(); // Update the categorized entries
        $scope.saveArmyToCookies(); // Save the empty army to cookies

        // Ensure icons are replaced after DOM update
        $timeout(() => {
            feather.replace();
        });
    };

    $scope.downloadArmy = function() {
        let armyText = '';

        armyText += 'Army List\nTotal Points: ' + $scope.calculateTotalPoints() + '\n\n';

        if ($scope.detachment) {
            armyText += '== DETACHMENT ==\n';
            armyText += `${$scope.detachment.name}\n\n`;
        }

        if (Object.keys($scope.enhancements).length > 0) {
            armyText += '== ENHANCEMENT ==\n';
            for (const [name, enhancement] of Object.entries($scope.enhancements)) {
                armyText += `${name} (${enhancement.cost} pts)\n`;
            }
            armyText += '\n';
        }

        for (const category of $scope.armyCategories) {
            if ($scope.armyEntriesByCategory[category.name] && $scope.armyEntriesByCategory[category.name].length > 0) {
                armyText += `== ${category.name.toUpperCase()} ==\n`;
                for (const entry of $scope.armyEntriesByCategory[category.name]) {
                    const profile = $scope.getProfileByName(entry.name);
                    const selectedOption = profile.composition.cost_map.find(option => option.range === entry.selectedOption);
                    armyText += `${selectedOption.range} ${entry.name} (${selectedOption.cost} pts)\n`;
                }
                armyText += '\n';
            }
        }

        const blob = new Blob([armyText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'army.txt';
        a.click();
        URL.revokeObjectURL(url);
    };

    // Initialize the visibility state from cookies or default to true
    $scope.isTextVisible = getCookie('isTextVisible') === 'false' ? false : true;

    // Function to toggle the visibility of the text
    $scope.toggleTextVisibility = function() {
        $scope.isTextVisible = !$scope.isTextVisible;
        setCookie('isTextVisible', $scope.isTextVisible, 365); // Save the state to cookies
    };

    // Utility functions to manage cookies
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});
