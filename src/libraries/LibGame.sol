// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { Status } from "codegen/common.sol";
import { GameConfig, GameConfigData, MerkleRootConfig, VRGDAConfig, VRGDAConfigData } from "codegen/index.sol";

library LibGame {
    function getGameStatus() internal view returns (Status) {
        return GameConfig.getStatus();
    }

    function canPlay() internal view returns (bool) {
        return getGameStatus() == Status.STARTED && block.timestamp < GameConfig.getEndTime();
    }

    function startGame(
        uint256 endTime,
        uint256 maxPlayerSpend,
        bytes32 merkleRoot,
        int256 vrgdaTargetPrice,
        int256 vrgdaPriceDecay,
        int256 vrgdaPerDayInitial,
        int256 vrgdaPower,
        uint32 crossWordRewardFraction,
        uint16 bonusDistance
    )
        internal
    {
        GameConfig.set(
            GameConfigData({
                status: Status.STARTED,
                endTime: endTime,
                crossWordRewardFraction: crossWordRewardFraction,
                maxPlayerSpend: maxPlayerSpend,
                bonusDistance: bonusDistance
            })
        );
        MerkleRootConfig.set(merkleRoot);
        VRGDAConfig.set(
            VRGDAConfigData({
                startTime: block.timestamp,
                targetPrice: vrgdaTargetPrice,
                priceDecay: vrgdaPriceDecay,
                perDayInitial: vrgdaPerDayInitial,
                power: vrgdaPower
            })
        );
    }
}
