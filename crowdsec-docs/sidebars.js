/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.



 - regrouper les choses oriente utilisateur (genre gestion des decisions etc.) dans la partie user guide
 - avoir un item 'profil' de premier level (ou on parle des notifs/plugins)
 - regrouper central et local api (? hes:bof)
 - regrouper : dashboard et observability
 - dupliquer des liens vers le format de config des parsers/scenarios/... entre la partie "parsers" et la partie "configuration files format"


 */

 module.exports = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
    // But you can create a sidebar manually
    tutorialSidebar: [
        {
            type: "doc",
            id: "intro",
        },
        {
            type: "category",
            label: "Getting Started",
            collapsed: false,
            link: {
                type: "doc",
                id: "getting_started/getting_started",
            },
            items: [
                {
                    type: "category",
                    label: "Security Engine",
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "getting_started/security_engine_intro",
                    },
                    items: [
                        "getting_started/install_crowdsec",
                        "getting_started/install_crowdsec_freebsd",
                        "getting_started/install_crowdsec_opnsense",
                        "getting_started/install_crowdsec_pfsense",
                        "getting_started/install_windows",
                        {
                            type: "link",
                            label: "Helm/K8s",
                            href: "https://artifacthub.io/packages/helm/crowdsec/crowdsec",
                        },
                        {
                            type: "category",
                            label: "Container",
                            items: [
                                {
                                    type: "link",
                                    href: "https://hub.docker.com/r/crowdsecurity/crowdsec",
                                    label: "Docker Hub",
                                },
                                {
                                    type: "link",
                                    href: "https://github.com/crowdsecurity/crowdsec/pkgs/container/crowdsec",
                                    label: "GHCR",
                                }
                                ,
                                {
                                    type: "link",
                                    href: "https://github.com/crowdsecurity/example-docker-compose",
                                    label: "Examples",
                                }
                            ]
                        },
                        "getting_started/install_source",
                    ],
                },
                {
                    type: 'link',
                    label: 'Remediation',
                    href: '/u/bouncers/intro',
                },
                {
                    type: 'link',
                    href: '/u/appsec/intro',
                    label: 'AppSec',
                },
                {
                    type: "category",
                    label: "SDK",
                    items: [
                        {
                            type: "doc",
                            label: "PHP",
                            id: "getting_started/install_softagent",
                        },
                    ],
                },
                "getting_started/crowdsec_tour",
                "getting_started/versions_matrix",
            ],
        },
        {
            type: "doc",
            label: "Concepts",
            id: "concepts",
        },
        {
            type: "category",
            label: "User Guides",
            items: [
                "user_guides/hub_mgmt",
                "user_guides/decisions_mgmt",
                "user_guides/bouncers_configuration",
                "user_guides/machines_mgmt",
                "user_guides/lapi_mgmt",
                "user_guides/building",
                "user_guides/replay_mode",
                "user_guides/cscli_explain",
                "user_guides/cscli_macos",
                "user_guides/multiserver_setup",
                "user_guides/consuming_fastly_logs",
                "user_guides/alert_context",
            ],
        },
        {
            type: "category",
            label: "Data Sources",
            link: {
                type: "doc",
                id: "data_sources/intro",
            },
            items: [
                "data_sources/file",
                "data_sources/journald",
                "data_sources/cloudwatch",
                "data_sources/kinesis",
                "data_sources/syslog",
                "data_sources/docker",
                "data_sources/windows_evt_log",
                "data_sources/kafka",
                "data_sources/kubernetes_audit",
                "data_sources/s3",
                "data_sources/troubleshoot",
            ],
        },
        {
            type: "category",
            label: "Parsers",
            link: {
                type: "doc",
                id: "parsers/intro",
            },
            items: [
                "parsers/format",
                "parsers/create",
                "parsers/enricher",
                "parsers/patterns",
            ],
        },
        {
            type: "category",
            label: "Scenarios",
            link: {
                type: "doc",
                id: "scenarios/intro",
            },
            items: [
                "scenarios/format",
                "scenarios/simulation",
                "scenarios/create",
            ],
        },
        {
            type: "category",
            label: "Collections",
            link: {
                type: "doc",
                id: "collections/intro",
            },
            items: ["collections/format"],
        },
        {
            type: "category",
            label: "Whitelists",
            link: {
                type: "doc",
                id: "whitelist/intro",
            },
            items: [
		    "whitelist/format",
		    {
			type: "category",
			label: "Examples",
			items: [
				"whitelist/create_ip",
				"whitelist/create_expr",
				"whitelist/create_postoverflow",
				"whitelist/create_fqdn",
				"whitelist/create_capi",
		    	],
		    }
	    ],
        },
        {
            type: "category",
            label: "Profiles",
            link: {
                type: "doc",
                id: "profiles/intro",
            },
            items: [
                "profiles/format",
                {
                    type: "category",
                    label: "Examples",
                    items: [
                        "profiles/cti_profile",
                        "profiles/captcha_profile",
                        "profiles/pid_profile",
                    ],
                }
            ],
        },
        {
            type: "category",
            label: "Notification plugins",
            link: {
                type: "doc",
                id: "notification_plugins/intro",
            },
            items: [
                {
                    type: "category",
                    label: "HTTP Plugin",
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "notification_plugins/http",
                    },
                    items: [
                        "notification_plugins/teams",
                        "notification_plugins/elastic",
                        "notification_plugins/telegram",
                        "notification_plugins/gotify",
                    ],
                },
                "notification_plugins/email",
                "notification_plugins/sentinel",
                "notification_plugins/slack",
                "notification_plugins/splunk",
                "notification_plugins/template_helpers",
                "notification_plugins/writing_your_own_plugin",
            ],
        },
        {
            type: "category",
            label: "Configuration",
            link: {
                type: "doc",
                id: "configuration/crowdsec_configuration",
            },
            items: [
                "configuration/feature_flags",
                "configuration/network_management",
            ],
        },
        {
            type: "category",
            label: "Observability",
            link: {
                type: "doc",
                id: "observability/intro",
            },
            items: [
                "observability/cscli",
                "observability/prometheus",
                "observability/dashboard",
                "observability/pprof",
            ],
        },
        {
            type: "category",
            label: "Local API",
            link: {
                type: "doc",
                id: "local_api/intro",
            },
            items: [
                "local_api/database",
                "local_api/bouncers",
                "local_api/tls_auth",
                {
                    type: "link",
                    label: "Swagger",
                    href: "https://crowdsecurity.github.io/api_doc/lapi/",
                },
            ],
        },
        {
            type: "category",
            label: "Central API",
            link: {
                type: "doc",
                id: "central_api/intro",
            },
            items: [
                {
                    type: "link",
                    label: "Swagger",
                    href: "https://crowdsecurity.github.io/api_doc/capi/",
                },
            ],
        },

        {
            type: "category",
            label: "Expr",
            link: {
                type: "doc",
                id: "expr/intro",
            },
            items: [
                "expr/strings_helpers",
                "expr/file_helpers",
                "expr/ip_helpers",
                "expr/json_helpers",
                "expr/cti_helpers",
                "expr/other_helpers",
                "expr/alert",
                "expr/decision",
                "expr/event",
            ],
        },
        {
            type: "category",
            label: "Contributing",
            link: {
                type: "doc",
                id: "contributing/getting_started",
            },
            items: [
                "contributing/contributing_doc",
                "contributing/contributing_hub",
                "contributing/contributing_bouncers",
                "contributing/contributing_test_env",
                "contributing/contributing_crowdsec",
            ],
        },
        {
            type: "category",
            label: "Console",
            link: {
                type: "doc",
                id: "console/intro",
            },
            items: [
                'console/enrollment',
                {
                    type: "category",
                    label: "Decision Management",
                    link: {
                        type: "doc",
                        id: "console/decisions_intro",
                    },
                    items: ["console/decisions"],
                },
            ]
        },
        {
            type: "doc",
            label: "Contact the team",
            id: "contact_team",
        },
    ],
    cscliSidebar: [
        {
            type: "doc",
            label: "cscli",
            id: "cscli/cscli",
        },
        {
            type: "category",
            label: "cscli alerts",
            link: {
                type: "doc",
                id: "cscli/cscli_alerts",
            },
            items: [
                "cscli/cscli_alerts_delete",
                "cscli/cscli_alerts_flush",
                "cscli/cscli_alerts_inspect",
                "cscli/cscli_alerts_list",
            ],
        },
        {
            type: "category",
            label: "cscli bouncers",
            link: {
                type: "doc",
                id: "cscli/cscli_bouncers",
            },
            items: [
                "cscli/cscli_bouncers_add",
                "cscli/cscli_bouncers_delete",
                "cscli/cscli_bouncers_list",
                "cscli/cscli_bouncers_prune",
            ],
        },
        {
            type: "category",
            label: "cscli capi",
            link: {
                type: "doc",
                id: "cscli/cscli_capi",
            },
            items: ["cscli/cscli_capi_register", "cscli/cscli_capi_status"],
        },
        {
            type: "category",
            label: "cscli collections",
            link: {
                type: "doc",
                id: "cscli/cscli_collections",
            },
            items: [
                "cscli/cscli_collections_inspect",
                "cscli/cscli_collections_install",
                "cscli/cscli_collections_list",
                "cscli/cscli_collections_remove",
                "cscli/cscli_collections_upgrade",
            ],
        },
        {
            type: "doc",
            label: "cscli completion",
            id: "cscli/cscli_completion",
        },
        {
            type: "category",
            label: "cscli config",
            link: {
                type: "doc",
                id: "cscli/cscli_config",
            },
            items: [
                "cscli/cscli_config_backup",
                "cscli/cscli_config_feature-flags",
                "cscli/cscli_config_restore",
                "cscli/cscli_config_show",
            ],
        },
        {
            type: "category",
            label: "cscli console",
            link: {
                type: "doc",
                id: "cscli/cscli_console",
            },
            items: [
                "cscli/cscli_console_disable",
                "cscli/cscli_console_enable",
                "cscli/cscli_console_enroll",
                "cscli/cscli_console_status",
            ],
        },
        {
            type: "category",
            label: "cscli dashboard",
            link: {
                type: "doc",
                id: "cscli/cscli_dashboard",
            },
            items: [
                "cscli/cscli_dashboard_remove",
                "cscli/cscli_dashboard_setup",
                "cscli/cscli_dashboard_start",
                "cscli/cscli_dashboard_stop",
                "cscli/cscli_dashboard_show-password",
            ],
        },
        {
            type: "category",
            label: "cscli decisions",
            link: {
                type: "doc",
                id: "cscli/cscli_decisions",
            },
            items: [
                "cscli/cscli_decisions_add",
                "cscli/cscli_decisions_delete",
                "cscli/cscli_decisions_list",
                "cscli/cscli_decisions_import",
            ],
        },
        {
            type: "category",
            label: "cscli hub",
            link: {
                type: "doc",
                id: "cscli/cscli_hub",
            },
            items: [
                "cscli/cscli_hub_list",
                "cscli/cscli_hub_update",
                "cscli/cscli_hub_upgrade",
            ],
        },
        {
            type: "doc",
            label: "cscli explain",
            id: "cscli/cscli_explain",
        },
        {
            type: "category",
            label: "cscli lapi",
            link: {
                type: "doc",
                id: "cscli/cscli_lapi",
            },
            items: [
                "cscli/cscli_lapi_context",
                "cscli/cscli_lapi_context_add",
                "cscli/cscli_lapi_context_delete",
                "cscli/cscli_lapi_context_detect",
                "cscli/cscli_lapi_context_status",
                "cscli/cscli_lapi_register",
                "cscli/cscli_lapi_status",
            ],
        },
        {
            type: "category",
            label: "cscli machines",
            link: {
                type: "doc",
                id: "cscli/cscli_machines",
            },
            items: [
                "cscli/cscli_machines_add",
                "cscli/cscli_machines_delete",
                "cscli/cscli_machines_list",
                "cscli/cscli_machines_prune",
                "cscli/cscli_machines_validate",
            ],
        },
        {
            type: "doc",
            label: "cscli metrics",
            id: "cscli/cscli_metrics",
        },
        {
            type: "category",
            label: "cscli notifications",
            link: {
                type: "doc",
                id: "cscli/cscli_notifications",
            },
            items: [
                "cscli/cscli_notifications_inspect",
                "cscli/cscli_notifications_list",
                "cscli/cscli_notifications_reinject",
            ],
        },
        {
            type: "category",
            label: "cscli parsers",
            link: {
                type: "doc",
                id: "cscli/cscli_parsers",
            },
            items: [
                "cscli/cscli_parsers_inspect",
                "cscli/cscli_parsers_install",
                "cscli/cscli_parsers_list",
                "cscli/cscli_parsers_remove",
                "cscli/cscli_parsers_upgrade",
            ],
        },
        {
            type: "category",
            label: "cscli postoverflows",
            link: {
                type: "doc",
                id: "cscli/cscli_postoverflows",
            },
            items: [
                "cscli/cscli_postoverflows_inspect",
                "cscli/cscli_postoverflows_install",
                "cscli/cscli_postoverflows_list",
                "cscli/cscli_postoverflows_remove",
                "cscli/cscli_postoverflows_upgrade",
            ],
        },
        {
            type: "category",
            label: "cscli scenarios",
            link: {
                type: "doc",
                id: "cscli/cscli_scenarios",
            },
            items: [
                "cscli/cscli_scenarios_inspect",
                "cscli/cscli_scenarios_install",
                "cscli/cscli_scenarios_list",
                "cscli/cscli_scenarios_remove",
                "cscli/cscli_scenarios_upgrade",
            ],
        },
        {
            type: "category",
            label: "cscli support",
            link: {
                type: "doc",
                id: "cscli/cscli_support",
            },
            items: ["cscli/cscli_support_dump"],
        },
        {
            type: "category",
            label: "cscli hubtest",
            link: {
                type: "doc",
                id: "cscli/cscli_hubtest",
            },
            items: [
                "cscli/cscli_hubtest_create",
                "cscli/cscli_hubtest_run",
                "cscli/cscli_hubtest_eval",
                "cscli/cscli_hubtest_explain",
                "cscli/cscli_hubtest_coverage",
                "cscli/cscli_hubtest_info",
                "cscli/cscli_hubtest_list",
                "cscli/cscli_hubtest_clean",
            ],
        },
        {
            type: "category",
            label: "cscli simulation",
            link: {
                type: "doc",
                id: "cscli/cscli_simulation",
            },
            items: [
                "cscli/cscli_simulation_disable",
                "cscli/cscli_simulation_enable",
                "cscli/cscli_simulation_status",
            ],
        },
        {
            type: "doc",
            label: "cscli version",
            id: "cscli/cscli_version",
        },
    ],
    betaSidebar: [
        {
            type: "category",
            label: "Preview Programs",
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "Crowdsec v1.5",
                    link: {
                        type: "doc",
                        id: "preview/1-5/intro",
                    },
                    items: ["preview/1-5/crowdsec_preview_setup"],
                },
            ],
        },
        {
            type: "doc",
            label: "Backup Guide",
            id: "preview/backup_guide",
        },
        {
            type: "category",
            label: "Security Engine (Preview)",
            collapsed: true,
            items: [
                "preview/crowdsec_linux",
                //"preview/crowdsec_freebsd",
                "preview/crowdsec_windows",
                {
                    type: "link",
                    label: "Helm/K8s",
                    href: "https://artifacthub.io/packages/helm/crowdsec/crowdsec",
                },
                {
                    type: "link",
                    label: "Docker/Podman",
                    href: "https://hub.docker.com/r/crowdsecurity/crowdsec",
                },
            ],
        },
        {
            type: "doc",
            label: "Rollback to previous version",
            id: "preview/rollback",
        },
    ],
};
