"""Testes-base; substitua os casos de exemplo pelos critérios do script."""

import unittest

from script import transform


class TransformTests(unittest.TestCase):
    def test_placeholder_is_explicit_until_implemented(self):
        result = transform({"sample": "value"})
        self.assertEqual(result["status"], "not_implemented")


if __name__ == "__main__":
    unittest.main()
