// Agent-facing reference types for legacy form YAML and HTML-template frontmatter.
/**
 * Agent-facing data binding shape for form YAML edits.
 */
export interface AgentDataBindingYaml {
    code: string;
    property: string;
    writeback?: boolean;
}

export type AgentEventBindingYaml = { [eventName: string]: string };
/**
 * Component references used by legacy form YAML `container.type` and
 * `layout.type`.
 *
 * In legacy YAML, use:
 * - built-in Anvil components as plain names, for example `Button`
 * - app forms as `form:<Form>` or `form:<PackagePath>.<Form>`
 * - dependency forms as `form:<dep_id>:<Form>` or
 *   `form:<dep_id>:<PackagePath>.<Form>`
 *
 * HTML templates do not use these legacy `form:...` references. In HTML
 * templates, app and dependency forms use package-qualified specs such as
 * `CustomerApp.Components.Card` or `m3.Layouts.NavigationRailLayout`.
 *
 * `PackagePath` may be nested, for example `Package.SubPackage.Form`.
 */
export type AgentDependencyId = `dep_${string}`;
export type AgentAppFormTypeRef = `form:${string}`;
export type AgentDependencyFormTypeRef =
    | `form:${AgentDependencyId}:${string}`;
export type AgentComponentTypeRef = string | AgentAppFormTypeRef | AgentDependencyFormTypeRef;

/**
 * Agent-facing component shape for form YAML edits.
 */
export interface AgentComponentYaml {
    type: string;
    name: string;
    properties: { [prop: string]: unknown };
    layout_properties?: { [prop: string]: unknown };
    components?: AgentComponentYaml[];
    event_bindings?: AgentEventBindingYaml;
    data_bindings?: AgentDataBindingYaml[];
}

/**
 * Agent-facing container shape for legacy YAML forms.
 */
export interface AgentFormContainerYaml {
    type: AgentComponentTypeRef;
    properties?: { [prop: string]: unknown };
    event_bindings?: AgentEventBindingYaml;
    data_bindings?: AgentDataBindingYaml[];
    layout_properties?: { [prop: string]: unknown };
}

/**
 * Agent-facing layout shape for legacy YAML forms.
 */
export interface AgentFormLayoutYaml {
    type: AgentComponentTypeRef;
    properties?: { [prop: string]: unknown };
    event_bindings?: AgentEventBindingYaml;
    form_event_bindings?: AgentEventBindingYaml;
    data_bindings?: AgentDataBindingYaml[];
}

export type AgentSlotTargetType = "container" | "slot";

/**
 * Agent-facing slot definition shape for legacy YAML forms.
 */
export interface AgentSlotDefYaml {
    target: {
        type: AgentSlotTargetType;
        name: string;
    };
    set_layout_properties?: { [prop: string]: unknown };
    one_component?: boolean;
    template?: AgentComponentYaml;
    index: number;
}

export type AgentSlots = { [slotName: string]: AgentSlotDefYaml };

export interface AgentToolboxIconYaml {
    light?: string;
    dark?: string;
}

/** Designer toolbox entry for custom components. */
export interface AgentToolboxItemYaml {
    hidden?: boolean;
    title?: string;
    group?: string;
    icon?: AgentToolboxIconYaml;
}

export interface AgentFormPropertyYaml {
    name: string;
    type: string;
    default_value?: unknown;
    default_binding_prop?: boolean;
    description?: string;
    important?: boolean;
    group?: string;
    options?: string[];
    allow_binding_writeback?: boolean;
    binding_writeback_events?: string[];
    priority?: number;
    multiline?: boolean;
    accept?: string;
    designer_hint?: unknown;
    include_none_option?: boolean;
    none_option_label?: string;
    iconsets?: string[];
    show_in_designer_when?: string;
}

export interface AgentFormEventYaml {
    name: string;
    parameters?: { name: string; description?: string }[];
    description?: string;
    default_event?: boolean;
    important?: boolean;
}

/**
 * Form API metadata shared by full legacy YAML forms and HTML template
 * frontmatter.
 *
 * Layout structure (`container`, `layout`, `components`, `components_by_slot`,
 * `slots`) belongs in the form body, not here.
 */
export interface AgentFormFrontmatter {
    custom_component?: boolean;
    /**
     * Only valid when `custom_component` is also true.
     */
    custom_component_container?: boolean;
    properties?: AgentFormPropertyYaml[];
    events?: AgentFormEventYaml[];
    toolbox_item?: AgentToolboxItemYaml;
    layout_metadata?: {
        title?: string;
        description?: string;
        thumbnail?: string;
        internal?: boolean;
    };
    item_type?: { table_id: number };
}

/**
 * Container-backed legacy form YAML.
 *
 * Container forms use `container` and `components`.
 * Do not set `layout` or `components_by_slot` on this form shape.
 *
 * Package vs module form is determined by the file path, not YAML fields such as
 * `is_package`.
 */
export interface AgentContainerFormYaml extends AgentFormFrontmatter {
    container: AgentFormContainerYaml;
    components?: AgentComponentYaml[];
    slots?: AgentSlots;
}

/**
 * Layout-backed legacy form YAML.
 *
 * Layout forms use `layout` and `components_by_slot`.
 * Do not set `container` or `components` on this form shape.
 */
export interface AgentLayoutFormYaml extends AgentFormFrontmatter {
    layout: AgentFormLayoutYaml;
    components_by_slot?: { [slotName: string]: AgentComponentYaml[] };
    slots?: AgentSlots;
}

/**
 * Agent-facing view of legacy client form YAML.
 *
 * Form Python code lives in the matching `.py` file. Package vs module form is
 * determined by the file path (`form_template.yaml` vs `<Form>.yaml`).
 *
 * A valid form uses exactly one of:
 * - `container` for a classic container-backed form
 * - `layout` for a layout-backed form
 */
export type AgentFormYaml = AgentContainerFormYaml | AgentLayoutFormYaml;
