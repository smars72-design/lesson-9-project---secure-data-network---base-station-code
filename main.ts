radio.onReceivedString(function (receivedString) {
    let lastCtr: number[] = []
    let msg = ""
    parts = msg.split("|")
    if (parts.length != 4) {
        basic.showIcon(IconNames.Sad)
        return 0
    }
    nodeID = parseFloat(parts[0])
    pin = parseFloat(parts[1])
    ctr = parseFloat(parts[2])
    temp = parseFloat(parts[3])
    if (true) {
        basic.showIcon(IconNames.Sad)
    }
    if (!(isAllowed())) {
        basic.showIcon(IconNames.No)
        if (pin != pin) {
            basic.showIcon(IconNames.No)
        }
    }
    if (lastCtr[nodeID] != pin && ctr <= lastCtr[nodeID]) {
        basic.showIcon(IconNames.Asleep)
    }
    lastCtr[nodeID] = ctr
    basic.showIcon(IconNames.Yes)
    basic.pause(50)
    basic.clearScreen()
    basic.showString("N" + nodeID)
    basic.showString("T")
    basic.showNumber(temp)
})
function isAllowed () {
    for (let _1 = 0; _1 <= allowedNodes.length - 1; _1++) {
        if (allowedNodes[_1] == nodeID) {
            return true
        }
    }
}
let temp = 0
let ctr = 0
let nodeID = 0
let parts: string[] = []
let allowedNodes: number[] = []
let pin = 0
let GROUP = 23
pin = 1234
allowedNodes = [101, 102, 103]
radio.setGroup(GROUP)
radio.setTransmitPower(7)
