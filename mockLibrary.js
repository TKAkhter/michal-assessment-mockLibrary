const MockLibrary = {
    connect: () => console.log("Connected (v2)"),
    disconnect: () => console.log("Disconnected (v2)"),
    isConnected: () => true,
    batteryStatus: () => 85,
};

module.exports = MockLibrary;