// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {Script, console} from "forge-std/Script.sol";
import {Storage} from "../src/Storage.sol";

contract DeployStorage is Script {
    Storage public storageContract;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        // Deploy the Storage contract (no constructor arguments needed)
        storageContract = new Storage();        
        console.log("Storage contract deployed to:", address(storageContract));
        vm.stopBroadcast();
    }
}