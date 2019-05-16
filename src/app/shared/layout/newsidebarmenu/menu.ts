export const sideNavNameList = [
    {
        name: 'Dashboard',
        backname: "Dashboard",
        url: '/app/main/dashboard/',
        icon: "flaticon-dashboard",
        value: "",
        list: []
    },
    
    {
        name: 'Order',
        backname: "Order",
        url: '/app/admin/orders/',
        icon: "flaticon-orders",
        value: "",
        list: [
            {
                subname: 'DealAdmin',
                subbackname: 'dealadmin',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'OrderList',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/orders/orderlist'
                    },
                    {
                        lastname: 'Payrecord',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/orders/payrecord'
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
        value: "",
        list: [
            {
                subname: 'MemberCenter',
                subbackname: 'membercenter',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'MemberList',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/client/userlist'
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
        value: "",
        list: [
            {
                subname: 'OSSystemSettings',
                subbackname: 'ossystemSettings',
                icon:'flaticon-interface-8',
                list: [
                    {
                        lastname: 'SystemDocumentation',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/settings/systemdocumentation'
                    },
                    {
                        lastname: 'RolesSettings',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/roles'
                    },
                    {
                        lastname: 'AuditLogsSettings',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/auditLogs'
                    },
                    {
                        lastname: 'MaintenanceSettings',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/maintenance'
                    },
                    {
                        lastname: 'UserPermissionSettings',
                        icon:'flaticon-interface-8',
                        url: '/app/admin/users'
                    }
                ]
            }
        ]
    }
];
