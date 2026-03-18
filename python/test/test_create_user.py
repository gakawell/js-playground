from src.create_user import create_user

def test_create_user():
    user = create_user("Greg", 42)

    assert user["name"] == "Greg"
    assert isinstance(user["age"], int)
    assert "user" in user["roles"]
