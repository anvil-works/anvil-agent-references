# AUTO-GENERATED FILE - DO NOT EDIT
# Edit the source file in doc/anvil-api-stubs/source/ instead, then run:
#   pnpm -F docs build
#
# Type stubs for anvil.tables module
# Generated files: client/anvil/tables/__init__.pyi, server/anvil/tables/__init__.pyi

from typing import Any, Generic, TypeVar, Iterator, Callable, overload

_T = TypeVar("_T", bound="Row")
_F = TypeVar("_F", bound="Callable[..., Any]")

class Row:
    """Base class for table rows.

    [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
    def __init_subclass__(
        cls,
        *,
        attrs: bool = False,
        buffered: bool = False,
        client_writable: bool = False,
        client_updatable: bool = False,
        client_creatable: bool = False,
        client_deletable: bool = False,
        **kwargs: Any
    ) -> None: ...
    def __getitem__(self, key: str, /) -> Any: ...
    def __setitem__(self, key: str, value: Any, /) -> None: ...
    def update(self, **kwargs: Any) -> None:
        """Update multiple columns of this row at once.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def delete(self) -> None:
        """Delete this row from the table.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def get_id(self) -> str:
        """Get the unique ID of this row.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def save(self) -> None:
        """Save buffered changes to this row.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def reset(self) -> None:
        """Reset buffered changes to this row.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def buffer_changes(self, buffered: bool | None = None) -> Any:
        """Context manager for buffered mode.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    @property
    def buffered_changes(self) -> dict[str, Any] | None:
        """Pending buffered changes for this row.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def refresh(self, fetch: Any = None) -> None:
        """Refresh this row from the database.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def fetch(self, fetch: Any) -> None:
        """Fetch specific columns for this row.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def values(self) -> Iterator[Any]:
        """Iterator of column values.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def keys(self) -> Iterator[str]:
        """Iterator of column names.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def items(self) -> Iterator[tuple[str, Any]]:
        """Iterator of (name, value) pairs.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...

class SearchIterator(Generic[_T], Iterator[_T]):
    """Iterator returned by table.search().

    [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
    def __iter__(self) -> "SearchIterator[_T]": ...
    def __next__(self) -> _T: ...
    def __len__(self) -> int: ...
    @overload
    def __getitem__(self, index: int) -> _T: ...
    @overload
    def __getitem__(self, index: slice) -> list[_T]: ...
    def __getitem__(self, index: int | slice) -> _T | list[_T]: ...

class Table(Generic[_T]):
    """Base class for tables.

    [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
    Row: type[_T]
    def get(self, **kwargs: Any) -> _T | None:
        """Get a single row matching the given criteria.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def get_by_id(self, row_id: str, /) -> _T | None:
        """Get a row by its unique ID.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def search(self, *args: Any, **kwargs: Any) -> SearchIterator[_T]:
        """Search for rows matching the given criteria.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def add_row(self, **kwargs: Any) -> _T:
        """Add a new row to this table.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def list_columns(self) -> list[dict[str, Any]]:
        """List all columns in this table.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def delete_all_rows(self) -> None:
        """Delete all rows from this table.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code)"""
        ...
    def client_readable(self, **kwargs: Any) -> "Table[_T]":
        """Return a view of this table that clients can read.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-security)"""
        ...
    def client_writable(self, **kwargs: Any) -> "Table[_T]":
        """Return a view of this table that clients can write to.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-security)"""
        ...
    def client_writable_cascade(self, **kwargs: Any) -> "Table[_T]":
        """Return a view of this table that clients can write to, with cascading permissions.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-security)"""
        ...

# Query operators
def order_by(column: str, /, ascending: bool = True) -> Any:
    """Create an ordering query operator.

    [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code#searching-and-querying-data-tables)"""
    ...

class _Query:
    """Query operators for searching tables.

    [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code#searching-and-querying-data-tables)"""
    @staticmethod
    def any_of(*args: Any) -> Any:
        """Match any of the given conditions.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code#searching-and-querying-data-tables)"""
        ...
    @staticmethod
    def all_of(*args: Any) -> Any:
        """Match all of the given conditions.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code#searching-and-querying-data-tables)"""
        ...
    @staticmethod
    def none_of(*args: Any) -> Any:
        """Match none of the given conditions.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code#searching-and-querying-data-tables)"""
        ...
    @staticmethod
    def like(pattern: str) -> Any:
        """Match using SQL LIKE pattern (case-sensitive).

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code#searching-and-querying-data-tables)"""
        ...
    @staticmethod
    def ilike(pattern: str) -> Any:
        """Match using SQL LIKE pattern (case-insensitive).

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code#searching-and-querying-data-tables)"""
        ...
    @staticmethod
    def full_text_match(query: str, raw: bool = False) -> Any:
        """Full-text search.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code#searching-and-querying-data-tables)"""
        ...
    @staticmethod
    def greater_than(value: Any) -> Any:
        """Match values greater than the given value.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code#searching-and-querying-data-tables)"""
        ...
    @staticmethod
    def greater_than_or_equal_to(value: Any) -> Any:
        """Match values greater than or equal to the given value.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code#searching-and-querying-data-tables)"""
        ...
    @staticmethod
    def less_than(value: Any) -> Any:
        """Match values less than the given value.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code#searching-and-querying-data-tables)"""
        ...
    @staticmethod
    def less_than_or_equal_to(value: Any) -> Any:
        """Match values less than or equal to the given value.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code#searching-and-querying-data-tables)"""
        ...
    @staticmethod
    def between(min_value: Any, max_value: Any, min_inclusive: bool = True, max_inclusive: bool = False) -> Any:
        """Match values between the given bounds.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code#searching-and-querying-data-tables)"""
        ...
    @staticmethod
    def not_(value: Any) -> Any:
        """Negate a query condition.

        [Anvil Docs](https://anvil.works/docs/data-tables/data-tables-in-code#searching-and-querying-data-tables)"""
        ...

q: _Query

# Exceptions
class TableError(Exception):
    """Superclass of all table exceptions.

    [Anvil Docs](https://anvil.works/docs/data-tables/transactions)"""
    ...

class TransactionConflict(TableError):
    """Raised when a transaction conflicts and has been aborted.

    [Anvil Docs](https://anvil.works/docs/data-tables/transactions)"""
    ...

class NoSuchColumnError(TableError):
    """Raised when attempting to access a column that does not exist in this table."""
    ...

class QuotaExceededError(TableError):
    """Raised when an app has exceeded its quota."""
    ...

class RowDeleted(TableError):
    """Raised when attempting to access a table row that has been deleted."""
    ...

# Transaction support
class Transaction:
    """A database transaction context manager.

    [Anvil Docs](https://anvil.works/docs/data-tables/transactions)"""
    def __init__(self, relaxed: bool = False) -> None: ...
    def __enter__(self) -> "Transaction": ...
    def __exit__(self, exc_type: Any, exc_val: Any, exc_tb: Any) -> bool: ...
    def abort(self) -> None:
        """Abort this transaction and roll back all changes.

        [Anvil Docs](https://anvil.works/docs/data-tables/transactions)"""
        ...


def get_table_by_id(table_id: str) -> Table[Row]:
    """Get a table by id. Can pass a row id in, and the table the row belongs to will be returned.

    [Anvil Docs](https://anvil.works/docs/data-tables/accelerated-tables)"""
    ...


# app_tables will be dynamically typed based on db_schema
class _AppTables:
    """Container for all app tables. Individual tables are generated from db_schema.

    [Anvil Docs](https://anvil.works/docs/data-tables)"""
    def __getattr__(self, name: str) -> Table[Row]: ...
    def __getitem__(self, name: str) -> Table[Row]: ...

app_tables: _AppTables
