window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;

const sellObjs = [{
  drawDown: -0.0719,
  profit: -0.0682,
  runUp: 0.1129,
  type: "SELL"
}, {
  drawDown: -0.0217,
  profit: 0.0504,
  runUp: 0.2041,
  type: "SELL"
}, {
  drawDown: -0.0672,
  profit: -0.0479,
  runUp: 0.0487,
  type: "SELL"
}, {
  drawDown: -0.0261,
  profit: 0.0405,
  runUp: 0.1773,
  type: "SELL"
}, {
  drawDown: -0.0332,
  profit: -0.0191,
  runUp: 0.082,
  type: "SELL"
}, {
  drawDown: -0.0444,
  profit: -0.0446,
  runUp: 0.0266,
  type: "SELL"
}, {
  drawDown: -0.1584,
  profit: -0.1501,
  runUp: 0.0123,
  type: "SELL"
}, {
  drawDown: -0.067,
  profit: -0.0658,
  runUp: 0.0066,
  type: "SELL"
}, {
  drawDown: -0.0094,
  profit: 0.1378,
  runUp: 0.2148,
  type: "SELL"
}, {
  drawDown: -0.0098,
  profit: 0.0027,
  runUp: 0.0796,
  type: "SELL"
}, {
  drawDown: -0.0216,
  profit: 0.0122,
  runUp: 0.0744,
  type: "SELL"
}, {
  drawDown: -0.0125,
  profit: -0.0115,
  runUp: 0.0602,
  type: "SELL"
}, {
  drawDown: -0.0127,
  profit: -0.0134,
  runUp: 0.0341,
  type: "SELL"
}, {
  drawDown: -0.0174,
  profit: -0.0051,
  runUp: 0.0383,
  type: "SELL"
}, {
  drawDown: -0.0142,
  profit: 0.1585,
  runUp: 0.2391,
  type: "SELL"
}, {
  drawDown: -0.0368,
  profit: -0.0362,
  runUp: 0.0112,
  type: "SELL"
}, {
  drawDown: -0.0102,
  profit: -0.0099,
  runUp: 0.0629,
  type: "SELL"
}, {
  drawDown: -0.0401,
  profit: -0.0389,
  runUp: 0.0107,
  type: "SELL"
}, {
  drawDown: -0.032,
  profit: -0.0181,
  runUp: 0.0569,
  type: "SELL"
}, {
  drawDown: -0.0039,
  profit: 0.3231,
  runUp: 0.4809,
  type: "SELL"
}, {
  drawDown: -0.0061,
  profit: 0.0147,
  runUp: 0.1069,
  type: "SELL"
}, {
  drawDown: -0.0222,
  profit: 0.0569,
  runUp: 0.1644,
  type: "SELL"
}, {
  drawDown: -0.0332,
  profit: -0.03,
  runUp: 0.0329,
  type: "SELL"
}, {
  drawDown: -0.0167,
  profit: 0.1202,
  runUp: 0.2627,
  type: "SELL"
}, {
  drawDown: -0.0175,
  profit: -0.0141,
  runUp: 0.0829,
  type: "SELL"
}, {
  drawDown: -0.0272,
  profit: -0.0076,
  runUp: 0.0465,
  type: "SELL"
}, {
  drawDown: -0.0156,
  profit: -0.0141,
  runUp: 0.0378,
  type: "SELL"
}, {
  drawDown: -0.003,
  profit: 0.0019,
  runUp: 0.0548,
  type: "SELL"
}, {
  drawDown: -0.0066,
  profit: 0.0354,
  runUp: 0.0713,
  type: "SELL"
}, {
  drawDown: -0.0201,
  profit: 0.0191,
  runUp: 0.0645,
  type: "SELL"
}, {
  drawDown: -0.0399,
  profit: -0.0402,
  runUp: 0.0096,
  type: "SELL"
}, {
  drawDown: -0.0008,
  profit: 0.0303,
  runUp: 0.0763,
  type: "SELL"
}, {
  drawDown: -0.0412,
  profit: -0.0407,
  runUp: 0.0238,
  type: "SELL"
}, {
  drawDown: -0.0272,
  profit: -0.0253,
  runUp: 0.0212,
  type: "SELL"
}, {
  drawDown: -0.0461,
  profit: -0.0403,
  runUp: 0.0063,
  type: "SELL"
}, {
  drawDown: -0.0241,
  profit: -0.0076,
  runUp: 0.0469,
  type: "SELL"
}, {
  drawDown: -0.0112,
  profit: -0.0109,
  runUp: 0.0349,
  type: "SELL"
}, {
  drawDown: -0.0222,
  profit: -0.0203,
  runUp: 0.0236,
  type: "SELL"
}, {
  drawDown: -0.0164,
  profit: -0.0129,
  runUp: 0.0289,
  type: "SELL"
}, {
  drawDown: -0.0077,
  profit: 0.0927,
  runUp: 0.1691,
  type: "SELL"
}, {
  drawDown: -0.0318,
  profit: -0.0278,
  runUp: 0.0037,
  type: "SELL"
}, {
  drawDown: -0.0521,
  profit: -0.0276,
  runUp: 0.0278,
  type: "SELL"
}, {
  drawDown: -0.0306,
  profit: -0.0311,
  runUp: 0.0026,
  type: "SELL"
}, {
  drawDown: -0.0104,
  profit: 0.0712,
  runUp: 0.1656,
  type: "SELL"
}, {
  drawDown: -0.0241,
  profit: -0.0208,
  runUp: 0.0481,
  type: "SELL"
}, {
  drawDown: -0.0253,
  profit: -0.0181,
  runUp: 0.0332,
  type: "SELL"
}, {
  drawDown: -0.0307,
  profit: -0.0307,
  runUp: 0.0317,
  type: "SELL"
}, {
  drawDown: -0.0374,
  profit: -0.0347,
  runUp: 0.0032,
  type: "SELL"
}, {
  drawDown: -0.0223,
  profit: 0.0037,
  runUp: 0.0454,
  type: "SELL"
}, {
  drawDown: -0.0267,
  profit: -0.0046,
  runUp: 0.0469,
  type: "SELL"
}, {
  drawDown: -0.0266,
  profit: -0.0244,
  runUp: 0.0227,
  type: "SELL"
}, {
  drawDown: -0.0168,
  profit: -0.0073,
  runUp: 0.0242,
  type: "SELL"
}, {
  drawDown: -0.0113,
  profit: -0.0057,
  runUp: 0.0394,
  type: "SELL"
}, {
  drawDown: -0.0052,
  profit: 0.0723,
  runUp: 0.1322,
  type: "SELL"
}, {
  drawDown: -0.0278,
  profit: -0.0006,
  runUp: 0.0467,
  type: "SELL"
}, {
  drawDown: -0.0006,
  profit: 0.02,
  runUp: 0.0642,
  type: "SELL"
}, {
  drawDown: -0.0309,
  profit: 0.0966,
  runUp: 0.2651,
  type: "SELL"
}, {
  drawDown: -0.0406,
  profit: -0.0043,
  runUp: 0.0502,
  type: "SELL"
}, {
  drawDown: -0.0189,
  profit: -0.0074,
  runUp: 0.056,
  type: "SELL"
}, {
  drawDown: -0.0088,
  profit: -0.0059,
  runUp: 0.0454,
  type: "SELL"
}, {
  drawDown: -0.0391,
  profit: -0.0359,
  runUp: 0.0159,
  type: "SELL"
}, {
  drawDown: -0.0213,
  profit: -0.0168,
  runUp: 0.0131,
  type: "SELL"
}, {
  drawDown: -0.0033,
  profit: 0.0265,
  runUp: 0.0788,
  type: "SELL"
}, {
  drawDown: -0.0221,
  profit: -0.0183,
  runUp: 0.0271,
  type: "SELL"
}, {
  drawDown: -0.0176,
  profit: -0.0155,
  runUp: 0.0207,
  type: "SELL"
}, {
  drawDown: 0.0298,
  profit: 0.0672,
  runUp: 0.1136,
  type: "SELL"
}, {
  drawDown: -0.0428,
  profit: -0.0386,
  runUp: 0.0324,
  type: "SELL"
}, {
  drawDown: -0.0175,
  profit: -0.0171,
  runUp: 0.0218,
  type: "SELL"
}, {
  drawDown: -0.0214,
  profit: 0.0042,
  runUp: 0.34,
  type: "SELL"
}, {
  drawDown: -0.0057,
  profit: 0.098,
  runUp: 0.2025,
  type: "SELL"
}, {
  drawDown: -0.0554,
  profit: -0.0533,
  runUp: 0.0098,
  type: "SELL"
}, {
  drawDown: -0.0438,
  profit: -0.0421,
  runUp: 0.0047,
  type: "SELL"
}, {
  drawDown: -0.0095,
  profit: -0.0087,
  runUp: 0.0375,
  type: "SELL"
}, {
  drawDown: -0.0243,
  profit: -0.0145,
  runUp: 0.0311,
  type: "SELL"
}, {
  drawDown: -0.0035,
  profit: 0.1025,
  runUp: 0.1585,
  type: "SELL"
}, {
  drawDown: -0.0678,
  profit: -0.0239,
  runUp: 0.0842,
  type: "SELL"
}, {
  drawDown: -0.0614,
  profit: -0.0605,
  runUp: 0.0161,
  type: "SELL"
}, {
  drawDown: -0.0048,
  profit: 0.073,
  runUp: 0.1261,
  type: "SELL"
}, {
  drawDown: -0.0198,
  profit: -0.0077,
  runUp: 0.0493,
  type: "SELL"
}, {
  drawDown: -0.0201,
  profit: -0.0203,
  runUp: 0.0171,
  type: "SELL"
}]

const buyObjs = [{
  drawDown: -0.0048,
  profit: 0.1512,
  runUp: 0.2687,
  type: "BUY"
}, {
  drawDown: -0.0281,
  profit: -0.0187,
  runUp: 0.1081,
  type: "BUY"
}, {
  drawDown: -0.0627,
  profit: -0.0606,
  runUp: 0.0172,
  type: "BUY"
}, {
  drawDown: -0.0565,
  profit: -0.0522,
  runUp: 0.0371,
  type: "BUY"
}, {
  drawDown: -0.0142,
  profit: 0.0184,
  runUp: 0.1931,
  type: "BUY"
}, {
  drawDown: -0.0402,
  profit: 0.0972,
  runUp: 0.1878,
  type: "BUY"
}, {
  drawDown: -0.0272,
  profit: 0.0639,
  runUp: 0.1444,
  type: "BUY"
}, {
  drawDown: -0.033,
  profit: 0.1088,
  runUp: 0.183,
  type: "BUY"
}, {
  drawDown: -0.0043,
  profit: 0.0069,
  runUp: 0.1149,
  type: "BUY"
}, {
  drawDown: -0.0087,
  profit: 0.166,
  runUp: 0.2477,
  type: "BUY"
}, {
  drawDown: -0.025,
  profit: -0.0072,
  runUp: 0.0435,
  type: "BUY"
}, {
  drawDown: -0.0518,
  profit: -0.0506,
  runUp: 0.0117,
  type: "BUY"
}, {
  drawDown: -0.0055,
  profit: 0.0774,
  runUp: 0.1129,
  type: "BUY"
}, {
  drawDown: -0.0305,
  profit: -0.0268,
  runUp: 0.0057,
  type: "BUY"
}, {
  drawDown: -0.0086,
  profit: 0.0645,
  runUp: 0.1211,
  type: "BUY"
}, {
  drawDown: -0.0039,
  profit: 0.02,
  runUp: 0.0879,
  type: "BUY"
}, {
  drawDown: -0.0006,
  profit: 0.0292,
  runUp: 0.0757,
  type: "BUY"
}, {
  drawDown: -0.0303,
  profit: -0.0028,
  runUp: 0.0449,
  type: "BUY"
}, {
  drawDown: -0.0382,
  profit: -0.0387,
  runUp: 0.0095,
  type: "BUY"
}, {
  drawDown: -0.0406,
  profit: -0.0388,
  runUp: 0.0034,
  type: "BUY"
}, {
  drawDown: -0.0307,
  profit: -0.0082,
  runUp: 0.0866,
  type: "BUY"
}, {
  drawDown: -0.0316,
  profit: 0.0082,
  runUp: 0.0722,
  type: "BUY"
}, {
  drawDown: -0.0108,
  profit: 0.0229,
  runUp: 0.0992,
  type: "BUY"
}, {
  drawDown: -0.001,
  profit: 0.059,
  runUp: 0.1207,
  type: "BUY"
}, {
  drawDown: -0.06,
  profit: -0.0432,
  runUp: 0.0333,
  type: "BUY"
}, {
  drawDown: -0.0293,
  profit: 0.0281,
  runUp: 0.0987,
  type: "BUY"
}, {
  drawDown: -0.0071,
  profit: -0.003,
  runUp: 0.0419,
  type: "BUY"
}, {
  drawDown: -0.0401,
  profit: -0.0273,
  runUp: 0.0063,
  type: "BUY"
}, {
  drawDown: -0.0255,
  profit: -0.0149,
  runUp: 0.0227,
  type: "BUY"
}, {
  drawDown: -0.0345,
  profit: -0.0284,
  runUp: 0.0072,
  type: "BUY"
}, {
  drawDown: -0.0043,
  profit: 0.2615,
  runUp: 0.3333,
  type: "BUY"
}, {
  drawDown: -0.0029,
  profit: 0.0067,
  runUp: 0.0582,
  type: "BUY"
}, {
  drawDown: -0.033,
  profit: -0.0282,
  runUp: 0.0168,
  type: "BUY"
}, {
  drawDown: -0.0023,
  profit: 0.1255,
  runUp: 0.1774,
  type: "BUY"
}, {
  drawDown: -0.0042,
  profit: -0.0027,
  runUp: 0.05226,
  type: "BUY"
}, {
  drawDown: -0.0317,
  profit: -0.0319,
  runUp: 0.0102,
  type: "BUY"
}, {
  drawDown: -0.0008,
  profit: 0.0517,
  runUp: 0.0889,
  type: "BUY"
}, {
  drawDown: -0.0393,
  profit: -0.0398,
  runUp: 0.0001,
  type: "BUY"
}, {
  drawDown: -0.0121,
  profit: -0.0085,
  runUp: 0.0276,
  type: "BUY"
}, {
  drawDown: -0.0089,
  profit: 0.0473,
  runUp: 0.0909,
  type: "BUY"
}, {
  drawDown: -0.0246,
  profit: -0.0236,
  runUp: 0.0021,
  type: "BUY"
}, {
  drawDown: -0.0379,
  profit: -0.0374,
  runUp: 0.0021,
  type: "BUY"
}, {
  drawDown: -0.004,
  profit: 0.0238,
  runUp: 0.0586,
  type: "BUY"
}, {
  drawDown: -0.0249,
  profit: -0.022,
  runUp: 0.0096,
  type: "BUY"
}, {
  drawDown: -0.0289,
  profit: -0.0266,
  runUp: 0.0277,
  type: "BUY"
}, {
  drawDown: -0.0355,
  profit: -0.0349,
  runUp: 0.0164,
  type: "BUY"
}, {
  drawDown: -0.0041,
  profit: 0.2963,
  runUp: 0.3499,
  type: "BUY"
}, {
  drawDown: -0.0108,
  profit: 0.0385,
  runUp: 0.1008,
  type: "BUY"
}, {
  drawDown: -0.0289,
  profit: 0.0123,
  runUp: 0.0892,
  type: "BUY"
}, {
  drawDown: -0.0264,
  profit: -0.021,
  runUp: 0.0259,
  type: "BUY"
}, {
  drawDown: -0.0563,
  profit: -0.0055,
  runUp: 0.0312,
  type: "BUY"
}, {
  drawDown: -0.0372,
  profit: -0.0104,
  runUp: 0.0333,
  type: "BUY"
}, {
  drawDown: -0.0082,
  profit: 0.0452,
  runUp: 0.1141,
  type: "BUY"
}, {
  drawDown: -0.0248,
  profit: -0.0171,
  runUp: 0.0174,
  type: "BUY"
}, {
  drawDown: -0.0291,
  profit: -0.0243,
  runUp: 0.0098,
  type: "BUY"
}, {
  drawDown: -0.024,
  profit: -0.0189,
  runUp: 0.0237,
  type: "BUY"
}, {
  drawDown: -0.0028,
  profit: 0.0016,
  runUp: 0.0608,
  type: "BUY"
}, {
  drawDown: -0.0258,
  profit: -0.0257,
  runUp: 0.0286,
  type: "BUY"
}, {
  drawDown: -0.0278,
  profit: -0.0222,
  runUp: 0.0273,
  type: "BUY"
}, {
  drawDown: -0.0246,
  profit: -0.0227,
  runUp: 0.0161,
  type: "BUY"
}, {
  drawDown: -0.0372,
  profit: -0.0326,
  runUp: 0.0098,
  type: "BUY"
}, {
  drawDown: -0.0006,
  profit: 0.0422,
  runUp: 0.0806,
  type: "BUY"
}, {
  drawDown: -0.024,
  profit: -0.0207,
  runUp: 0.0252,
  type: "BUY"
}, {
  drawDown: -0.0322,
  profit: -0.0325,
  runUp: 0.0015,
  type: "BUY"
}, {
  drawDown: -0.0245,
  profit: -0.0235,
  runUp: 0.005,
  type: "BUY"
}, {
  drawDown: -0.0395,
  profit: -0.0353,
  runUp: 0.0037,
  type: "BUY"
}, {
  drawDown: -0.0396,
  profit: -0.0399,
  runUp: 0.0034,
  type: "BUY"
}, {
  drawDown: -0.0051,
  profit: 0.0046,
  runUp: 0.0451,
  type: "BUY"
}, {
  drawDown: -0.019,
  profit: -0.0193,
  runUp: 0.009,
  type: "BUY"
}, {
  drawDown: -0.0261,
  profit: -0.0265,
  runUp: 0.0257,
  type: "BUY"
}, {
  drawDown: -0.0404,
  profit: -0.0367,
  runUp: 0.0452,
  type: "BUY"
}, {
  drawDown: -0.0252,
  profit: -0.0258,
  runUp: 0.0255,
  type: "BUY"
}, {
  drawDown: -0.0194,
  profit: -0.0178,
  runUp: 0.0248,
  type: "BUY"
}, {
  drawDown: -0.0187,
  profit: 0.1286,
  runUp: 0.2073,
  type: "BUY"
}, {
  drawDown: -0.0135,
  profit: -0.0072,
  runUp: 0.03,
  type: "BUY"
}, {
  drawDown: -0.035,
  profit: -0.0329,
  runUp: 0.0133,
  type: "BUY"
}, {
  drawDown: -0.0231,
  profit: -0.0214,
  runUp: 0.0512,
  type: "BUY"
}, {
  drawDown: -0.006,
  profit: 0.0671,
  runUp: 0.1388,
  type: "BUY"
}, {
  drawDown: -0.0027,
  profit: 0.0022,
  runUp: 0.08,
  type: "BUY"
}, {
  drawDown: -0.0428,
  profit: 0.034,
  runUp: 0.0663,
  type: "BUY"
}, {
  drawDown: -0.0055,
  profit: 0.1032,
  runUp: 0.148,
  type: "BUY"
}]

let currentBalance = 100;
const cumulativeBalance = (141*.388);

  let winnerS = 101;
  let winnerB = 101;
  let winnerSsl;
  let winnerStp;
  let winnerSl;
  let winnerBsl;
  let winnerBtp;
  let winnerBl;
  
  
  //variables
  let sell = {'leverage': 1, 'stopLoss': 0.000, 'takeProfit': 0.000}
  let buy = {'leverage': 1, 'stopLoss': 0.000, 'takeProfit': 0.000}
  
  //calculation function
  const stepOne = (j) => {
  return sellObjs[j]['drawDown'] <= sell['stopLoss'] 
         ? 1 + (sell['stopLoss'] * sell['leverage'])
         : sellObjs[j]['runUp'] >= sell['takeProfit']
         ? 1 + (sell['takeProfit']  * sell['leverage'])
         : 1 + (sellObjs[j]['profit'] * sell['leverage'])
  }
    while(sell['leverage'] <= 30) {
      while(sell['takeProfit'] <= 0.3) {
        while(sell['stopLoss'] >= -0.3) {
          for (let i = 0; i < sellObjs.length; i++) {
            if ((currentBalance *= stepOne(i)) < 0 || (sell['leverage'] * sell['stopLoss']) <= -1) {
              break;
            } else {
              currentBalance += cumulativeBalance;
              currentBalance *= stepOne(i);
            }
          }
          
          if (currentBalance > winnerS) {
           winnerS = currentBalance
           winnerSsl = sell['stopLoss'];
           winnerStp = sell['takeProfit'];
           winnerSl = sell['leverage'];
          } else {
           ''
         }
          currentBalance = 100
          sell['stopLoss'] -= 0.001
        }

      sell['stopLoss'] = 0.000
      sell['takeProfit'] += 0.001
      }
      sell['takeProfit'] = 0.000
      sell['leverage'] += 1
    }
  
  
  console.log("winnerS: " + winnerS)
  console.log('winner Ssl: ' + winnerSsl)
  console.log('winner Stp: ' + winnerStp)
  console.log('winner Sl: ' + winnerSl)
  

const stepTwo = (j) => {
  return buyObjs[j]['drawDown'] <= buy['stopLoss'] 
         ? 1 + (buy['stopLoss'] * buy['leverage'])
         : buyObjs[j]['runUp'] >= buy['takeProfit']
         ? 1 + (buy['takeProfit']  * buy['leverage'])
         : 1 + (buyObjs[j]['profit'] * buy['leverage'])
  }
    while(buy['leverage'] <= 30) {
      while(buy['takeProfit'] <= 0.3) {
        while(buy['stopLoss'] >= -0.3) {
          for (let i = 0; i < buyObjs.length; i++) {
            if ((currentBalance *= stepTwo(i)) < 0 || (buy['leverage'] * buy['stopLoss']) <= -1) {
              break;
            } else {
              currentBalance += cumulativeBalance;
              currentBalance *= stepTwo(i);
            }
          }
          if (currentBalance > winnerB) {
           winnerB = currentBalance
           winnerBsl = buy['stopLoss'];
           winnerBtp = buy['takeProfit'];
           winnerBl = buy['leverage'];
          } else {
           ''
         }
          currentBalance = 100
          buy['stopLoss'] -= 0.001
        }

      buy['stopLoss'] = 0.000
      buy['takeProfit'] += 0.001
      }
      buy['takeProfit'] = 0.000
      buy['leverage'] += 1
    }

  console.log("winnerB: " + winnerB)
  console.log('winner Bsl: ' + winnerBsl)
  console.log('winner Btp: ' + winnerBtp)
  console.log('winner Bl: ' + winnerBl)

console.log(winnerB + winnerS)
