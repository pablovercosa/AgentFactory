"""Esqueleto TODO para seleção auxiliar de skills via JEV."""


def select_skill(task: str, approved_skills: list[str]) -> str:
    """TODO: escolher somente entre skills aprovadas; nunca ampliar permissões."""
    if not approved_skills:
        raise ValueError("Nenhuma skill autorizada")
    raise NotImplementedError("Seletor JEV de skills ainda não implementado")
