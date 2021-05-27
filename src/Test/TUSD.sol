// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TUSD is ERC20 {
    constructor(address payable bigBoi) ERC20("TUSD", "TUSD") {
        _mint(bigBoi, 1000000000000000000000000000000000);
    }

    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    function faucet() public {
        _mint(msg.sender, 1000000000);
    }
}