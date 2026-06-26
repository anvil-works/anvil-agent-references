// Agent-facing reference types for persisted `anvil.yaml` files.
interface ResolutionHints {
    package_name: string;
    name?: string;
    app_id?: string;
}

export type AgentDependencyVersionSpec = { branch: string } | { version_tag: string } | { dev: boolean };

/**
 * Dependency config is included so agents can read existing manifests and
 * understand dependency-provided forms, modules, services, and docs. Do not edit
 * `dependencies` in `anvil.yaml`; ask the user to update dependencies in the
 * Anvil IDE.
 */
export interface AgentDependencyConfig {
    dep_id?: string;
    app_id?: string;
    version: AgentDependencyVersionSpec;
    resolution_hints?: ResolutionHints;
    config?: {
        client?: Record<string, { value: unknown }>;
        server?: Record<string, { value: unknown }>;
    };
}

export interface AgentRuntimeServerSpec {
    base?: string;
}

export interface AgentRuntimeOptions {
    version: number;
    preview_v3?: boolean;
    legacy_features?: {
        class_names?: boolean;
        bootstrap3?: boolean;
        __dict__?: boolean;
        root_container?: boolean;
    };
    server_spec?: AgentRuntimeServerSpec;
    server_version?: string;
    server_persist?: boolean;
    client_version?: "2" | "3";
}

export type AgentTableAccess = "none" | "search" | "full";
export type AgentBasicColumnType = "string" | "number" | "bool" | "date" | "datetime" | "media" | "simpleObject";
export type AgentLinkColumnType = "link_single" | "link_multiple";
export type AgentSchemaIndexType = "b_tree" | "trigram" | "full_text";

export interface AgentSchemaColumnBase {
    name: string;
    admin_ui: { width?: number; order?: number };
    client_hidden?: boolean | null;
}

export interface AgentBasicSchemaColumn extends AgentSchemaColumnBase {
    type: AgentBasicColumnType;
}

export interface AgentLinkSchemaColumn extends AgentSchemaColumnBase {
    type: AgentLinkColumnType;
    target: string;
}

export type AgentSchemaColumn = AgentBasicSchemaColumn | AgentLinkSchemaColumn;

export interface AgentTableIndex {
    columns: string[];
    type: AgentSchemaIndexType;
}

export interface AgentTableSchema {
    client: AgentTableAccess;
    columns: AgentSchemaColumn[];
    server: AgentTableAccess;
    title: string;
    /**
     * Data Table indexes are plan-gated. Preserve existing entries, but do not
     * add non-empty indexes unless the user explicitly asks and confirms the app
     * is on a plan that supports them. For new agent-created tables, omit this
     * field or use an empty array if the manifest shape requires it.
     */
    indexes?: AgentTableIndex[];
}

/**
 * Keys are table Python names, not numeric table ids.
 *
 * Changing `db_schema` does not by itself resolve database schema conflicts or
 * apply live database changes. Users may still need to resolve schema conflicts
 * manually in the IDE.
 */
export interface AgentAppSchema {
    [python_name: string]: AgentTableSchema;
}

export type AgentScheduledTaskInterval = "minute" | "hour" | "day" | "week" | "month";

export interface AgentScheduledTaskAtSpec {
    /** Day of week for weekly tasks, where 1 is Sunday and 7 is Saturday. Day of month for monthly tasks. */
    day?: number;
    /** UTC hour, 0-23. Omit for hourly or minutely tasks. */
    hour?: number;
    /** Minute, 0-59. Omit for minutely tasks. */
    minute?: number;
}

export interface AgentScheduledTaskTimeSpec {
    /** Repeat interval. */
    every: AgentScheduledTaskInterval;
    /** Repeat every `n` intervals. Defaults to 1 when omitted. */
    n?: number;
    /** Time placement details. Omit when the interval does not need day/hour/minute fields. */
    at?: AgentScheduledTaskAtSpec;
}

export interface AgentScheduledTask {
    /** Stable identifier for this scheduled task. */
    job_id: string;
    /** Background task function name, without the `@anvil.server.background_task` decorator syntax. */
    task_name: string;
    time_spec: AgentScheduledTaskTimeSpec;
}

/**
 * Known runtime service source paths that may appear in `anvil.yaml`.
 *
 * Keep this aligned with the validator allowlist in `anvil-cli`.
 */
export type AgentRuntimeServiceSource =
    | "/runtime/services/tables.yml"
    | "/runtime/services/google.yml"
    | "/runtime/services/uplink.yml"
    | "/runtime/services/stripe.yml"
    | "/runtime/services/segment.yml"
    | "/runtime/services/facebook.yml"
    | "/runtime/services/anvil/users.yml"
    | "/runtime/services/anvil/secrets.yml"
    | "/runtime/services/anvil/saml.yml"
    | "/runtime/services/anvil/microsoft.yml"
    | "/runtime/services/anvil/email.yml"
    | "/runtime/services/anvil/files.yml"
    | "/runtime/services/anvil/tableau.yml";

export interface AgentBaseRuntimeService<Source extends AgentRuntimeServiceSource> {
    source: Source;
    client_config?: Record<string, unknown>;
    server_config?: Record<string, unknown>;
}

export interface AgentTablesService extends AgentBaseRuntimeService<"/runtime/services/tables.yml"> {
    /**
     * `client_config.enable_v2: true` means Accelerated Data Tables. Missing or
     * false `enable_v2` means legacy Data Tables.
     *
     * New Data Tables services should use Accelerated Data Tables, matching the
     * IDE service default. Preserve existing service config unless the user asks
     * to migrate table behavior.
     */
    client_config?: { enable_v2?: boolean; enable_split?: boolean };
}

export interface AgentGoogleService extends AgentBaseRuntimeService<"/runtime/services/google.yml"> {
    client_config?: {
        api_key?: string;
        app_files?: unknown[];
    };
    server_config?: {
        app_origin_redirect?: boolean;
        client_id?: string;
        client_secret?: string | null;
        client_secret_enc?: string;
        delegation_refresh_token?: string;
        enc_delegation_refresh_token?: string;
    };
}

export interface AgentUplinkService extends AgentBaseRuntimeService<"/runtime/services/uplink.yml"> {}

export interface AgentStripeService extends AgentBaseRuntimeService<"/runtime/services/stripe.yml"> {
    client_config?: {
        live_mode?: boolean;
        publishable_key?: {
            live?: string;
            test?: string;
        };
    };
    server_config?: {
        refresh_token?: string;
        stripe_user_id?: string;
    };
}

export interface AgentSegmentService extends AgentBaseRuntimeService<"/runtime/services/segment.yml"> {}

export interface AgentFacebookService extends AgentBaseRuntimeService<"/runtime/services/facebook.yml"> {
    server_config?: {
        app_id?: string;
        app_secret?: string | null;
        app_secret_enc?: string;
    };
}

/**
 * The Users service normally expects a Users table referenced by
 * `server_config.user_table`.
 *
 * A string `user_table` value is a table Python name and can match a `db_schema`
 * key. A number `user_table` value is a legacy table id; do not create a
 * numeric `db_schema` key from it.
 *
 * The default user table name is `users`.
 *
 * The default `users` table should include at least these columns:
 * - `email` (`string`)
 * - `enabled` (`bool`)
 * - `signed_up` (`datetime`)
 * - `password_hash` (`string`)
 * - `confirmed_email` (`bool`)
 * - `remembered_logins` (`simpleObject`)
 *
 * Some apps also include service-managed columns such as `last_login`
 * (`datetime`), `n_password_failures` (`number`), or `mfa`
 * (`simpleObject`).
 *
 * If you add or change this table in `db_schema`, validation only confirms the
 * config shape. The user may still need to resolve or apply schema changes in
 * the Anvil IDE.
 */
export interface AgentUsersService extends AgentBaseRuntimeService<"/runtime/services/anvil/users.yml"> {
    client_config?: {
        allow_mfa_email_reset?: boolean;
        /** If true, `remember_me_days` should also be set. Anvil defaults this to `30`. */
        allow_remember_me?: boolean;
        allow_signup?: boolean;
        confirm_email?: boolean;
        enable_automatically?: boolean;
        mfa_timeout_days?: number;
        /** Set this when `allow_remember_me` is true. Anvil defaults this to `30`. */
        remember_me_days?: number;
        require_mfa?: boolean;
        require_secure_passwords?: boolean;
        share_login_status?: boolean;
        use_email?: boolean;
        use_facebook?: boolean;
        use_google?: boolean;
        use_microsoft?: boolean;
        use_saml?: boolean;
        use_token?: boolean;
    };
    server_config?: {
        email_content?: Partial<
            Record<"confirm_address" | "mfa_reset" | "reset_password" | "token_login", { html?: string; subject?: string }>
        >;
        email_from_address?: string;
        /** String values are table Python names. Number values are legacy table ids. */
        user_table?: string | number;
    };
}

export interface AgentSecretsService extends AgentBaseRuntimeService<"/runtime/services/anvil/secrets.yml"> {}

export interface AgentSAMLService extends AgentBaseRuntimeService<"/runtime/services/anvil/saml.yml"> {
    server_config?: {
        email_attribute?: string;
        force_authentication?: boolean;
        idp_entity_id?: string;
        idp_signing_cert?: string;
        idp_sso_url?: string;
        shared?: boolean;
        signature_algorithm?: string;
    };
}

export interface AgentMicrosoftService extends AgentBaseRuntimeService<"/runtime/services/anvil/microsoft.yml"> {
    server_config?: {
        additional_oauth_scopes?: string;
        application_id?: string;
        application_secret?: string | null;
        application_secret_enc?: string;
        tenant_id?: string;
    };
}

export interface AgentEmailService extends AgentBaseRuntimeService<"/runtime/services/anvil/email.yml"> {
    server_config?: {
        custom_smtp?: boolean;
        smtp_encryption?: string;
        smtp_host?: string;
        smtp_password?: string;
        smtp_port?: number;
        smtp_user?: string;
        test_mode?: boolean;
    };
}

export interface AgentFilesService extends AgentBaseRuntimeService<"/runtime/services/anvil/files.yml"> {
    server_config?: {
        file_table?: string | number;
    };
}

export interface AgentTableauService extends AgentBaseRuntimeService<"/runtime/services/anvil/tableau.yml"> {}

export type AgentRuntimeService =
    | AgentTablesService
    | AgentGoogleService
    | AgentUplinkService
    | AgentStripeService
    | AgentSegmentService
    | AgentFacebookService
    | AgentUsersService
    | AgentSecretsService
    | AgentSAMLService
    | AgentMicrosoftService
    | AgentEmailService
    | AgentFilesService
    | AgentTableauService;

/**
 * Agent-facing view of persisted `anvil.yaml` fields that agents may need to
 * read while editing supported manifest areas.
 *
 * This intentionally excludes wrapper fields from CLI/API transports because
 * they are not saved in the app manifest.
 */
export interface AgentAnvilYaml {
    name: string;
    package_name?: string;
    allow_embedding?: boolean;
    /** Read-only for agents; ask the user to edit dependencies in the Anvil IDE. */
    dependencies?: AgentDependencyConfig[];
    runtime_options: AgentRuntimeOptions;
    startup_form?: string;
    startup?: { type: "module" | "form"; module?: string };
    native_deps?: {
        head_html?: string;
        import_map?: string;
    };
    client_init_module?: string;
    services?: AgentRuntimeService[];
    toolbox_sections?: unknown[];
    toolbox?: {
        sections?: unknown[];
        hide_classic_components?: boolean;
    };
    layouts?: unknown[];
    config_schema?: {
        client?: Record<string, unknown>;
        server?: Record<string, unknown>;
    };
    secrets?: Record<string, unknown>;
    db_schema?: AgentAppSchema;
    cta?: unknown;
    metadata?: { title?: string; description?: string; logo_img?: string };
    scheduled_tasks?: AgentScheduledTask[];
    uplink_visible?: boolean;
    /** Existing table-id mapping hints used by schema validation. Do not invent new hints. */
    table_id_hints?: Record<string, unknown>;
}
