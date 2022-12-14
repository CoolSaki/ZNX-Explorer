function createData(
  txnhash: string,
  method: string,
  block: number,
  age: number,
  from: string,
  to: string,
  value: number,
  txnfee: number,
  txn: number,
  gas: number,
) {
  return { txnhash, method, block, age, from, to, value, txnfee, txn, gas }
}

export const rows = [
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Reinvest',
    16113867,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    12,
    932793,
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'WithDraw',
    16113866,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    10,
    747328,
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Duel',
    16113865,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    1,
    353564,
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    '0xa58e140e',
    16113864,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    6,
    44511,
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Claim_rewards',
    16113863,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    8,
    1114242,
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Approve',
    16113862,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    4,
    120929,
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Claim Rewards',
    16113861,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,

    7,
    358117,
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    '0x8dea6891',
    16113860,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    5,
    31233,
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    '0x544b36ca',
    16113859,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    3,
    50977,
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Swap Exact Tokens For ETH',
    16113858,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    2,
    834152,
  ),
]

export const columns = ['Block', 'Age', 'Txn', 'Gas Used', 'Reward']

export const totaltransactions = '49,602,895'
