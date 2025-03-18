const MockLibrary = {
    connection: () => {
        console.log("Connected (v1)")
        return "Connected (v1)"
    },
    disconnection: () => {
        console.log("Disconnected (v1)")
        return "Disconnected (v1)"
    },
    connected: () => {
        console.log("Connected: true (v1)")
        return "true"
    },
    readBatteryStatus: () => {
        console.log("Battery Status: 75% (v1)")
        return 75
    },
};

module.exports = MockLibrary;