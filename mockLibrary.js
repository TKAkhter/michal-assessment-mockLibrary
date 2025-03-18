const MockLibrary = {
    connect: () => {
        console.log("Connected (v2)");
        return "Connected (v2)"
    },
    disconnect: () => {
        console.log("Disconnected (v2)");
        return "Disconnected (v2)"
    },
    isConnected: () => {
        console.log("Connected: true (v2)");
        return true
    },
    batteryStatus: () => {
        console.log("Battery Status: 85% (v2)");
        return 85
    },
};

module.exports = MockLibrary;