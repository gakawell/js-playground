from src.math_utils import add, multiple

def test_add():
    expected = 5
    result = add(2, 3)
    assert result == expected

def test_multple():
    expected = 20
    result = multiple(4, 5)
    assert result == expected