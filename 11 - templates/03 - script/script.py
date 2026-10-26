#!/usr/bin/env python3
"""Template de script determinístico para a Agent Factory.

Implemente transform() sem shell=True, credenciais embutidas ou efeitos
externos implícitos. O contrato CLI recebe um objeto JSON por stdin e
escreve um objeto JSON por stdout.
"""

from __future__ import annotations

import json
import sys
from typing import Any


def transform(payload: dict[str, Any]) -> dict[str, Any]:
    """Substitua por uma transformação determinística e testável."""
    return {"status": "not_implemented", "input": payload}


def main() -> int:
    try:
        payload = json.load(sys.stdin)
        if not isinstance(payload, dict):
            raise ValueError("A entrada deve ser um objeto JSON")
        result = transform(payload)
        if not isinstance(result, dict):
            raise ValueError("transform() deve retornar um objeto JSON")
        json.dump(result, sys.stdout, ensure_ascii=False)
        sys.stdout.write("\n")
        return 0
    except (json.JSONDecodeError, ValueError) as exc:
        print(f"Entrada inválida: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
