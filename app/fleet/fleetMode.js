require('../app.js');

angular.module('spacegame')
    .factory('fleetMode', function () {
        var _mode = 'std';
        var _modes = ['std', 'addWaypoint'];

        function mode(mode) {
            if (_modes.indexOf(mode) !== -1) {
                _mode = mode;
            }
            return _mode;
        }


        return {
            mode: mode
        }
    });
