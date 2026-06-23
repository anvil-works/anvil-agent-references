---
title: Layouts
weight: 20
---

# Material 3 Layouts

The Anvil Material 3 theme comes with two predefined [layouts](/docs/ui/layouts), based on two different styles of [Material 3 navigation regions](https://m3.material.io/foundations/layout/understanding-layout/parts-of-layout).

{{<figure src="img/layouts/layout-options.png" caption="The two predefined layouts:<br>NavigationDrawerLayout and NavigationRailLayout" narrow="true">}}

<!-- I don't know if the stuff below is true, but I'm hoping that it will be once this issue is closed: https://github.com/daviesian/anvil/issues/5120 -->
Layouts have properties that allow for greater interaction. These can be set from the Form that's using the layout -- either from code or from the [Properties Panel](/docs/editor/form-editor#properties-panel). For example, both layouts have an optional side sheet, which can be controlled by setting the `show_sidesheet` property to `True` or `False`. 

{{<code client>}}
  def m3_button_click(self, **event_args):
    """This method is called when the component is clicked."""
    self.layout.show_sidesheet = True
{{</code>}}

{{<figure src="img/layouts/sidesheet.png" caption="A Form with a side sheet" narrow="true">}}

## Navigation Rail Layout

[Properties](/docs/api/m3#NavigationRailLayout_attributes) | [Events](/docs/api/m3#NavigationRailLayout_events)

The Navigation Rail Layout uses the [Material 3 navigation rail](https://m3.material.io/components/navigation-rail/overview). Navigation rails are meant for displaying a small number of app destinations (see the [Material 3 usage guidelines](https://m3.material.io/components/navigation-rail/guidelines#d9d85ba1-db8f-491a-a555-c1f5221c69f8) for more information). 

{{<figure src="img/layouts/navrail-layout.png" caption="A Form using the Navigation Rail Layout" narrow="true">}}

You can control the vertical alignment of the content of the navigation rail with the `navigation_rail_vertical_align` property.

{{<code client>}}
self.layout.navigation_rail_vertical_align = "center"
{{</code>}}

{{<figure src="img/layouts/navrail-centered.png" caption="" narrow="true">}}

On smaller screens, the navigation rail can be collapsed into a modal drawer or an app bar. This can be controlled with the `navigation_rail_collapse_to` property.

{{<figure src="img/layouts/navrail-appbar.png" caption="A Navigation Rail collapsed<br>into an App Bar on mobile" narrow="true" width="350px">}}

Visit the [API documentation](/docs/api/m3#NavigationRailLayout) for more information about the Navigation Rail Layout. 

## Navigation Drawer Layout

[Properties](/docs/api/m3#NavigationDrawerLayout_attributes) | [Events](/docs/api/m3#NavigationDrawerLayout_events)

The Navigation Drawer Layout uses the [Material 3 navigation drawer](https://m3.material.io/components/navigation-drawer/overview). Navigation drawers are best suited when you want to display a longer list of app destinations. They're also useful when you want to convey navigation hierarchys and groupings (see the [Material 3 usage guidelines](https://m3.material.io/components/navigation-drawer/guidelines#761e9679-2e72-4a85-894d-55bc3666b567) for more information).

{{<figure src="img/layouts/navdrawer-layout.png" caption="A Form using the Navigation Drawer Layout" narrow="true">}}

On smaller screens, the navigation drawer will always collapse into a modal drawer.

{{<figure src="img/layouts/navdrawer-small-screen.png" caption="Navigation Drawers always<br>collapse into a modal drawer" narrow="true">}}

Visit the [API documentation](/docs/api/m3#NavigationDrawerLayout) for more information about the Navigation Drawer Layout.