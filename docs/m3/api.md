---
title: m3
layout: api
name: m3 module
attrs:
  ToggleIconButton: &ref_616
    $id: m3.ToggleIconButton
    name: ToggleIconButton
    classInstance:
      $ref: m3.ToggleIconButton instance
    docString: Create a new 'ToggleIconButton' object
    attrs: {}
    callable:
      returns:
        $id: m3.ToggleIconButton instance
        name: m3.ToggleIconButton component
        attrs:
          align: &ref_0
            name: enum
            helpLink: m3.toggleiconbutton
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - right
              - center
          appearance: &ref_1
            name: enum
            helpLink: m3.toggleiconbutton
            docString: A predefined style for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - standard
              - filled
              - tonal
              - outlined
          visible: &ref_2
            name: boolean
            helpLink: m3.toggleiconbutton
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          enabled: &ref_3
            name: boolean
            helpLink: m3.toggleiconbutton
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_4
            name: themeRole
            helpLink: m3.toggleiconbutton
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon: &ref_5
            name: enum
            helpLink: m3.toggleiconbutton
            docString: The icon to display on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_color: &ref_6
            name: color
            helpLink: m3.toggleiconbutton
            docString: The colour of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_7
            name: color
            helpLink: m3.toggleiconbutton
            docString: The colour of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          margin: &ref_8
            name: margin
            helpLink: m3.toggleiconbutton
            docString: The margin (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          border: &ref_9
            name: string
            helpLink: m3.toggleiconbutton
            docString: The border of this component. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_10
            name: string
            helpLink: m3.toggleiconbutton
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected: &ref_11
            name: boolean
            helpLink: m3.toggleiconbutton
            docString: If True, the component is in the selected state.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected_border: &ref_12
            name: string
            helpLink: m3.toggleiconbutton
            docString: >-
              The border style when the component is in the selected state.
              Accepts any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected_background_color: &ref_13
            name: color
            helpLink: m3.toggleiconbutton
            docString: The background colour when the component is in the selected state.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected_icon_color: &ref_14
            name: color
            helpLink: m3.toggleiconbutton
            docString: The icon colour when the component is in the selected state.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_15
            name: object
            helpLink: m3.toggleiconbutton
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_16
            $ref: anvil.Container instance
          add_event_handler: &ref_17
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_18
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_19
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.component instance
        anvilComponent:
          events:
            - name: click
              parameters: []
              docString: When the component is clicked.
        helpLink: m3.toggleiconbutton
        clientOnly: true
        globals:
          align: *ref_0
          appearance: *ref_1
          visible: *ref_2
          enabled: *ref_3
          role: *ref_4
          icon: *ref_5
          icon_color: *ref_6
          background_color: *ref_7
          margin: *ref_8
          border: *ref_9
          tooltip: *ref_10
          selected: *ref_11
          selected_border: *ref_12
          selected_background_color: *ref_13
          selected_icon_color: *ref_14
          tag: *ref_15
          parent: *ref_16
        functions:
          add_event_handler: *ref_17
          set_event_handler: *ref_18
          remove_event_handler: *ref_19
      args:
        - name: align
          type: keyword
          optional: true
        - name: appearance
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: enabled
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: icon
          type: keyword
          optional: true
        - name: icon_color
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: margin
          type: keyword
          optional: true
        - name: border
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: selected
          type: keyword
          optional: true
        - name: selected_border
          type: keyword
          optional: true
        - name: selected_background_color
          type: keyword
          optional: true
        - name: selected_icon_color
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.component
    helpLink: m3.toggleiconbutton
    clientOnly: true
  InteractiveCard: &ref_617
    $id: m3.InteractiveCard
    name: InteractiveCard
    classInstance:
      $ref: m3.InteractiveCard instance
    docString: Create a new 'InteractiveCard' object
    attrs: {}
    callable:
      returns:
        $id: m3.InteractiveCard instance
        name: m3.InteractiveCard component
        attrs:
          visible: &ref_20
            name: boolean
            helpLink: m3.interactivecard
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          border: &ref_21
            name: string
            helpLink: m3.interactivecard
            docString: The border of this component. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_22
            name: color
            helpLink: m3.interactivecard
            docString: The color of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          align: &ref_23
            name: enum
            helpLink: m3.interactivecard
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          spacing: &ref_24
            name: spacing
            helpLink: m3.interactivecard
            docString: The margin and padding (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_25
            name: string
            helpLink: m3.interactivecard
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_26
            name: themeRole
            helpLink: m3.interactivecard
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_27
            name: object
            helpLink: m3.interactivecard
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          appearance: &ref_28
            name: enum
            helpLink: m3.interactivecard
            docString: A predefined style for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - elevated
              - filled
              - outlined
          orientation: &ref_29
            name: enum
            helpLink: m3.interactivecard
            docString: The orientation of the content in this Card
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - column
              - row
          enabled: &ref_30
            name: boolean
            helpLink: m3.interactivecard
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_31
            $ref: anvil.Container instance
          add_event_handler: &ref_32
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_33
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_34
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: click
              parameters: []
              docString: When the component is clicked.
        helpLink: m3.interactivecard
        clientOnly: true
        globals:
          visible: *ref_20
          border: *ref_21
          background_color: *ref_22
          align: *ref_23
          spacing: *ref_24
          tooltip: *ref_25
          role: *ref_26
          tag: *ref_27
          appearance: *ref_28
          orientation: *ref_29
          enabled: *ref_30
          parent: *ref_31
        functions:
          add_event_handler: *ref_32
          set_event_handler: *ref_33
          remove_event_handler: *ref_34
      args:
        - name: visible
          type: keyword
          optional: true
        - name: border
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: align
          type: keyword
          optional: true
        - name: spacing
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
        - name: appearance
          type: keyword
          optional: true
        - name: orientation
          type: keyword
          optional: true
        - name: enabled
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.interactivecard
    clientOnly: true
  TextBox: &ref_618
    $id: m3.TextBox
    name: TextBox
    classInstance:
      $ref: m3.TextBox instance
    docString: Create a new 'TextBox' object
    attrs: {}
    callable:
      returns:
        $id: m3.TextBox instance
        name: m3.TextBox component
        attrs:
          focus: &ref_35
            name: focus
            attrs: {}
            callable:
              args: []
            docString: Set the keyboard focus to this TextBox.
          select: &ref_36
            name: select
            attrs: {}
            callable:
              args: []
            docString: Set the input text on this TextBox.
          align: &ref_40
            name: enum
            helpLink: m3.textbox
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - right
              - center
          appearance: &ref_41
            name: enum
            helpLink: m3.textbox
            docString: A predefined style for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - filled
              - outlined
          visible: &ref_42
            name: boolean
            helpLink: m3.textbox
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          enabled: &ref_43
            name: boolean
            helpLink: m3.textbox
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          error: &ref_44
            name: boolean
            helpLink: m3.textbox
            docString: If True, this component is in an error state.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_45
            name: themeRole
            helpLink: m3.textbox
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_color: &ref_46
            name: color
            helpLink: m3.textbox
            docString: The colour of the label text on the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label: &ref_47
            name: string
            helpLink: m3.textbox
            docString: The label text of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_font_family: &ref_48
            name: string
            helpLink: m3.textbox
            docString: The font family to use for the label this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_font_size: &ref_49
            name: number
            helpLink: m3.textbox
            docString: The font size of the label text on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_underline: &ref_50
            name: boolean
            helpLink: m3.textbox
            docString: If True, the label text will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_italic: &ref_51
            name: boolean
            helpLink: m3.textbox
            docString: If True, the label text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_bold: &ref_52
            name: boolean
            helpLink: m3.textbox
            docString: If True, the label text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          display_text_color: &ref_53
            name: color
            helpLink: m3.textbox
            docString: The colour of the input text displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          display_font_family: &ref_54
            name: string
            helpLink: m3.textbox
            docString: The font family to use for the input and placeholder text.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          display_font_size: &ref_55
            name: number
            helpLink: m3.textbox
            docString: The font size of the input and placeholder text.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          display_underline: &ref_56
            name: boolean
            helpLink: m3.textbox
            docString: If True, the input and placeholder text will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          display_italic: &ref_57
            name: boolean
            helpLink: m3.textbox
            docString: If True, the input and placeholder text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          display_bold: &ref_58
            name: boolean
            helpLink: m3.textbox
            docString: If True, the input and placeholder text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          leading_icon: &ref_59
            name: enum
            helpLink: m3.textbox
            docString: The leading icon to display on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          trailing_icon: &ref_60
            name: enum
            helpLink: m3.textbox
            docString: The trailing icon to display on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          leading_icon_color: &ref_61
            name: color
            helpLink: m3.textbox
            docString: The colour of the leading icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          trailing_icon_color: &ref_62
            name: color
            helpLink: m3.textbox
            docString: The colour of the trailing icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          supporting_text: &ref_63
            name: string
            helpLink: m3.textbox
            docString: The supporting text displayed below this component
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          character_limit: &ref_64
            name: number
            helpLink: m3.textbox
            docString: >-
              The max number of characters a user can enter into this component.
              The limit is displayed below the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          subcontent_color: &ref_65
            name: color
            helpLink: m3.textbox
            docString: >-
              The colour of the supporting text and the character limit below
              this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          subcontent_font_family: &ref_66
            name: color
            helpLink: m3.textbox
            docString: >-
              The font family to use for the supporting text and the character
              limit below this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          subcontent_font_size: &ref_67
            name: color
            helpLink: m3.textbox
            docString: >-
              The font size of the supporting text and the character limit
              displayed below this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_68
            name: color
            helpLink: m3.textbox
            docString: The colour of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          border_color: &ref_69
            name: color
            helpLink: m3.textbox
            docString: The colour of the border of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          placeholder: &ref_70
            name: string
            helpLink: m3.textbox
            docString: The text to be displayed when the component is empty
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          spacing: &ref_71
            name: spacing
            helpLink: m3.textbox
            docString: The margin and padding (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          type: &ref_72
            name: enum
            helpLink: m3.textbox
            docString: The type of data that the user can enter into this box.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - text
              - number
              - email
              - tel
              - url
          tooltip: &ref_73
            name: string
            helpLink: m3.textbox
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text: &ref_74
            name: string
            helpLink: m3.textbox
            docString: The input text to display on this component
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          hide_text: &ref_75
            name: boolean
            helpLink: m3.textbox
            docString: >-
              If True, display stars instead of text when the user types input
              into this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_76
            name: object
            helpLink: m3.textbox
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_77
            $ref: anvil.Container instance
          add_event_handler: &ref_37
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - focus
                      - lost_focus
                      - trailing_icon_click
                      - pressed_enter
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_38
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - focus
                      - lost_focus
                      - trailing_icon_click
                      - pressed_enter
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_39
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - focus
                      - lost_focus
                      - trailing_icon_click
                      - pressed_enter
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: change
              parameters: []
              docString: When the text in this component is edited.
            - name: focus
              parameters: []
              docString: When the component gets focus.
            - name: lost_focus
              parameters: []
              docString: When the component loses focus.
            - name: trailing_icon_click
              parameters: []
              docString: When the trailing icon is clicked.
            - name: pressed_enter
              parameters: []
              docString: When the user presses enter in this component.
        helpLink: m3.textbox
        clientOnly: true
        functions:
          focus: *ref_35
          select: *ref_36
          add_event_handler: *ref_37
          set_event_handler: *ref_38
          remove_event_handler: *ref_39
        globals:
          align: *ref_40
          appearance: *ref_41
          visible: *ref_42
          enabled: *ref_43
          error: *ref_44
          role: *ref_45
          label_color: *ref_46
          label: *ref_47
          label_font_family: *ref_48
          label_font_size: *ref_49
          label_underline: *ref_50
          label_italic: *ref_51
          label_bold: *ref_52
          display_text_color: *ref_53
          display_font_family: *ref_54
          display_font_size: *ref_55
          display_underline: *ref_56
          display_italic: *ref_57
          display_bold: *ref_58
          leading_icon: *ref_59
          trailing_icon: *ref_60
          leading_icon_color: *ref_61
          trailing_icon_color: *ref_62
          supporting_text: *ref_63
          character_limit: *ref_64
          subcontent_color: *ref_65
          subcontent_font_family: *ref_66
          subcontent_font_size: *ref_67
          background_color: *ref_68
          border_color: *ref_69
          placeholder: *ref_70
          spacing: *ref_71
          type: *ref_72
          tooltip: *ref_73
          text: *ref_74
          hide_text: *ref_75
          tag: *ref_76
          parent: *ref_77
      args:
        - name: align
          type: keyword
          optional: true
        - name: appearance
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: enabled
          type: keyword
          optional: true
        - name: error
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: label_color
          type: keyword
          optional: true
        - name: label
          type: keyword
          optional: true
        - name: label_font_family
          type: keyword
          optional: true
        - name: label_font_size
          type: keyword
          optional: true
        - name: label_underline
          type: keyword
          optional: true
        - name: label_italic
          type: keyword
          optional: true
        - name: label_bold
          type: keyword
          optional: true
        - name: display_text_color
          type: keyword
          optional: true
        - name: display_font_family
          type: keyword
          optional: true
        - name: display_font_size
          type: keyword
          optional: true
        - name: display_underline
          type: keyword
          optional: true
        - name: display_italic
          type: keyword
          optional: true
        - name: display_bold
          type: keyword
          optional: true
        - name: leading_icon
          type: keyword
          optional: true
        - name: trailing_icon
          type: keyword
          optional: true
        - name: leading_icon_color
          type: keyword
          optional: true
        - name: trailing_icon_color
          type: keyword
          optional: true
        - name: supporting_text
          type: keyword
          optional: true
        - name: character_limit
          type: keyword
          optional: true
        - name: subcontent_color
          type: keyword
          optional: true
        - name: subcontent_font_family
          type: keyword
          optional: true
        - name: subcontent_font_size
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: border_color
          type: keyword
          optional: true
        - name: placeholder
          type: keyword
          optional: true
        - name: spacing
          type: keyword
          optional: true
        - name: type
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: text
          type: keyword
          optional: true
        - name: hide_text
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.textbox
    clientOnly: true
  TextArea: &ref_619
    $id: m3.TextArea
    name: TextArea
    classInstance:
      $ref: m3.TextArea instance
    docString: Create a new 'TextArea' object
    attrs: {}
    callable:
      returns:
        $id: m3.TextArea instance
        name: m3.TextArea component
        attrs:
          focus: &ref_78
            name: focus
            attrs: {}
            callable:
              args: []
            docString: Set the keyboard focus to this TextArea.
          select: &ref_79
            name: select
            attrs: {}
            callable:
              args: []
            docString: Set the input text on this TextArea.
          align: &ref_83
            name: enum
            helpLink: m3.textarea
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - right
              - center
          appearance: &ref_84
            name: enum
            helpLink: m3.textarea
            docString: A predefined style for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - filled
              - outlined
          visible: &ref_85
            name: boolean
            helpLink: m3.textarea
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          enabled: &ref_86
            name: boolean
            helpLink: m3.textarea
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          error: &ref_87
            name: boolean
            helpLink: m3.textarea
            docString: If True, this component is in an error state.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_88
            name: themeRole
            helpLink: m3.textarea
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_color: &ref_89
            name: color
            helpLink: m3.textarea
            docString: The colour of the label text on the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label: &ref_90
            name: string
            helpLink: m3.textarea
            docString: The label text of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_font_family: &ref_91
            name: string
            helpLink: m3.textarea
            docString: The font family to use for the label on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_font_size: &ref_92
            name: number
            helpLink: m3.textarea
            docString: The font size of the label text on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_underline: &ref_93
            name: boolean
            helpLink: m3.textarea
            docString: If True, the label text will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_italic: &ref_94
            name: boolean
            helpLink: m3.textarea
            docString: If True, the label text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          bold_label: &ref_95
            name: boolean
            helpLink: m3.textarea
            docString: If True, the label text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          display_text_color: &ref_96
            name: color
            helpLink: m3.textarea
            docString: The colour of the input text displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          display_font_family: &ref_97
            name: string
            helpLink: m3.textarea
            docString: The font family to use for the input and placeholder text.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          display_font_size: &ref_98
            name: number
            helpLink: m3.textarea
            docString: The font size of the input and placeholder text.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          display_underline: &ref_99
            name: boolean
            helpLink: m3.textarea
            docString: The font family to use for the label on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          display_italic: &ref_100
            name: boolean
            helpLink: m3.textarea
            docString: If True, the input and placeholder text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          display_bold: &ref_101
            name: boolean
            helpLink: m3.textarea
            docString: If True, the input and placeholder text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          supporting_text: &ref_102
            name: string
            helpLink: m3.textarea
            docString: The supporting text displayed underneath this component
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          character_limit: &ref_103
            name: number
            helpLink: m3.textarea
            docString: >-
              The max number of characters a user can enter into this component.
              The limit is displayed below the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          subcontent_color: &ref_104
            name: color
            helpLink: m3.textarea
            docString: >-
              The colour of the supporting text and the character limit
              underneath this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          subcontent_font_family: &ref_105
            name: color
            helpLink: m3.textarea
            docString: >-
              The font family to use for the supporting text and the character
              limit underneath this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          subcontent_font_size: &ref_106
            name: color
            helpLink: m3.textarea
            docString: >-
              The font size of the supporting text and the character limit
              displayed underneath this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_107
            name: color
            helpLink: m3.textarea
            docString: The colour of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          border_color: &ref_108
            name: color
            helpLink: m3.textarea
            docString: The colour of the border of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          placeholder: &ref_109
            name: string
            helpLink: m3.textarea
            docString: The text to be displayed when the component is empty
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          margin: &ref_110
            name: margin
            helpLink: m3.textarea
            docString: The margin of this component. Default value is in pixels.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_111
            name: string
            helpLink: m3.textarea
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text: &ref_112
            name: string
            helpLink: m3.textarea
            docString: The input text to display on this component
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_113
            name: object
            helpLink: m3.textarea
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_114
            $ref: anvil.Container instance
          add_event_handler: &ref_80
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - focus
                      - lost_focus
                      - change
                      - focus
                      - lost_focus
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_81
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - focus
                      - lost_focus
                      - change
                      - focus
                      - lost_focus
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_82
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - focus
                      - lost_focus
                      - change
                      - focus
                      - lost_focus
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: change
              parameters: []
              docString: When the text in this component is edited.
            - name: focus
              parameters: []
              docString: When the component gets focus.
            - name: lost_focus
              parameters: []
              docString: When the component loses focus.
            - name: change
              parameters: []
              docString: When the text in this component is edited.
            - name: focus
              parameters: []
              docString: When the component gets focus.
            - name: lost_focus
              parameters: []
              docString: When the component loses focus.
        helpLink: m3.textarea
        clientOnly: true
        functions:
          focus: *ref_78
          select: *ref_79
          add_event_handler: *ref_80
          set_event_handler: *ref_81
          remove_event_handler: *ref_82
        globals:
          align: *ref_83
          appearance: *ref_84
          visible: *ref_85
          enabled: *ref_86
          error: *ref_87
          role: *ref_88
          label_color: *ref_89
          label: *ref_90
          label_font_family: *ref_91
          label_font_size: *ref_92
          label_underline: *ref_93
          label_italic: *ref_94
          bold_label: *ref_95
          display_text_color: *ref_96
          display_font_family: *ref_97
          display_font_size: *ref_98
          display_underline: *ref_99
          display_italic: *ref_100
          display_bold: *ref_101
          supporting_text: *ref_102
          character_limit: *ref_103
          subcontent_color: *ref_104
          subcontent_font_family: *ref_105
          subcontent_font_size: *ref_106
          background_color: *ref_107
          border_color: *ref_108
          placeholder: *ref_109
          margin: *ref_110
          tooltip: *ref_111
          text: *ref_112
          tag: *ref_113
          parent: *ref_114
      args:
        - name: align
          type: keyword
          optional: true
        - name: appearance
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: enabled
          type: keyword
          optional: true
        - name: error
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: label_color
          type: keyword
          optional: true
        - name: label
          type: keyword
          optional: true
        - name: label_font_family
          type: keyword
          optional: true
        - name: label_font_size
          type: keyword
          optional: true
        - name: label_underline
          type: keyword
          optional: true
        - name: label_italic
          type: keyword
          optional: true
        - name: bold_label
          type: keyword
          optional: true
        - name: display_text_color
          type: keyword
          optional: true
        - name: display_font_family
          type: keyword
          optional: true
        - name: display_font_size
          type: keyword
          optional: true
        - name: display_underline
          type: keyword
          optional: true
        - name: display_italic
          type: keyword
          optional: true
        - name: display_bold
          type: keyword
          optional: true
        - name: supporting_text
          type: keyword
          optional: true
        - name: character_limit
          type: keyword
          optional: true
        - name: subcontent_color
          type: keyword
          optional: true
        - name: subcontent_font_family
          type: keyword
          optional: true
        - name: subcontent_font_size
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: border_color
          type: keyword
          optional: true
        - name: placeholder
          type: keyword
          optional: true
        - name: margin
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: text
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.textarea
    clientOnly: true
  Text: &ref_620
    $id: m3.Text
    name: Text
    classInstance:
      $ref: m3.Text instance
    docString: Create a new 'Text' object
    attrs: {}
    callable:
      returns:
        $id: m3.Text instance
        name: m3.Text component
        attrs:
          visible: &ref_115
            name: boolean
            helpLink: m3.text
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          underline: &ref_116
            name: boolean
            helpLink: m3.text
            docString: If True, this component’s text will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          italic: &ref_117
            name: boolean
            helpLink: m3.text
            docString: If True, this component’s text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          bold: &ref_118
            name: boolean
            helpLink: m3.text
            docString: If True, this component’s text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          border: &ref_119
            name: string
            helpLink: m3.text
            docString: The border of this component. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_family: &ref_120
            name: string
            helpLink: m3.text
            docString: The font family to use for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text_color: &ref_121
            name: color
            helpLink: m3.text
            docString: The color of the text on the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_color: &ref_122
            name: color
            helpLink: m3.text
            docString: The color of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_123
            name: color
            helpLink: m3.text
            docString: The color of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text: &ref_124
            name: string
            helpLink: m3.text
            docString: The text displayed on this component
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_size: &ref_125
            name: number
            helpLink: m3.text
            docString: The size (pixels) of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          spacing: &ref_126
            name: spacing
            helpLink: m3.text
            docString: The margin and padding (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_127
            name: string
            helpLink: m3.text
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_128
            name: themeRole
            helpLink: m3.text
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          align: &ref_129
            name: enum
            helpLink: m3.text
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - right
              - center
              - justify
          font_size: &ref_130
            name: number
            helpLink: m3.text
            docString: The font size of text displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon: &ref_131
            name: enum
            helpLink: m3.text
            docString: The icon to display on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          line_height: &ref_132
            name: string
            helpLink: m3.text
            docString: The line height of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          material_icon: &ref_133
            name: enum
            helpLink: m3.text
            docString: The icon to display on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          style: &ref_134
            name: enum
            helpLink: m3.text
            docString: 'Role of the text component: display, headline or title.'
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - display
              - headline
              - title
          scale: &ref_135
            name: enum
            helpLink: m3.text
            docString: The size of the text component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - small
              - medium
              - large
          tag: &ref_136
            name: object
            helpLink: m3.text
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_137
            $ref: anvil.Container instance
          add_event_handler: &ref_138
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_139
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_140
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: show
              parameters: []
              docString: When the Text is shown on the screen.
            - name: hide
              parameters: []
              docString: When the Text is removed from the screen.
        helpLink: m3.text
        clientOnly: true
        globals:
          visible: *ref_115
          underline: *ref_116
          italic: *ref_117
          bold: *ref_118
          border: *ref_119
          font_family: *ref_120
          text_color: *ref_121
          icon_color: *ref_122
          background_color: *ref_123
          text: *ref_124
          icon_size: *ref_125
          spacing: *ref_126
          tooltip: *ref_127
          role: *ref_128
          align: *ref_129
          font_size: *ref_130
          icon: *ref_131
          line_height: *ref_132
          material_icon: *ref_133
          style: *ref_134
          scale: *ref_135
          tag: *ref_136
          parent: *ref_137
        functions:
          add_event_handler: *ref_138
          set_event_handler: *ref_139
          remove_event_handler: *ref_140
      args:
        - name: visible
          type: keyword
          optional: true
        - name: underline
          type: keyword
          optional: true
        - name: italic
          type: keyword
          optional: true
        - name: bold
          type: keyword
          optional: true
        - name: border
          type: keyword
          optional: true
        - name: font_family
          type: keyword
          optional: true
        - name: text_color
          type: keyword
          optional: true
        - name: icon_color
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: text
          type: keyword
          optional: true
        - name: icon_size
          type: keyword
          optional: true
        - name: spacing
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: align
          type: keyword
          optional: true
        - name: font_size
          type: keyword
          optional: true
        - name: icon
          type: keyword
          optional: true
        - name: line_height
          type: keyword
          optional: true
        - name: material_icon
          type: keyword
          optional: true
        - name: style
          type: keyword
          optional: true
        - name: scale
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.text
    clientOnly: true
  Switch: &ref_621
    $id: m3.Switch
    name: Switch
    classInstance:
      $ref: m3.Switch instance
    docString: Create a new 'Switch' object
    attrs: {}
    callable:
      returns:
        $id: m3.Switch instance
        name: m3.Switch component
        attrs:
          enabled: &ref_141
            name: boolean
            helpLink: m3.switch
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          align: &ref_142
            name: enum
            helpLink: m3.switch
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - center
              - right
          visible: &ref_143
            name: boolean
            helpLink: m3.switch
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          margin: &ref_144
            name: margin
            helpLink: m3.switch
            docString: The margin (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_145
            name: string
            helpLink: m3.switch
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_146
            name: themeRole
            helpLink: m3.switch
            docString: A style for this component defined in CSS and added to Roles.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected_background_color: &ref_147
            name: color
            helpLink: m3.switch
            docString: The background colour of the component when toggled on.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          unselected_background_color: &ref_148
            name: color
            helpLink: m3.switch
            docString: The background colour of the component when toggled off.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected_thumb_color: &ref_149
            name: color
            helpLink: m3.switch
            docString: The colour of the Switch thumb when toggled on.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          unselected_thumb_color: &ref_150
            name: color
            helpLink: m3.switch
            docString: The colour of the Switch thumb when toggled off.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          unselected_outline_color: &ref_151
            name: color
            helpLink: m3.switch
            docString: The colour of the outline of the Switch when toggled off.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected_icon: &ref_152
            name: enum
            helpLink: m3.switch
            docString: Optional icon to appear on the Switch when toggled on.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          unselected_icon: &ref_153
            name: enum
            helpLink: m3.switch
            docString: Optional icon to appear on the Switch when toggled off.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected: &ref_154
            name: boolean
            helpLink: m3.switch
            docString: If True, this component is toggled on.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_155
            name: object
            helpLink: m3.switch
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_156
            $ref: anvil.Container instance
          add_event_handler: &ref_157
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_158
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_159
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - show
                      - hide
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: change
              parameters: []
              docString: When the state of the Switch is changed.
            - name: show
              parameters: []
              docString: When the Switch is shown on the screen.
            - name: hide
              parameters: []
              docString: When the Switch is removed from the screen.
        helpLink: m3.switch
        clientOnly: true
        globals:
          enabled: *ref_141
          align: *ref_142
          visible: *ref_143
          margin: *ref_144
          tooltip: *ref_145
          role: *ref_146
          selected_background_color: *ref_147
          unselected_background_color: *ref_148
          selected_thumb_color: *ref_149
          unselected_thumb_color: *ref_150
          unselected_outline_color: *ref_151
          selected_icon: *ref_152
          unselected_icon: *ref_153
          selected: *ref_154
          tag: *ref_155
          parent: *ref_156
        functions:
          add_event_handler: *ref_157
          set_event_handler: *ref_158
          remove_event_handler: *ref_159
      args:
        - name: enabled
          type: keyword
          optional: true
        - name: align
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: margin
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: selected_background_color
          type: keyword
          optional: true
        - name: unselected_background_color
          type: keyword
          optional: true
        - name: selected_thumb_color
          type: keyword
          optional: true
        - name: unselected_thumb_color
          type: keyword
          optional: true
        - name: unselected_outline_color
          type: keyword
          optional: true
        - name: selected_icon
          type: keyword
          optional: true
        - name: unselected_icon
          type: keyword
          optional: true
        - name: selected
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.switch
    clientOnly: true
  Slider: &ref_622
    $id: m3.Slider
    name: Slider
    classInstance:
      $ref: m3.Slider instance
    docString: Create a new 'Slider' object
    attrs: {}
    callable:
      returns:
        $id: m3.Slider instance
        name: m3.Slider component
        attrs:
          show_label: &ref_160
            name: boolean
            helpLink: m3.slider
            docString: If True, display a label above the thumb with the current value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          progress_color: &ref_161
            name: color
            helpLink: m3.slider
            docString: The colour of the progress bar
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          visible: &ref_162
            name: boolean
            helpLink: m3.slider
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          enabled: &ref_163
            name: boolean
            helpLink: m3.slider
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_164
            name: themeRole
            helpLink: m3.slider
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          thumb_color: &ref_165
            name: color
            helpLink: m3.slider
            docString: The colour of the slider thumb.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_color: &ref_166
            name: color
            helpLink: m3.slider
            docString: The colour of the background of the label
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_text_color: &ref_167
            name: color
            helpLink: m3.slider
            docString: The colour of the text of the label
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          value: &ref_168
            name: number
            helpLink: m3.slider
            docString: The value of the slider.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          min: &ref_169
            name: number
            helpLink: m3.slider
            docString: The minimum value of the Slider.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          max: &ref_170
            name: number
            helpLink: m3.slider
            docString: The maximum value of the Slider.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          step: &ref_171
            name: number
            helpLink: m3.slider
            docString: The stepping interval for the Slider.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          show_markers: &ref_172
            name: boolean
            helpLink: m3.slider
            docString: If True, display discrete markers on the track.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          margin: &ref_173
            name: margin
            helpLink: m3.slider
            docString: The margin (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          track_color: &ref_174
            name: color
            helpLink: m3.slider
            docString: The colour of the slider track.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_175
            name: string
            helpLink: m3.slider
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_176
            name: object
            helpLink: m3.slider
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_177
            $ref: anvil.Container instance
          add_event_handler: &ref_178
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_179
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_180
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: change
              parameters: []
              docString: When the value of the component is changed
        helpLink: m3.slider
        clientOnly: true
        globals:
          show_label: *ref_160
          progress_color: *ref_161
          visible: *ref_162
          enabled: *ref_163
          role: *ref_164
          thumb_color: *ref_165
          label_color: *ref_166
          label_text_color: *ref_167
          value: *ref_168
          min: *ref_169
          max: *ref_170
          step: *ref_171
          show_markers: *ref_172
          margin: *ref_173
          track_color: *ref_174
          tooltip: *ref_175
          tag: *ref_176
          parent: *ref_177
        functions:
          add_event_handler: *ref_178
          set_event_handler: *ref_179
          remove_event_handler: *ref_180
      args:
        - name: show_label
          type: keyword
          optional: true
        - name: progress_color
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: enabled
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: thumb_color
          type: keyword
          optional: true
        - name: label_color
          type: keyword
          optional: true
        - name: label_text_color
          type: keyword
          optional: true
        - name: value
          type: keyword
          optional: true
        - name: min
          type: keyword
          optional: true
        - name: max
          type: keyword
          optional: true
        - name: step
          type: keyword
          optional: true
        - name: show_markers
          type: keyword
          optional: true
        - name: margin
          type: keyword
          optional: true
        - name: track_color
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.slider
    clientOnly: true
  RadioGroupPanel: &ref_623
    $id: m3.RadioGroupPanel
    name: RadioGroupPanel
    classInstance:
      $ref: m3.RadioGroupPanel instance
    docString: Create a new 'RadioGroupPanel' object
    attrs: {}
    callable:
      returns:
        $id: m3.RadioGroupPanel instance
        name: m3.RadioGroupPanel component
        attrs:
          selected_value: &ref_181
            name: object
            helpLink: m3.radiogrouppanel
            docString: Value property of the selected RadioButton.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_182
            $ref: anvil.Container instance
          add_event_handler: &ref_183
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_184
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_185
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - show
                      - hide
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: change
              parameters: []
              docString: When the Radio Button selection changes.
            - name: show
              parameters: []
              docString: When the component is shown on the screen.
            - name: hide
              parameters: []
              docString: When the component is removed from the screen.
        helpLink: m3.radiogrouppanel
        clientOnly: true
        globals:
          selected_value: *ref_181
          parent: *ref_182
        functions:
          add_event_handler: *ref_183
          set_event_handler: *ref_184
          remove_event_handler: *ref_185
      args:
        - name: selected_value
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.radiogrouppanel
    clientOnly: true
  RadioButton: &ref_624
    $id: m3.RadioButton
    name: RadioButton
    classInstance:
      $ref: m3.RadioButton instance
    docString: Create a new 'RadioButton' object
    attrs: {}
    callable:
      returns:
        $id: m3.RadioButton instance
        name: m3.RadioButton component
        attrs:
          enabled: &ref_186
            name: boolean
            helpLink: m3.radiobutton
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          visible: &ref_187
            name: boolean
            helpLink: m3.radiobutton
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          underline: &ref_188
            name: boolean
            helpLink: m3.radiobutton
            docString: If True, this component’s text will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          italic: &ref_189
            name: boolean
            helpLink: m3.radiobutton
            docString: If True, this component’s text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          bold: &ref_190
            name: boolean
            helpLink: m3.radiobutton
            docString: If True, this component’s text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_size: &ref_191
            name: number
            helpLink: m3.radiobutton
            docString: The font size of text displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          border: &ref_192
            name: string
            helpLink: m3.radiobutton
            docString: The border of this component. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_family: &ref_193
            name: string
            helpLink: m3.radiobutton
            docString: The font family to use for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text_color: &ref_194
            name: color
            helpLink: m3.radiobutton
            docString: The color of the text on the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_195
            name: color
            helpLink: m3.radiobutton
            docString: The color of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          align: &ref_196
            name: enum
            helpLink: m3.radiobutton
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          spacing: &ref_197
            name: spacing
            helpLink: m3.radiobutton
            docString: The margin and padding (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_198
            name: string
            helpLink: m3.radiobutton
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_199
            name: themeRole
            helpLink: m3.radiobutton
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text: &ref_200
            name: string
            helpLink: m3.radiobutton
            docString: The text displayed on this component
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          radio_color: &ref_201
            name: color
            helpLink: m3.radiobutton
            docString: The color of the radio button.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected: &ref_202
            name: boolean
            helpLink: m3.radiobutton
            docString: If True, the radio button is selected.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_203
            name: object
            helpLink: m3.radiobutton
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_204
            $ref: anvil.Container instance
          add_event_handler: &ref_205
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - select
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_206
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - select
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_207
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - select
                      - show
                      - hide
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: select
              parameters: []
              docString: When the Radio Button is selected.
            - name: show
              parameters: []
              docString: When the Radio Button is shown on the screen.
            - name: hide
              parameters: []
              docString: When the Radio Button is removed from the screen.
        helpLink: m3.radiobutton
        clientOnly: true
        globals:
          enabled: *ref_186
          visible: *ref_187
          underline: *ref_188
          italic: *ref_189
          bold: *ref_190
          font_size: *ref_191
          border: *ref_192
          font_family: *ref_193
          text_color: *ref_194
          background_color: *ref_195
          align: *ref_196
          spacing: *ref_197
          tooltip: *ref_198
          role: *ref_199
          text: *ref_200
          radio_color: *ref_201
          selected: *ref_202
          tag: *ref_203
          parent: *ref_204
        functions:
          add_event_handler: *ref_205
          set_event_handler: *ref_206
          remove_event_handler: *ref_207
      args:
        - name: enabled
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: underline
          type: keyword
          optional: true
        - name: italic
          type: keyword
          optional: true
        - name: bold
          type: keyword
          optional: true
        - name: font_size
          type: keyword
          optional: true
        - name: border
          type: keyword
          optional: true
        - name: font_family
          type: keyword
          optional: true
        - name: text_color
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: align
          type: keyword
          optional: true
        - name: spacing
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: text
          type: keyword
          optional: true
        - name: radio_color
          type: keyword
          optional: true
        - name: selected
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.radiobutton
    clientOnly: true
  NavigationLink: &ref_625
    $id: m3.NavigationLink
    name: NavigationLink
    classInstance:
      $ref: m3.NavigationLink instance
    docString: Create a new 'NavigationLink' object
    attrs: {}
    callable:
      returns:
        $id: m3.NavigationLink instance
        name: m3.NavigationLink component
        attrs:
          visible: &ref_208
            name: boolean
            helpLink: m3.navigationlink
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text: &ref_209
            name: string
            helpLink: m3.navigationlink
            docString: The text displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_210
            name: themeRole
            helpLink: m3.navigationlink
            docString: A style for this component defined in CSS and added to Roles.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          italic: &ref_211
            name: boolean
            helpLink: m3.navigationlink
            docString: If True, this component’s text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          bold: &ref_212
            name: boolean
            helpLink: m3.navigationlink
            docString: If True, this component’s text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          underline: &ref_213
            name: boolean
            helpLink: m3.navigationlink
            docString: If True, this component’s text will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text_color: &ref_214
            name: color
            helpLink: m3.navigationlink
            docString: The color of the text on the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_color: &ref_215
            name: color
            helpLink: m3.navigationlink
            docString: The color of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_family: &ref_216
            name: string
            helpLink: m3.navigationlink
            docString: The font family to use for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_size: &ref_217
            name: number
            helpLink: m3.navigationlink
            docString: The font size of text displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_size: &ref_218
            name: number
            helpLink: m3.navigationlink
            docString: The size (pixels) of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_219
            name: string
            helpLink: m3.navigationlink
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          spacing: &ref_220
            name: spacing
            helpLink: m3.navigationlink
            docString: The margin and padding (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          url: &ref_221
            name: string
            helpLink: m3.navigationlink
            docString: >-
              TThe target URL of the link. Can be set to a URL string or to a
              Media object.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon: &ref_222
            name: enum
            helpLink: m3.navigationlink
            docString: The icon to display on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected: &ref_223
            name: boolean
            helpLink: m3.navigationlink
            docString: If True, the component is in the selected state.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          badge: &ref_224
            name: boolean
            helpLink: m3.navigationlink
            docString: If True, display a notification badge on the icon.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          badge_count: &ref_225
            name: number
            helpLink: m3.navigationlink
            docString: The number to display on the badge.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          navigate_to: &ref_226
            name: form
            helpLink: m3.navigationlink
            docString: The Form to navigate to when the link is clicked.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_227
            name: object
            helpLink: m3.navigationlink
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_228
            name: color
            helpLink: m3.navigationlink
            docString: The color of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_229
            $ref: anvil.Container instance
          add_event_handler: &ref_230
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_231
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_232
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                      - show
                      - hide
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: click
              parameters: []
              docString: When the NavigationLink is clicked.
            - name: show
              parameters: []
              docString: When the NavigationLink is shown on the screen.
            - name: hide
              parameters: []
              docString: When the NavigationLink is removed from the screen.
        helpLink: m3.navigationlink
        clientOnly: true
        globals:
          visible: *ref_208
          text: *ref_209
          role: *ref_210
          italic: *ref_211
          bold: *ref_212
          underline: *ref_213
          text_color: *ref_214
          icon_color: *ref_215
          font_family: *ref_216
          font_size: *ref_217
          icon_size: *ref_218
          tooltip: *ref_219
          spacing: *ref_220
          url: *ref_221
          icon: *ref_222
          selected: *ref_223
          badge: *ref_224
          badge_count: *ref_225
          navigate_to: *ref_226
          tag: *ref_227
          background_color: *ref_228
          parent: *ref_229
        functions:
          add_event_handler: *ref_230
          set_event_handler: *ref_231
          remove_event_handler: *ref_232
      args:
        - name: visible
          type: keyword
          optional: true
        - name: text
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: italic
          type: keyword
          optional: true
        - name: bold
          type: keyword
          optional: true
        - name: underline
          type: keyword
          optional: true
        - name: text_color
          type: keyword
          optional: true
        - name: icon_color
          type: keyword
          optional: true
        - name: font_family
          type: keyword
          optional: true
        - name: font_size
          type: keyword
          optional: true
        - name: icon_size
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: spacing
          type: keyword
          optional: true
        - name: url
          type: keyword
          optional: true
        - name: icon
          type: keyword
          optional: true
        - name: selected
          type: keyword
          optional: true
        - name: badge
          type: keyword
          optional: true
        - name: badge_count
          type: keyword
          optional: true
        - name: navigate_to
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.navigationlink
    clientOnly: true
  MenuItem: &ref_626
    $id: m3.MenuItem
    name: MenuItem
    classInstance:
      $ref: m3.MenuItem instance
    docString: Create a new 'MenuItem' object
    attrs: {}
    callable:
      returns:
        $id: m3.MenuItem instance
        name: m3.MenuItem component
        attrs:
          visible: &ref_233
            name: boolean
            helpLink: m3.menuitem
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          enabled: &ref_234
            name: boolean
            helpLink: m3.menuitem
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_235
            name: themeRole
            helpLink: m3.menuitem
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text_color: &ref_236
            name: color
            helpLink: m3.menuitem
            docString: The colour of the text on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_family: &ref_237
            name: string
            helpLink: m3.menuitem
            docString: The font family to use for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          leading_icon: &ref_238
            name: enum
            helpLink: m3.menuitem
            docString: The icon to display on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          trailing_icon: &ref_239
            name: enum
            helpLink: m3.menuitem
            docString: The icon to display on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text: &ref_240
            name: string
            helpLink: m3.menuitem
            docString: The text displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          trailing_text: &ref_241
            name: string
            helpLink: m3.menuitem
            docString: >-
              The text to be displayed on the right side of the component. Will
              be to the left of the trailing icon if both exist.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_size: &ref_242
            name: number
            helpLink: m3.menuitem
            docString: The font size of the text displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          underline: &ref_243
            name: boolean
            helpLink: m3.menuitem
            docString: If True, the text will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          italic: &ref_244
            name: boolean
            helpLink: m3.menuitem
            docString: If True, the text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          bold: &ref_245
            name: boolean
            helpLink: m3.menuitem
            docString: If True, the text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          leading_icon_color: &ref_246
            name: color
            helpLink: m3.menuitem
            docString: The colour of the leading icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          trailing_icon_color: &ref_247
            name: color
            helpLink: m3.menuitem
            docString: The colour of the tailing icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_248
            name: color
            helpLink: m3.menuitem
            docString: The background colour of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          leading_icon_size: &ref_249
            name: number
            helpLink: m3.menuitem
            docString: The size (pixels) of the leading icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          trailing_icon_size: &ref_250
            name: number
            helpLink: m3.menuitem
            docString: >-
              The size (pixels) of the trailing icon displayed on this
              component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          spacing: &ref_251
            name: spacing
            helpLink: m3.menuitem
            docString: The margin and padding (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          add_icon_space: &ref_252
            name: boolean
            helpLink: m3.menuitem
            docString: >-
              If True, add a space where the leading_icon would be so that this
              MenuItem is aligned with MenuItems with leading_icons.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_253
            name: object
            helpLink: m3.menuitem
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_254
            name: string
            helpLink: m3.menuitem
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_255
            $ref: anvil.Container instance
          add_event_handler: &ref_256
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_257
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_258
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: click
              parameters: []
              docString: When the component is clicked.
        helpLink: m3.menuitem
        clientOnly: true
        globals:
          visible: *ref_233
          enabled: *ref_234
          role: *ref_235
          text_color: *ref_236
          font_family: *ref_237
          leading_icon: *ref_238
          trailing_icon: *ref_239
          text: *ref_240
          trailing_text: *ref_241
          font_size: *ref_242
          underline: *ref_243
          italic: *ref_244
          bold: *ref_245
          leading_icon_color: *ref_246
          trailing_icon_color: *ref_247
          background_color: *ref_248
          leading_icon_size: *ref_249
          trailing_icon_size: *ref_250
          spacing: *ref_251
          add_icon_space: *ref_252
          tag: *ref_253
          tooltip: *ref_254
          parent: *ref_255
        functions:
          add_event_handler: *ref_256
          set_event_handler: *ref_257
          remove_event_handler: *ref_258
      args:
        - name: visible
          type: keyword
          optional: true
        - name: enabled
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: text_color
          type: keyword
          optional: true
        - name: font_family
          type: keyword
          optional: true
        - name: leading_icon
          type: keyword
          optional: true
        - name: trailing_icon
          type: keyword
          optional: true
        - name: text
          type: keyword
          optional: true
        - name: trailing_text
          type: keyword
          optional: true
        - name: font_size
          type: keyword
          optional: true
        - name: underline
          type: keyword
          optional: true
        - name: italic
          type: keyword
          optional: true
        - name: bold
          type: keyword
          optional: true
        - name: leading_icon_color
          type: keyword
          optional: true
        - name: trailing_icon_color
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: leading_icon_size
          type: keyword
          optional: true
        - name: trailing_icon_size
          type: keyword
          optional: true
        - name: spacing
          type: keyword
          optional: true
        - name: add_icon_space
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.menuitem
    clientOnly: true
  Link: &ref_627
    $id: m3.Link
    name: Link
    classInstance:
      $ref: m3.Link instance
    docString: Create a new 'Link' object
    attrs: {}
    callable:
      returns:
        $id: m3.Link instance
        name: m3.Link component
        attrs:
          text: &ref_259
            name: string
            helpLink: m3.link
            docString: The text displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          align: &ref_260
            name: enum
            helpLink: m3.link
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - center
              - right
          italic: &ref_261
            name: boolean
            helpLink: m3.link
            docString: If True, this component’s text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          bold: &ref_262
            name: boolean
            helpLink: m3.link
            docString: If True, this component’s text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          underline: &ref_263
            name: boolean
            helpLink: m3.link
            docString: If True, this component’s text will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_family: &ref_264
            name: string
            helpLink: m3.link
            docString: The font family to use for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_size: &ref_265
            name: number
            helpLink: m3.link
            docString: The font size of text displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon: &ref_266
            name: enum
            helpLink: m3.link
            docString: The icon to display on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          visible: &ref_267
            name: boolean
            helpLink: m3.link
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text_color: &ref_268
            name: color
            helpLink: m3.link
            docString: The color of the text on the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_color: &ref_269
            name: color
            helpLink: m3.link
            docString: The color of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          border: &ref_270
            name: string
            helpLink: m3.link
            docString: The border of this component. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          spacing: &ref_271
            name: spacing
            helpLink: m3.link
            docString: The margin and padding (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_272
            name: string
            helpLink: m3.link
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_273
            name: themeRole
            helpLink: m3.link
            docString: A style for this component defined in CSS and added to Roles.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          url: &ref_274
            name: string
            helpLink: m3.link
            docString: >-
              TThe target URL of the link. Can be set to a URL string or to a
              Media object.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_size: &ref_275
            name: number
            helpLink: m3.link
            docString: The size (pixels) of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_276
            name: object
            helpLink: m3.link
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_277
            name: color
            helpLink: m3.link
            docString: The color of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_278
            $ref: anvil.Container instance
          add_event_handler: &ref_279
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_280
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_281
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                      - show
                      - hide
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: click
              parameters: []
              docString: When the Link is clicked.
            - name: show
              parameters: []
              docString: When the Link is shown on the screen.
            - name: hide
              parameters: []
              docString: When the Link is removed from the screen.
        helpLink: m3.link
        clientOnly: true
        globals:
          text: *ref_259
          align: *ref_260
          italic: *ref_261
          bold: *ref_262
          underline: *ref_263
          font_family: *ref_264
          font_size: *ref_265
          icon: *ref_266
          visible: *ref_267
          text_color: *ref_268
          icon_color: *ref_269
          border: *ref_270
          spacing: *ref_271
          tooltip: *ref_272
          role: *ref_273
          url: *ref_274
          icon_size: *ref_275
          tag: *ref_276
          background_color: *ref_277
          parent: *ref_278
        functions:
          add_event_handler: *ref_279
          set_event_handler: *ref_280
          remove_event_handler: *ref_281
      args:
        - name: text
          type: keyword
          optional: true
        - name: align
          type: keyword
          optional: true
        - name: italic
          type: keyword
          optional: true
        - name: bold
          type: keyword
          optional: true
        - name: underline
          type: keyword
          optional: true
        - name: font_family
          type: keyword
          optional: true
        - name: font_size
          type: keyword
          optional: true
        - name: icon
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: text_color
          type: keyword
          optional: true
        - name: icon_color
          type: keyword
          optional: true
        - name: border
          type: keyword
          optional: true
        - name: spacing
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: url
          type: keyword
          optional: true
        - name: icon_size
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.link
    clientOnly: true
  LinearProgressIndicator: &ref_628
    $id: m3.LinearProgressIndicator
    name: LinearProgressIndicator
    classInstance:
      $ref: m3.LinearProgressIndicator instance
    docString: Create a new 'LinearProgressIndicator' object
    attrs: {}
    callable:
      returns:
        $id: m3.LinearProgressIndicator instance
        name: m3.LinearProgressIndicator component
        attrs:
          progress_color: &ref_282
            name: color
            helpLink: m3.linearprogressindicator
            docString: The colour of the progress bar
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          visible: &ref_283
            name: boolean
            helpLink: m3.linearprogressindicator
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_284
            name: themeRole
            helpLink: m3.linearprogressindicator
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          progress: &ref_285
            name: number
            helpLink: m3.linearprogressindicator
            docString: The progress of the LinearProgressIndicator.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          margin: &ref_286
            name: margin
            helpLink: m3.linearprogressindicator
            docString: The margin (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          track_color: &ref_287
            name: color
            helpLink: m3.linearprogressindicator
            docString: The colour of the LinearProgressIndicator track.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_288
            name: string
            helpLink: m3.linearprogressindicator
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_289
            name: object
            helpLink: m3.linearprogressindicator
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          type: &ref_290
            name: enum
            helpLink: m3.linearprogressindicator
            docString: >-
              Display a determinate or indeterminate progress indicator. Use
              determinate to set the progress with the progress property. Use
              indeterminate to express an unspecified amount of wait time.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - determinate
              - indeterminate
          parent: &ref_291
            $ref: anvil.Container instance
          add_event_handler: &ref_292
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options: []
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_293
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options: []
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_294
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options: []
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events: []
        helpLink: m3.linearprogressindicator
        clientOnly: true
        globals:
          progress_color: *ref_282
          visible: *ref_283
          role: *ref_284
          progress: *ref_285
          margin: *ref_286
          track_color: *ref_287
          tooltip: *ref_288
          tag: *ref_289
          type: *ref_290
          parent: *ref_291
        functions:
          add_event_handler: *ref_292
          set_event_handler: *ref_293
          remove_event_handler: *ref_294
      args:
        - name: progress_color
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: progress
          type: keyword
          optional: true
        - name: margin
          type: keyword
          optional: true
        - name: track_color
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
        - name: type
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.linearprogressindicator
    clientOnly: true
  IconButtonMenu: &ref_629
    $id: m3.IconButtonMenu
    name: IconButtonMenu
    classInstance:
      $ref: m3.IconButtonMenu instance
    docString: Create a new 'IconButtonMenu' object
    attrs: {}
    callable:
      returns:
        $id: m3.IconButtonMenu instance
        name: m3.IconButtonMenu component
        attrs:
          align: &ref_295
            name: enum
            helpLink: m3.iconbuttonmenu
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - right
              - center
          appearance: &ref_296
            name: enum
            helpLink: m3.iconbuttonmenu
            docString: A predefined style for the IconButton.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - filled
              - elevated
              - tonal
              - outlined
              - text
          visible: &ref_297
            name: boolean
            helpLink: m3.iconbuttonmenu
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          enabled: &ref_298
            name: boolean
            helpLink: m3.iconbuttonmenu
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_299
            name: themeRole
            helpLink: m3.iconbuttonmenu
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon: &ref_300
            name: enum
            helpLink: m3.iconbuttonmenu
            docString: The icon to display on the IconButton.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_color: &ref_301
            name: color
            helpLink: m3.iconbuttonmenu
            docString: The colour of the icon displayed on the IconButton.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          menu_background_color: &ref_302
            name: color
            helpLink: m3.iconbuttonmenu
            docString: The color of the background of the menu.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          menu_border: &ref_303
            name: color
            helpLink: m3.iconbuttonmenu
            docString: The border of the menu. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          button_background_color: &ref_304
            name: color
            helpLink: m3.iconbuttonmenu
            docString: The colour of the background of the IconButton.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          margin: &ref_305
            name: margin
            helpLink: m3.iconbuttonmenu
            docString: The margin (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          button_border: &ref_306
            name: string
            helpLink: m3.iconbuttonmenu
            docString: The border of the IconButton. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_307
            name: string
            helpLink: m3.iconbuttonmenu
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          menu_items: &ref_308
            name: object
            helpLink: m3.iconbuttonmenu
            docString: A list of components to be added to the menu.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_309
            name: object
            helpLink: m3.iconbuttonmenu
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_310
            $ref: anvil.Container instance
          add_event_handler: &ref_311
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_312
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_313
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: click
              parameters: []
              docString: When the IconButton is clicked.
        helpLink: m3.iconbuttonmenu
        clientOnly: true
        globals:
          align: *ref_295
          appearance: *ref_296
          visible: *ref_297
          enabled: *ref_298
          role: *ref_299
          icon: *ref_300
          icon_color: *ref_301
          menu_background_color: *ref_302
          menu_border: *ref_303
          button_background_color: *ref_304
          margin: *ref_305
          button_border: *ref_306
          tooltip: *ref_307
          menu_items: *ref_308
          tag: *ref_309
          parent: *ref_310
        functions:
          add_event_handler: *ref_311
          set_event_handler: *ref_312
          remove_event_handler: *ref_313
      args:
        - name: align
          type: keyword
          optional: true
        - name: appearance
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: enabled
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: icon
          type: keyword
          optional: true
        - name: icon_color
          type: keyword
          optional: true
        - name: menu_background_color
          type: keyword
          optional: true
        - name: menu_border
          type: keyword
          optional: true
        - name: button_background_color
          type: keyword
          optional: true
        - name: margin
          type: keyword
          optional: true
        - name: button_border
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: menu_items
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.iconbuttonmenu
    clientOnly: true
  IconButton: &ref_630
    $id: m3.IconButton
    name: IconButton
    classInstance:
      $ref: m3.IconButton instance
    docString: Create a new 'IconButton' object
    attrs: {}
    callable:
      returns:
        $id: m3.IconButton instance
        name: m3.IconButton component
        attrs:
          align: &ref_314
            name: enum
            helpLink: m3.iconbutton
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          appearance: &ref_315
            name: enum
            helpLink: m3.iconbutton
            docString: A predefined style for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - standard
              - filled
              - tonal
              - outlined
          visible: &ref_316
            name: boolean
            helpLink: m3.iconbutton
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          enabled: &ref_317
            name: boolean
            helpLink: m3.iconbutton
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_318
            name: themeRole
            helpLink: m3.iconbutton
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon: &ref_319
            name: enum
            helpLink: m3.iconbutton
            docString: The icon to display on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_color: &ref_320
            name: color
            helpLink: m3.iconbutton
            docString: The colour of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_321
            name: color
            helpLink: m3.iconbutton
            docString: The colour of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          margin: &ref_322
            name: margin
            helpLink: m3.iconbutton
            docString: The margin (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          border: &ref_323
            name: string
            helpLink: m3.iconbutton
            docString: The border of this component. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_324
            name: string
            helpLink: m3.iconbutton
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_325
            name: object
            helpLink: m3.iconbutton
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_326
            $ref: anvil.Container instance
          add_event_handler: &ref_327
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_328
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_329
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: click
              parameters: []
              docString: When the component is clicked.
        helpLink: m3.iconbutton
        clientOnly: true
        globals:
          align: *ref_314
          appearance: *ref_315
          visible: *ref_316
          enabled: *ref_317
          role: *ref_318
          icon: *ref_319
          icon_color: *ref_320
          background_color: *ref_321
          margin: *ref_322
          border: *ref_323
          tooltip: *ref_324
          tag: *ref_325
          parent: *ref_326
        functions:
          add_event_handler: *ref_327
          set_event_handler: *ref_328
          remove_event_handler: *ref_329
      args:
        - name: align
          type: keyword
          optional: true
        - name: appearance
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: enabled
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: icon
          type: keyword
          optional: true
        - name: icon_color
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: margin
          type: keyword
          optional: true
        - name: border
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.iconbutton
    clientOnly: true
  Heading: &ref_631
    $id: m3.Heading
    name: Heading
    classInstance:
      $ref: m3.Heading instance
    docString: Create a new 'Heading' object
    attrs: {}
    callable:
      returns:
        $id: m3.Heading instance
        name: m3.Heading component
        attrs:
          visible: &ref_330
            name: boolean
            helpLink: m3.heading
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          italic: &ref_331
            name: boolean
            helpLink: m3.heading
            docString: If True, this component’s text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          border: &ref_332
            name: string
            helpLink: m3.heading
            docString: The border of this component. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_family: &ref_333
            name: string
            helpLink: m3.heading
            docString: The font family to use for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text_color: &ref_334
            name: color
            helpLink: m3.heading
            docString: The color of the text on the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_color: &ref_335
            name: color
            helpLink: m3.heading
            docString: The color of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_336
            name: color
            helpLink: m3.heading
            docString: The color of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_337
            name: string
            helpLink: m3.heading
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_338
            name: themeRole
            helpLink: m3.heading
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          align: &ref_339
            name: enum
            helpLink: m3.heading
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - right
              - center
              - justify
          font_size: &ref_340
            name: number
            helpLink: m3.heading
            docString: The font size of text displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_size: &ref_341
            name: number
            helpLink: m3.heading
            docString: The size (pixels) of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          underline: &ref_342
            name: boolean
            helpLink: m3.heading
            docString: If True, this component’s text will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          bold: &ref_343
            name: boolean
            helpLink: m3.heading
            docString: If True, this component’s text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text: &ref_344
            name: string
            helpLink: m3.heading
            docString: The text displayed on this component
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon: &ref_345
            name: enum
            helpLink: m3.heading
            docString: The icon to display on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          style: &ref_346
            name: enum
            helpLink: m3.heading
            docString: 'Role of the heading component: display, headline or title.'
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - display
              - headline
              - title
          scale: &ref_347
            name: enum
            helpLink: m3.heading
            docString: The size of the heading component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - small
              - medium
              - large
          spacing: &ref_348
            name: spacing
            helpLink: m3.heading
            docString: The margin and padding (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_349
            name: object
            helpLink: m3.heading
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          line_height: &ref_350
            name: string
            helpLink: m3.heading
            docString: The line height of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_351
            $ref: anvil.Container instance
          add_event_handler: &ref_352
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_353
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_354
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: show
              parameters: []
              docString: When the Heading is shown on the screen.
            - name: hide
              parameters: []
              docString: When the Heading is removed from the screen.
        helpLink: m3.heading
        clientOnly: true
        globals:
          visible: *ref_330
          italic: *ref_331
          border: *ref_332
          font_family: *ref_333
          text_color: *ref_334
          icon_color: *ref_335
          background_color: *ref_336
          tooltip: *ref_337
          role: *ref_338
          align: *ref_339
          font_size: *ref_340
          icon_size: *ref_341
          underline: *ref_342
          bold: *ref_343
          text: *ref_344
          icon: *ref_345
          style: *ref_346
          scale: *ref_347
          spacing: *ref_348
          tag: *ref_349
          line_height: *ref_350
          parent: *ref_351
        functions:
          add_event_handler: *ref_352
          set_event_handler: *ref_353
          remove_event_handler: *ref_354
      args:
        - name: visible
          type: keyword
          optional: true
        - name: italic
          type: keyword
          optional: true
        - name: border
          type: keyword
          optional: true
        - name: font_family
          type: keyword
          optional: true
        - name: text_color
          type: keyword
          optional: true
        - name: icon_color
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: align
          type: keyword
          optional: true
        - name: font_size
          type: keyword
          optional: true
        - name: icon_size
          type: keyword
          optional: true
        - name: underline
          type: keyword
          optional: true
        - name: bold
          type: keyword
          optional: true
        - name: text
          type: keyword
          optional: true
        - name: icon
          type: keyword
          optional: true
        - name: style
          type: keyword
          optional: true
        - name: scale
          type: keyword
          optional: true
        - name: spacing
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
        - name: line_height
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.heading
    clientOnly: true
  FileLoader: &ref_632
    $id: m3.FileLoader
    name: FileLoader
    classInstance:
      $ref: m3.FileLoader instance
    docString: Create a new 'FileLoader' object
    attrs: {}
    callable:
      returns:
        $id: m3.FileLoader instance
        name: m3.FileLoader component
        attrs:
          clear: &ref_355
            name: clear
            attrs: {}
            callable:
              args: []
            docString: Clear any selected files from this FileLoader.
          focus: &ref_356
            name: focus
            attrs: {}
            callable:
              args: []
            docString: Set the keyboard focus to this FileLoader.
          open_file_selector: &ref_357
            name: open_file_selector
            attrs: {}
            callable:
              args: []
            docString: >-
              Open the file selector from code, this should be called within a
              click event handler for another component.
          text: &ref_361
            name: string
            helpLink: m3.fileloader
            docString: The text displayed on this component
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          visible: &ref_362
            name: boolean
            helpLink: m3.fileloader
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          enabled: &ref_363
            name: boolean
            helpLink: m3.fileloader
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text_color: &ref_364
            name: color
            helpLink: m3.fileloader
            docString: The color of the text on the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_color: &ref_365
            name: color
            helpLink: m3.fileloader
            docString: The color of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_366
            name: color
            helpLink: m3.fileloader
            docString: The color of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          underline: &ref_367
            name: boolean
            helpLink: m3.fileloader
            docString: If True, this component’s text will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          italic: &ref_368
            name: boolean
            helpLink: m3.fileloader
            docString: If True, this component’s text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          bold: &ref_369
            name: boolean
            helpLink: m3.fileloader
            docString: If True, this component’s text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_family: &ref_370
            name: string
            helpLink: m3.fileloader
            docString: The font family to use for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_size: &ref_371
            name: number
            helpLink: m3.fileloader
            docString: The size (pixels) of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_size: &ref_372
            name: number
            helpLink: m3.fileloader
            docString: The font size of text displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          align: &ref_373
            name: enum
            helpLink: m3.fileloader
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - center
              - right
          border: &ref_374
            name: string
            helpLink: m3.fileloader
            docString: The border of this component. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          spacing: &ref_375
            name: spacing
            helpLink: m3.fileloader
            docString: The margin and padding (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_376
            name: string
            helpLink: m3.fileloader
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_377
            name: themeRole
            helpLink: m3.fileloader
            docString: A style for this component defined in CSS and added to Roles.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          appearance: &ref_378
            name: enum
            helpLink: m3.fileloader
            docString: A predefined style for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - text
              - filled
              - elevated
              - tonal
              - outlined
          show_state: &ref_379
            name: boolean
            helpLink: m3.fileloader
            docString: >-
              If True, display a message indicating the number of selected
              files.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon: &ref_380
            name: enum
            helpLink: m3.fileloader
            docString: The icon to display on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          file_types: &ref_381
            name: string
            helpLink: m3.fileloader
            docString: >-
              Specify what type of file to upload. Can accept a MIME type (eg
              'image/png' or 'image/*'), an extension (eg '.png'), or a
              comma-separated set of them (eg '.png,.jpg,.jpeg').
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          multiple: &ref_382
            name: boolean
            helpLink: m3.fileloader
            docString: If True, this FileLoader can load multiple files at the same time.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          file: &ref_383
            name: object
            helpLink: m3.fileloader
            docString: >-
              The currently selected file (or the first, if multiple files are
              selected). This is a Media object.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_384
            name: object
            helpLink: m3.fileloader
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_385
            $ref: anvil.Container instance
          add_event_handler: &ref_358
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - show
                      - hide
                      - focus
                      - lost_focus
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_359
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - show
                      - hide
                      - focus
                      - lost_focus
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_360
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - show
                      - hide
                      - focus
                      - lost_focus
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: change
              parameters:
                - name: file
                  description: >-
                    The first selected file. Set the 'multiple' property to
                    allow loading more than one file.
                - name: files
                  description: >-
                    A list of loaded files. Set the 'multiple' property to allow
                    loading more than one file.
              docString: When a new file is loaded into this FileLoader.
            - name: show
              parameters: []
              docString: When the FileLoader is shown on the screen.
            - name: hide
              parameters: []
              docString: When the FileLoader is removed from the screen.
            - name: focus
              parameters: []
              docString: When the FileLoader gets focus.
            - name: lost_focus
              parameters: []
              docString: When the FileLoader loses focus.
        helpLink: m3.fileloader
        clientOnly: true
        functions:
          clear: *ref_355
          focus: *ref_356
          open_file_selector: *ref_357
          add_event_handler: *ref_358
          set_event_handler: *ref_359
          remove_event_handler: *ref_360
        globals:
          text: *ref_361
          visible: *ref_362
          enabled: *ref_363
          text_color: *ref_364
          icon_color: *ref_365
          background_color: *ref_366
          underline: *ref_367
          italic: *ref_368
          bold: *ref_369
          font_family: *ref_370
          icon_size: *ref_371
          font_size: *ref_372
          align: *ref_373
          border: *ref_374
          spacing: *ref_375
          tooltip: *ref_376
          role: *ref_377
          appearance: *ref_378
          show_state: *ref_379
          icon: *ref_380
          file_types: *ref_381
          multiple: *ref_382
          file: *ref_383
          tag: *ref_384
          parent: *ref_385
      args:
        - name: text
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: enabled
          type: keyword
          optional: true
        - name: text_color
          type: keyword
          optional: true
        - name: icon_color
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: underline
          type: keyword
          optional: true
        - name: italic
          type: keyword
          optional: true
        - name: bold
          type: keyword
          optional: true
        - name: font_family
          type: keyword
          optional: true
        - name: icon_size
          type: keyword
          optional: true
        - name: font_size
          type: keyword
          optional: true
        - name: align
          type: keyword
          optional: true
        - name: border
          type: keyword
          optional: true
        - name: spacing
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: appearance
          type: keyword
          optional: true
        - name: show_state
          type: keyword
          optional: true
        - name: icon
          type: keyword
          optional: true
        - name: file_types
          type: keyword
          optional: true
        - name: multiple
          type: keyword
          optional: true
        - name: file
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.fileloader
    clientOnly: true
  DropdownMenu: &ref_633
    $id: m3.DropdownMenu
    name: DropdownMenu
    classInstance:
      $ref: m3.DropdownMenu instance
    docString: Create a new 'DropdownMenu' object
    attrs: {}
    callable:
      returns:
        $id: m3.DropdownMenu instance
        name: m3.DropdownMenu component
        attrs:
          align: &ref_386
            name: enum
            helpLink: m3.dropdownmenu
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - right
              - center
          appearance: &ref_387
            name: enum
            helpLink: m3.dropdownmenu
            docString: A predefined style for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - filled
              - outlined
          visible: &ref_388
            name: boolean
            helpLink: m3.dropdownmenu
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          enabled: &ref_389
            name: boolean
            helpLink: m3.dropdownmenu
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          error: &ref_390
            name: boolean
            helpLink: m3.dropdownmenu
            docString: If True, this component is in an error state.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_391
            name: themeRole
            helpLink: m3.dropdownmenu
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_color: &ref_392
            name: color
            helpLink: m3.dropdownmenu
            docString: The colour of the label text on the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label: &ref_393
            name: string
            helpLink: m3.dropdownmenu
            docString: The label text of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_font_family: &ref_394
            name: string
            helpLink: m3.dropdownmenu
            docString: The font family to use for the label this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_font_size: &ref_395
            name: number
            helpLink: m3.dropdownmenu
            docString: The font size of the label text on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_underline: &ref_396
            name: boolean
            helpLink: m3.dropdownmenu
            docString: If True, the label text will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_italic: &ref_397
            name: boolean
            helpLink: m3.dropdownmenu
            docString: If True, the label text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          label_bold: &ref_398
            name: boolean
            helpLink: m3.dropdownmenu
            docString: If True, the label text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          items_text_color: &ref_399
            name: color
            helpLink: m3.dropdownmenu
            docString: The colour of the menu items' text.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          items_font_family: &ref_400
            name: string
            helpLink: m3.dropdownmenu
            docString: The font family to use for the menu items.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          items_font_size: &ref_401
            name: number
            helpLink: m3.dropdownmenu
            docString: The font size of the menu items.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          items_underline: &ref_402
            name: boolean
            helpLink: m3.dropdownmenu
            docString: If True, the menu items will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          items_italic: &ref_403
            name: boolean
            helpLink: m3.dropdownmenu
            docString: If True, the menu items will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          items_bold: &ref_404
            name: boolean
            helpLink: m3.dropdownmenu
            docString: If True, the menu items will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          menu_background_color: &ref_405
            name: color
            helpLink: m3.dropdownmenu
            docString: The background color of the menu.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected_text_color: &ref_406
            name: color
            helpLink: m3.dropdownmenu
            docString: The colour of the displayed text if there is a selected item.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected_font_size: &ref_407
            name: number
            helpLink: m3.dropdownmenu
            docString: >-
              The font size (pixels) of the displayed text if there is a
              selected item.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected_font_family: &ref_408
            name: string
            helpLink: m3.dropdownmenu
            docString: The font-family of the displayed text if there is a selected item.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected_underline: &ref_409
            name: boolean
            helpLink: m3.dropdownmenu
            docString: >-
              If True and there is a selected item, the displayed text is
              underlined
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected_italic: &ref_410
            name: boolean
            helpLink: m3.dropdownmenu
            docString: >-
              If True and there is a selected item, the displayed text in
              italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected_bold: &ref_411
            name: boolean
            helpLink: m3.dropdownmenu
            docString: If True and there is a selected item, the displayed text is bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          leading_icon: &ref_412
            name: enum
            helpLink: m3.dropdownmenu
            docString: The leading icon to display on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          leading_icon_color: &ref_413
            name: color
            helpLink: m3.dropdownmenu
            docString: The colour of the leading icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          supporting_text: &ref_414
            name: string
            helpLink: m3.dropdownmenu
            docString: The supporting text displayed below this component
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          supporting_text_color: &ref_415
            name: color
            helpLink: m3.dropdownmenu
            docString: The colour of the supporting text below this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          supporting_text_font_family: &ref_416
            name: color
            helpLink: m3.dropdownmenu
            docString: >-
              The font family to use for the supporting text below this
              component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          supporting_text_font_size: &ref_417
            name: color
            helpLink: m3.dropdownmenu
            docString: >-
              The font size of the supporting text displayed below this
              component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_418
            name: color
            helpLink: m3.dropdownmenu
            docString: The colour of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          placeholder: &ref_419
            name: string
            helpLink: m3.dropdownmenu
            docString: The text to be displayed when the component is empty
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          allow_none: &ref_420
            name: boolean
            helpLink: m3.dropdownmenu
            docString: If True, a placeholder item is added to the menu with value None
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          spacing: &ref_421
            name: spacing
            helpLink: m3.dropdownmenu
            docString: The margin and padding (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_422
            name: string
            helpLink: m3.dropdownmenu
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          items: &ref_423
            name: string list
            helpLink: m3.dropdownmenu
            docString: The items to display in the menu.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          selected_value: &ref_424
            name: object
            helpLink: m3.dropdownmenu
            docString: >-
              The value of the currently selected item. Can only be set at
              runtime.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          border_color: &ref_425
            name: color
            helpLink: m3.dropdownmenu
            docString: The colour of the border of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_426
            name: object
            helpLink: m3.dropdownmenu
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_427
            $ref: anvil.Container instance
          add_event_handler: &ref_428
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_429
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_430
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: change
              parameters: []
              docString: When an item is selected.
        helpLink: m3.dropdownmenu
        clientOnly: true
        globals:
          align: *ref_386
          appearance: *ref_387
          visible: *ref_388
          enabled: *ref_389
          error: *ref_390
          role: *ref_391
          label_color: *ref_392
          label: *ref_393
          label_font_family: *ref_394
          label_font_size: *ref_395
          label_underline: *ref_396
          label_italic: *ref_397
          label_bold: *ref_398
          items_text_color: *ref_399
          items_font_family: *ref_400
          items_font_size: *ref_401
          items_underline: *ref_402
          items_italic: *ref_403
          items_bold: *ref_404
          menu_background_color: *ref_405
          selected_text_color: *ref_406
          selected_font_size: *ref_407
          selected_font_family: *ref_408
          selected_underline: *ref_409
          selected_italic: *ref_410
          selected_bold: *ref_411
          leading_icon: *ref_412
          leading_icon_color: *ref_413
          supporting_text: *ref_414
          supporting_text_color: *ref_415
          supporting_text_font_family: *ref_416
          supporting_text_font_size: *ref_417
          background_color: *ref_418
          placeholder: *ref_419
          allow_none: *ref_420
          spacing: *ref_421
          tooltip: *ref_422
          items: *ref_423
          selected_value: *ref_424
          border_color: *ref_425
          tag: *ref_426
          parent: *ref_427
        functions:
          add_event_handler: *ref_428
          set_event_handler: *ref_429
          remove_event_handler: *ref_430
      args:
        - name: align
          type: keyword
          optional: true
        - name: appearance
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: enabled
          type: keyword
          optional: true
        - name: error
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: label_color
          type: keyword
          optional: true
        - name: label
          type: keyword
          optional: true
        - name: label_font_family
          type: keyword
          optional: true
        - name: label_font_size
          type: keyword
          optional: true
        - name: label_underline
          type: keyword
          optional: true
        - name: label_italic
          type: keyword
          optional: true
        - name: label_bold
          type: keyword
          optional: true
        - name: items_text_color
          type: keyword
          optional: true
        - name: items_font_family
          type: keyword
          optional: true
        - name: items_font_size
          type: keyword
          optional: true
        - name: items_underline
          type: keyword
          optional: true
        - name: items_italic
          type: keyword
          optional: true
        - name: items_bold
          type: keyword
          optional: true
        - name: menu_background_color
          type: keyword
          optional: true
        - name: selected_text_color
          type: keyword
          optional: true
        - name: selected_font_size
          type: keyword
          optional: true
        - name: selected_font_family
          type: keyword
          optional: true
        - name: selected_underline
          type: keyword
          optional: true
        - name: selected_italic
          type: keyword
          optional: true
        - name: selected_bold
          type: keyword
          optional: true
        - name: leading_icon
          type: keyword
          optional: true
        - name: leading_icon_color
          type: keyword
          optional: true
        - name: supporting_text
          type: keyword
          optional: true
        - name: supporting_text_color
          type: keyword
          optional: true
        - name: supporting_text_font_family
          type: keyword
          optional: true
        - name: supporting_text_font_size
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: placeholder
          type: keyword
          optional: true
        - name: allow_none
          type: keyword
          optional: true
        - name: spacing
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: items
          type: keyword
          optional: true
        - name: selected_value
          type: keyword
          optional: true
        - name: border_color
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.dropdownmenu
    clientOnly: true
  Divider: &ref_634
    $id: m3.Divider
    name: Divider
    classInstance:
      $ref: m3.Divider instance
    docString: Create a new 'Divider' object
    attrs: {}
    callable:
      returns:
        $id: m3.Divider instance
        name: m3.Divider component
        attrs:
          type: &ref_431
            name: enum
            helpLink: m3.divider
            docString: >-
              Display the Divider across the full width of the container or
              inset.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - full_width
              - inset
          visible: &ref_432
            name: boolean
            helpLink: m3.divider
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          color: &ref_433
            name: color
            helpLink: m3.divider
            docString: The colour of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          margin: &ref_434
            name: margin
            helpLink: m3.divider
            docString: The margin (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_435
            name: themeRole
            helpLink: m3.divider
            docString: A style for this component defined in CSS and added to Roles.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_436
            $ref: anvil.Container instance
          add_event_handler: &ref_437
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_438
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_439
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: show
              parameters: []
              docString: When the Divider is shown on the screen.
            - name: hide
              parameters: []
              docString: When the Divider is removed from the screen.
        helpLink: m3.divider
        clientOnly: true
        globals:
          type: *ref_431
          visible: *ref_432
          color: *ref_433
          margin: *ref_434
          role: *ref_435
          parent: *ref_436
        functions:
          add_event_handler: *ref_437
          set_event_handler: *ref_438
          remove_event_handler: *ref_439
      args:
        - name: type
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: color
          type: keyword
          optional: true
        - name: margin
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.divider
    clientOnly: true
  CircularProgressIndicator: &ref_635
    $id: m3.CircularProgressIndicator
    name: CircularProgressIndicator
    classInstance:
      $ref: m3.CircularProgressIndicator instance
    docString: Create a new 'CircularProgressIndicator' object
    attrs: {}
    callable:
      returns:
        $id: m3.CircularProgressIndicator instance
        name: m3.CircularProgressIndicator component
        attrs:
          color: &ref_440
            name: color
            helpLink: m3.circularprogressindicator
            docString: The colour of the progress bar
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          visible: &ref_441
            name: boolean
            helpLink: m3.circularprogressindicator
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_442
            name: themeRole
            helpLink: m3.circularprogressindicator
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          progress: &ref_443
            name: number
            helpLink: m3.circularprogressindicator
            docString: The progress of the CircularProgressIndicator.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          margin: &ref_444
            name: margin
            helpLink: m3.circularprogressindicator
            docString: The margin (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_445
            name: string
            helpLink: m3.circularprogressindicator
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_446
            name: object
            helpLink: m3.circularprogressindicator
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          type: &ref_447
            name: enum
            helpLink: m3.circularprogressindicator
            docString: >-
              Display a determinate or indeterminate progress indicator. Use
              determinate to set the progress with the progress property. Use
              indeterminate to express an unspecified amount of wait time.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - determinate
              - indeterminate
          parent: &ref_448
            $ref: anvil.Container instance
          add_event_handler: &ref_449
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options: []
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_450
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options: []
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_451
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options: []
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events: []
        helpLink: m3.circularprogressindicator
        clientOnly: true
        globals:
          color: *ref_440
          visible: *ref_441
          role: *ref_442
          progress: *ref_443
          margin: *ref_444
          tooltip: *ref_445
          tag: *ref_446
          type: *ref_447
          parent: *ref_448
        functions:
          add_event_handler: *ref_449
          set_event_handler: *ref_450
          remove_event_handler: *ref_451
      args:
        - name: color
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: progress
          type: keyword
          optional: true
        - name: margin
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
        - name: type
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.circularprogressindicator
    clientOnly: true
  Checkbox: &ref_636
    $id: m3.Checkbox
    name: Checkbox
    classInstance:
      $ref: m3.Checkbox instance
    docString: Create a new 'Checkbox' object
    attrs: {}
    callable:
      returns:
        $id: m3.Checkbox instance
        name: m3.Checkbox component
        attrs:
          focus: &ref_452
            name: focus
            attrs: {}
            callable:
              args: []
            docString: Set the keyboard focus to this Checkbox.
          enabled: &ref_456
            name: boolean
            helpLink: m3.checkbox
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          visible: &ref_457
            name: boolean
            helpLink: m3.checkbox
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          underline: &ref_458
            name: boolean
            helpLink: m3.checkbox
            docString: If True, this component’s text will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          italic: &ref_459
            name: boolean
            helpLink: m3.checkbox
            docString: If True, this component’s text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          bold: &ref_460
            name: boolean
            helpLink: m3.checkbox
            docString: If True, this component’s text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_size: &ref_461
            name: number
            helpLink: m3.checkbox
            docString: The font size of text displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          border: &ref_462
            name: string
            helpLink: m3.checkbox
            docString: The border of this component. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_family: &ref_463
            name: string
            helpLink: m3.checkbox
            docString: The font family to use for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text_color: &ref_464
            name: color
            helpLink: m3.checkbox
            docString: The color of the text on the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_465
            name: color
            helpLink: m3.checkbox
            docString: The color of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          align: &ref_466
            name: enum
            helpLink: m3.checkbox
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          spacing: &ref_467
            name: spacing
            helpLink: m3.checkbox
            docString: The margin and padding (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_468
            name: string
            helpLink: m3.checkbox
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_469
            name: themeRole
            helpLink: m3.checkbox
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text: &ref_470
            name: string
            helpLink: m3.checkbox
            docString: The text displayed on this component
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          checkbox_color: &ref_471
            name: color
            helpLink: m3.checkbox
            docString: The color of the checkbox.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          checked: &ref_472
            name: boolean
            helpLink: m3.checkbox
            docString: If True, the checkbox is checked.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          allow_indeterminate: &ref_473
            name: boolean
            helpLink: m3.checkbox
            docString: >-
              If True, supports an indeterminate state. The indeterminate state
              can only be set in code by setting checked=None.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          error: &ref_474
            name: boolean
            helpLink: m3.checkbox
            docString: If True, the checkbox is in an error state.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_475
            name: object
            helpLink: m3.checkbox
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_476
            $ref: anvil.Container instance
          add_event_handler: &ref_453
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_454
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - show
                      - hide
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_455
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - change
                      - show
                      - hide
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: change
              parameters: []
              docString: When the Checkbox is checked or unchecked.
            - name: show
              parameters: []
              docString: When the Checkbox is shown on the screen.
            - name: hide
              parameters: []
              docString: When the Checkbox is removed from the screen.
        helpLink: m3.checkbox
        clientOnly: true
        functions:
          focus: *ref_452
          add_event_handler: *ref_453
          set_event_handler: *ref_454
          remove_event_handler: *ref_455
        globals:
          enabled: *ref_456
          visible: *ref_457
          underline: *ref_458
          italic: *ref_459
          bold: *ref_460
          font_size: *ref_461
          border: *ref_462
          font_family: *ref_463
          text_color: *ref_464
          background_color: *ref_465
          align: *ref_466
          spacing: *ref_467
          tooltip: *ref_468
          role: *ref_469
          text: *ref_470
          checkbox_color: *ref_471
          checked: *ref_472
          allow_indeterminate: *ref_473
          error: *ref_474
          tag: *ref_475
          parent: *ref_476
      args:
        - name: enabled
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: underline
          type: keyword
          optional: true
        - name: italic
          type: keyword
          optional: true
        - name: bold
          type: keyword
          optional: true
        - name: font_size
          type: keyword
          optional: true
        - name: border
          type: keyword
          optional: true
        - name: font_family
          type: keyword
          optional: true
        - name: text_color
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: align
          type: keyword
          optional: true
        - name: spacing
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: text
          type: keyword
          optional: true
        - name: checkbox_color
          type: keyword
          optional: true
        - name: checked
          type: keyword
          optional: true
        - name: allow_indeterminate
          type: keyword
          optional: true
        - name: error
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.checkbox
    clientOnly: true
  Card: &ref_637
    $id: m3.Card
    name: Card
    classInstance:
      $ref: m3.Card instance
    docString: Create a new 'Card' object
    attrs: {}
    callable:
      returns:
        $id: m3.Card instance
        name: m3.Card component
        attrs:
          visible: &ref_477
            name: boolean
            helpLink: m3.card
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          border: &ref_478
            name: string
            helpLink: m3.card
            docString: The border of this component. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_479
            name: color
            helpLink: m3.card
            docString: The color of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          align: &ref_480
            name: enum
            helpLink: m3.card
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          spacing: &ref_481
            name: spacing
            helpLink: m3.card
            docString: The margin and padding (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_482
            name: string
            helpLink: m3.card
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_483
            name: themeRole
            helpLink: m3.card
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_484
            name: object
            helpLink: m3.card
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          appearance: &ref_485
            name: enum
            helpLink: m3.card
            docString: A predefined style for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - elevated
              - filled
              - outlined
          orientation: &ref_486
            name: enum
            helpLink: m3.card
            docString: The orientation of the content in this Card
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - column
              - row
          parent: &ref_487
            $ref: anvil.Container instance
          add_event_handler: &ref_488
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options: []
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_489
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options: []
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_490
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options: []
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events: []
        helpLink: m3.card
        clientOnly: true
        globals:
          visible: *ref_477
          border: *ref_478
          background_color: *ref_479
          align: *ref_480
          spacing: *ref_481
          tooltip: *ref_482
          role: *ref_483
          tag: *ref_484
          appearance: *ref_485
          orientation: *ref_486
          parent: *ref_487
        functions:
          add_event_handler: *ref_488
          set_event_handler: *ref_489
          remove_event_handler: *ref_490
      args:
        - name: visible
          type: keyword
          optional: true
        - name: border
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: align
          type: keyword
          optional: true
        - name: spacing
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
        - name: appearance
          type: keyword
          optional: true
        - name: orientation
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.card
    clientOnly: true
  ButtonMenu: &ref_638
    $id: m3.ButtonMenu
    name: ButtonMenu
    classInstance:
      $ref: m3.ButtonMenu instance
    docString: Create a new 'ButtonMenu' object
    attrs: {}
    callable:
      returns:
        $id: m3.ButtonMenu instance
        name: m3.ButtonMenu component
        attrs:
          align: &ref_491
            name: enum
            helpLink: m3.buttonmenu
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - right
              - center
          appearance: &ref_492
            name: enum
            helpLink: m3.buttonmenu
            docString: A predefined style for the Button.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - filled
              - elevated
              - tonal
              - outlined
              - text
          visible: &ref_493
            name: boolean
            helpLink: m3.buttonmenu
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          enabled: &ref_494
            name: boolean
            helpLink: m3.buttonmenu
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_495
            name: themeRole
            helpLink: m3.buttonmenu
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          button_text_color: &ref_496
            name: color
            helpLink: m3.buttonmenu
            docString: The colour of the text on the Button.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          button_font_family: &ref_497
            name: string
            helpLink: m3.buttonmenu
            docString: The font family to use for the Button
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon: &ref_498
            name: enum
            helpLink: m3.buttonmenu
            docString: The icon to display on the Button.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text: &ref_499
            name: string
            helpLink: m3.buttonmenu
            docString: The text displayed on the Button
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          button_font_size: &ref_500
            name: number
            helpLink: m3.buttonmenu
            docString: The font size of the text displayed on the Button.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          underline: &ref_501
            name: boolean
            helpLink: m3.buttonmenu
            docString: If True, the Button’s text will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          italic: &ref_502
            name: boolean
            helpLink: m3.buttonmenu
            docString: If True, the Button’s text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          bold: &ref_503
            name: boolean
            helpLink: m3.buttonmenu
            docString: If True, the Button’s text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_color: &ref_504
            name: color
            helpLink: m3.buttonmenu
            docString: The colour of the icon displayed on the Button.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          menu_background_color: &ref_505
            name: color
            helpLink: m3.buttonmenu
            docString: The colour of the menu.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          menu_border: &ref_506
            name: color
            helpLink: m3.buttonmenu
            docString: The border of the menu. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_size: &ref_507
            name: number
            helpLink: m3.buttonmenu
            docString: The size (pixels) of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          button_background_color: &ref_508
            name: color
            helpLink: m3.buttonmenu
            docString: The colour of the background of the Button.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          spacing: &ref_509
            name: spacing
            helpLink: m3.buttonmenu
            docString: The margin and padding (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          button_border: &ref_510
            name: string
            helpLink: m3.buttonmenu
            docString: The border of the Button. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_511
            name: string
            helpLink: m3.buttonmenu
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_align: &ref_512
            name: enum
            helpLink: m3.buttonmenu
            docString: The alignment of the icon on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - right
          menu_items: &ref_513
            name: object
            helpLink: m3.buttonmenu
            docString: A list of components to be added to the menu.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_514
            name: object
            helpLink: m3.buttonmenu
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_515
            $ref: anvil.Container instance
          add_event_handler: &ref_516
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_517
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_518
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: click
              parameters: []
              docString: When the Button is clicked.
        helpLink: m3.buttonmenu
        clientOnly: true
        globals:
          align: *ref_491
          appearance: *ref_492
          visible: *ref_493
          enabled: *ref_494
          role: *ref_495
          button_text_color: *ref_496
          button_font_family: *ref_497
          icon: *ref_498
          text: *ref_499
          button_font_size: *ref_500
          underline: *ref_501
          italic: *ref_502
          bold: *ref_503
          icon_color: *ref_504
          menu_background_color: *ref_505
          menu_border: *ref_506
          icon_size: *ref_507
          button_background_color: *ref_508
          spacing: *ref_509
          button_border: *ref_510
          tooltip: *ref_511
          icon_align: *ref_512
          menu_items: *ref_513
          tag: *ref_514
          parent: *ref_515
        functions:
          add_event_handler: *ref_516
          set_event_handler: *ref_517
          remove_event_handler: *ref_518
      args:
        - name: align
          type: keyword
          optional: true
        - name: appearance
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: enabled
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: button_text_color
          type: keyword
          optional: true
        - name: button_font_family
          type: keyword
          optional: true
        - name: icon
          type: keyword
          optional: true
        - name: text
          type: keyword
          optional: true
        - name: button_font_size
          type: keyword
          optional: true
        - name: underline
          type: keyword
          optional: true
        - name: italic
          type: keyword
          optional: true
        - name: bold
          type: keyword
          optional: true
        - name: icon_color
          type: keyword
          optional: true
        - name: menu_background_color
          type: keyword
          optional: true
        - name: menu_border
          type: keyword
          optional: true
        - name: icon_size
          type: keyword
          optional: true
        - name: button_background_color
          type: keyword
          optional: true
        - name: spacing
          type: keyword
          optional: true
        - name: button_border
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: icon_align
          type: keyword
          optional: true
        - name: menu_items
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.buttonmenu
    clientOnly: true
  Button: &ref_639
    $id: m3.Button
    name: Button
    classInstance:
      $ref: m3.Button instance
    docString: Create a new 'Button' object
    attrs: {}
    callable:
      returns:
        $id: m3.Button instance
        name: m3.Button component
        attrs:
          align: &ref_519
            name: enum
            helpLink: m3.button
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - right
              - center
          appearance: &ref_520
            name: enum
            helpLink: m3.button
            docString: A predefined style for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - filled
              - elevated
              - tonal
              - outlined
              - text
          visible: &ref_521
            name: boolean
            helpLink: m3.button
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          enabled: &ref_522
            name: boolean
            helpLink: m3.button
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_523
            name: themeRole
            helpLink: m3.button
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text_color: &ref_524
            name: color
            helpLink: m3.button
            docString: The colour of the text on the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_family: &ref_525
            name: string
            helpLink: m3.button
            docString: The font family to use for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon: &ref_526
            name: enum
            helpLink: m3.button
            docString: The icon to display on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text: &ref_527
            name: string
            helpLink: m3.button
            docString: The text displayed on this component
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_size: &ref_528
            name: number
            helpLink: m3.button
            docString: The font size of the text displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          underline: &ref_529
            name: boolean
            helpLink: m3.button
            docString: If True, this component’s text will be underlined.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          italic: &ref_530
            name: boolean
            helpLink: m3.button
            docString: If True, this component’s text will be italic.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          bold: &ref_531
            name: boolean
            helpLink: m3.button
            docString: If True, this component’s text will be bold.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_color: &ref_532
            name: color
            helpLink: m3.button
            docString: The colour of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_size: &ref_533
            name: number
            helpLink: m3.button
            docString: The size (pixels) of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_534
            name: color
            helpLink: m3.button
            docString: The colour of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          spacing: &ref_535
            name: spacing
            helpLink: m3.button
            docString: The margin and padding (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          border: &ref_536
            name: string
            helpLink: m3.button
            docString: The border of this component. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_537
            name: string
            helpLink: m3.button
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          icon_align: &ref_538
            name: enum
            helpLink: m3.button
            docString: The alignment of the icon on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - right
          tag: &ref_539
            name: object
            helpLink: m3.button
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_540
            $ref: anvil.Container instance
          add_event_handler: &ref_541
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_542
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_543
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: click
              parameters: []
              docString: When the component is clicked.
        helpLink: m3.button
        clientOnly: true
        globals:
          align: *ref_519
          appearance: *ref_520
          visible: *ref_521
          enabled: *ref_522
          role: *ref_523
          text_color: *ref_524
          font_family: *ref_525
          icon: *ref_526
          text: *ref_527
          font_size: *ref_528
          underline: *ref_529
          italic: *ref_530
          bold: *ref_531
          icon_color: *ref_532
          icon_size: *ref_533
          background_color: *ref_534
          spacing: *ref_535
          border: *ref_536
          tooltip: *ref_537
          icon_align: *ref_538
          tag: *ref_539
          parent: *ref_540
        functions:
          add_event_handler: *ref_541
          set_event_handler: *ref_542
          remove_event_handler: *ref_543
      args:
        - name: align
          type: keyword
          optional: true
        - name: appearance
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: enabled
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: text_color
          type: keyword
          optional: true
        - name: font_family
          type: keyword
          optional: true
        - name: icon
          type: keyword
          optional: true
        - name: text
          type: keyword
          optional: true
        - name: font_size
          type: keyword
          optional: true
        - name: underline
          type: keyword
          optional: true
        - name: italic
          type: keyword
          optional: true
        - name: bold
          type: keyword
          optional: true
        - name: icon_color
          type: keyword
          optional: true
        - name: icon_size
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: spacing
          type: keyword
          optional: true
        - name: border
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: icon_align
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.button
    clientOnly: true
  AvatarMenu: &ref_640
    $id: m3.AvatarMenu
    name: AvatarMenu
    classInstance:
      $ref: m3.AvatarMenu instance
    docString: Create a new 'AvatarMenu' object
    attrs: {}
    callable:
      returns:
        $id: m3.AvatarMenu instance
        name: m3.AvatarMenu component
        attrs:
          align: &ref_544
            name: enum
            helpLink: m3.avatarmenu
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - left
              - right
              - center
          appearance: &ref_545
            name: enum
            helpLink: m3.avatarmenu
            docString: A predefined style for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - filled
              - elevated
              - tonal
              - outlined
              - text
          visible: &ref_546
            name: boolean
            helpLink: m3.avatarmenu
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          enabled: &ref_547
            name: boolean
            helpLink: m3.avatarmenu
            docString: If True, this component allows user interaction.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_548
            name: themeRole
            helpLink: m3.avatarmenu
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          avatar_text_color: &ref_549
            name: color
            helpLink: m3.avatarmenu
            docString: >-
              Color of the initials displayed on the Avatar if no image is
              provided
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          avatar_font_family: &ref_550
            name: string
            helpLink: m3.avatarmenu
            docString: The font family to use for the initials on the Avatar
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          fallback_icon: &ref_551
            name: enum
            helpLink: m3.avatarmenu
            docString: >-
              The icon to display on the Avatar if no image or user_name is
              provided.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          avatar_font_size: &ref_552
            name: number
            helpLink: m3.avatarmenu
            docString: The font size of the initials displayed on the Avatar
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          fallback_icon_color: &ref_553
            name: color
            helpLink: m3.avatarmenu
            docString: The color of the icon displayed on the Avatar
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          menu_background_color: &ref_554
            name: color
            helpLink: m3.avatarmenu
            docString: The color of the background of the menu
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          menu_border: &ref_555
            name: color
            helpLink: m3.avatarmenu
            docString: The border of the menu. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          fallback_icon_size: &ref_556
            name: number
            helpLink: m3.avatarmenu
            docString: The size (pixels) of the icon on the Avatar
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          avatar_background_color: &ref_557
            name: color
            helpLink: m3.avatarmenu
            docString: >-
              Background color of the Avatar in this component if no image is
              provided
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          margin: &ref_558
            name: margin
            helpLink: m3.avatarmenu
            docString: The margin (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          avatar_border: &ref_559
            name: string
            helpLink: m3.avatarmenu
            docString: >-
              The border of the Avatar in this component. Can take any valid CSS
              border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_560
            name: string
            helpLink: m3.avatarmenu
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          menu_items: &ref_561
            name: object
            helpLink: m3.avatarmenu
            docString: A list of components to be added to the menu.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_562
            name: object
            helpLink: m3.avatarmenu
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          image: &ref_563
            name: uri
            helpLink: m3.avatarmenu
            docString: The image to display on the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          user_name: &ref_564
            name: string
            helpLink: m3.avatarmenu
            docString: >-
              The name of the associated user. If no image is provided, the
              avatar will display initials generated from the user_name.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_565
            $ref: anvil.Container instance
          add_event_handler: &ref_566
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_567
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_568
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - click
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: click
              parameters: []
              docString: When the Avatar is clicked.
        helpLink: m3.avatarmenu
        clientOnly: true
        globals:
          align: *ref_544
          appearance: *ref_545
          visible: *ref_546
          enabled: *ref_547
          role: *ref_548
          avatar_text_color: *ref_549
          avatar_font_family: *ref_550
          fallback_icon: *ref_551
          avatar_font_size: *ref_552
          fallback_icon_color: *ref_553
          menu_background_color: *ref_554
          menu_border: *ref_555
          fallback_icon_size: *ref_556
          avatar_background_color: *ref_557
          margin: *ref_558
          avatar_border: *ref_559
          tooltip: *ref_560
          menu_items: *ref_561
          tag: *ref_562
          image: *ref_563
          user_name: *ref_564
          parent: *ref_565
        functions:
          add_event_handler: *ref_566
          set_event_handler: *ref_567
          remove_event_handler: *ref_568
      args:
        - name: align
          type: keyword
          optional: true
        - name: appearance
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: enabled
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: avatar_text_color
          type: keyword
          optional: true
        - name: avatar_font_family
          type: keyword
          optional: true
        - name: fallback_icon
          type: keyword
          optional: true
        - name: avatar_font_size
          type: keyword
          optional: true
        - name: fallback_icon_color
          type: keyword
          optional: true
        - name: menu_background_color
          type: keyword
          optional: true
        - name: menu_border
          type: keyword
          optional: true
        - name: fallback_icon_size
          type: keyword
          optional: true
        - name: avatar_background_color
          type: keyword
          optional: true
        - name: margin
          type: keyword
          optional: true
        - name: avatar_border
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: menu_items
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
        - name: image
          type: keyword
          optional: true
        - name: user_name
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.avatarmenu
    clientOnly: true
  Avatar: &ref_641
    $id: m3.Avatar
    name: Avatar
    classInstance:
      $ref: m3.Avatar instance
    docString: Create a new 'Avatar' object
    attrs: {}
    callable:
      returns:
        $id: m3.Avatar instance
        name: m3.Avatar component
        attrs:
          align: &ref_569
            name: enum
            helpLink: m3.avatar
            docString: The position of this component in the available space.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          appearance: &ref_570
            name: enum
            helpLink: m3.avatar
            docString: A predefined style for this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - filled
              - tonal
              - outlined
          visible: &ref_571
            name: boolean
            helpLink: m3.avatar
            docString: If True, the component will be displayed.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          role: &ref_572
            name: themeRole
            helpLink: m3.avatar
            docString: A style for this component defined in CSS and added to Roles
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          fallback_icon: &ref_573
            name: enum
            helpLink: m3.avatar
            docString: The icon to display if no image or user_name is provided.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          size: &ref_574
            name: number
            helpLink: m3.avatar
            docString: Dimensions (in pixels) of the component's height and width
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          user_name: &ref_575
            name: string
            helpLink: m3.avatar
            docString: >-
              The name of the associated user. If no image is provided, the
              avatar will display initials generated from the user_name.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          image: &ref_576
            name: uri
            helpLink: m3.avatar
            docString: The image to display on the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tooltip: &ref_577
            name: string
            helpLink: m3.avatar
            docString: The text to display when the mouse is hovered over this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          tag: &ref_578
            name: object
            helpLink: m3.avatar
            docString: Use this property to store any extra data for the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          margin: &ref_579
            name: margin
            helpLink: m3.avatar
            docString: The margin (pixels) of the component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          fallback_icon_color: &ref_580
            name: color
            helpLink: m3.avatar
            docString: The colour of the icon displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_581
            name: color
            helpLink: m3.avatar
            docString: The colour of the background of this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          border: &ref_582
            name: string
            helpLink: m3.avatar
            docString: The border of this component. Can take any valid CSS border value.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text_color: &ref_583
            name: color
            helpLink: m3.avatar
            docString: The colour of the initials displayed when there is no image.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_size: &ref_584
            name: number
            helpLink: m3.avatar
            docString: The font size of the initials displayed on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          fallback_icon_size: &ref_585
            name: number
            helpLink: m3.avatar
            docString: The size (pixels) of the icon on this component
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          font_family: &ref_586
            name: string
            helpLink: m3.avatar
            docString: The font family to use for the initials on this component.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_587
            $ref: anvil.Container instance
          add_event_handler: &ref_588
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options: []
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_589
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options: []
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_590
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options: []
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events: []
        helpLink: m3.avatar
        clientOnly: true
        globals:
          align: *ref_569
          appearance: *ref_570
          visible: *ref_571
          role: *ref_572
          fallback_icon: *ref_573
          size: *ref_574
          user_name: *ref_575
          image: *ref_576
          tooltip: *ref_577
          tag: *ref_578
          margin: *ref_579
          fallback_icon_color: *ref_580
          background_color: *ref_581
          border: *ref_582
          text_color: *ref_583
          font_size: *ref_584
          fallback_icon_size: *ref_585
          font_family: *ref_586
          parent: *ref_587
        functions:
          add_event_handler: *ref_588
          set_event_handler: *ref_589
          remove_event_handler: *ref_590
      args:
        - name: align
          type: keyword
          optional: true
        - name: appearance
          type: keyword
          optional: true
        - name: visible
          type: keyword
          optional: true
        - name: role
          type: keyword
          optional: true
        - name: fallback_icon
          type: keyword
          optional: true
        - name: size
          type: keyword
          optional: true
        - name: user_name
          type: keyword
          optional: true
        - name: image
          type: keyword
          optional: true
        - name: tooltip
          type: keyword
          optional: true
        - name: tag
          type: keyword
          optional: true
        - name: margin
          type: keyword
          optional: true
        - name: fallback_icon_color
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: border
          type: keyword
          optional: true
        - name: text_color
          type: keyword
          optional: true
        - name: font_size
          type: keyword
          optional: true
        - name: fallback_icon_size
          type: keyword
          optional: true
        - name: font_family
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.avatar
    clientOnly: true
  NavigationRailLayout: &ref_642
    $id: m3.NavigationRailLayout
    name: NavigationRailLayout
    classInstance:
      $ref: m3.NavigationRailLayout instance
    docString: Create a new 'NavigationRailLayout' object
    attrs: {}
    callable:
      returns:
        $id: m3.NavigationRailLayout instance
        name: m3.NavigationRailLayout component
        attrs:
          open_nav_drawer: &ref_591
            name: open_nav_drawer
            attrs: {}
            callable:
              args: []
            docString: Open the navigation drawer.
          hide_nav_drawer: &ref_592
            name: hide_nav_drawer
            attrs: {}
            callable:
              args: []
            docString: Hide the navigation drawer.
          add_to_nav_rail: &ref_593
            name: add_to_nav_rail
            attrs: {}
            callable:
              args: []
            docString: Add components to the navigation rail.
          navigation_rail_color: &ref_597
            name: color
            helpLink: m3.navigationraillayout
            docString: The color of the navigation rail on Forms using this Layout.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_598
            name: color
            helpLink: m3.navigationraillayout
            docString: The background color of Forms using this Layout.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text_color: &ref_599
            name: color
            helpLink: m3.navigationraillayout
            docString: The default color of the text on Forms using this Layout.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          navigation_rail_collapse_to: &ref_600
            name: enum
            helpLink: m3.navigationraillayout
            docString: The way the side navigation will collapse on mobile.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - bottom_app_bar
              - modal_navigation_drawer
          navigation_rail_vertical_align: &ref_601
            name: enum
            helpLink: m3.navigationraillayout
            docString: The vertical position of the content in the navigation rail.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
            options:
              - top
              - center
              - bottom
          show_sidesheet: &ref_602
            name: boolean
            helpLink: m3.navigationraillayout
            docString: If True, the sidesheet will be shown on Forms using this Layout.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          content_padding: &ref_603
            name: padding
            helpLink: m3.navigationraillayout
            docString: The padding (pixels) around the content of the page.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_604
            $ref: anvil.Container instance
          add_event_handler: &ref_594
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                      - refreshing_data_bindings
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_595
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                      - refreshing_data_bindings
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_596
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                      - refreshing_data_bindings
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: show
              parameters: []
              docString: When the Form is shown on the screen.
            - name: hide
              parameters: []
              docString: When the Form is removed from the screen.
            - name: refreshing_data_bindings
              parameters: []
              docString: When refresh_data_bindings is called.
        helpLink: m3.navigationraillayout
        clientOnly: true
        functions:
          open_nav_drawer: *ref_591
          hide_nav_drawer: *ref_592
          add_to_nav_rail: *ref_593
          add_event_handler: *ref_594
          set_event_handler: *ref_595
          remove_event_handler: *ref_596
        globals:
          navigation_rail_color: *ref_597
          background_color: *ref_598
          text_color: *ref_599
          navigation_rail_collapse_to: *ref_600
          navigation_rail_vertical_align: *ref_601
          show_sidesheet: *ref_602
          content_padding: *ref_603
          parent: *ref_604
      args:
        - name: navigation_rail_color
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: text_color
          type: keyword
          optional: true
        - name: navigation_rail_collapse_to
          type: keyword
          optional: true
        - name: navigation_rail_vertical_align
          type: keyword
          optional: true
        - name: show_sidesheet
          type: keyword
          optional: true
        - name: content_padding
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.navigationraillayout
    clientOnly: true
  NavigationDrawerLayout: &ref_643
    $id: m3.NavigationDrawerLayout
    name: NavigationDrawerLayout
    classInstance:
      $ref: m3.NavigationDrawerLayout instance
    docString: Create a new 'NavigationDrawerLayout' object
    attrs: {}
    callable:
      returns:
        $id: m3.NavigationDrawerLayout instance
        name: m3.NavigationDrawerLayout component
        attrs:
          open_nav_drawer: &ref_605
            name: open_nav_drawer
            attrs: {}
            callable:
              args: []
            docString: Open the navigation drawer.
          hide_nav_drawer: &ref_606
            name: hide_nav_drawer
            attrs: {}
            callable:
              args: []
            docString: Hide the navigation drawer.
          navigation_drawer_color: &ref_610
            name: color
            helpLink: m3.navigationdrawerlayout
            docString: The color of the navigation drawer on Forms using this Layout.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          background_color: &ref_611
            name: color
            helpLink: m3.navigationdrawerlayout
            docString: The background color of Forms using this Layout.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          text_color: &ref_612
            name: color
            helpLink: m3.navigationdrawerlayout
            docString: The default color of the text on Forms using this Layout.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          show_sidesheet: &ref_613
            name: boolean
            helpLink: m3.navigationdrawerlayout
            docString: If True, the sidesheet will be shown on Forms using this Layout.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          content_padding: &ref_614
            name: padding
            helpLink: m3.navigationdrawerlayout
            docString: The padding (pixels) around the content of the page.
            attrs: {}
            isBuiltin: true
            isComponentProperty: true
          parent: &ref_615
            $ref: anvil.Container instance
          add_event_handler: &ref_607
            name: add_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                      - refreshing_data_bindings
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Add an event handler function to be called when the event happens
              on this component. Event handlers will be called in the order they
              are added. Adding the same event handler multiple times will mean
              it gets called multiple times.
          set_event_handler: &ref_608
            name: set_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                      - refreshing_data_bindings
                - name: handler_func
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Set a function to call when the 'event_name' event happens on this
              component. Using set_event_handler removes all other handlers.
              Setting the handler function to None removes all handlers.
          remove_event_handler: &ref_609
            name: remove_event_handler
            attrs: {}
            callable:
              args:
                - name: event_name
                  expectType:
                    attrs: {}
                    options:
                      - show
                      - hide
                      - refreshing_data_bindings
                - name: handler_func
                  optional: true
                  typeHint: callable
                  expectType:
                    attrs: {}
                    callable: {}
            docString: >-
              Remove a specific event handler function for a given event.
              Calling remove_event_handler with just the event name will remove
              all the handlers for this event
        isBuiltin: true
        $inherit:
          - anvil.Component instance
        anvilComponent:
          events:
            - name: show
              parameters: []
              docString: When the Form is shown on the screen.
            - name: hide
              parameters: []
              docString: When the Form is removed from the screen.
            - name: refreshing_data_bindings
              parameters: []
              docString: When refresh_data_bindings is called.
        helpLink: m3.navigationdrawerlayout
        clientOnly: true
        functions:
          open_nav_drawer: *ref_605
          hide_nav_drawer: *ref_606
          add_event_handler: *ref_607
          set_event_handler: *ref_608
          remove_event_handler: *ref_609
        globals:
          navigation_drawer_color: *ref_610
          background_color: *ref_611
          text_color: *ref_612
          show_sidesheet: *ref_613
          content_padding: *ref_614
          parent: *ref_615
      args:
        - name: navigation_drawer_color
          type: keyword
          optional: true
        - name: background_color
          type: keyword
          optional: true
        - name: text_color
          type: keyword
          optional: true
        - name: show_sidesheet
          type: keyword
          optional: true
        - name: content_padding
          type: keyword
          optional: true
    isBuiltin: true
    bases:
      - $ref: anvil.Component
    helpLink: m3.navigationdrawerlayout
    clientOnly: true
$id: m3
classes:
  ToggleIconButton: *ref_616
  InteractiveCard: *ref_617
  TextBox: *ref_618
  TextArea: *ref_619
  Text: *ref_620
  Switch: *ref_621
  Slider: *ref_622
  RadioGroupPanel: *ref_623
  RadioButton: *ref_624
  NavigationLink: *ref_625
  MenuItem: *ref_626
  Link: *ref_627
  LinearProgressIndicator: *ref_628
  IconButtonMenu: *ref_629
  IconButton: *ref_630
  Heading: *ref_631
  FileLoader: *ref_632
  DropdownMenu: *ref_633
  Divider: *ref_634
  CircularProgressIndicator: *ref_635
  Checkbox: *ref_636
  Card: *ref_637
  ButtonMenu: *ref_638
  Button: *ref_639
  AvatarMenu: *ref_640
  Avatar: *ref_641
  NavigationRailLayout: *ref_642
  NavigationDrawerLayout: *ref_643

---
