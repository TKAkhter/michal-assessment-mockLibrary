const MockLibrary = {
    connection: () => console.log("Connected (v1)"),
    disconnection: () => console.log("Disconnected (v1)"),
    connected: () => true,
    readBatteryStatus: () => 75,
};

module.exports = MockLibrary;