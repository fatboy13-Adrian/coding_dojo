# Elixir - Bootstrapping ExUnit

*__Note__: This guide assumes you have Elixir installed.*

1. Create a new mix project:

(*Assuming the project is named `new_kata`*)

```shell
mix new new_kata
cd new_kata
```

2. ExUnit comes built into Elixir, so no additional installation is needed. It's automatically configured in `test/test_helper.exs`:

```elixir
ExUnit.start()

```

Test files are usually placed in the `test` directory, and are named like `*_test.exs`. Mix should also have created a `test/new_kata_test.exs` file with the following content:

```elixir
defmodule NewKataTest do
  use ExUnit.Case
  doctest NewKata

  test "greets the world" do
    assert NewKata.hello() == :world
  end
end
```

We can run this test with `mix test`.

```shell
..
Finished in 0.01 seconds (0.00s async, 0.01s sync)
1 doctest, 1 test, 0 failures
```

3. Create a new test file (`test/arithmetic_test.exs`) with the following content:

```elixir
defmodule ArithmeticTest do
  use ExUnit.Case
  doctest Arithmetic

  test "sum of two numbers" do
    assert Arithmetic.sum(1, 2) == 3
  end
end
```

4. Create `lib/arithmetic.ex` with the following content:

```elixir
defmodule Arithmetic do
  @moduledoc """
  A module for performing arithmetic operations.
  """

  @doc """
  Sum two numbers.

  ## Examples

      iex> Arithmetic.sum(1, 2)
      3
  """
  def sum(a, b) do
    a + b
  end
end
```

5. Run the test:

```shell
mix test
```

You should see this:

```shell
...
Finished in 0.00 seconds (0.00s async, 0.00s sync)
2 doctest, 2 tests, 0 failures
```

## About ExUnit

ExUnit is Elixir's built-in test framework that comes with a rich set of assertions and great test organization features. Here's an example showing some of ExUnit's helpful error messages:

```elixir
test "demonstrates helpful error messages" do
  assert [1, 2, 3] == [1, 2, 3, 4]
end
```

This will give you the following output:

```shell
  1) test demonstrates helpful error messages (ArithmeticTest)
     test/arithmetic_test.exs:9
     Assertion with == failed
     code:  assert [1, 2, 3] == [1, 2, 3, 4]
     left:  [1, 2, 3]
     right: [1, 2, 3, 4]
     stacktrace:
       test/arithmetic_test.exs:10: (test)
```

ExUnit provides many useful assertions:
- `assert` - verifies that a condition is truthy
- `refute` - verifies that a condition is falsy
- `assert_raise` - verifies that code raises an error
- `assert_receive` - verifies that a message was received (useful for testing processes)
