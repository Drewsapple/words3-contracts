/* Autogenerated file. Do not edit manually. */

import { TableId } from "@latticexyz/common";
import { defineComponent, Type as RecsType, World } from "@latticexyz/recs";

export function defineContractComponents(world: World) {
  return {
    GameConfig: (() => {
      const tableId = new TableId("", "GameConfig");
      return defineComponent(
        world,
        {
          status: RecsType.Number,
          endTime: RecsType.BigInt,
          crossWordRewardFraction: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MerkleRootConfig: (() => {
      const tableId = new TableId("", "MerkleRootConfig");
      return defineComponent(
        world,
        {
          value: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    VRGDAConfig: (() => {
      const tableId = new TableId("", "VRGDAConfig");
      return defineComponent(
        world,
        {
          startTime: RecsType.BigInt,
          targetPrice: RecsType.BigInt,
          priceDecay: RecsType.BigInt,
          perDay: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    TileLetter: (() => {
      const tableId = new TableId("", "TileLetter");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    TilePlayer: (() => {
      const tableId = new TableId("", "TilePlayer");
      return defineComponent(
        world,
        {
          value: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Treasury: (() => {
      const tableId = new TableId("", "Treasury");
      return defineComponent(
        world,
        {
          value: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Points: (() => {
      const tableId = new TableId("", "Points");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Spent: (() => {
      const tableId = new TableId("", "Spent");
      return defineComponent(
        world,
        {
          value: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    LetterCount: (() => {
      const tableId = new TableId("", "LetterCount");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Claimed: (() => {
      const tableId = new TableId("", "Claimed");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
  };
}
