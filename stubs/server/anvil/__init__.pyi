# AUTO-GENERATED FILE - DO NOT EDIT
# Edit the source file in doc/anvil-api-stubs/source/ instead, then run:
#   pnpm -F docs build
#
# Type stubs for Anvil
# Generated files: client/anvil/__init__.pyi, server/anvil/__init__.pyi

from typing import Any, Callable, TypeVar, overload, Iterator, Mapping, Literal, TypedDict
from typing_extensions import override


_T = TypeVar("_T")
_F = TypeVar("_F", bound=Callable[..., Any])

SpacingLength = str | int | float | None
MarginPropertyValue = (
    SpacingLength
    | tuple[SpacingLength, SpacingLength]
    | tuple[SpacingLength, SpacingLength, SpacingLength]
    | tuple[SpacingLength, SpacingLength, SpacingLength, SpacingLength]
)
PaddingPropertyValue = MarginPropertyValue

class SpacingPropertyValue(TypedDict, total=False):
    margin: MarginPropertyValue
    padding: PaddingPropertyValue

# ============================================================================
# Media Classes
# ============================================================================

class Media:
    """A Media object represents binary data, such as a file.

    [Anvil Docs](https://anvil.works/docs/media)"""

    content_type: str
    """The MIME type of this Media."""

    name: str | None
    """The file name associated with this Media, or None if it has no name."""

    url: str | None
    """The URL where you can download this Media, or None if it is not downloadable."""

    length: int
    """The length of this Media, in bytes."""

    def get_bytes(self) -> bytes:
        """Get a binary string of the data represented by this Media object.

        [Anvil Docs](https://anvil.works/docs/media)"""
        ...

    def get_url(self) -> str | None:
        """Get a Media object's URL, or None if there isn't one associated with it.

        [Anvil Docs](https://anvil.works/docs/media)"""
        ...


class BlobMedia(Media):
    """Create a Media object with the specified content_type and content.

    Optionally specify a filename as well.

    [Anvil Docs](https://anvil.works/docs/media)"""

    def __init__(self, content_type: str, content: bytes, *, name: str | None = None) -> None: ...


class URLMedia(Media):
    """Create a Media object representing the data at a specific URL.

    Caution: Getting data from URLs directly in your code will often fail
    for security reasons, or fail to handle binary data.

    [Anvil Docs](https://anvil.works/docs/media)"""

    def __init__(self, url: str, /) -> None: ...


# ============================================================================
# App Information
# ============================================================================

class AppEnvironment:
    """Information about the current app environment."""

    name: str
    """The name of the current environment."""

    tags: list[str]
    """Tags associated with the current environment."""


class AppInfo:
    """Information about the current app.

    [Anvil Docs](https://anvil.works/docs/deployment/environment-variables)"""

    id: str
    """A unique identifier for the current app."""

    branch: str
    """The Git branch from which the current app is being run.

    This is 'master' for development apps or apps without a published version,
    and 'published' if this app is being run from its published version."""

    package_name: str
    """The package name of this app."""

    environment: AppEnvironment
    """The environment in which the current app is being run."""

    theme_colors: Mapping[str, str]
    """Theme colors for this app as a readonly dict."""

    def get_asset(self, path: str | None = None) -> Media:
        """Get an asset file from the app's theme assets."""
        ...

    def get_client_config(self, package_name: str | None = None) -> dict[str, Any]:
        """Get the client config for the specified package.

        If no package name is specified, the client config for the current app is returned."""
        ...

    def get_server_config(self, package_name: str | None = None) -> dict[str, Any]:
        """Get the server config for the specified package.

        If no package name is specified, the server config for the current app is returned."""
        ...


app: AppInfo
"""Information about the current app, as an instance of AppInfo."""


# ============================================================================
# Utility Functions
# ============================================================================

def is_server_side() -> bool:
    """Check whether Anvil is running server side or not."""
    ...


# ============================================================================
# Server-Only: Secrets Access
# ============================================================================

class _Secrets:
    """Access to app secrets.

    [Anvil Docs](https://anvil.works/docs/deployment/secrets)"""

    def get_secret(self, name: str) -> str | None: ...
    def __getattr__(self, name: str) -> str | None: ...


secrets: _Secrets
