module.exports = {
  "valid": [
    {
      "dec": "0",
      "decp": "0",
      "DER": "00",
      "hex": "",
      "hexPadded": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    {
      "dec": "1",
      "decp": "1",
      "DER": "01",
      "hex": "01",
      "hexPadded": "0000000000000000000000000000000000000000000000000000000000000001"
    },
    {
      "dec": "-1",
      "decp": "255",
      "DER": "ff",
      "hex": "ff",
      "hexPadded": "00000000000000000000000000000000000000000000000000000000000000ff"
    },
    {
      "dec": "127",
      "decp": "127",
      "DER": "7f",
      "hex": "7f",
      "hexPadded": "000000000000000000000000000000000000000000000000000000000000007f"
    },
    {
      "dec": "-127",
      "decp": "129",
      "DER": "81",
      "hex": "81",
      "hexPadded": "0000000000000000000000000000000000000000000000000000000000000081"
    },
    {
      "dec": "128",
      "decp": "128",
      "DER": "0080",
      "hex": "80",
      "hexPadded": "0000000000000000000000000000000000000000000000000000000000000080"
    },
    {
      "dec": "-128",
      "decp": "128",
      "DER": "80",
      "hex": "80",
      "hexPadded": "0000000000000000000000000000000000000000000000000000000000000080"
    },
    {
      "dec": "255",
      "decp": "255",
      "DER": "00ff",
      "hex": "ff",
      "hexPadded": "00000000000000000000000000000000000000000000000000000000000000ff"
    },
    {
      "dec": "-255",
      "decp": "65281",
      "DER": "ff01",
      "hex": "ff01",
      "hexPadded": "000000000000000000000000000000000000000000000000000000000000ff01"
    },
    {
      "dec": "16300",
      "decp": "16300",
      "DER": "3fac",
      "hex": "3fac",
      "hexPadded": "0000000000000000000000000000000000000000000000000000000000003fac"
    },
    {
      "dec": "-16300",
      "decp": "49236",
      "DER": "c054",
      "hex": "c054",
      "hexPadded": "000000000000000000000000000000000000000000000000000000000000c054"
    },
    {
      "dec": "62300",
      "decp": "62300",
      "DER": "00f35c",
      "hex": "f35c",
      "hexPadded": "000000000000000000000000000000000000000000000000000000000000f35c"
    },
    {
      "dec": "-62300",
      "decp": "16714916",
      "DER": "ff0ca4",
      "hex": "ff0ca4",
      "hexPadded": "0000000000000000000000000000000000000000000000000000000000ff0ca4"
    },
    {
      "dec": "158798437896437949616241483468158498679",
      "decp": "158798437896437949616241483468158498679",
      "DER": "77777777777777777777777777777777",
      "hex": "77777777777777777777777777777777",
      "hexPadded": "0000000000000000000000000000000077777777777777777777777777777777"
    },
    {
      "dec": "115792089237316195423570985008687907852837564279074904382605163141518161494336",
      "decp": "115792089237316195423570985008687907852837564279074904382605163141518161494336",
      "DER": "00fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140",
      "hex": "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140",
      "hexPadded": "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"
    },
    {
      "dec": "48968302285117906840285529799176770990048954789747953886390402978935544927851",
      "decp": "48968302285117906840285529799176770990048954789747953886390402978935544927851",
      "DER": "6c4313b03f2e7324d75e642f0ab81b734b724e13fec930f309e222470236d66b",
      "hex": "6c4313b03f2e7324d75e642f0ab81b734b724e13fec930f309e222470236d66b",
      "hexPadded": "6c4313b03f2e7324d75e642f0ab81b734b724e13fec930f309e222470236d66b"
    }
  ],
  "invalid": [
    {
      "description": "non-hex string",
      "string": "invalid"
    },
    {
      "description": "incomplete hex",
      "string": "ffffd0a"
    },
    {
      "description": "non-hex alphabet",
      "string": "c2F0b3NoaQo="
    },
    {
      "description": "internal whitespace",
      "string": "11111 11111"
    },
    {
      "description": "leading whitespace",
      "string": " 1111111111"
    },
    {
      "description": "trailing whitespace",
      "string": "1111111111 "
    }
  ]
}