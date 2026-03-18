from src.get_numbers import get_numbers

def test_get_numbers():
    result = get_numbers()
    assert isinstance(result, list)
    assert 2 in result
