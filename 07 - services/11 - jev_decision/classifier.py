"""Esqueleto TODO do classificador JEV; não realiza chamadas ao SDK."""


def classify_task(task: str, approved_routes: list[str]) -> str:
    """TODO: classificar apenas entre rotas autorizadas após validar o SDK."""
    if not approved_routes:
        raise ValueError("Nenhuma rota autorizada")
    raise NotImplementedError("Classificador JEV ainda não implementado")
