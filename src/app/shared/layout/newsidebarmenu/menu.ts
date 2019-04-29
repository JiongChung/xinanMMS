export const sideNavNameList = [
    {
        name: 'Dashboard',
        backname: "Dashboard",
        url: '/app/main/dashboard/',
        icon: "flaticon-dashboard",
        value: "",
        list: []
    },
    {
        name: 'Youlian',
        backname: "Youlian",
        url: '/app/admin/youlian/',
        icon: "flaticon-youlian",
        value: "",
        list: [
            {
                subname: 'BusinessCenter',
                subbackname: 'businesscenter',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'PayList',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/youlian/businessorder'
                    },
                    {
                        lastname: 'CardTrap',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/youlian/businesstrap'
                    },
                    {
                        lastname: 'CardApply',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/youlian/businessapply'
                    }
                ]
            },
            {
                subname: 'AnalyticStatistics',
                subbackname: 'analyticstatistics',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'PlanStatistics',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/youlian/dataplan'
                    },
                    {
                        lastname: 'TrapStatistics',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/youlian/datatrap'
                    },
                    {
                        lastname: 'DouStatistics',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/youlian/datadou'
                    }
                ]
            },
            {
                subname: 'BaseSetting',
                subbackname: 'basesetting',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'SystemSetting',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/youlian/settingsystem'
                    },
                    {
                        lastname: 'PlanSetting',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/youlian/settingplan'
                    }
                ]
            }
        ]
    },
    {
        name: 'Product',
        backname: "Product",
        url: '/app/admin/product/',
        icon: "flaticon-product",
        value: "",
        list: [
            {
                subname: 'ProductAdmin',
                subbackname: 'productadmin',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'ProductCreate',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/product/productcreate'
                    },
                    {
                        lastname: 'ProductList',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/product/productlist'
                    },
                    {
                        lastname: 'ProductCategory',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/product/productcategory'
                    }
                ]
            },
            {
                subname: 'GroupAdmin',
                subbackname: 'groupadmin',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'TypeAdmin',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/product/typeadmin'
                    },
                    {
                        lastname: 'BrandAdmin',
                        icon:'flaticon-interface-8',
                        url:'/app/admin/product/brandadmin'
                    },
                    {
                        lastname: 'TagAdmin',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/product/tagadmin'
                    }
                ]
            }
        ]
    },
    {
        name: 'Order',
        backname: "Order",
        url: '/app/admin/orders/',
        icon: "flaticon-orders",
        value: "",
        list: [
            {
                subname: 'DealAdmin',
                subbackname: 'dealadmin',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'OrderSummary',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/orders/ordersummary'
                    },
                    {
                        lastname: 'OrderSearch',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/orders/ordersearch'
                    },
                    {
                        lastname: 'RateAdmin',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/orders/rateadmin'
                    },
                    {
                        lastname: 'RefundLegal',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/orders/refundlegal'
                    }
                ]
            },
            {
                subname: 'LogisticsAdmin',
                subbackname: 'logisticsadmin',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'BatchShipping',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/orders/batchshipping'
                    },
                    {
                        lastname: 'FreightTemplate',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/orders/freighttemplate'
                    },
                    {
                        lastname: 'ExpressTemplate',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/orders/expresstemplate'
                    },
                    {
                        lastname: 'ReturnAddress',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/orders/returnaddress'
                    },
                    {
                        lastname: 'LogisticsTrackingSetting',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/orders/logisticstrackingsetting'
                    }
                ]
            }
        ]
    },
    {
        name: 'Customer',
        backname: "Customer",
        url: '/app/admin/client/',
        icon: "flaticon-client",
        value: "",
        list: [
            {
                subname: 'MemberCenter',
                subbackname: 'membercenter',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'MemberList',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/client/memberlist'
                    },
                    {
                        lastname: 'MemberGroup',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/client/membergroup'
                    },
                    {
                        lastname: 'MemberCard',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/client/membercard'
                    }
                ]
            },
            {
                subname: 'Distributor',
                subbackname: 'distributor',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'DistributorList',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/client/distributorlist'
                    },
                    {
                        lastname: 'SalesRankings',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/client/salesrankings'
                    }
                ]
            },
            {
                subname: 'Agent',
                subbackname: 'agent',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'AgentCreate',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/client/agentcreate'
                    },
                    {
                        lastname: 'AgentList',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/client/agentlist'
                    }
                ]
            }
        ]
    },
    {
        name: 'Finance',
        backname: "Finance",
        url: '/app/admin/finance/',
        icon: "flaticon-finance",
        value: "",
        list: [
            {
                subname: 'FinancialCenter',
                subbackname: 'financialcenter',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'BalanceAdmin',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/finance/balanceadmin'
                    },
                    {
                        lastname: 'PointAdmin',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/finance/pointadmin'
                    },
                    {
                        lastname: 'CommissionAdmin',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/finance/commissionadmin'
                    },
                    {
                        lastname: 'WithdrawAdmin',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/finance/withdrawadmin'
                    }
                ]
            }
        ]
    },
    {
        name: 'Data',
        backname: "Data",
        url: '/app/admin/data/',
        icon: "flaticon-data",
        value: "",
        list: [
            {
                subname: 'DataCenter',
                subbackname: 'datacenter',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'OperateSummary',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/data/operatesummary'
                    },
                    {
                        lastname: 'ShopStatistics',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/data/shopstatistics'
                    },
                    {
                        lastname: 'ProductStatistics',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/data/productstatistics'
                    },
                    {
                        lastname: 'OrderStatistics',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/data/orderstatistics'
                    },
                    {
                        lastname: 'CustomerStatistics',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/data/customerstatistics'
                    },
                    {
                        lastname: 'DistributorStatistics',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/data/distributorstatistics'
                    },
                    {
                        lastname: 'AgentStatistics',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/data/agentstatistics'
                    }
                ]
            }
        ]
    },
    {
        name: 'Distribution',
        backname: "Distribution",
        url: '/app/admin/distribution/',
        icon: "flaticon-distribution",
        value: "",
        list: [
            {
                subname: 'DistributionSetting',
                subbackname: 'distributionsetting',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'DistributorGrade',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/distribution/distributorgrade'
                    },
                    {
                        lastname: 'DistributorReward',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/distribution/distributorreward'
                    }
                ]
            },
            {
                subname: 'Agenter',
                subbackname: 'agenter',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'AgentGrade',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/distribution/agentgrade'
                    }
                ]
            }
        ]
    },
    {
        name: 'DigitalAssets',
        backname: "DigitalAssets",
        url: '/app/admin/digitalassets/',
        icon: "flaticon-digitalassets",
        value: "",
        list: [
            {
                subname: 'DigitalAssets',
                subbackname: 'digitalassets',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'DataStatistics',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/digitalassets/dataStatistics'
                    }
                ]
            }
        ]
    },
    {
        name: 'Setting',
        backname: "Setting",
        url: '/app/admin/settings/',
        icon: "flaticon-settings",
        value: "",
        list: [
            {
                subname: 'ShopSetting',
                subbackname: 'shopsetting',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'BaseSettings',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/settings/basesettings'
                    },
                    {
                        lastname: 'ShopNav',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/settings/shopnav'
                    },
                    {
                        lastname: 'ShopStyle',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/settings/shopstyle'
                    },
                    {
                        lastname: 'ShopPage',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/settings/shoppage'
                    },
                    {
                        lastname: 'ShopNotice',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/settings/shopnotice'
                    },
                    {
                        lastname: 'ShopService',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/settings/shopservice'
                    }
                ]
            },
            {
                subname: 'ReceivableAccount',
                subbackname: 'receivableaccount',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'AccountSetting',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/settings/accountsetting'
                    },
                    {
                        lastname: 'WithdrawSetting',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/settings/withdrawsetting'
                    }
                ]
            }
        ]
    }
];
