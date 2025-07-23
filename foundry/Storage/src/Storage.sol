// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Storage {
    uint256 private storedData;
    address public owner;
    
    event DataStored(uint256 indexed newValue, address indexed setter);
    
    constructor() {
        owner = msg.sender;
        storedData = 0;
    }
    
    function store(uint256 _data) public {
        storedData = _data;
        emit DataStored(_data, msg.sender);
    }
    
    function retrieve() public view returns (uint256) {
        return storedData;
    }
    
    function getOwner() public view returns (address) {
        return owner;
    }
}