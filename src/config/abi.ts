export const auctionsAbi =
[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftContractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "auctionEndPeriod",
				"type": "uint64"
			}
		],
		"name": "AuctionPeriodUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftContractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "auctionSettler",
				"type": "address"
			}
		],
		"name": "AuctionSettled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftContractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftOwner",
				"type": "address"
			}
		],
		"name": "AuctionWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftContractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "bidder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "erc20Token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			}
		],
		"name": "BidMade",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftContractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "highestBidder",
				"type": "address"
			}
		],
		"name": "BidWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftContractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint128",
				"name": "newBuyNowPrice",
				"type": "uint128"
			}
		],
		"name": "BuyNowPriceUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftContractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "HighestBidTaken",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftContractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newMinPrice",
				"type": "uint256"
			}
		],
		"name": "MinimumPriceUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftContractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftSeller",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint128",
				"name": "nftHighestBid",
				"type": "uint128"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftHighestBidder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftRecipient",
				"type": "address"
			}
		],
		"name": "NFTTransferredAndSellerPaid",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftContractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftSeller",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "erc20Token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint128",
				"name": "minPrice",
				"type": "uint128"
			},
			{
				"indexed": false,
				"internalType": "uint128",
				"name": "buyNowPrice",
				"type": "uint128"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "auctionBidPeriod",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "bidIncreasePercentage",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "address[]",
				"name": "feeRecipients",
				"type": "address[]"
			},
			{
				"indexed": false,
				"internalType": "uint32[]",
				"name": "feePercentages",
				"type": "uint32[]"
			}
		],
		"name": "NftAuctionCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftContractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftSeller",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "erc20Token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint128",
				"name": "buyNowPrice",
				"type": "uint128"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "whitelistedBuyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address[]",
				"name": "feeRecipients",
				"type": "address[]"
			},
			{
				"indexed": false,
				"internalType": "uint32[]",
				"name": "feePercentages",
				"type": "uint32[]"
			}
		],
		"name": "SaleCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "nftContractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newWhitelistedBuyer",
				"type": "address"
			}
		],
		"name": "WhitelistedBuyerUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc20Token",
				"type": "address"
			},
			{
				"internalType": "uint128",
				"name": "_minPrice",
				"type": "uint128"
			},
			{
				"internalType": "uint128",
				"name": "_buyNowPrice",
				"type": "uint128"
			},
			{
				"internalType": "address[]",
				"name": "_feeRecipients",
				"type": "address[]"
			},
			{
				"internalType": "uint32[]",
				"name": "_feePercentages",
				"type": "uint32[]"
			}
		],
		"name": "createDefaultNftAuction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc20Token",
				"type": "address"
			},
			{
				"internalType": "uint128",
				"name": "_minPrice",
				"type": "uint128"
			},
			{
				"internalType": "uint128",
				"name": "_buyNowPrice",
				"type": "uint128"
			},
			{
				"internalType": "uint32",
				"name": "_auctionBidPeriod",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "_bidIncreasePercentage",
				"type": "uint32"
			},
			{
				"internalType": "address[]",
				"name": "_feeRecipients",
				"type": "address[]"
			},
			{
				"internalType": "uint32[]",
				"name": "_feePercentages",
				"type": "uint32[]"
			}
		],
		"name": "createNewNftAuction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc20Token",
				"type": "address"
			},
			{
				"internalType": "uint128",
				"name": "_buyNowPrice",
				"type": "uint128"
			},
			{
				"internalType": "address",
				"name": "_whitelistedBuyer",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "_feeRecipients",
				"type": "address[]"
			},
			{
				"internalType": "uint32[]",
				"name": "_feePercentages",
				"type": "uint32[]"
			}
		],
		"name": "createSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "defaultAuctionBidPeriod",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "defaultBidIncreasePercentage",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc20Token",
				"type": "address"
			},
			{
				"internalType": "uint128",
				"name": "_tokenAmount",
				"type": "uint128"
			}
		],
		"name": "makeBid",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc20Token",
				"type": "address"
			},
			{
				"internalType": "uint128",
				"name": "_tokenAmount",
				"type": "uint128"
			},
			{
				"internalType": "address",
				"name": "_nftRecipient",
				"type": "address"
			}
		],
		"name": "makeCustomBid",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maximumMinPricePercentage",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minimumSettableIncreasePercentage",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "nftContractAuctions",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "bidIncreasePercentage",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "auctionBidPeriod",
				"type": "uint32"
			},
			{
				"internalType": "uint64",
				"name": "auctionEnd",
				"type": "uint64"
			},
			{
				"internalType": "uint128",
				"name": "minPrice",
				"type": "uint128"
			},
			{
				"internalType": "uint128",
				"name": "buyNowPrice",
				"type": "uint128"
			},
			{
				"internalType": "uint128",
				"name": "nftHighestBid",
				"type": "uint128"
			},
			{
				"internalType": "address",
				"name": "nftHighestBidder",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "nftSeller",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "whitelistedBuyer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "nftRecipient",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "ERC20Token",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOfNFT",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "settleAuction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "takeHighestBid",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint128",
				"name": "_newBuyNowPrice",
				"type": "uint128"
			}
		],
		"name": "updateBuyNowPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint128",
				"name": "_newMinPrice",
				"type": "uint128"
			}
		],
		"name": "updateMinimumPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_newWhitelistedBuyer",
				"type": "address"
			}
		],
		"name": "updateWhitelistedBuyer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawAllFailedCredits",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "withdrawAuction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "withdrawBid",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const tokenErc721 = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "newRoyaltyRecipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newRoyaltyBps",
                "type": "uint256"
            }
        ],
        "name": "DefaultRoyalty",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "version",
                "type": "uint8"
            }
        ],
        "name": "Initialized",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "prevOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnerUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "platformFeeRecipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "platformFeeBps",
                "type": "uint256"
            }
        ],
        "name": "PlatformFeeInfoUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "PrimarySaleRecipientUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "royaltyRecipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "royaltyBps",
                "type": "uint256"
            }
        ],
        "name": "RoyaltyForToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "mintedTo",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenIdMinted",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "uri",
                "type": "string"
            }
        ],
        "name": "TokensMinted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "signer",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "mintedTo",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenIdMinted",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "royaltyRecipient",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "royaltyBps",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "primarySaleRecipient",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "uri",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "uint128",
                        "name": "validityStartTimestamp",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "validityEndTimestamp",
                        "type": "uint128"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "uid",
                        "type": "bytes32"
                    }
                ],
                "indexed": false,
                "internalType": "struct ITokenERC721.MintRequest",
                "name": "mintRequest",
                "type": "tuple"
            }
        ],
        "name": "TokensMintedWithSignature",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractType",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractVersion",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "royaltyRecipient",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "royaltyBps",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "primarySaleRecipient",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "uri",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "uint128",
                        "name": "validityStartTimestamp",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "validityEndTimestamp",
                        "type": "uint128"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "uid",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct ITokenERC721.MintRequest",
                "name": "_req",
                "type": "tuple"
            }
        ],
        "name": "createItem",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "tokenIdMinted",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDefaultRoyaltyInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPlatformFeeInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getRoleMember",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleMemberCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "getRoyaltyInfoForToken",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_defaultAdmin",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_contractURI",
                "type": "string"
            },
            {
                "internalType": "address[]",
                "name": "_trustedForwarders",
                "type": "address[]"
            },
            {
                "internalType": "address",
                "name": "_saleRecipient",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_royaltyRecipient",
                "type": "address"
            },
            {
                "internalType": "uint128",
                "name": "_royaltyBps",
                "type": "uint128"
            },
            {
                "internalType": "uint128",
                "name": "_platformFeeBps",
                "type": "uint128"
            },
            {
                "internalType": "address",
                "name": "_platformFeeRecipient",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "forwarder",
                "type": "address"
            }
        ],
        "name": "isTrustedForwarder",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_uri",
                "type": "string"
            }
        ],
        "name": "mintTo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "royaltyRecipient",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "royaltyBps",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "primarySaleRecipient",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "uri",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "uint128",
                        "name": "validityStartTimestamp",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "validityEndTimestamp",
                        "type": "uint128"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "uid",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct ITokenERC721.MintRequest",
                "name": "_req",
                "type": "tuple"
            },
            {
                "internalType": "bytes",
                "name": "_signature",
                "type": "bytes"
            }
        ],
        "name": "mintWithSignature",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "tokenIdMinted",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes[]",
                "name": "data",
                "type": "bytes[]"
            }
        ],
        "name": "multicall",
        "outputs": [
            {
                "internalType": "bytes[]",
                "name": "results",
                "type": "bytes[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nextTokenIdToMint",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "platformFeeBps",
        "outputs": [
            {
                "internalType": "uint128",
                "name": "",
                "type": "uint128"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "platformFeeRecipient",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "primarySaleRecipient",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "salePrice",
                "type": "uint256"
            }
        ],
        "name": "royaltyInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "royaltyAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_uri",
                "type": "string"
            }
        ],
        "name": "setContractURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_royaltyRecipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_royaltyBps",
                "type": "uint256"
            }
        ],
        "name": "setDefaultRoyaltyInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_newOwner",
                "type": "address"
            }
        ],
        "name": "setOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_platformFeeRecipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_platformFeeBps",
                "type": "uint256"
            }
        ],
        "name": "setPlatformFeeInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_saleRecipient",
                "type": "address"
            }
        ],
        "name": "setPrimarySaleRecipient",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_bps",
                "type": "uint256"
            }
        ],
        "name": "setRoyaltyInfoForToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "thirdwebFee",
        "outputs": [
            {
                "internalType": "contract ITWFee",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "royaltyRecipient",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "royaltyBps",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "primarySaleRecipient",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "uri",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "uint128",
                        "name": "validityStartTimestamp",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "validityEndTimestamp",
                        "type": "uint128"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "uid",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct ITokenERC721.MintRequest",
                "name": "_req",
                "type": "tuple"
            },
            {
                "internalType": "bytes",
                "name": "_signature",
                "type": "bytes"
            }
        ],
        "name": "verify",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

export const collectionFreeMintAbi = 
[
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Items",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "uri",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "artist",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "uri",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "createItem",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "excludedList",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getArtist",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }

]

export const byteCodeCollection ={
	"generatedSources": [
		{
			"ast": {
				"nodeType": "YulBlock",
				"src": "0:3004:5",
				"statements": [
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "102:259:5",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "112:75:5",
									"value": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "179:6:5"
													}
												],
												"functionName": {
													"name": "array_allocation_size_t_string_memory_ptr",
													"nodeType": "YulIdentifier",
													"src": "137:41:5"
												},
												"nodeType": "YulFunctionCall",
												"src": "137:49:5"
											}
										],
										"functionName": {
											"name": "allocate_memory",
											"nodeType": "YulIdentifier",
											"src": "121:15:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "121:66:5"
									},
									"variableNames": [
										{
											"name": "array",
											"nodeType": "YulIdentifier",
											"src": "112:5:5"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "array",
												"nodeType": "YulIdentifier",
												"src": "203:5:5"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "210:6:5"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "196:6:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "196:21:5"
									},
									"nodeType": "YulExpressionStatement",
									"src": "196:21:5"
								},
								{
									"nodeType": "YulVariableDeclaration",
									"src": "226:27:5",
									"value": {
										"arguments": [
											{
												"name": "array",
												"nodeType": "YulIdentifier",
												"src": "241:5:5"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "248:4:5",
												"type": "",
												"value": "0x20"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "237:3:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "237:16:5"
									},
									"variables": [
										{
											"name": "dst",
											"nodeType": "YulTypedName",
											"src": "230:3:5",
											"type": ""
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "291:16:5",
										"statements": [
											{
												"expression": {
													"arguments": [
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "300:1:5",
															"type": "",
															"value": "0"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "303:1:5",
															"type": "",
															"value": "0"
														}
													],
													"functionName": {
														"name": "revert",
														"nodeType": "YulIdentifier",
														"src": "293:6:5"
													},
													"nodeType": "YulFunctionCall",
													"src": "293:12:5"
												},
												"nodeType": "YulExpressionStatement",
												"src": "293:12:5"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "src",
														"nodeType": "YulIdentifier",
														"src": "272:3:5"
													},
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "277:6:5"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "268:3:5"
												},
												"nodeType": "YulFunctionCall",
												"src": "268:16:5"
											},
											{
												"name": "end",
												"nodeType": "YulIdentifier",
												"src": "286:3:5"
											}
										],
										"functionName": {
											"name": "gt",
											"nodeType": "YulIdentifier",
											"src": "265:2:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "265:25:5"
									},
									"nodeType": "YulIf",
									"src": "262:2:5"
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "src",
												"nodeType": "YulIdentifier",
												"src": "338:3:5"
											},
											{
												"name": "dst",
												"nodeType": "YulIdentifier",
												"src": "343:3:5"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "348:6:5"
											}
										],
										"functionName": {
											"name": "copy_memory_to_memory",
											"nodeType": "YulIdentifier",
											"src": "316:21:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "316:39:5"
									},
									"nodeType": "YulExpressionStatement",
									"src": "316:39:5"
								}
							]
						},
						"name": "abi_decode_available_length_t_string_memory_ptr_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "src",
								"nodeType": "YulTypedName",
								"src": "75:3:5",
								"type": ""
							},
							{
								"name": "length",
								"nodeType": "YulTypedName",
								"src": "80:6:5",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "88:3:5",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "array",
								"nodeType": "YulTypedName",
								"src": "96:5:5",
								"type": ""
							}
						],
						"src": "7:354:5"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "454:215:5",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "503:16:5",
										"statements": [
											{
												"expression": {
													"arguments": [
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "512:1:5",
															"type": "",
															"value": "0"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "515:1:5",
															"type": "",
															"value": "0"
														}
													],
													"functionName": {
														"name": "revert",
														"nodeType": "YulIdentifier",
														"src": "505:6:5"
													},
													"nodeType": "YulFunctionCall",
													"src": "505:12:5"
												},
												"nodeType": "YulExpressionStatement",
												"src": "505:12:5"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"arguments": [
													{
														"arguments": [
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "482:6:5"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "490:4:5",
																"type": "",
																"value": "0x1f"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "478:3:5"
														},
														"nodeType": "YulFunctionCall",
														"src": "478:17:5"
													},
													{
														"name": "end",
														"nodeType": "YulIdentifier",
														"src": "497:3:5"
													}
												],
												"functionName": {
													"name": "slt",
													"nodeType": "YulIdentifier",
													"src": "474:3:5"
												},
												"nodeType": "YulFunctionCall",
												"src": "474:27:5"
											}
										],
										"functionName": {
											"name": "iszero",
											"nodeType": "YulIdentifier",
											"src": "467:6:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "467:35:5"
									},
									"nodeType": "YulIf",
									"src": "464:2:5"
								},
								{
									"nodeType": "YulVariableDeclaration",
									"src": "528:27:5",
									"value": {
										"arguments": [
											{
												"name": "offset",
												"nodeType": "YulIdentifier",
												"src": "548:6:5"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "542:5:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "542:13:5"
									},
									"variables": [
										{
											"name": "length",
											"nodeType": "YulTypedName",
											"src": "532:6:5",
											"type": ""
										}
									]
								},
								{
									"nodeType": "YulAssignment",
									"src": "564:99:5",
									"value": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "offset",
														"nodeType": "YulIdentifier",
														"src": "636:6:5"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "644:4:5",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "632:3:5"
												},
												"nodeType": "YulFunctionCall",
												"src": "632:17:5"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "651:6:5"
											},
											{
												"name": "end",
												"nodeType": "YulIdentifier",
												"src": "659:3:5"
											}
										],
										"functionName": {
											"name": "abi_decode_available_length_t_string_memory_ptr_fromMemory",
											"nodeType": "YulIdentifier",
											"src": "573:58:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "573:90:5"
									},
									"variableNames": [
										{
											"name": "array",
											"nodeType": "YulIdentifier",
											"src": "564:5:5"
										}
									]
								}
							]
						},
						"name": "abi_decode_t_string_memory_ptr_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "offset",
								"nodeType": "YulTypedName",
								"src": "432:6:5",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "440:3:5",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "array",
								"nodeType": "YulTypedName",
								"src": "448:5:5",
								"type": ""
							}
						],
						"src": "381:288:5"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "762:303:5",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "808:16:5",
										"statements": [
											{
												"expression": {
													"arguments": [
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "817:1:5",
															"type": "",
															"value": "0"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "820:1:5",
															"type": "",
															"value": "0"
														}
													],
													"functionName": {
														"name": "revert",
														"nodeType": "YulIdentifier",
														"src": "810:6:5"
													},
													"nodeType": "YulFunctionCall",
													"src": "810:12:5"
												},
												"nodeType": "YulExpressionStatement",
												"src": "810:12:5"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "783:7:5"
													},
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "792:9:5"
													}
												],
												"functionName": {
													"name": "sub",
													"nodeType": "YulIdentifier",
													"src": "779:3:5"
												},
												"nodeType": "YulFunctionCall",
												"src": "779:23:5"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "804:2:5",
												"type": "",
												"value": "32"
											}
										],
										"functionName": {
											"name": "slt",
											"nodeType": "YulIdentifier",
											"src": "775:3:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "775:32:5"
									},
									"nodeType": "YulIf",
									"src": "772:2:5"
								},
								{
									"nodeType": "YulBlock",
									"src": "834:224:5",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "849:38:5",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "873:9:5"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "884:1:5",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "869:3:5"
														},
														"nodeType": "YulFunctionCall",
														"src": "869:17:5"
													}
												],
												"functionName": {
													"name": "mload",
													"nodeType": "YulIdentifier",
													"src": "863:5:5"
												},
												"nodeType": "YulFunctionCall",
												"src": "863:24:5"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "853:6:5",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "934:16:5",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "943:1:5",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "946:1:5",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "936:6:5"
															},
															"nodeType": "YulFunctionCall",
															"src": "936:12:5"
														},
														"nodeType": "YulExpressionStatement",
														"src": "936:12:5"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "offset",
														"nodeType": "YulIdentifier",
														"src": "906:6:5"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "914:18:5",
														"type": "",
														"value": "0xffffffffffffffff"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "903:2:5"
												},
												"nodeType": "YulFunctionCall",
												"src": "903:30:5"
											},
											"nodeType": "YulIf",
											"src": "900:2:5"
										},
										{
											"nodeType": "YulAssignment",
											"src": "964:84:5",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "1020:9:5"
															},
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "1031:6:5"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "1016:3:5"
														},
														"nodeType": "YulFunctionCall",
														"src": "1016:22:5"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "1040:7:5"
													}
												],
												"functionName": {
													"name": "abi_decode_t_string_memory_ptr_fromMemory",
													"nodeType": "YulIdentifier",
													"src": "974:41:5"
												},
												"nodeType": "YulFunctionCall",
												"src": "974:74:5"
											},
											"variableNames": [
												{
													"name": "value0",
													"nodeType": "YulIdentifier",
													"src": "964:6:5"
												}
											]
										}
									]
								}
							]
						},
						"name": "abi_decode_tuple_t_string_memory_ptr_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "headStart",
								"nodeType": "YulTypedName",
								"src": "732:9:5",
								"type": ""
							},
							{
								"name": "dataEnd",
								"nodeType": "YulTypedName",
								"src": "743:7:5",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "value0",
								"nodeType": "YulTypedName",
								"src": "755:6:5",
								"type": ""
							}
						],
						"src": "675:390:5"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1112:88:5",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "1122:30:5",
									"value": {
										"arguments": [],
										"functionName": {
											"name": "allocate_unbounded",
											"nodeType": "YulIdentifier",
											"src": "1132:18:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "1132:20:5"
									},
									"variableNames": [
										{
											"name": "memPtr",
											"nodeType": "YulIdentifier",
											"src": "1122:6:5"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "memPtr",
												"nodeType": "YulIdentifier",
												"src": "1181:6:5"
											},
											{
												"name": "size",
												"nodeType": "YulIdentifier",
												"src": "1189:4:5"
											}
										],
										"functionName": {
											"name": "finalize_allocation",
											"nodeType": "YulIdentifier",
											"src": "1161:19:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "1161:33:5"
									},
									"nodeType": "YulExpressionStatement",
									"src": "1161:33:5"
								}
							]
						},
						"name": "allocate_memory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "size",
								"nodeType": "YulTypedName",
								"src": "1096:4:5",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "memPtr",
								"nodeType": "YulTypedName",
								"src": "1105:6:5",
								"type": ""
							}
						],
						"src": "1071:129:5"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1246:35:5",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "1256:19:5",
									"value": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1272:2:5",
												"type": "",
												"value": "64"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "1266:5:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "1266:9:5"
									},
									"variableNames": [
										{
											"name": "memPtr",
											"nodeType": "YulIdentifier",
											"src": "1256:6:5"
										}
									]
								}
							]
						},
						"name": "allocate_unbounded",
						"nodeType": "YulFunctionDefinition",
						"returnVariables": [
							{
								"name": "memPtr",
								"nodeType": "YulTypedName",
								"src": "1239:6:5",
								"type": ""
							}
						],
						"src": "1206:75:5"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1354:241:5",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "1459:22:5",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "panic_error_0x41",
														"nodeType": "YulIdentifier",
														"src": "1461:16:5"
													},
													"nodeType": "YulFunctionCall",
													"src": "1461:18:5"
												},
												"nodeType": "YulExpressionStatement",
												"src": "1461:18:5"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "1431:6:5"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1439:18:5",
												"type": "",
												"value": "0xffffffffffffffff"
											}
										],
										"functionName": {
											"name": "gt",
											"nodeType": "YulIdentifier",
											"src": "1428:2:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "1428:30:5"
									},
									"nodeType": "YulIf",
									"src": "1425:2:5"
								},
								{
									"nodeType": "YulAssignment",
									"src": "1491:37:5",
									"value": {
										"arguments": [
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "1521:6:5"
											}
										],
										"functionName": {
											"name": "round_up_to_mul_of_32",
											"nodeType": "YulIdentifier",
											"src": "1499:21:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "1499:29:5"
									},
									"variableNames": [
										{
											"name": "size",
											"nodeType": "YulIdentifier",
											"src": "1491:4:5"
										}
									]
								},
								{
									"nodeType": "YulAssignment",
									"src": "1565:23:5",
									"value": {
										"arguments": [
											{
												"name": "size",
												"nodeType": "YulIdentifier",
												"src": "1577:4:5"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1583:4:5",
												"type": "",
												"value": "0x20"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "1573:3:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "1573:15:5"
									},
									"variableNames": [
										{
											"name": "size",
											"nodeType": "YulIdentifier",
											"src": "1565:4:5"
										}
									]
								}
							]
						},
						"name": "array_allocation_size_t_string_memory_ptr",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "length",
								"nodeType": "YulTypedName",
								"src": "1338:6:5",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "size",
								"nodeType": "YulTypedName",
								"src": "1349:4:5",
								"type": ""
							}
						],
						"src": "1287:308:5"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1650:258:5",
							"statements": [
								{
									"nodeType": "YulVariableDeclaration",
									"src": "1660:10:5",
									"value": {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "1669:1:5",
										"type": "",
										"value": "0"
									},
									"variables": [
										{
											"name": "i",
											"nodeType": "YulTypedName",
											"src": "1664:1:5",
											"type": ""
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "1729:63:5",
										"statements": [
											{
												"expression": {
													"arguments": [
														{
															"arguments": [
																{
																	"name": "dst",
																	"nodeType": "YulIdentifier",
																	"src": "1754:3:5"
																},
																{
																	"name": "i",
																	"nodeType": "YulIdentifier",
																	"src": "1759:1:5"
																}
															],
															"functionName": {
																"name": "add",
																"nodeType": "YulIdentifier",
																"src": "1750:3:5"
															},
															"nodeType": "YulFunctionCall",
															"src": "1750:11:5"
														},
														{
															"arguments": [
																{
																	"arguments": [
																		{
																			"name": "src",
																			"nodeType": "YulIdentifier",
																			"src": "1773:3:5"
																		},
																		{
																			"name": "i",
																			"nodeType": "YulIdentifier",
																			"src": "1778:1:5"
																		}
																	],
																	"functionName": {
																		"name": "add",
																		"nodeType": "YulIdentifier",
																		"src": "1769:3:5"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "1769:11:5"
																}
															],
															"functionName": {
																"name": "mload",
																"nodeType": "YulIdentifier",
																"src": "1763:5:5"
															},
															"nodeType": "YulFunctionCall",
															"src": "1763:18:5"
														}
													],
													"functionName": {
														"name": "mstore",
														"nodeType": "YulIdentifier",
														"src": "1743:6:5"
													},
													"nodeType": "YulFunctionCall",
													"src": "1743:39:5"
												},
												"nodeType": "YulExpressionStatement",
												"src": "1743:39:5"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "i",
												"nodeType": "YulIdentifier",
												"src": "1690:1:5"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "1693:6:5"
											}
										],
										"functionName": {
											"name": "lt",
											"nodeType": "YulIdentifier",
											"src": "1687:2:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "1687:13:5"
									},
									"nodeType": "YulForLoop",
									"post": {
										"nodeType": "YulBlock",
										"src": "1701:19:5",
										"statements": [
											{
												"nodeType": "YulAssignment",
												"src": "1703:15:5",
												"value": {
													"arguments": [
														{
															"name": "i",
															"nodeType": "YulIdentifier",
															"src": "1712:1:5"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "1715:2:5",
															"type": "",
															"value": "32"
														}
													],
													"functionName": {
														"name": "add",
														"nodeType": "YulIdentifier",
														"src": "1708:3:5"
													},
													"nodeType": "YulFunctionCall",
													"src": "1708:10:5"
												},
												"variableNames": [
													{
														"name": "i",
														"nodeType": "YulIdentifier",
														"src": "1703:1:5"
													}
												]
											}
										]
									},
									"pre": {
										"nodeType": "YulBlock",
										"src": "1683:3:5",
										"statements": []
									},
									"src": "1679:113:5"
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "1826:76:5",
										"statements": [
											{
												"expression": {
													"arguments": [
														{
															"arguments": [
																{
																	"name": "dst",
																	"nodeType": "YulIdentifier",
																	"src": "1876:3:5"
																},
																{
																	"name": "length",
																	"nodeType": "YulIdentifier",
																	"src": "1881:6:5"
																}
															],
															"functionName": {
																"name": "add",
																"nodeType": "YulIdentifier",
																"src": "1872:3:5"
															},
															"nodeType": "YulFunctionCall",
															"src": "1872:16:5"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "1890:1:5",
															"type": "",
															"value": "0"
														}
													],
													"functionName": {
														"name": "mstore",
														"nodeType": "YulIdentifier",
														"src": "1865:6:5"
													},
													"nodeType": "YulFunctionCall",
													"src": "1865:27:5"
												},
												"nodeType": "YulExpressionStatement",
												"src": "1865:27:5"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "i",
												"nodeType": "YulIdentifier",
												"src": "1807:1:5"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "1810:6:5"
											}
										],
										"functionName": {
											"name": "gt",
											"nodeType": "YulIdentifier",
											"src": "1804:2:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "1804:13:5"
									},
									"nodeType": "YulIf",
									"src": "1801:2:5"
								}
							]
						},
						"name": "copy_memory_to_memory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "src",
								"nodeType": "YulTypedName",
								"src": "1632:3:5",
								"type": ""
							},
							{
								"name": "dst",
								"nodeType": "YulTypedName",
								"src": "1637:3:5",
								"type": ""
							},
							{
								"name": "length",
								"nodeType": "YulTypedName",
								"src": "1642:6:5",
								"type": ""
							}
						],
						"src": "1601:307:5"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1965:269:5",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "1975:22:5",
									"value": {
										"arguments": [
											{
												"name": "data",
												"nodeType": "YulIdentifier",
												"src": "1989:4:5"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1995:1:5",
												"type": "",
												"value": "2"
											}
										],
										"functionName": {
											"name": "div",
											"nodeType": "YulIdentifier",
											"src": "1985:3:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "1985:12:5"
									},
									"variableNames": [
										{
											"name": "length",
											"nodeType": "YulIdentifier",
											"src": "1975:6:5"
										}
									]
								},
								{
									"nodeType": "YulVariableDeclaration",
									"src": "2006:38:5",
									"value": {
										"arguments": [
											{
												"name": "data",
												"nodeType": "YulIdentifier",
												"src": "2036:4:5"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2042:1:5",
												"type": "",
												"value": "1"
											}
										],
										"functionName": {
											"name": "and",
											"nodeType": "YulIdentifier",
											"src": "2032:3:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "2032:12:5"
									},
									"variables": [
										{
											"name": "outOfPlaceEncoding",
											"nodeType": "YulTypedName",
											"src": "2010:18:5",
											"type": ""
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "2083:51:5",
										"statements": [
											{
												"nodeType": "YulAssignment",
												"src": "2097:27:5",
												"value": {
													"arguments": [
														{
															"name": "length",
															"nodeType": "YulIdentifier",
															"src": "2111:6:5"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "2119:4:5",
															"type": "",
															"value": "0x7f"
														}
													],
													"functionName": {
														"name": "and",
														"nodeType": "YulIdentifier",
														"src": "2107:3:5"
													},
													"nodeType": "YulFunctionCall",
													"src": "2107:17:5"
												},
												"variableNames": [
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "2097:6:5"
													}
												]
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "outOfPlaceEncoding",
												"nodeType": "YulIdentifier",
												"src": "2063:18:5"
											}
										],
										"functionName": {
											"name": "iszero",
											"nodeType": "YulIdentifier",
											"src": "2056:6:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "2056:26:5"
									},
									"nodeType": "YulIf",
									"src": "2053:2:5"
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "2186:42:5",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "panic_error_0x22",
														"nodeType": "YulIdentifier",
														"src": "2200:16:5"
													},
													"nodeType": "YulFunctionCall",
													"src": "2200:18:5"
												},
												"nodeType": "YulExpressionStatement",
												"src": "2200:18:5"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "outOfPlaceEncoding",
												"nodeType": "YulIdentifier",
												"src": "2150:18:5"
											},
											{
												"arguments": [
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "2173:6:5"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2181:2:5",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "lt",
													"nodeType": "YulIdentifier",
													"src": "2170:2:5"
												},
												"nodeType": "YulFunctionCall",
												"src": "2170:14:5"
											}
										],
										"functionName": {
											"name": "eq",
											"nodeType": "YulIdentifier",
											"src": "2147:2:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "2147:38:5"
									},
									"nodeType": "YulIf",
									"src": "2144:2:5"
								}
							]
						},
						"name": "extract_byte_array_length",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "data",
								"nodeType": "YulTypedName",
								"src": "1949:4:5",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "length",
								"nodeType": "YulTypedName",
								"src": "1958:6:5",
								"type": ""
							}
						],
						"src": "1914:320:5"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2283:238:5",
							"statements": [
								{
									"nodeType": "YulVariableDeclaration",
									"src": "2293:58:5",
									"value": {
										"arguments": [
											{
												"name": "memPtr",
												"nodeType": "YulIdentifier",
												"src": "2315:6:5"
											},
											{
												"arguments": [
													{
														"name": "size",
														"nodeType": "YulIdentifier",
														"src": "2345:4:5"
													}
												],
												"functionName": {
													"name": "round_up_to_mul_of_32",
													"nodeType": "YulIdentifier",
													"src": "2323:21:5"
												},
												"nodeType": "YulFunctionCall",
												"src": "2323:27:5"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "2311:3:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "2311:40:5"
									},
									"variables": [
										{
											"name": "newFreePtr",
											"nodeType": "YulTypedName",
											"src": "2297:10:5",
											"type": ""
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "2462:22:5",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "panic_error_0x41",
														"nodeType": "YulIdentifier",
														"src": "2464:16:5"
													},
													"nodeType": "YulFunctionCall",
													"src": "2464:18:5"
												},
												"nodeType": "YulExpressionStatement",
												"src": "2464:18:5"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "newFreePtr",
														"nodeType": "YulIdentifier",
														"src": "2405:10:5"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2417:18:5",
														"type": "",
														"value": "0xffffffffffffffff"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "2402:2:5"
												},
												"nodeType": "YulFunctionCall",
												"src": "2402:34:5"
											},
											{
												"arguments": [
													{
														"name": "newFreePtr",
														"nodeType": "YulIdentifier",
														"src": "2441:10:5"
													},
													{
														"name": "memPtr",
														"nodeType": "YulIdentifier",
														"src": "2453:6:5"
													}
												],
												"functionName": {
													"name": "lt",
													"nodeType": "YulIdentifier",
													"src": "2438:2:5"
												},
												"nodeType": "YulFunctionCall",
												"src": "2438:22:5"
											}
										],
										"functionName": {
											"name": "or",
											"nodeType": "YulIdentifier",
											"src": "2399:2:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "2399:62:5"
									},
									"nodeType": "YulIf",
									"src": "2396:2:5"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2500:2:5",
												"type": "",
												"value": "64"
											},
											{
												"name": "newFreePtr",
												"nodeType": "YulIdentifier",
												"src": "2504:10:5"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "2493:6:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "2493:22:5"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2493:22:5"
								}
							]
						},
						"name": "finalize_allocation",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "memPtr",
								"nodeType": "YulTypedName",
								"src": "2269:6:5",
								"type": ""
							},
							{
								"name": "size",
								"nodeType": "YulTypedName",
								"src": "2277:4:5",
								"type": ""
							}
						],
						"src": "2240:281:5"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2555:152:5",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2572:1:5",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2575:77:5",
												"type": "",
												"value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "2565:6:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "2565:88:5"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2565:88:5"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2669:1:5",
												"type": "",
												"value": "4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2672:4:5",
												"type": "",
												"value": "0x22"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "2662:6:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "2662:15:5"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2662:15:5"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2693:1:5",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2696:4:5",
												"type": "",
												"value": "0x24"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "2686:6:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "2686:15:5"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2686:15:5"
								}
							]
						},
						"name": "panic_error_0x22",
						"nodeType": "YulFunctionDefinition",
						"src": "2527:180:5"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2741:152:5",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2758:1:5",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2761:77:5",
												"type": "",
												"value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "2751:6:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "2751:88:5"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2751:88:5"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2855:1:5",
												"type": "",
												"value": "4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2858:4:5",
												"type": "",
												"value": "0x41"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "2848:6:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "2848:15:5"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2848:15:5"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2879:1:5",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2882:4:5",
												"type": "",
												"value": "0x24"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "2872:6:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "2872:15:5"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2872:15:5"
								}
							]
						},
						"name": "panic_error_0x41",
						"nodeType": "YulFunctionDefinition",
						"src": "2713:180:5"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2947:54:5",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "2957:38:5",
									"value": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "value",
														"nodeType": "YulIdentifier",
														"src": "2975:5:5"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2982:2:5",
														"type": "",
														"value": "31"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "2971:3:5"
												},
												"nodeType": "YulFunctionCall",
												"src": "2971:14:5"
											},
											{
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2991:2:5",
														"type": "",
														"value": "31"
													}
												],
												"functionName": {
													"name": "not",
													"nodeType": "YulIdentifier",
													"src": "2987:3:5"
												},
												"nodeType": "YulFunctionCall",
												"src": "2987:7:5"
											}
										],
										"functionName": {
											"name": "and",
											"nodeType": "YulIdentifier",
											"src": "2967:3:5"
										},
										"nodeType": "YulFunctionCall",
										"src": "2967:28:5"
									},
									"variableNames": [
										{
											"name": "result",
											"nodeType": "YulIdentifier",
											"src": "2957:6:5"
										}
									]
								}
							]
						},
						"name": "round_up_to_mul_of_32",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "2930:5:5",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "result",
								"nodeType": "YulTypedName",
								"src": "2940:6:5",
								"type": ""
							}
						],
						"src": "2899:102:5"
					}
				]
			},
			"contents": "{\n\n    function abi_decode_available_length_t_string_memory_ptr_fromMemory(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert(0, 0) }\n        copy_memory_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr_fromMemory(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let length := mload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr_fromMemory(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptr_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := mload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value0 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n}\n",
			"id": 5,
			"language": "Yul",
			"name": "#utility.yul"
		}
	],
	"linkReferences": {},
	"object": "60806040523480156200001157600080fd5b50604051620028b4380380620028b4833981810160405281019062000037919062000322565b6040518060400160405280600d81526020017f467265654d696e74546f6b656e000000000000000000000000000000000000008152506040518060400160405280600381526020017f464d5400000000000000000000000000000000000000000000000000000000008152508160029080519060200190620000bb92919062000200565b508060039080519060200190620000d492919062000200565b50620000e56200012d60201b60201c565b60008190555050506200010d620001016200013260201b60201c565b6200013a60201b60201c565b80600990805190602001906200012592919062000200565b5050620004d7565b600090565b600033905090565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200020e90620003fc565b90600052602060002090601f0160209004810192826200023257600085556200027e565b82601f106200024d57805160ff19168380011785556200027e565b828001600101855582156200027e579182015b828111156200027d57825182559160200191906001019062000260565b5b5090506200028d919062000291565b5090565b5b80821115620002ac57600081600090555060010162000292565b5090565b6000620002c7620002c18462000390565b62000367565b905082815260208101848484011115620002e057600080fd5b620002ed848285620003c6565b509392505050565b600082601f8301126200030757600080fd5b815162000319848260208601620002b0565b91505092915050565b6000602082840312156200033557600080fd5b600082015167ffffffffffffffff8111156200035057600080fd5b6200035e84828501620002f5565b91505092915050565b60006200037362000386565b905062000381828262000432565b919050565b6000604051905090565b600067ffffffffffffffff821115620003ae57620003ad62000497565b5b620003b982620004c6565b9050602081019050919050565b60005b83811015620003e6578082015181840152602081019050620003c9565b83811115620003f6576000848401525b50505050565b600060028204905060018216806200041557607f821691505b602082108114156200042c576200042b62000468565b5b50919050565b6200043d82620004c6565b810181811067ffffffffffffffff821117156200045f576200045e62000497565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6123cd80620004e76000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c8063715018a6116100b8578063b88d4fde1161007c578063b88d4fde14610351578063c87b56dd1461036d578063e471ae0a1461039d578063e985e9c5146103bb578063ea21e5eb146103eb578063f2fde38b1461040757610142565b8063715018a6146102d35780638da5cb5b146102dd57806395d89b41146102fb578063a0712d6814610319578063a22cb4651461033557610142565b806323b872dd1161010a57806323b872dd146101ff57806332cb6b0c1461021b57806342842e0e146102395780635bcabf04146102555780636352211e1461027357806370a08231146102a357610142565b806301ffc9a71461014757806306fdde0314610177578063081812fc14610195578063095ea7b3146101c557806318160ddd146101e1575b600080fd5b610161600480360381019061015c9190611c4c565b610423565b60405161016e9190611ef3565b60405180910390f35b61017f6104b5565b60405161018c9190611f0e565b60405180910390f35b6101af60048036038101906101aa9190611ce3565b610547565b6040516101bc9190611e8c565b60405180910390f35b6101df60048036038101906101da9190611c10565b6105c6565b005b6101e961070a565b6040516101f69190611fb0565b60405180910390f35b61021960048036038101906102149190611b0a565b610721565b005b610223610a46565b6040516102309190611fb0565b60405180910390f35b610253600480360381019061024e9190611b0a565b610a4c565b005b61025d610a6c565b60405161026a9190611f0e565b60405180910390f35b61028d60048036038101906102889190611ce3565b610afa565b60405161029a9190611e8c565b60405180910390f35b6102bd60048036038101906102b89190611aa5565b610b0c565b6040516102ca9190611fb0565b60405180910390f35b6102db610bc5565b005b6102e5610bd9565b6040516102f29190611e8c565b60405180910390f35b610303610c03565b6040516103109190611f0e565b60405180910390f35b610333600480360381019061032e9190611ce3565b610c95565b005b61034f600480360381019061034a9190611bd4565b610d50565b005b61036b60048036038101906103669190611b59565b610ec8565b005b61038760048036038101906103829190611ce3565b610f3b565b6040516103949190611f0e565b60405180910390f35b6103a5610fda565b6040516103b29190611fb0565b60405180910390f35b6103d560048036038101906103d09190611ace565b610fdf565b6040516103e29190611ef3565b60405180910390f35b61040560048036038101906104009190611c9e565b611073565b005b610421600480360381019061041c9190611aa5565b611091565b005b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061047e57506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104ae5750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6060600280546104c490612170565b80601f01602080910402602001604051908101604052809291908181526020018280546104f090612170565b801561053d5780601f106105125761010080835404028352916020019161053d565b820191906000526020600020905b81548152906001019060200180831161052057829003601f168201915b5050505050905090565b600061055282611115565b610588576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105d182610afa565b90508073ffffffffffffffffffffffffffffffffffffffff166105f2611174565b73ffffffffffffffffffffffffffffffffffffffff16146106555761061e81610619611174565b610fdf565b610654576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b826006600084815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b600061071461117c565b6001546000540303905090565b600061072c82611181565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610793576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008061079f8461124f565b915091506107b581876107b0611174565b611276565b610801576107ca866107c5611174565b610fdf565b610800576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415610868576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61087586868660016112ba565b801561088057600082555b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001019190508190555061094e8561092a8888876112c0565b7c0200000000000000000000000000000000000000000000000000000000176112e8565b600460008681526020019081526020016000208190555060007c0200000000000000000000000000000000000000000000000000000000841614156109d65760006001850190506000600460008381526020019081526020016000205414156109d45760005481146109d3578360046000838152602001908152602001600020819055505b5b505b838573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610a3e8686866001611313565b505050505050565b61271081565b610a6783838360405180602001604052806000815250610ec8565b505050565b60098054610a7990612170565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa590612170565b8015610af25780601f10610ac757610100808354040283529160200191610af2565b820191906000526020600020905b815481529060010190602001808311610ad557829003601f168201915b505050505081565b6000610b0582611181565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b74576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b67ffffffffffffffff600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b610bcd611319565b610bd76000611397565b565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060038054610c1290612170565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3e90612170565b8015610c8b5780601f10610c6057610100808354040283529160200191610c8b565b820191906000526020600020905b815481529060010190602001808311610c6e57829003601f168201915b5050505050905090565b61271081610ca161145d565b610cab9190612064565b1115610cec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce390611f90565b60405180910390fd5b600a81610cf833611470565b610d029190612064565b1115610d43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3a90611f50565b60405180910390fd5b610d4d33826114c7565b50565b610d58611174565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610dbd576040517fb06307db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060076000610dca611174565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610e77611174565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ebc9190611ef3565b60405180910390a35050565b610ed3848484610721565b60008373ffffffffffffffffffffffffffffffffffffffff163b14610f3557610efe84848484611684565b610f34576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b50505050565b6060610f4682611115565b610f7c576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610f866117e4565b9050600081511415610fa75760405180602001604052806000815250610fd2565b80610fb184611876565b604051602001610fc2929190611e68565b6040516020818303038152906040525b915050919050565b600a81565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61107b611319565b81816009919061108c9291906118e7565b505050565b611099611319565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611109576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110090611f30565b60405180910390fd5b61111281611397565b50565b60008161112061117c565b1115801561112f575060005482105b801561116d575060007c0100000000000000000000000000000000000000000000000000000000600460008581526020019081526020016000205416145b9050919050565b600033905090565b600090565b6000808290508061119061117c565b11611218576000548110156112175760006004600083815260200190815260200160002054905060007c010000000000000000000000000000000000000000000000000000000082161415611215575b600081141561120b5760046000836001900393508381526020019081526020016000205490506111e0565b809250505061124a565b505b5b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b60008060006006600085815260200190815260200160002090508092508254915050915091565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e86112d78686846118c6565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b6113216118cf565b73ffffffffffffffffffffffffffffffffffffffff1661133f610bd9565b73ffffffffffffffffffffffffffffffffffffffff1614611395576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138c90611f70565b60405180910390fd5b565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600061146761117c565b60005403905090565b600067ffffffffffffffff6040600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054901c169050919050565b6000805490506000821415611508576040517fb562e8dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61151560008483856112ba565b600160406001901b178202600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555061158c8361157d60008660006112c0565b611586856118d7565b176112e8565b6004600083815260200190815260200160002081905550600080838301905073ffffffffffffffffffffffffffffffffffffffff85169150828260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600183015b81811461162d57808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a46001810190506115f2565b506000821415611669576040517f2e07630000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600081905550505061167f6000848385611313565b505050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a026116aa611174565b8786866040518563ffffffff1660e01b81526004016116cc9493929190611ea7565b602060405180830381600087803b1580156116e657600080fd5b505af192505050801561171757506040513d601f19601f820116820180604052508101906117149190611c75565b60015b611791573d8060008114611747576040519150601f19603f3d011682016040523d82523d6000602084013e61174c565b606091505b50600081511415611789576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b6060600980546117f390612170565b80601f016020809104026020016040519081016040528092919081815260200182805461181f90612170565b801561186c5780601f106118415761010080835404028352916020019161186c565b820191906000526020600020905b81548152906001019060200180831161184f57829003601f168201915b5050505050905090565b606060806040510190508060405280825b6001156118b257600183039250600a81066030018353600a81049050806118ad576118b2565b611887565b508181036020830392508083525050919050565b60009392505050565b600033905090565b60006001821460e11b9050919050565b8280546118f390612170565b90600052602060002090601f016020900481019282611915576000855561195c565b82601f1061192e57803560ff191683800117855561195c565b8280016001018555821561195c579182015b8281111561195b578235825591602001919060010190611940565b5b509050611969919061196d565b5090565b5b8082111561198657600081600090555060010161196e565b5090565b600061199d61199884611ff0565b611fcb565b9050828152602081018484840111156119b557600080fd5b6119c084828561212e565b509392505050565b6000813590506119d78161233b565b92915050565b6000813590506119ec81612352565b92915050565b600081359050611a0181612369565b92915050565b600081519050611a1681612369565b92915050565b600082601f830112611a2d57600080fd5b8135611a3d84826020860161198a565b91505092915050565b60008083601f840112611a5857600080fd5b8235905067ffffffffffffffff811115611a7157600080fd5b602083019150836001820283011115611a8957600080fd5b9250929050565b600081359050611a9f81612380565b92915050565b600060208284031215611ab757600080fd5b6000611ac5848285016119c8565b91505092915050565b60008060408385031215611ae157600080fd5b6000611aef858286016119c8565b9250506020611b00858286016119c8565b9150509250929050565b600080600060608486031215611b1f57600080fd5b6000611b2d868287016119c8565b9350506020611b3e868287016119c8565b9250506040611b4f86828701611a90565b9150509250925092565b60008060008060808587031215611b6f57600080fd5b6000611b7d878288016119c8565b9450506020611b8e878288016119c8565b9350506040611b9f87828801611a90565b925050606085013567ffffffffffffffff811115611bbc57600080fd5b611bc887828801611a1c565b91505092959194509250565b60008060408385031215611be757600080fd5b6000611bf5858286016119c8565b9250506020611c06858286016119dd565b9150509250929050565b60008060408385031215611c2357600080fd5b6000611c31858286016119c8565b9250506020611c4285828601611a90565b9150509250929050565b600060208284031215611c5e57600080fd5b6000611c6c848285016119f2565b91505092915050565b600060208284031215611c8757600080fd5b6000611c9584828501611a07565b91505092915050565b60008060208385031215611cb157600080fd5b600083013567ffffffffffffffff811115611ccb57600080fd5b611cd785828601611a46565b92509250509250929050565b600060208284031215611cf557600080fd5b6000611d0384828501611a90565b91505092915050565b611d15816120ba565b82525050565b611d24816120cc565b82525050565b6000611d3582612021565b611d3f8185612037565b9350611d4f81856020860161213d565b611d5881612260565b840191505092915050565b6000611d6e8261202c565b611d788185612048565b9350611d8881856020860161213d565b611d9181612260565b840191505092915050565b6000611da78261202c565b611db18185612059565b9350611dc181856020860161213d565b80840191505092915050565b6000611dda602683612048565b9150611de582612271565b604082019050919050565b6000611dfd601283612048565b9150611e08826122c0565b602082019050919050565b6000611e20602083612048565b9150611e2b826122e9565b602082019050919050565b6000611e43601483612048565b9150611e4e82612312565b602082019050919050565b611e6281612124565b82525050565b6000611e748285611d9c565b9150611e808284611d9c565b91508190509392505050565b6000602082019050611ea16000830184611d0c565b92915050565b6000608082019050611ebc6000830187611d0c565b611ec96020830186611d0c565b611ed66040830185611e59565b8181036060830152611ee88184611d2a565b905095945050505050565b6000602082019050611f086000830184611d1b565b92915050565b60006020820190508181036000830152611f288184611d63565b905092915050565b60006020820190508181036000830152611f4981611dcd565b9050919050565b60006020820190508181036000830152611f6981611df0565b9050919050565b60006020820190508181036000830152611f8981611e13565b9050919050565b60006020820190508181036000830152611fa981611e36565b9050919050565b6000602082019050611fc56000830184611e59565b92915050565b6000611fd5611fe6565b9050611fe182826121a2565b919050565b6000604051905090565b600067ffffffffffffffff82111561200b5761200a612231565b5b61201482612260565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061206f82612124565b915061207a83612124565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156120af576120ae6121d3565b5b828201905092915050565b60006120c582612104565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561215b578082015181840152602081019050612140565b8381111561216a576000848401525b50505050565b6000600282049050600182168061218857607f821691505b6020821081141561219c5761219b612202565b5b50919050565b6121ab82612260565b810181811067ffffffffffffffff821117156121ca576121c9612231565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f55736572206c696d697420726561636865640000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4e6f74206d6f726520737570706c79206c656674000000000000000000000000600082015250565b612344816120ba565b811461234f57600080fd5b50565b61235b816120cc565b811461236657600080fd5b50565b612372816120d8565b811461237d57600080fd5b50565b61238981612124565b811461239457600080fd5b5056fea2646970667358221220ad4fb15bac450d062704c5ea58171eb1aecae07faf74d59de90463635fff48ba64736f6c63430008040033",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x28B4 CODESIZE SUB DUP1 PUSH3 0x28B4 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH3 0x37 SWAP2 SWAP1 PUSH3 0x322 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0xD DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x467265654D696E74546F6B656E00000000000000000000000000000000000000 DUP2 MSTORE POP PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x3 DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x464D540000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE POP DUP2 PUSH1 0x2 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0xBB SWAP3 SWAP2 SWAP1 PUSH3 0x200 JUMP JUMPDEST POP DUP1 PUSH1 0x3 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0xD4 SWAP3 SWAP2 SWAP1 PUSH3 0x200 JUMP JUMPDEST POP PUSH3 0xE5 PUSH3 0x12D PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 SSTORE POP POP POP PUSH3 0x10D PUSH3 0x101 PUSH3 0x132 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH3 0x13A PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST DUP1 PUSH1 0x9 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0x125 SWAP3 SWAP2 SWAP1 PUSH3 0x200 JUMP JUMPDEST POP POP PUSH3 0x4D7 JUMP JUMPDEST PUSH1 0x0 SWAP1 JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x8 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH1 0x8 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH3 0x20E SWAP1 PUSH3 0x3FC JUMP JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH3 0x232 JUMPI PUSH1 0x0 DUP6 SSTORE PUSH3 0x27E JUMP JUMPDEST DUP3 PUSH1 0x1F LT PUSH3 0x24D JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH3 0x27E JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH3 0x27E JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH3 0x27D JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH3 0x260 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH3 0x28D SWAP2 SWAP1 PUSH3 0x291 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH3 0x2AC JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH3 0x292 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH3 0x2C7 PUSH3 0x2C1 DUP5 PUSH3 0x390 JUMP JUMPDEST PUSH3 0x367 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH3 0x2E0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x2ED DUP5 DUP3 DUP6 PUSH3 0x3C6 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x307 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 MLOAD PUSH3 0x319 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH3 0x2B0 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH3 0x335 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP3 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x350 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x35E DUP5 DUP3 DUP6 ADD PUSH3 0x2F5 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x373 PUSH3 0x386 JUMP JUMPDEST SWAP1 POP PUSH3 0x381 DUP3 DUP3 PUSH3 0x432 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH3 0x3AE JUMPI PUSH3 0x3AD PUSH3 0x497 JUMP JUMPDEST JUMPDEST PUSH3 0x3B9 DUP3 PUSH3 0x4C6 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH3 0x3E6 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH3 0x3C9 JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH3 0x3F6 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH3 0x415 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH3 0x42C JUMPI PUSH3 0x42B PUSH3 0x468 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x43D DUP3 PUSH3 0x4C6 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH3 0x45F JUMPI PUSH3 0x45E PUSH3 0x497 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x23CD DUP1 PUSH3 0x4E7 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x142 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 GT PUSH2 0xB8 JUMPI DUP1 PUSH4 0xB88D4FDE GT PUSH2 0x7C JUMPI DUP1 PUSH4 0xB88D4FDE EQ PUSH2 0x351 JUMPI DUP1 PUSH4 0xC87B56DD EQ PUSH2 0x36D JUMPI DUP1 PUSH4 0xE471AE0A EQ PUSH2 0x39D JUMPI DUP1 PUSH4 0xE985E9C5 EQ PUSH2 0x3BB JUMPI DUP1 PUSH4 0xEA21E5EB EQ PUSH2 0x3EB JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x407 JUMPI PUSH2 0x142 JUMP JUMPDEST DUP1 PUSH4 0x715018A6 EQ PUSH2 0x2D3 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x2DD JUMPI DUP1 PUSH4 0x95D89B41 EQ PUSH2 0x2FB JUMPI DUP1 PUSH4 0xA0712D68 EQ PUSH2 0x319 JUMPI DUP1 PUSH4 0xA22CB465 EQ PUSH2 0x335 JUMPI PUSH2 0x142 JUMP JUMPDEST DUP1 PUSH4 0x23B872DD GT PUSH2 0x10A JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0x1FF JUMPI DUP1 PUSH4 0x32CB6B0C EQ PUSH2 0x21B JUMPI DUP1 PUSH4 0x42842E0E EQ PUSH2 0x239 JUMPI DUP1 PUSH4 0x5BCABF04 EQ PUSH2 0x255 JUMPI DUP1 PUSH4 0x6352211E EQ PUSH2 0x273 JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x2A3 JUMPI PUSH2 0x142 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0x147 JUMPI DUP1 PUSH4 0x6FDDE03 EQ PUSH2 0x177 JUMPI DUP1 PUSH4 0x81812FC EQ PUSH2 0x195 JUMPI DUP1 PUSH4 0x95EA7B3 EQ PUSH2 0x1C5 JUMPI DUP1 PUSH4 0x18160DDD EQ PUSH2 0x1E1 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x161 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x15C SWAP2 SWAP1 PUSH2 0x1C4C JUMP JUMPDEST PUSH2 0x423 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x16E SWAP2 SWAP1 PUSH2 0x1EF3 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x17F PUSH2 0x4B5 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x18C SWAP2 SWAP1 PUSH2 0x1F0E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1AF PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1AA SWAP2 SWAP1 PUSH2 0x1CE3 JUMP JUMPDEST PUSH2 0x547 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1BC SWAP2 SWAP1 PUSH2 0x1E8C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1DF PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1DA SWAP2 SWAP1 PUSH2 0x1C10 JUMP JUMPDEST PUSH2 0x5C6 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x1E9 PUSH2 0x70A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1F6 SWAP2 SWAP1 PUSH2 0x1FB0 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x219 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x214 SWAP2 SWAP1 PUSH2 0x1B0A JUMP JUMPDEST PUSH2 0x721 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x223 PUSH2 0xA46 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x230 SWAP2 SWAP1 PUSH2 0x1FB0 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x253 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x24E SWAP2 SWAP1 PUSH2 0x1B0A JUMP JUMPDEST PUSH2 0xA4C JUMP JUMPDEST STOP JUMPDEST PUSH2 0x25D PUSH2 0xA6C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x26A SWAP2 SWAP1 PUSH2 0x1F0E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x28D PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x288 SWAP2 SWAP1 PUSH2 0x1CE3 JUMP JUMPDEST PUSH2 0xAFA JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x29A SWAP2 SWAP1 PUSH2 0x1E8C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x2BD PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x2B8 SWAP2 SWAP1 PUSH2 0x1AA5 JUMP JUMPDEST PUSH2 0xB0C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x2CA SWAP2 SWAP1 PUSH2 0x1FB0 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x2DB PUSH2 0xBC5 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x2E5 PUSH2 0xBD9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x2F2 SWAP2 SWAP1 PUSH2 0x1E8C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x303 PUSH2 0xC03 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x310 SWAP2 SWAP1 PUSH2 0x1F0E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x333 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x32E SWAP2 SWAP1 PUSH2 0x1CE3 JUMP JUMPDEST PUSH2 0xC95 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x34F PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x34A SWAP2 SWAP1 PUSH2 0x1BD4 JUMP JUMPDEST PUSH2 0xD50 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x36B PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x366 SWAP2 SWAP1 PUSH2 0x1B59 JUMP JUMPDEST PUSH2 0xEC8 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x387 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x382 SWAP2 SWAP1 PUSH2 0x1CE3 JUMP JUMPDEST PUSH2 0xF3B JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x394 SWAP2 SWAP1 PUSH2 0x1F0E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x3A5 PUSH2 0xFDA JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x3B2 SWAP2 SWAP1 PUSH2 0x1FB0 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x3D5 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x3D0 SWAP2 SWAP1 PUSH2 0x1ACE JUMP JUMPDEST PUSH2 0xFDF JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x3E2 SWAP2 SWAP1 PUSH2 0x1EF3 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x405 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x400 SWAP2 SWAP1 PUSH2 0x1C9E JUMP JUMPDEST PUSH2 0x1073 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x421 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x41C SWAP2 SWAP1 PUSH2 0x1AA5 JUMP JUMPDEST PUSH2 0x1091 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 PUSH4 0x1FFC9A7 PUSH1 0xE0 SHL DUP3 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ DUP1 PUSH2 0x47E JUMPI POP PUSH4 0x80AC58CD PUSH1 0xE0 SHL DUP3 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ JUMPDEST DUP1 PUSH2 0x4AE JUMPI POP PUSH4 0x5B5E139F PUSH1 0xE0 SHL DUP3 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x60 PUSH1 0x2 DUP1 SLOAD PUSH2 0x4C4 SWAP1 PUSH2 0x2170 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x4F0 SWAP1 PUSH2 0x2170 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x53D JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x512 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x53D JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x520 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x552 DUP3 PUSH2 0x1115 JUMP JUMPDEST PUSH2 0x588 JUMPI PUSH1 0x40 MLOAD PUSH32 0xCF4700E400000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x6 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x5D1 DUP3 PUSH2 0xAFA JUMP JUMPDEST SWAP1 POP DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x5F2 PUSH2 0x1174 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x655 JUMPI PUSH2 0x61E DUP2 PUSH2 0x619 PUSH2 0x1174 JUMP JUMPDEST PUSH2 0xFDF JUMP JUMPDEST PUSH2 0x654 JUMPI PUSH1 0x40 MLOAD PUSH32 0xCFB3B94200000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMPDEST DUP3 PUSH1 0x6 PUSH1 0x0 DUP5 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x714 PUSH2 0x117C JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x0 SLOAD SUB SUB SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x72C DUP3 PUSH2 0x1181 JUMP JUMPDEST SWAP1 POP DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x793 JUMPI PUSH1 0x40 MLOAD PUSH32 0xA114810000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x79F DUP5 PUSH2 0x124F JUMP JUMPDEST SWAP2 POP SWAP2 POP PUSH2 0x7B5 DUP2 DUP8 PUSH2 0x7B0 PUSH2 0x1174 JUMP JUMPDEST PUSH2 0x1276 JUMP JUMPDEST PUSH2 0x801 JUMPI PUSH2 0x7CA DUP7 PUSH2 0x7C5 PUSH2 0x1174 JUMP JUMPDEST PUSH2 0xFDF JUMP JUMPDEST PUSH2 0x800 JUMPI PUSH1 0x40 MLOAD PUSH32 0x59C896BE00000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0x868 JUMPI PUSH1 0x40 MLOAD PUSH32 0xEA553B3400000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x875 DUP7 DUP7 DUP7 PUSH1 0x1 PUSH2 0x12BA JUMP JUMPDEST DUP1 ISZERO PUSH2 0x880 JUMPI PUSH1 0x0 DUP3 SSTORE JUMPDEST PUSH1 0x5 PUSH1 0x0 DUP8 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP2 SLOAD PUSH1 0x1 SWAP1 SUB SWAP2 SWAP1 POP DUP2 SWAP1 SSTORE POP PUSH1 0x5 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP2 SLOAD PUSH1 0x1 ADD SWAP2 SWAP1 POP DUP2 SWAP1 SSTORE POP PUSH2 0x94E DUP6 PUSH2 0x92A DUP9 DUP9 DUP8 PUSH2 0x12C0 JUMP JUMPDEST PUSH29 0x200000000000000000000000000000000000000000000000000000000 OR PUSH2 0x12E8 JUMP JUMPDEST PUSH1 0x4 PUSH1 0x0 DUP7 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH1 0x0 PUSH29 0x200000000000000000000000000000000000000000000000000000000 DUP5 AND EQ ISZERO PUSH2 0x9D6 JUMPI PUSH1 0x0 PUSH1 0x1 DUP6 ADD SWAP1 POP PUSH1 0x0 PUSH1 0x4 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD EQ ISZERO PUSH2 0x9D4 JUMPI PUSH1 0x0 SLOAD DUP2 EQ PUSH2 0x9D3 JUMPI DUP4 PUSH1 0x4 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP JUMPDEST JUMPDEST POP JUMPDEST DUP4 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP8 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 PUSH2 0xA3E DUP7 DUP7 DUP7 PUSH1 0x1 PUSH2 0x1313 JUMP JUMPDEST POP POP POP POP POP POP JUMP JUMPDEST PUSH2 0x2710 DUP2 JUMP JUMPDEST PUSH2 0xA67 DUP4 DUP4 DUP4 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x0 DUP2 MSTORE POP PUSH2 0xEC8 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x9 DUP1 SLOAD PUSH2 0xA79 SWAP1 PUSH2 0x2170 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0xAA5 SWAP1 PUSH2 0x2170 JUMP JUMPDEST DUP1 ISZERO PUSH2 0xAF2 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xAC7 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xAF2 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xAD5 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB05 DUP3 PUSH2 0x1181 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xB74 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8F4EB60400000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH8 0xFFFFFFFFFFFFFFFF PUSH1 0x5 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xBCD PUSH2 0x1319 JUMP JUMPDEST PUSH2 0xBD7 PUSH1 0x0 PUSH2 0x1397 JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x0 PUSH1 0x8 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x3 DUP1 SLOAD PUSH2 0xC12 SWAP1 PUSH2 0x2170 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0xC3E SWAP1 PUSH2 0x2170 JUMP JUMPDEST DUP1 ISZERO PUSH2 0xC8B JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xC60 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xC8B JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xC6E JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH2 0x2710 DUP2 PUSH2 0xCA1 PUSH2 0x145D JUMP JUMPDEST PUSH2 0xCAB SWAP2 SWAP1 PUSH2 0x2064 JUMP JUMPDEST GT ISZERO PUSH2 0xCEC JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xCE3 SWAP1 PUSH2 0x1F90 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0xA DUP2 PUSH2 0xCF8 CALLER PUSH2 0x1470 JUMP JUMPDEST PUSH2 0xD02 SWAP2 SWAP1 PUSH2 0x2064 JUMP JUMPDEST GT ISZERO PUSH2 0xD43 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xD3A SWAP1 PUSH2 0x1F50 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xD4D CALLER DUP3 PUSH2 0x14C7 JUMP JUMPDEST POP JUMP JUMPDEST PUSH2 0xD58 PUSH2 0x1174 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xDBD JUMPI PUSH1 0x40 MLOAD PUSH32 0xB06307DB00000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x7 PUSH1 0x0 PUSH2 0xDCA PUSH2 0x1174 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0xE77 PUSH2 0x1174 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x17307EAB39AB6107E8899845AD3D59BD9653F200F220920489CA2B5937696C31 DUP4 PUSH1 0x40 MLOAD PUSH2 0xEBC SWAP2 SWAP1 PUSH2 0x1EF3 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH2 0xED3 DUP5 DUP5 DUP5 PUSH2 0x721 JUMP JUMPDEST PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EXTCODESIZE EQ PUSH2 0xF35 JUMPI PUSH2 0xEFE DUP5 DUP5 DUP5 DUP5 PUSH2 0x1684 JUMP JUMPDEST PUSH2 0xF34 JUMPI PUSH1 0x40 MLOAD PUSH32 0xD1A57ED600000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x60 PUSH2 0xF46 DUP3 PUSH2 0x1115 JUMP JUMPDEST PUSH2 0xF7C JUMPI PUSH1 0x40 MLOAD PUSH32 0xA14C4B5000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0xF86 PUSH2 0x17E4 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 DUP2 MLOAD EQ ISZERO PUSH2 0xFA7 JUMPI PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x0 DUP2 MSTORE POP PUSH2 0xFD2 JUMP JUMPDEST DUP1 PUSH2 0xFB1 DUP5 PUSH2 0x1876 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 ADD PUSH2 0xFC2 SWAP3 SWAP2 SWAP1 PUSH2 0x1E68 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE JUMPDEST SWAP2 POP POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0xA DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x7 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x107B PUSH2 0x1319 JUMP JUMPDEST DUP2 DUP2 PUSH1 0x9 SWAP2 SWAP1 PUSH2 0x108C SWAP3 SWAP2 SWAP1 PUSH2 0x18E7 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH2 0x1099 PUSH2 0x1319 JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0x1109 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1100 SWAP1 PUSH2 0x1F30 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x1112 DUP2 PUSH2 0x1397 JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH2 0x1120 PUSH2 0x117C JUMP JUMPDEST GT ISZERO DUP1 ISZERO PUSH2 0x112F JUMPI POP PUSH1 0x0 SLOAD DUP3 LT JUMPDEST DUP1 ISZERO PUSH2 0x116D JUMPI POP PUSH1 0x0 PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x4 PUSH1 0x0 DUP6 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD AND EQ JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 SWAP1 POP DUP1 PUSH2 0x1190 PUSH2 0x117C JUMP JUMPDEST GT PUSH2 0x1218 JUMPI PUSH1 0x0 SLOAD DUP2 LT ISZERO PUSH2 0x1217 JUMPI PUSH1 0x0 PUSH1 0x4 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP PUSH1 0x0 PUSH29 0x100000000000000000000000000000000000000000000000000000000 DUP3 AND EQ ISZERO PUSH2 0x1215 JUMPI JUMPDEST PUSH1 0x0 DUP2 EQ ISZERO PUSH2 0x120B JUMPI PUSH1 0x4 PUSH1 0x0 DUP4 PUSH1 0x1 SWAP1 SUB SWAP4 POP DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP PUSH2 0x11E0 JUMP JUMPDEST DUP1 SWAP3 POP POP POP PUSH2 0x124A JUMP JUMPDEST POP JUMPDEST JUMPDEST PUSH1 0x40 MLOAD PUSH32 0xDF2D9B4200000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x6 PUSH1 0x0 DUP6 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SWAP1 POP DUP1 SWAP3 POP DUP3 SLOAD SWAP2 POP POP SWAP2 POP SWAP2 JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP4 AND SWAP3 POP PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP2 POP DUP4 DUP3 EQ DUP4 DUP4 EQ OR SWAP1 POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0xE8 DUP4 SWAP1 SHR SWAP1 POP PUSH1 0xE8 PUSH2 0x12D7 DUP7 DUP7 DUP5 PUSH2 0x18C6 JUMP JUMPDEST PUSH3 0xFFFFFF AND SWAP1 SHL SWAP2 POP POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP4 AND SWAP3 POP DUP2 TIMESTAMP PUSH1 0xA0 SHL OR DUP4 OR SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH2 0x1321 PUSH2 0x18CF JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x133F PUSH2 0xBD9 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x1395 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x138C SWAP1 PUSH2 0x1F70 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMP JUMPDEST PUSH1 0x0 PUSH1 0x8 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH1 0x8 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1467 PUSH2 0x117C JUMP JUMPDEST PUSH1 0x0 SLOAD SUB SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF PUSH1 0x40 PUSH1 0x5 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 SHR AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 POP PUSH1 0x0 DUP3 EQ ISZERO PUSH2 0x1508 JUMPI PUSH1 0x40 MLOAD PUSH32 0xB562E8DD00000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x1515 PUSH1 0x0 DUP5 DUP4 DUP6 PUSH2 0x12BA JUMP JUMPDEST PUSH1 0x1 PUSH1 0x40 PUSH1 0x1 SWAP1 SHL OR DUP3 MUL PUSH1 0x5 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD ADD SWAP3 POP POP DUP2 SWAP1 SSTORE POP PUSH2 0x158C DUP4 PUSH2 0x157D PUSH1 0x0 DUP7 PUSH1 0x0 PUSH2 0x12C0 JUMP JUMPDEST PUSH2 0x1586 DUP6 PUSH2 0x18D7 JUMP JUMPDEST OR PUSH2 0x12E8 JUMP JUMPDEST PUSH1 0x4 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH1 0x0 DUP1 DUP4 DUP4 ADD SWAP1 POP PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP6 AND SWAP2 POP DUP3 DUP3 PUSH1 0x0 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF PUSH1 0x0 DUP1 LOG4 PUSH1 0x1 DUP4 ADD JUMPDEST DUP2 DUP2 EQ PUSH2 0x162D JUMPI DUP1 DUP4 PUSH1 0x0 PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF PUSH1 0x0 DUP1 LOG4 PUSH1 0x1 DUP2 ADD SWAP1 POP PUSH2 0x15F2 JUMP JUMPDEST POP PUSH1 0x0 DUP3 EQ ISZERO PUSH2 0x1669 JUMPI PUSH1 0x40 MLOAD PUSH32 0x2E07630000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x0 DUP2 SWAP1 SSTORE POP POP POP PUSH2 0x167F PUSH1 0x0 DUP5 DUP4 DUP6 PUSH2 0x1313 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x150B7A02 PUSH2 0x16AA PUSH2 0x1174 JUMP JUMPDEST DUP8 DUP7 DUP7 PUSH1 0x40 MLOAD DUP6 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x16CC SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x1EA7 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x16E6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x1717 JUMPI POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x1714 SWAP2 SWAP1 PUSH2 0x1C75 JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x1791 JUMPI RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0x1747 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x174C JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP PUSH1 0x0 DUP2 MLOAD EQ ISZERO PUSH2 0x1789 JUMPI PUSH1 0x40 MLOAD PUSH32 0xD1A57ED600000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 MLOAD DUP2 PUSH1 0x20 ADD REVERT JUMPDEST PUSH4 0x150B7A02 PUSH1 0xE0 SHL PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP2 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ SWAP2 POP POP SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x60 PUSH1 0x9 DUP1 SLOAD PUSH2 0x17F3 SWAP1 PUSH2 0x2170 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x181F SWAP1 PUSH2 0x2170 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x186C JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x1841 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x186C JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x184F JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x80 PUSH1 0x40 MLOAD ADD SWAP1 POP DUP1 PUSH1 0x40 MSTORE DUP1 DUP3 JUMPDEST PUSH1 0x1 ISZERO PUSH2 0x18B2 JUMPI PUSH1 0x1 DUP4 SUB SWAP3 POP PUSH1 0xA DUP2 MOD PUSH1 0x30 ADD DUP4 MSTORE8 PUSH1 0xA DUP2 DIV SWAP1 POP DUP1 PUSH2 0x18AD JUMPI PUSH2 0x18B2 JUMP JUMPDEST PUSH2 0x1887 JUMP JUMPDEST POP DUP2 DUP2 SUB PUSH1 0x20 DUP4 SUB SWAP3 POP DUP1 DUP4 MSTORE POP POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 DUP3 EQ PUSH1 0xE1 SHL SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH2 0x18F3 SWAP1 PUSH2 0x2170 JUMP JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH2 0x1915 JUMPI PUSH1 0x0 DUP6 SSTORE PUSH2 0x195C JUMP JUMPDEST DUP3 PUSH1 0x1F LT PUSH2 0x192E JUMPI DUP1 CALLDATALOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x195C JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x195C JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x195B JUMPI DUP3 CALLDATALOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x1940 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH2 0x1969 SWAP2 SWAP1 PUSH2 0x196D JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x1986 JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH2 0x196E JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x199D PUSH2 0x1998 DUP5 PUSH2 0x1FF0 JUMP JUMPDEST PUSH2 0x1FCB JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0x19B5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x19C0 DUP5 DUP3 DUP6 PUSH2 0x212E JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x19D7 DUP2 PUSH2 0x233B JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x19EC DUP2 PUSH2 0x2352 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1A01 DUP2 PUSH2 0x2369 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH2 0x1A16 DUP2 PUSH2 0x2369 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x1A2D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH2 0x1A3D DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0x198A JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP4 PUSH1 0x1F DUP5 ADD SLT PUSH2 0x1A58 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 CALLDATALOAD SWAP1 POP PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x1A71 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP2 POP DUP4 PUSH1 0x1 DUP3 MUL DUP4 ADD GT ISZERO PUSH2 0x1A89 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1A9F DUP2 PUSH2 0x2380 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1AB7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1AC5 DUP5 DUP3 DUP6 ADD PUSH2 0x19C8 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x1AE1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1AEF DUP6 DUP3 DUP7 ADD PUSH2 0x19C8 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x1B00 DUP6 DUP3 DUP7 ADD PUSH2 0x19C8 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x1B1F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1B2D DUP7 DUP3 DUP8 ADD PUSH2 0x19C8 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x1B3E DUP7 DUP3 DUP8 ADD PUSH2 0x19C8 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH2 0x1B4F DUP7 DUP3 DUP8 ADD PUSH2 0x1A90 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x80 DUP6 DUP8 SUB SLT ISZERO PUSH2 0x1B6F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1B7D DUP8 DUP3 DUP9 ADD PUSH2 0x19C8 JUMP JUMPDEST SWAP5 POP POP PUSH1 0x20 PUSH2 0x1B8E DUP8 DUP3 DUP9 ADD PUSH2 0x19C8 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x40 PUSH2 0x1B9F DUP8 DUP3 DUP9 ADD PUSH2 0x1A90 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x60 DUP6 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x1BBC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x1BC8 DUP8 DUP3 DUP9 ADD PUSH2 0x1A1C JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP6 SWAP2 SWAP5 POP SWAP3 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x1BE7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1BF5 DUP6 DUP3 DUP7 ADD PUSH2 0x19C8 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x1C06 DUP6 DUP3 DUP7 ADD PUSH2 0x19DD JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x1C23 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1C31 DUP6 DUP3 DUP7 ADD PUSH2 0x19C8 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x1C42 DUP6 DUP3 DUP7 ADD PUSH2 0x1A90 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1C5E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1C6C DUP5 DUP3 DUP6 ADD PUSH2 0x19F2 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1C87 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1C95 DUP5 DUP3 DUP6 ADD PUSH2 0x1A07 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x20 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x1CB1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP4 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x1CCB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x1CD7 DUP6 DUP3 DUP7 ADD PUSH2 0x1A46 JUMP JUMPDEST SWAP3 POP SWAP3 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1CF5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1D03 DUP5 DUP3 DUP6 ADD PUSH2 0x1A90 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x1D15 DUP2 PUSH2 0x20BA JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x1D24 DUP2 PUSH2 0x20CC JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1D35 DUP3 PUSH2 0x2021 JUMP JUMPDEST PUSH2 0x1D3F DUP2 DUP6 PUSH2 0x2037 JUMP JUMPDEST SWAP4 POP PUSH2 0x1D4F DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x213D JUMP JUMPDEST PUSH2 0x1D58 DUP2 PUSH2 0x2260 JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1D6E DUP3 PUSH2 0x202C JUMP JUMPDEST PUSH2 0x1D78 DUP2 DUP6 PUSH2 0x2048 JUMP JUMPDEST SWAP4 POP PUSH2 0x1D88 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x213D JUMP JUMPDEST PUSH2 0x1D91 DUP2 PUSH2 0x2260 JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1DA7 DUP3 PUSH2 0x202C JUMP JUMPDEST PUSH2 0x1DB1 DUP2 DUP6 PUSH2 0x2059 JUMP JUMPDEST SWAP4 POP PUSH2 0x1DC1 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x213D JUMP JUMPDEST DUP1 DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1DDA PUSH1 0x26 DUP4 PUSH2 0x2048 JUMP JUMPDEST SWAP2 POP PUSH2 0x1DE5 DUP3 PUSH2 0x2271 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1DFD PUSH1 0x12 DUP4 PUSH2 0x2048 JUMP JUMPDEST SWAP2 POP PUSH2 0x1E08 DUP3 PUSH2 0x22C0 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1E20 PUSH1 0x20 DUP4 PUSH2 0x2048 JUMP JUMPDEST SWAP2 POP PUSH2 0x1E2B DUP3 PUSH2 0x22E9 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1E43 PUSH1 0x14 DUP4 PUSH2 0x2048 JUMP JUMPDEST SWAP2 POP PUSH2 0x1E4E DUP3 PUSH2 0x2312 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x1E62 DUP2 PUSH2 0x2124 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1E74 DUP3 DUP6 PUSH2 0x1D9C JUMP JUMPDEST SWAP2 POP PUSH2 0x1E80 DUP3 DUP5 PUSH2 0x1D9C JUMP JUMPDEST SWAP2 POP DUP2 SWAP1 POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1EA1 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1D0C JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x80 DUP3 ADD SWAP1 POP PUSH2 0x1EBC PUSH1 0x0 DUP4 ADD DUP8 PUSH2 0x1D0C JUMP JUMPDEST PUSH2 0x1EC9 PUSH1 0x20 DUP4 ADD DUP7 PUSH2 0x1D0C JUMP JUMPDEST PUSH2 0x1ED6 PUSH1 0x40 DUP4 ADD DUP6 PUSH2 0x1E59 JUMP JUMPDEST DUP2 DUP2 SUB PUSH1 0x60 DUP4 ADD MSTORE PUSH2 0x1EE8 DUP2 DUP5 PUSH2 0x1D2A JUMP JUMPDEST SWAP1 POP SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1F08 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1D1B JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1F28 DUP2 DUP5 PUSH2 0x1D63 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1F49 DUP2 PUSH2 0x1DCD JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1F69 DUP2 PUSH2 0x1DF0 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1F89 DUP2 PUSH2 0x1E13 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1FA9 DUP2 PUSH2 0x1E36 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1FC5 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1E59 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1FD5 PUSH2 0x1FE6 JUMP JUMPDEST SWAP1 POP PUSH2 0x1FE1 DUP3 DUP3 PUSH2 0x21A2 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0x200B JUMPI PUSH2 0x200A PUSH2 0x2231 JUMP JUMPDEST JUMPDEST PUSH2 0x2014 DUP3 PUSH2 0x2260 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x206F DUP3 PUSH2 0x2124 JUMP JUMPDEST SWAP2 POP PUSH2 0x207A DUP4 PUSH2 0x2124 JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH2 0x20AF JUMPI PUSH2 0x20AE PUSH2 0x21D3 JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x20C5 DUP3 PUSH2 0x2104 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY PUSH1 0x0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x215B JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x2140 JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0x216A JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0x2188 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH2 0x219C JUMPI PUSH2 0x219B PUSH2 0x2202 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x21AB DUP3 PUSH2 0x2260 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0x21CA JUMPI PUSH2 0x21C9 PUSH2 0x2231 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6464726573730000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x55736572206C696D697420726561636865640000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4E6F74206D6F726520737570706C79206C656674000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH2 0x2344 DUP2 PUSH2 0x20BA JUMP JUMPDEST DUP2 EQ PUSH2 0x234F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x235B DUP2 PUSH2 0x20CC JUMP JUMPDEST DUP2 EQ PUSH2 0x2366 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x2372 DUP2 PUSH2 0x20D8 JUMP JUMPDEST DUP2 EQ PUSH2 0x237D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x2389 DUP2 PUSH2 0x2124 JUMP JUMPDEST DUP2 EQ PUSH2 0x2394 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xAD 0x4F 0xB1 JUMPDEST 0xAC GASLIMIT 0xD MOD 0x27 DIV 0xC5 0xEA PC OR 0x1E 0xB1 0xAE 0xCA 0xE0 PUSH32 0xAF74D59DE90463635FFF48BA64736F6C63430008040033000000000000000000 ",
	"sourceMap": "181:841:2:-:0;;;362:125;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4903:154:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4977:5;4969;:13;;;;;;;;;;;;:::i;:::-;;5002:7;4992;:17;;;;;;;;;;;;:::i;:::-;;5035:15;:13;;;:15;;:::i;:::-;5019:13;:31;;;;4903:154;;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;;;:32;;:::i;:::-;469:8:2::1;459:7;:18;;;;;;;;;;;;:::i;:::-;;362:125:::0;181:841;;5383:90:3;5439:7;5383:90;:::o;640:96:1:-;693:7;719:10;712:17;;640:96;:::o;2433:187:0:-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2433:187;;:::o;181:841:2:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:354:5:-;96:5;121:66;137:49;179:6;137:49;:::i;:::-;121:66;:::i;:::-;112:75;;210:6;203:5;196:21;248:4;241:5;237:16;286:3;277:6;272:3;268:16;265:25;262:2;;;303:1;300;293:12;262:2;316:39;348:6;343:3;338;316:39;:::i;:::-;102:259;;;;;;:::o;381:288::-;448:5;497:3;490:4;482:6;478:17;474:27;464:2;;515:1;512;505:12;464:2;548:6;542:13;573:90;659:3;651:6;644:4;636:6;632:17;573:90;:::i;:::-;564:99;;454:215;;;;;:::o;675:390::-;755:6;804:2;792:9;783:7;779:23;775:32;772:2;;;820:1;817;810:12;772:2;884:1;873:9;869:17;863:24;914:18;906:6;903:30;900:2;;;946:1;943;936:12;900:2;974:74;1040:7;1031:6;1020:9;1016:22;974:74;:::i;:::-;964:84;;834:224;762:303;;;;:::o;1071:129::-;1105:6;1132:20;;:::i;:::-;1122:30;;1161:33;1189:4;1181:6;1161:33;:::i;:::-;1112:88;;;:::o;1206:75::-;1239:6;1272:2;1266:9;1256:19;;1246:35;:::o;1287:308::-;1349:4;1439:18;1431:6;1428:30;1425:2;;;1461:18;;:::i;:::-;1425:2;1499:29;1521:6;1499:29;:::i;:::-;1491:37;;1583:4;1577;1573:15;1565:23;;1354:241;;;:::o;1601:307::-;1669:1;1679:113;1693:6;1690:1;1687:13;1679:113;;;1778:1;1773:3;1769:11;1763:18;1759:1;1754:3;1750:11;1743:39;1715:2;1712:1;1708:10;1703:15;;1679:113;;;1810:6;1807:1;1804:13;1801:2;;;1890:1;1881:6;1876:3;1872:16;1865:27;1801:2;1650:258;;;;:::o;1914:320::-;1958:6;1995:1;1989:4;1985:12;1975:22;;2042:1;2036:4;2032:12;2063:18;2053:2;;2119:4;2111:6;2107:17;2097:27;;2053:2;2181;2173:6;2170:14;2150:18;2147:38;2144:2;;;2200:18;;:::i;:::-;2144:2;1965:269;;;;:::o;2240:281::-;2323:27;2345:4;2323:27;:::i;:::-;2315:6;2311:40;2453:6;2441:10;2438:22;2417:18;2405:10;2402:34;2399:62;2396:2;;;2464:18;;:::i;:::-;2396:2;2504:10;2500:2;2493:22;2283:238;;;:::o;2527:180::-;2575:77;2572:1;2565:88;2672:4;2669:1;2662:15;2696:4;2693:1;2686:15;2713:180;2761:77;2758:1;2751:88;2858:4;2855:1;2848:15;2882:4;2879:1;2872:15;2899:102;2940:6;2991:2;2987:7;2982:2;2975:5;2971:14;2967:28;2957:38;;2947:54;;;:::o;181:841:2:-;;;;;;;"
}

export const abiCollectionWallet = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Items",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "artist",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "createItem",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "excludedList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getArtist",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]


export const tokenAbicode = "60a06040523480156200001157600080fd5b50604051620053193803806200531983398101604081905262000034916200056d565b600054610100900460ff1615808015620000555750600054600160ff909116105b806200008557506200007230620001ed60201b62001ce81760201c565b15801562000085575060005460ff166001145b620000ee5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff19166001179055801562000112576000805461ff0019166101001790555b6200011e8383620001fc565b3360808190526101f780546001600160a01b03191682179055620001459060009062000268565b620001717f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63362000268565b6200019d7f8502233096d909befbda0999bb8ea2f3a6be3c138b9fbf003752a4c8bce86f6c3362000268565b8015620001e4576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505062000731565b6001600160a01b03163b151590565b600054610100900460ff16620002585760405162461bcd60e51b815260206004820152602b6024820152600080516020620052f983398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000e5565b62000264828262000274565b5050565b620002648282620002f4565b600054610100900460ff16620002d05760405162461bcd60e51b815260206004820152602b6024820152600080516020620052f983398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000e5565b610193620002df838262000665565b50610194620002ef828262000665565b505050565b6200030b82826200033360201b62001cf71760201c565b600082815261016160209081526040909120620002ef91839062001d7f620003db821b17901c565b600082815261012f602090815260408083206001600160a01b038516845290915290205460ff166200026457600082815261012f602090815260408083206001600160a01b03851684529091529020805460ff1916600117905562000397620003fb565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620003f2836001600160a01b03841662000417565b90505b92915050565b6000620004126200046960201b62001d941760201c565b905090565b60008181526001830160205260408120546200046057508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620003f5565b506000620003f5565b3360009081526099602052604081205460ff16156200048f575060131936013560601c90565b62000412620004a460201b62001dbe1760201c565b3390565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620004d057600080fd5b81516001600160401b0380821115620004ed57620004ed620004a8565b604051601f8301601f19908116603f01168101908282118183101715620005185762000518620004a8565b816040528381526020925086838588010111156200053557600080fd5b600091505b838210156200055957858201830151818301840152908201906200053a565b600093810190920192909252949350505050565b600080604083850312156200058157600080fd5b82516001600160401b03808211156200059957600080fd5b620005a786838701620004be565b93506020850151915080821115620005be57600080fd5b50620005cd85828601620004be565b9150509250929050565b600181811c90821680620005ec57607f821691505b6020821081036200060d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002ef57600081815260208120601f850160051c810160208610156200063c5750805b601f850160051c820191505b818110156200065d5782815560010162000648565b505050505050565b81516001600160401b03811115620006815762000681620004a8565b6200069981620006928454620005d7565b8462000613565b602080601f831160018114620006d15760008415620006b85750858301515b600019600386901b1c1916600185901b1785556200065d565b600085815260208120601f198616915b828110156200070257888601518255948401946001909101908401620006e1565b5085821015620007215787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b608051614ba562000754600039600081816108fd01526122f30152614ba56000f3fe6080604052600436106102e35760003560e01c80636352211e11610190578063b24f2d39116100dc578063d45573f611610095578063e15916341161006f578063e1591634146109b4578063e8a3d485146109d4578063e985e9c5146109e9578063eb13554f14610a3357600080fd5b8063d45573f61461091f578063d547741f14610955578063de9037741461097557600080fd5b8063b24f2d391461083b578063b88d4fde1461086a578063c87b56dd1461088a578063ca15c873146108aa578063cb2ef6f7146108ca578063cf8267b1146108eb57600080fd5b8063938e3d7b11610149578063a0a8e46011610123578063a0a8e460146107bd578063a217fddf146107d9578063a22cb465146107ee578063ac9650d81461080e57600080fd5b8063938e3d7b1461076857806395d89b41146107885780639bcf7a151461079d57600080fd5b80636352211e146106b35780636f4f2837146106d357806370a08231146106f35780638da5cb5b146107135780639010d07c1461072857806391d148541461074857600080fd5b80632a55205a1161024f57806342842e0e116102085780634f6ccce7116101e25780634f6ccce71461061a57806352258eaf1461063a578063572b6c051461065a578063600dd5ea1461069357600080fd5b806342842e0e1461059857806342966c68146105b85780634cc157df146105d857600080fd5b80632a55205a146104cf5780632c4510f81461050e5780632f2ff15d146105215780632f745c591461054157806336568abe146105615780633b1475a71461058157600080fd5b806313af4035116102a157806313af4035146103e857806318160ddd146104085780631e7ac4881461041e57806322dcd13e1461043e57806323b872dd1461047e578063248a9ca31461049e57600080fd5b806275a317146102e857806301ffc9a71461031b57806306fdde031461034b578063079fe40e1461036d578063081812fc146103a6578063095ea7b3146103c6575b600080fd5b3480156102f457600080fd5b50610308610303366004613c2d565b610a54565b6040519081526020015b60405180910390f35b34801561032757600080fd5b5061033b610336366004613c97565b610a94565b6040519015158152602001610312565b34801561035757600080fd5b50610360610ac0565b6040516103129190613d04565b34801561037957600080fd5b506101f95461038e906001600160a01b031681565b6040516001600160a01b039091168152602001610312565b3480156103b257600080fd5b5061038e6103c1366004613d17565b610b53565b3480156103d257600080fd5b506103e66103e1366004613d30565b610b7b565b005b3480156103f457600080fd5b506103e6610403366004613d5c565b610ca7565b34801561041457600080fd5b506101c754610308565b34801561042a57600080fd5b506103e6610439366004613d30565b610d5d565b34801561044a57600080fd5b506101fc5461046690600160801b90046001600160801b031681565b6040516001600160801b039091168152602001610312565b34801561048a57600080fd5b506103e6610499366004613d79565b610e23565b3480156104aa57600080fd5b506103086104b9366004613d17565b600090815261012f602052604090206001015490565b3480156104db57600080fd5b506104ef6104ea366004613dba565b610e5b565b604080516001600160a01b039093168352602083019190915201610312565b61030861051c366004613df5565b610e98565b34801561052d57600080fd5b506103e661053c366004613e50565b61104a565b34801561054d57600080fd5b5061030861055c366004613d30565b611070565b34801561056d57600080fd5b506103e661057c366004613e50565b611107565b34801561058d57600080fd5b506103086101f85481565b3480156105a457600080fd5b506103e66105b3366004613d79565b611195565b3480156105c457600080fd5b506103e66105d3366004613d17565b6111b0565b3480156105e457600080fd5b506105f86105f3366004613d17565b61122c565b604080516001600160a01b03909316835261ffff909116602083015201610312565b34801561062657600080fd5b50610308610635366004613d17565b61129c565b34801561064657600080fd5b50610308610655366004613e80565b611331565b34801561066657600080fd5b5061033b610675366004613d5c565b6001600160a01b031660009081526099602052604090205460ff1690565b34801561069f57600080fd5b506103e66106ae366004613d30565b611458565b3480156106bf57600080fd5b5061038e6106ce366004613d17565b611515565b3480156106df57600080fd5b506103e66106ee366004613d5c565b611576565b3480156106ff57600080fd5b5061030861070e366004613d5c565b6115cd565b34801561071f57600080fd5b5061038e611654565b34801561073457600080fd5b5061038e610743366004613dba565b61168c565b34801561075457600080fd5b5061033b610763366004613e50565b6116ac565b34801561077457600080fd5b506103e6610783366004613eb4565b6116d8565b34801561079457600080fd5b506103606116f7565b3480156107a957600080fd5b506103e66107b8366004613ef5565b611707565b3480156107c957600080fd5b5060405160018152602001610312565b3480156107e557600080fd5b50610308600081565b3480156107fa57600080fd5b506103e6610809366004613f2a565b6117e0565b34801561081a57600080fd5b5061082e610829366004613f58565b6117f2565b6040516103129190613fcc565b34801561084757600080fd5b506101fb546101fc546001600160a01b03909116906001600160801b03166105f8565b34801561087657600080fd5b506103e66108853660046140f4565b6118e6565b34801561089657600080fd5b506103606108a5366004613d17565b61191f565b3480156108b657600080fd5b506103086108c5366004613d17565b6119c2565b3480156108d657600080fd5b506a546f6b656e45524337323160a81b610308565b3480156108f757600080fd5b5061038e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561092b57600080fd5b506101fa546101fc546001600160a01b0390911690600160801b90046001600160801b03166105f8565b34801561096157600080fd5b506103e6610970366004613e50565b6119da565b34801561098157600080fd5b50610995610990366004613df5565b611a00565b6040805192151583526001600160a01b03909116602083015201610312565b3480156109c057600080fd5b506103e66109cf366004614227565b611a69565b3480156109e057600080fd5b50610360611c59565b3480156109f557600080fd5b5061033b610a04366004614339565b6001600160a01b0391821660009081526101986020908152604080832093909416825291909152205460ff1690565b348015610a3f57600080fd5b506101fa5461038e906001600160a01b031681565b60007f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610a8081611dc2565b610a8b858585611dd3565b95945050505050565b6000610a9f82611e5d565b80610aba57506001600160e01b0319821663152a902d60e11b145b92915050565b60606101938054610ad090614367565b80601f0160208091040260200160405190810160405280929190818152602001828054610afc90614367565b8015610b495780601f10610b1e57610100808354040283529160200191610b49565b820191906000526020600020905b815481529060010190602001808311610b2c57829003601f168201915b5050505050905090565b6000610b5e82611e82565b50600090815261019760205260409020546001600160a01b031690565b6000610b8682611515565b9050806001600160a01b0316836001600160a01b031603610bf85760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b806001600160a01b0316610c0a611ee2565b6001600160a01b03161480610c265750610c2681610a04611ee2565b610c985760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610bef565b610ca28383611eec565b505050565b6000610cb281611dc2565b610cbd6000836116ac565b610d095760405162461bcd60e51b815260206004820152601b60248201527f6e6577206f776e6572206e6f74206d6f64756c652061646d696e2e00000000006044820152606401610bef565b6101f780546001600160a01b038481166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a3505050565b6000610d6881611dc2565b612710821115610daa5760405162461bcd60e51b815260206004820152600d60248201526c313839901e1e9018981818181760991b6044820152606401610bef565b6101fc80546001600160801b03166001600160401b038416600160801b021790556101fa80546001600160a01b0319166001600160a01b0385169081179091556040518381527fe2497bd806ec41a6e0dd992c29a72efc0ef8fec9092d1978fd4a1e00b2f18304906020015b60405180910390a2505050565b610e34610e2e611ee2565b82611f5b565b610e505760405162461bcd60e51b8152600401610bef9061439b565b610ca2838383611fdb565b600080600080610e6a8661122c565b90945084925061ffff169050612710610e8382876143ff565b610e8d919061441e565b925050509250929050565b6000600260015403610eec5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610bef565b60026001556000610efc81611dc2565b6000610f09868686612185565b9050600080610f1b6020890189613d5c565b6001600160a01b031614610f3b57610f366020880188613d5c565b610f43565b610f43611ee2565b9050610f5b81610f5660808a018a614440565b611dd3565b93506000610f6f6040890160208a01613d5c565b6001600160a01b031614610fdf576040518060400160405280886020016020810190610f9b9190613d5c565b6001600160a01b03908116825260408a8101356020938401526000888152610200845220835181546001600160a01b03191692169190911781559101516001909101555b610ff0610feb88614486565b612285565b83816001600160a01b0316836001600160a01b03167f110d160a1bedeea919a88fbc4b2a9fb61b7e664084391b6ca2740db66fef80fe8a60405161103491906145c1565b60405180910390a4505060018055509392505050565b600082815261012f602052604090206001015461106681611dc2565b610ca28383612494565b600061107b836115cd565b82106110dd5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610bef565b506001600160a01b039190911660009081526101c560209081526040808320938352929052205490565b61110f611ee2565b6001600160a01b0316816001600160a01b0316146111875760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610bef565b61119182826124b7565b5050565b610ca2838383604051806020016040528060008152506118e6565b6111bb610e2e611ee2565b6112205760405162461bcd60e51b815260206004820152603060248201527f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760448201526f1b995c881b9bdc88185c1c1c9bdd995960821b6064820152608401610bef565b611229816124da565b50565b600081815261020060209081526040808320815180830190925280546001600160a01b0316808352600190910154928201929092528291156112745780516020820151611292565b6101fb546101fc546001600160a01b03909116906001600160801b03165b9250925050915091565b60006112a86101c75490565b821061130b5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610bef565b6101c7828154811061131f5761131f6146d1565b90600052602060002001549050919050565b60006002600154036113855760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610bef565b60026001557f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66113b481611dc2565b6000806113c46020860186613d5c565b6001600160a01b0316146113e4576113df6020850185613d5c565b6113ec565b6113ec611ee2565b90506113ff81610f566080870187614440565b925082816001600160a01b0316336001600160a01b03167f110d160a1bedeea919a88fbc4b2a9fb61b7e664084391b6ca2740db66fef80fe8760405161144591906145c1565b60405180910390a4505060018055919050565b600061146381611dc2565b6127108211156114aa5760405162461bcd60e51b815260206004820152601260248201527165786365656420726f79616c74792062707360701b6044820152606401610bef565b6101fb80546001600160a01b0319166001600160a01b0385169081179091556101fc80546001600160801b0319166001600160801b0385161790556040518381527f90d7ec04bcb8978719414f82e52e4cb651db41d0e6f8cea6118c2191e6183adb90602001610e16565b600081815261019560205260408120546001600160a01b031680610aba5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610bef565b600061158181611dc2565b6101f980546001600160a01b0319166001600160a01b0384169081179091556040517f299d17e95023f496e0ffc4909cff1a61f74bb5eb18de6f900f4155bfa1b3b33390600090a25050565b60006001600160a01b0382166116375760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610bef565b506001600160a01b03166000908152610196602052604090205490565b6101f75460009061166f9082906001600160a01b03166116ac565b6116795750600090565b6101f7546001600160a01b03165b905090565b6000828152610161602052604081206116a59083612583565b9392505050565b600091825261012f602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60006116e381611dc2565b6101fd6116f1838583614735565b50505050565b60606101948054610ad090614367565b600061171281611dc2565b6127108211156117595760405162461bcd60e51b815260206004820152601260248201527165786365656420726f79616c74792062707360701b6044820152606401610bef565b6040805180820182526001600160a01b03858116808352602080840187815260008a81526102008352869020945185546001600160a01b031916941693909317845591516001909301929092559151848152909186917f7365cf4122f072a3365c20d54eff9b38d73c096c28e1892ec8f5b0e403a0f12d910160405180910390a350505050565b6111916117eb611ee2565b838361258f565b6060816001600160401b0381111561180c5761180c61402e565b60405190808252806020026020018201604052801561183f57816020015b606081526020019060019003908161182a5790505b50905060005b828110156118df576118af30858584818110611863576118636146d1565b90506020028101906118759190614440565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061265e92505050565b8282815181106118c1576118c16146d1565b602002602001018190525080806118d7906147f5565b915050611845565b5092915050565b6118f76118f1611ee2565b83611f5b565b6119135760405162461bcd60e51b8152600401610bef9061439b565b6116f184848484612749565b60008181526101ff6020526040902080546060919061193d90614367565b80601f016020809104026020016040519081016040528092919081815260200182805461196990614367565b80156119b65780601f1061198b576101008083540402835291602001916119b6565b820191906000526020600020905b81548152906001019060200180831161199957829003601f168201915b50505050509050919050565b600081815261016160205260408120610aba9061277c565b600082815261012f60205260409020600101546119f681611dc2565b610ca283836124b7565b6000806000611a10868686612786565b61012087013560009081526101fe602052604090205490915060ff16158015611a5e5750611a5e7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6826116ac565b969095509350505050565b600054610100900460ff1615808015611a895750600054600160ff909116105b80611aa35750303b158015611aa3575060005460ff166001145b611b065760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610bef565b6000805460ff191660011790558015611b29576000805461ff0019166101001790555b611b316127e2565b611b776040518060400160405280600b81526020016a546f6b656e45524337323160a81b815250604051806040016040528060018152602001603160f81b815250612813565b611b8087612844565b6101fb80546001600160a01b03199081166001600160a01b03888116919091179092556101fc80546001600160801b0319166001600160801b0388161790556101fa805482168584161790556101f980549091169188169190911790556101fd611bea898261480e565b506101fc80546001600160801b03808616600160801b0291161790558015611c4c576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050505050505050565b6101fd8054611c6790614367565b80601f0160208091040260200160405190810160405280929190818152602001828054611c9390614367565b8015611ce05780601f10611cb557610100808354040283529160200191611ce0565b820191906000526020600020905b815481529060010190602001808311611cc357829003601f168201915b505050505081565b6001600160a01b03163b151590565b611d0182826116ac565b61119157600082815261012f602090815260408083206001600160a01b03851684529091529020805460ff19166001179055611d3b611ee2565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006116a5836001600160a01b03841661287c565b3360009081526099602052604081205460ff1615611db9575060131936013560601c90565b503390565b3390565b61122981611dce611ee2565b6128cb565b6101f88054906001906000611de883856148cd565b909155505060008181526101ff60205260409020611e07838583614735565b50611e12848261292f565b80846001600160a01b03167f9d89e36eadf856db0ad9ffb5a569e07f95634dddd9501141ecf04820484ad0dc8585604051611e4e9291906148e0565b60405180910390a39392505050565b60006001600160e01b0319821663780e9d6360e01b1480610aba5750610aba82612a80565b600081815261019560205260409020546001600160a01b03166112295760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610bef565b6000611687611d94565b60008181526101976020526040902080546001600160a01b0319166001600160a01b0384169081179091558190611f2282611515565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080611f6783611515565b9050806001600160a01b0316846001600160a01b03161480611faf57506001600160a01b038082166000908152610198602090815260408083209388168352929052205460ff165b80611fd35750836001600160a01b0316611fc884610b53565b6001600160a01b0316145b949350505050565b826001600160a01b0316611fee82611515565b6001600160a01b0316146120525760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610bef565b6001600160a01b0382166120b45760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610bef565b6120bf838383612ac0565b6120ca600082611eec565b6001600160a01b0383166000908152610196602052604081208054600192906120f49084906148f4565b90915550506001600160a01b0382166000908152610196602052604081208054600192906121239084906148cd565b90915550506000818152610195602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000806000612195868686611a00565b91509150816121da5760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b6044820152606401610bef565b426121ec610100880160e08901614907565b6001600160801b03161115801561221d57504261221161012088016101008901614907565b6001600160801b031610155b61225b5760405162461bcd60e51b815260206004820152600f60248201526e1c995c5d595cdd08195e1c1a5c9959608a1b6044820152606401610bef565b61012086013560009081526101fe60205260409020805460ff191660011790559150509392505050565b8060a001516000036122945750565b60a08101516101fc54600090612710906122be90600160801b90046001600160801b0316846143ff565b6122c8919061441e565b60405163085b49ad60e41b815230600482015260006024820181905291925081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906385b49ad0906044016040805180830381865afa158015612339573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061235d9190614922565b9092509050600061271061237183876143ff565b61237b919061441e565b905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b03168660c001516001600160a01b0316036123f6578434146123f65760405162461bcd60e51b815260206004820152601660248201527536bab9ba1039b2b732103a37ba30b610383934b1b29760511b6044820152606401610bef565b60608601516000906001600160a01b031615612416578660600151612424565b6101f9546001600160a01b03165b90506124498760c00151612436611ee2565b6101fa546001600160a01b031688612acb565b6124608760c00151612459611ee2565b8685612acb565b61248b8760c00151612470611ee2565b838561247c8a8c6148f4565b61248691906148f4565b612acb565b50505050505050565b61249e8282611cf7565b600082815261016160205260409020610ca29082611d7f565b6124c18282612b11565b600082815261016160205260409020610ca29082612b97565b60006124e582611515565b90506124f381600084612ac0565b6124fe600083611eec565b6001600160a01b0381166000908152610196602052604081208054600192906125289084906148f4565b90915550506000828152610195602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60006116a58383612bac565b816001600160a01b0316836001600160a01b0316036125f05760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610bef565b6001600160a01b0383811660008181526101986020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b60606001600160a01b0383163b6126c65760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610bef565b600080846001600160a01b0316846040516126e19190614950565b600060405180830381855af49150503d806000811461271c576040519150601f19603f3d011682016040523d82523d6000602084013e612721565b606091505b5091509150610a8b8282604051806060016040528060278152602001614b4960279139612bd6565b612754848484611fdb565b61276084848484612c0f565b6116f15760405162461bcd60e51b8152600401610bef9061496c565b6000610aba825490565b6000611fd383838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506127dc92506127d09150889050612d17565b80519060200120612e51565b90612e9f565b600054610100900460ff166128095760405162461bcd60e51b8152600401610bef906149be565b612811612ec3565b565b600054610100900460ff1661283a5760405162461bcd60e51b8152600401610bef906149be565b6111918282612ef0565b600054610100900460ff1661286b5760405162461bcd60e51b8152600401610bef906149be565b612873612f31565b61122981612f58565b60008181526001830160205260408120546128c357508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610aba565b506000610aba565b6128d582826116ac565b611191576128ed816001600160a01b03166014612fe7565b6128f8836020612fe7565b604051602001612909929190614a09565b60408051601f198184030181529082905262461bcd60e51b8252610bef91600401613d04565b6001600160a01b0382166129855760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610bef565b600081815261019560205260409020546001600160a01b0316156129eb5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610bef565b6129f760008383612ac0565b6001600160a01b038216600090815261019660205260408120805460019290612a219084906148cd565b90915550506000818152610195602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160e01b031982166380ac58cd60e01b1480612ab157506001600160e01b03198216635b5e139f60e01b145b80610aba5750610aba82613182565b610ca28383836131a7565b80156116f15773eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03851601612b0557612b008282613261565b6116f1565b6116f184848484613304565b612b1b82826116ac565b1561119157600082815261012f602090815260408083206001600160a01b03851684529091529020805460ff19169055612b53611ee2565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b60006116a5836001600160a01b038416613357565b6000826000018281548110612bc357612bc36146d1565b9060005260206000200154905092915050565b60608315612be55750816116a5565b825115612bf55782518084602001fd5b8160405162461bcd60e51b8152600401610bef9190613d04565b60006001600160a01b0384163b15612d0c57836001600160a01b031663150b7a02612c38611ee2565b8786866040518563ffffffff1660e01b8152600401612c5a9493929190614a7e565b6020604051808303816000875af1925050508015612c95575060408051601f3d908101601f19168201909252612c9291810190614abb565b60015b612cf2573d808015612cc3576040519150601f19603f3d011682016040523d82523d6000602084013e612cc8565b606091505b508051600003612cea5760405162461bcd60e51b8152600401610bef9061496c565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611fd3565b506001949350505050565b60607f86633b4ffa94b7c3d316ca70d7d2700f3fdfa7a7806efd31499b513d9176692e612d476020840184613d5c565b612d576040850160208601613d5c565b6040850135612d6c6080870160608801613d5c565b612d796080880188614440565b604051612d87929190614ad8565b60405190819003902060a0880135612da560e08a0160c08b01613d5c565b612db66101008b0160e08c01614907565b612dc86101208c016101008d01614907565b60408051602081019b909b526001600160a01b03998a16908b015296881660608a0152608089019590955292861660a088015260c087019190915260e08601529092166101008401526001600160801b03918216610120808501919091529116610140830152830135610160820152610180016040516020818303038152906040529050919050565b6000610aba612e5e61344a565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000612eae85856134c5565b91509150612ebb8161350a565b509392505050565b600054610100900460ff16612eea5760405162461bcd60e51b8152600401610bef906149be565b60018055565b600054610100900460ff16612f175760405162461bcd60e51b8152600401610bef906149be565b815160209283012081519190920120603391909155603455565b600054610100900460ff166128115760405162461bcd60e51b8152600401610bef906149be565b600054610100900460ff16612f7f5760405162461bcd60e51b8152600401610bef906149be565b60005b815181101561119157600160996000848481518110612fa357612fa36146d1565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580612fdf816147f5565b915050612f82565b60606000612ff68360026143ff565b6130019060026148cd565b6001600160401b038111156130185761301861402e565b6040519080825280601f01601f191660200182016040528015613042576020820181803683370190505b509050600360fc1b8160008151811061305d5761305d6146d1565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061308c5761308c6146d1565b60200101906001600160f81b031916908160001a90535060006130b08460026143ff565b6130bb9060016148cd565b90505b6001811115613133576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106130ef576130ef6146d1565b1a60f81b828281518110613105576131056146d1565b60200101906001600160f81b031916908160001a90535060049490941c9361312c81614ae8565b90506130be565b5083156116a55760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610bef565b60006001600160e01b03198216635a05180f60e01b1480610aba5750610aba826136c0565b6001600160a01b038316613204576131ff816101c7805460008381526101c860205260408120829055600182018355919091527fff6df30967a6a678f565c59a19e91e5c0dbb20cfe9f9bf26d7da6dea0fffa24c0155565b613227565b816001600160a01b0316836001600160a01b0316146132275761322783826136f5565b6001600160a01b03821661323e57610ca281613797565b826001600160a01b0316826001600160a01b031614610ca257610ca2828261384c565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146132ae576040519150601f19603f3d011682016040523d82523d6000602084013e6132b3565b606091505b5050905080610ca25760405162461bcd60e51b815260206004820152601c60248201527f6e617469766520746f6b656e207472616e73666572206661696c6564000000006044820152606401610bef565b816001600160a01b0316836001600160a01b031603156116f157306001600160a01b0384160361334257612b006001600160a01b0385168383613892565b6116f16001600160a01b0385168484846138f5565b6000818152600183016020526040812054801561344057600061337b6001836148f4565b855490915060009061338f906001906148f4565b90508181146133f45760008660000182815481106133af576133af6146d1565b90600052602060002001549050808760000184815481106133d2576133d26146d1565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061340557613405614aff565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610aba565b6000915050610aba565b60006116877f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61347960335490565b6034546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b60008082516041036134fb5760208301516040840151606085015160001a6134ef8782858561392d565b94509450505050613503565b506000905060025b9250929050565b600081600481111561351e5761351e614b15565b036135265750565b600181600481111561353a5761353a614b15565b036135875760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610bef565b600281600481111561359b5761359b614b15565b036135e85760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610bef565b60038160048111156135fc576135fc614b15565b036136545760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610bef565b600481600481111561366857613668614b15565b036112295760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610bef565b60006001600160e01b03198216637965db0b60e01b1480610aba57506301ffc9a760e01b6001600160e01b0319831614610aba565b60006001613702846115cd565b61370c91906148f4565b60008381526101c66020526040902054909150808214613762576001600160a01b03841660009081526101c56020908152604080832085845282528083205484845281842081905583526101c690915290208190555b5060009182526101c6602090815260408084208490556001600160a01b0390941683526101c581528383209183525290812055565b6101c7546000906137aa906001906148f4565b60008381526101c860205260408120546101c780549394509092849081106137d4576137d46146d1565b90600052602060002001549050806101c783815481106137f6576137f66146d1565b60009182526020808320909101929092558281526101c890915260408082208490558582528120556101c780548061383057613830614aff565b6001900381819060005260206000200160009055905550505050565b6000613857836115cd565b6001600160a01b0390931660009081526101c56020908152604080832086845282528083208590559382526101c69052919091209190915550565b6040516001600160a01b038316602482015260448101829052610ca290849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152613a1a565b6040516001600160a01b03808516602483015283166044820152606481018290526116f19085906323b872dd60e01b906084016138be565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156139645750600090506003613a11565b8460ff16601b1415801561397c57508460ff16601c14155b1561398d5750600090506004613a11565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156139e1573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613a0a57600060019250925050613a11565b9150600090505b94509492505050565b6000613a6f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316613aec9092919063ffffffff16565b805190915015610ca25780806020019051810190613a8d9190614b2b565b610ca25760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610bef565b6060611fd38484600085856001600160a01b0385163b613b4e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610bef565b600080866001600160a01b03168587604051613b6a9190614950565b60006040518083038185875af1925050503d8060008114613ba7576040519150601f19603f3d011682016040523d82523d6000602084013e613bac565b606091505b5091509150613bbc828286612bd6565b979650505050505050565b6001600160a01b038116811461122957600080fd5b8035613be781613bc7565b919050565b60008083601f840112613bfe57600080fd5b5081356001600160401b03811115613c1557600080fd5b60208301915083602082850101111561350357600080fd5b600080600060408486031215613c4257600080fd5b8335613c4d81613bc7565b925060208401356001600160401b03811115613c6857600080fd5b613c7486828701613bec565b9497909650939450505050565b6001600160e01b03198116811461122957600080fd5b600060208284031215613ca957600080fd5b81356116a581613c81565b60005b83811015613ccf578181015183820152602001613cb7565b50506000910152565b60008151808452613cf0816020860160208601613cb4565b601f01601f19169290920160200192915050565b6020815260006116a56020830184613cd8565b600060208284031215613d2957600080fd5b5035919050565b60008060408385031215613d4357600080fd5b8235613d4e81613bc7565b946020939093013593505050565b600060208284031215613d6e57600080fd5b81356116a581613bc7565b600080600060608486031215613d8e57600080fd5b8335613d9981613bc7565b92506020840135613da981613bc7565b929592945050506040919091013590565b60008060408385031215613dcd57600080fd5b50508035926020909101359150565b60006101408284031215613def57600080fd5b50919050565b600080600060408486031215613e0a57600080fd5b83356001600160401b0380821115613e2157600080fd5b613e2d87838801613ddc565b94506020860135915080821115613e4357600080fd5b50613c7486828701613bec565b60008060408385031215613e6357600080fd5b823591506020830135613e7581613bc7565b809150509250929050565b600060208284031215613e9257600080fd5b81356001600160401b03811115613ea857600080fd5b611fd384828501613ddc565b60008060208385031215613ec757600080fd5b82356001600160401b03811115613edd57600080fd5b613ee985828601613bec565b90969095509350505050565b600080600060608486031215613f0a57600080fd5b833592506020840135613da981613bc7565b801515811461122957600080fd5b60008060408385031215613f3d57600080fd5b8235613f4881613bc7565b91506020830135613e7581613f1c565b60008060208385031215613f6b57600080fd5b82356001600160401b0380821115613f8257600080fd5b818501915085601f830112613f9657600080fd5b813581811115613fa557600080fd5b8660208260051b8501011115613fba57600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561402157603f1988860301845261400f858351613cd8565b94509285019290850190600101613ff3565b5092979650505050505050565b634e487b7160e01b600052604160045260246000fd5b60405161014081016001600160401b03811182821017156140675761406761402e565b60405290565b604051601f8201601f191681016001600160401b03811182821017156140955761409561402e565b604052919050565b60006001600160401b038311156140b6576140b661402e565b6140c9601f8401601f191660200161406d565b90508281528383830111156140dd57600080fd5b828260208301376000602084830101529392505050565b6000806000806080858703121561410a57600080fd5b843561411581613bc7565b9350602085013561412581613bc7565b92506040850135915060608501356001600160401b0381111561414757600080fd5b8501601f8101871361415857600080fd5b6141678782356020840161409d565b91505092959194509250565b600082601f83011261418457600080fd5b6116a58383356020850161409d565b600082601f8301126141a457600080fd5b813560206001600160401b038211156141bf576141bf61402e565b8160051b6141ce82820161406d565b92835284810182019282810190878511156141e857600080fd5b83870192505b84831015613bbc57823561420181613bc7565b825291830191908301906141ee565b80356001600160801b0381168114613be757600080fd5b6000806000806000806000806000806101408b8d03121561424757600080fd5b6142508b613bdc565b995060208b01356001600160401b038082111561426c57600080fd5b6142788e838f01614173565b9a5060408d013591508082111561428e57600080fd5b61429a8e838f01614173565b995060608d01359150808211156142b057600080fd5b6142bc8e838f01614173565b985060808d01359150808211156142d257600080fd5b506142df8d828e01614193565b9650506142ee60a08c01613bdc565b94506142fc60c08c01613bdc565b935061430a60e08c01614210565b92506143196101008c01614210565b91506143286101208c01613bdc565b90509295989b9194979a5092959850565b6000806040838503121561434c57600080fd5b823561435781613bc7565b91506020830135613e7581613bc7565b600181811c9082168061437b57607f821691505b602082108103613def57634e487b7160e01b600052602260045260246000fd5b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615614419576144196143e9565b500290565b60008261443b57634e487b7160e01b600052601260045260246000fd5b500490565b6000808335601e1984360301811261445757600080fd5b8301803591506001600160401b0382111561447157600080fd5b60200191503681900382131561350357600080fd5b6000610140823603121561449957600080fd5b6144a1614044565b6144aa83613bdc565b81526144b860208401613bdc565b6020820152604083013560408201526144d360608401613bdc565b606082015260808301356001600160401b038111156144f157600080fd5b6144fd36828601614173565b60808301525060a083013560a082015261451960c08401613bdc565b60c082015261452a60e08401614210565b60e082015261010061453d818501614210565b9082015261012092830135928101929092525090565b6000808335601e1984360301811261456a57600080fd5b83016020810192503590506001600160401b0381111561458957600080fd5b80360382131561350357600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b602081526145e2602082016145d584613bdc565b6001600160a01b03169052565b60006145f060208401613bdc565b6001600160a01b0381166040840152506040830135606083015261461660608401613bdc565b6001600160a01b0381166080840152506146336080840184614553565b6101408060a086015261464b61016086018385614598565b925060a086013560c086015261466360c08701613bdc565b6001600160a01b03811660e0870152915061468060e08701614210565b9150610100614699818701846001600160801b03169052565b6146a4818801614210565b9250506101206146be818701846001600160801b03169052565b9590950135939094019290925250919050565b634e487b7160e01b600052603260045260246000fd5b601f821115610ca257600081815260208120601f850160051c8101602086101561470e5750805b601f850160051c820191505b8181101561472d5782815560010161471a565b505050505050565b6001600160401b0383111561474c5761474c61402e565b6147608361475a8354614367565b836146e7565b6000601f841160018114614794576000851561477c5750838201355b600019600387901b1c1916600186901b1783556147ee565b600083815260209020601f19861690835b828110156147c557868501358255602094850194600190920191016147a5565b50868210156147e25760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b600060018201614807576148076143e9565b5060010190565b81516001600160401b038111156148275761482761402e565b61483b816148358454614367565b846146e7565b602080601f83116001811461487057600084156148585750858301515b600019600386901b1c1916600185901b17855561472d565b600085815260208120601f198616915b8281101561489f57888601518255948401946001909101908401614880565b50858210156148bd5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115610aba57610aba6143e9565b602081526000611fd3602083018486614598565b81810381811115610aba57610aba6143e9565b60006020828403121561491957600080fd5b6116a582614210565b6000806040838503121561493557600080fd5b825161494081613bc7565b6020939093015192949293505050565b60008251614962818460208701613cb4565b9190910192915050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351614a41816017850160208801613cb4565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351614a72816028840160208801613cb4565b01602801949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090614ab190830184613cd8565b9695505050505050565b600060208284031215614acd57600080fd5b81516116a581613c81565b8183823760009101908152919050565b600081614af757614af76143e9565b506000190190565b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b600060208284031215614b3d57600080fd5b81516116a581613f1c56fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a60c449c8a5a1f38e7c007912c74b338c7810ee267939c8569f9b1552201016464736f6c63430008100033496e697469616c697a61626c653a20636f6e7472616374206973206e6f742069"


