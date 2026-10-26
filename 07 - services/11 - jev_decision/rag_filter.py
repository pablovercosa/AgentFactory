"""Esqueleto TODO para filtro auxiliar de recuperação de conhecimento."""


def filter_sources(query: str, approved_sources: list[str]) -> list[str]:
    """TODO: filtrar fontes já autorizadas, preservando isolamento por projeto."""
    if not approved_sources:
        return []
    raise NotImplementedError("Filtro JEV de RAG ainda não implementado")
